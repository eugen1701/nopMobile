import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {
    IonCard, IonCardSubtitle, IonCardTitle, IonCol,
    IonContent,
    IonHeader, IonIcon,
    IonPage, IonRow,IonSearchbar,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import axios from "axios";
import {personCircle} from "ionicons/icons";

const Subscription: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const history = useHistory();
    const [subscriptions,setSubscriptions]=useState<any[]>([]);
    const [offers,setOffers]=useState<any[]>([]);
    const token = localStorage.token
    const strringy = "http://localhost:7768/api/Subscription";
    const getOfferReq = "http://localhost:7768/api/Offer/";

    const [value, setValue] = useState<any[]>([]);

    useEffect(() => {
        axios.get(strringy, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((response) => {
            setSubscriptions(response.data)
        })
    }, [strringy, token]);

    let x : string;
    console.log(getOfferReq)
    // @ts-ignore
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>My Open Subscriptions</IonTitle>

                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className="ion-text-center">
                { subscriptions.map(obj => {return <IonCard>
                    <IonCardTitle>{obj.kitchenName}</IonCardTitle>
                    Offer description:
                    <IonCardTitle>{obj.offerDescription}</IonCardTitle>
                    Untill:
                    <IonCardSubtitle>{obj.endDate}</IonCardSubtitle>
                    Price:
                    <IonCardSubtitle>{obj.price}</IonCardSubtitle>
                </IonCard>}) }
            </IonContent>
        </IonPage>
    );
};

export default Subscription;