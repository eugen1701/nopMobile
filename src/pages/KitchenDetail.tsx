import React, {useEffect, useState} from "react";
import {RouteComponentProps, useHistory} from "react-router-dom";
import {
    IonButton,
    IonCard, IonCardContent, IonCardSubtitle, IonCardTitle,
    IonFab, IonFabButton,
    IonContent,
    IonHeader, IonIcon,
    IonPage, IonRow, IonText,
    IonTitle,
    IonToolbar, IonCol, IonAlert
} from "@ionic/react";
import axios from "axios";
import {callOutline, mailOutline, add} from "ionicons/icons";


export function KitchenDetail(props: RouteComponentProps<{ id?: string }>) {
    let id = props.match.params.id
    let call_string = "http://localhost:7768/api/Kitchen/Details/" + id;
    let call_string_offer = "http://localhost:7768/api/Offer/Kitchen/" + id;
    let call_subscription = "http://localhost:7768/api/Subscription";
    const [ManagerId, setManagerId] = useState()
    const [email, setEmail] = useState()
    const [name, setName] = useState()
    const [phone, setPhone] = useState()
    const [additionalInfo, setAdditionalInfo] = useState()
    const [openhour, setOpenHour] = useState()
    const [closehour, setCloseHour] = useState()
    const [offers, setOffers] = useState<any[]>([])
    const [iserror, setIserror] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");
    const token = localStorage.token
    useEffect(() => {
        axios.get(call_string, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((response) => {
            setManagerId(response.data.managerId)
            setEmail(response.data.email)
            setName(response.data.name)
            setPhone(response.data.contactPhoneNumber)
            setAdditionalInfo(response.data.additionalInformation)
            setOpenHour(response.data.deliveryOpenHour)
            setCloseHour(response.data.deliveryCloseHour)
        })
    }, [call_string, token]);
    useEffect(() => {
        axios.get(call_string_offer, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((response) => {
            setOffers(response.data)
        })
    }, [call_string_offer, token]);

    const addSubscription= (id: any, days: any)  => {
        console.log("aici");
        let startDate = new Date().toISOString();
        let newDate = new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * days));
        console.log(newDate.toISOString())


        const subscriptionData = {
            "offerId": id,
            "startDate": startDate,
            "endDate": newDate.toISOString()
        }
        axios.post(call_subscription, subscriptionData,
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
        }).then((response) => {
            setMessage("Subscription added");
            setIserror(true);
            return;
        })

    };
    /*
    [
        {
            "id": "1",
            "title": "offer1",
            "description": "desc",
            "numberOfDays": 10,
            "dailyPrice": 10,
            "dayIds": []
        },
        {
            "id": "2",
            "title": "offer2",
            "description": "desc",
            "numberOfDays": 10,
            "dailyPrice": 10,
            "dayIds": []
        }
    ]
    */
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>All kitchens</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonRow>
                <IonCol>
                    <IonAlert
                        isOpen={iserror}
                        onDidDismiss={() => setIserror(false)}
                        cssClass="my-custom-class"
                        header={"Added!"}
                        message={message}
                        buttons={["Dismiss"]}
                    />
                </IonCol>
            </IonRow>
            <IonContent fullscreen className="ion-text-center">
                <IonCard>
                    <IonCardTitle>{name}</IonCardTitle>
                    <IonCardSubtitle>{openhour}-{closehour}</IonCardSubtitle>
                    <IonCardContent>{additionalInfo}</IonCardContent>
                    <IonRow className="ion-text-center">
                        <IonIcon icon={callOutline}  style={{fontSize: "30px", color: "#18BC8A"}}/>
                        <IonText style={{fontSize: "20px", color: "#18BC8A", marginLeft:"20px"}}>{phone}</IonText>
                    </IonRow>
                    <IonRow className="ion-text-center">
                        <IonIcon icon={mailOutline}  style={{fontSize: "30px", color: "#18BC8A"}}/>
                        <IonText style={{fontSize: "20px", color: "#18BC8A", marginLeft:"20px"}}>{email}</IonText>
                    </IonRow>
                </IonCard>
                <br />
                { offers.map(obj => {return <IonCard>
                        <IonCardTitle>{obj.title}</IonCardTitle>
                        <IonCardContent className="ion-text-center"></IonCardContent>
                        <IonRow className="ion-text-center">
                            <IonText style={{fontSize: "20px", color: "#18BC8A", marginLeft:"20px"}}>Description: {obj.description}</IonText>
                        </IonRow>
                        <IonRow className="ion-text-center">
                            <IonText style={{fontSize: "20px", color: "#18BC8A", marginLeft:"20px"}}>Number of days: {obj.numberOfDays}</IonText>
                        </IonRow>
                        <IonRow className="ion-text-center">
                            <IonText style={{fontSize: "20px", color: "#18BC8A", marginLeft:"20px"}}>Price per day: {obj.dailyPrice}</IonText>
                        </IonRow>
                        <IonFabButton style={{marginLeft:"80%"}} color="primary"><IonIcon icon={add} onClick={() => addSubscription(obj.id, obj.numberOfDays)}/></IonFabButton>
                        <br />
                    </IonCard>}) }
            </IonContent>
        </IonPage>
    );
}


