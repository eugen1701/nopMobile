import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonLabel} from '@ionic/react';

import './Home.css';
import {useHistory} from "react-router-dom";

const Home: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const history = useHistory();
    const token = localStorage.token
    const username=localStorage.username
    const role=localStorage.role
    const id=localStorage.id
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Home</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonCard>
                    <h2>username: {username}</h2>
                    <IonLabel>user role: {role}</IonLabel>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Home;
