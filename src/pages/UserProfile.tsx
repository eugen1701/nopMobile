import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
    IonLabel,
    IonFab,
    IonFabButton, IonGrid, IonCol, IonRow, IonInput, IonItem, IonButtons,IonBackButton
} from '@ionic/react';

import './Home.css';
import {useHistory} from "react-router-dom";
import axios from "axios";
import React, {useEffect, useState} from "react";

const UserProfile: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const history = useHistory();
    const token = localStorage.token
    const id = localStorage.id
    const strringy = "http://localhost:7768/api/User/Details/" + id;
    const [addressNumber, setaddressNumber] = useState<string>();
    const [city, setCity] = useState<string>();
    const [country, setCountry] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [firstName, setFirstName] = useState<string>();
    const [phone, setPhone] = useState<string>();
    const [lastName, setLastName] = useState<string>();
    const [role, setRole] = useState<string>();
    const [street, setStreet] = useState<string>();
    const [username, setUsername] = useState<string>();
    useEffect(() => {
        axios.get(strringy, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((response) => {

            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setEmail(response.data.email);
            setUsername(response.data.userName);
            setPhone(response.data.phoneNumber);
            setRole(response.data.role);
            setCountry(response.data.country);
            setCity(response.data.city);
            setStreet(response.data.street);
            setaddressNumber(response.data.adressNumber);
        })
    }, []);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="home" />
                    </IonButtons>
                    <IonTitle>Home</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating"> First Name</IonLabel>
                                <IonInput
                                    type="text"
                                    value={firstName}
                                    onIonChange={(e) => setFirstName(e.detail.value!)}
                                >
                                </IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating"> Last Name</IonLabel>
                                <IonInput
                                    type="text"
                                    value={lastName}
                                    onIonChange={(e) => setLastName(e.detail.value!)}
                                >
                                </IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating"> Email</IonLabel>
                                <IonInput
                                    type="email"
                                    value={email}
                                    onIonChange={(e) => setEmail(e.detail.value!)}
                                >
                                </IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating"> Phone</IonLabel>
                                <IonInput
                                    type="text"
                                    value={phone}
                                    onIonChange={(e) => setPhone(e.detail.value!)}
                                >
                                </IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating"> Username</IonLabel>
                                <IonInput
                                    type="text"
                                    value={username}
                                    onIonChange={(e) => setUsername(e.detail.value!)}
                                >
                                </IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating"> Role</IonLabel>
                                <IonInput
                                    type="text"
                                    value={role}
                                    onIonChange={(e) => setRole(e.detail.value!)}
                                >
                                </IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating"> Country</IonLabel>
                                <IonInput
                                    type="text"
                                    value={country}
                                    onIonChange={(e) => setCountry(e.detail.value!)}
                                >
                                </IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating"> City</IonLabel>
                                <IonInput
                                    type="text"
                                    value={city}
                                    onIonChange={(e) => setCity(e.detail.value!)}
                                >
                                </IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating"> Street</IonLabel>
                                <IonInput
                                    type="text"
                                    value={street}
                                    onIonChange={(e) => setStreet(e.detail.value!)}
                                >
                                </IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating"> Adress Number</IonLabel>
                                <IonInput
                                    type="text"
                                    value={addressNumber}
                                    onIonChange={(e) => setaddressNumber(e.detail.value!)}
                                >
                                </IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default UserProfile;
