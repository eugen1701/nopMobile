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
import {fastFoodOutline, personCircle} from "ionicons/icons";
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
                                style={{fontSize: "70px", color: "#18BC8A"}}
                                icon={personCircle} onClick={user_profile_load}
                            />
                            <IonCardTitle>{username}</IonCardTitle>
                        </IonCard>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonCard>
                            <IonIcon
                                style={{fontSize: "70px", color: "#18BC8A"}}
                                icon={fastFoodOutline} onClick={all_kitchens_load}
                            />
                            <IonCardTitle>All Kitchens</IonCardTitle>
                        </IonCard>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    );
};

export default Home;
