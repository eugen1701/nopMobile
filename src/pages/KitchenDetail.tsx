import React, {useEffect, useState} from "react";
import {RouteComponentProps, useHistory} from "react-router-dom";
import {
    IonCard, IonCardContent, IonCardSubtitle, IonCardTitle,

    IonContent,
    IonHeader, IonIcon,
    IonPage, IonRow, IonText,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import axios from "axios";
import {callOutline, mailOutline} from "ionicons/icons";


export function KitchenDetail(props: RouteComponentProps<{ id?: string }>) {
    let id = props.match.params.id
    let call_string = "http://localhost:7768/api/Kitchen/Details/" + id;
    const [ManagerId, setManagerId] = useState()
    const [email, setEmail] = useState()
    const [name, setName] = useState()
    const [phone, setPhone] = useState()
    const [additionalInfo, setAdditionalInfo] = useState()
    const [openhour, setOpenHour] = useState()
    const [closehour, setCloseHour] = useState()
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
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>All kitchens</IonTitle>
                </IonToolbar>
            </IonHeader>
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
            </IonContent>
        </IonPage>
    );
}


