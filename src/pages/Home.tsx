import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
    IonLabel,
    IonFab,
    IonFabButton, IonCardTitle, IonIcon, IonRow, IonCol, IonButton
} from '@ionic/react';

import './Home.css';
import {useHistory} from "react-router-dom";
import {checkmarkCircleOutline, fastFoodOutline, personCircle} from "ionicons/icons";
import React from "react";

const Home: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const history = useHistory();
    const token = localStorage.token
    const username = localStorage.username
    const role = localStorage.role
    const id = localStorage.id
    const user_profile_load = () =>{
        history.push('/user_profile')
    }
    const all_kitchens_load = () =>{
        history.push('/all_kitchens')
    }
    const subscriptions_load = () =>{
        history.push('/subscriptions')
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Home</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className="ion-text-center">
                <IonRow>
                    <IonCol>
                        <IonCard>

                                <IonIcon
                                style={{fontSize: "70px", color: "#18BC8A", height: "120px"}}
                                icon={personCircle} onClick={user_profile_load}
                            />
                            <IonCardTitle>{username}</IonCardTitle>
                            <br />
                        </IonCard>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonCard>
                            <IonIcon
                                style={{fontSize: "70px", color: "#18BC8A", height: "120px"}}
                                icon={fastFoodOutline} onClick={all_kitchens_load}
                            />
                            <IonCardTitle>All Kitchens</IonCardTitle>
                            <br />
                        </IonCard>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonCard>
                            <IonIcon
                                style={{fontSize: "70px", color: "#18BC8A", height: "120px"}}
                                icon={checkmarkCircleOutline} onClick={subscriptions_load}
                            />
                            <IonCardTitle>My subscriptions</IonCardTitle>
                            <br />
                        </IonCard>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    );
};

export default Home;
