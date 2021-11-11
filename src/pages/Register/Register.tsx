import {
    IonItem,
    IonLabel,
    IonInput,
    IonCheckbox,
    IonButton,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonAlert,
    IonIcon,
    IonPage,
    IonImg

} from '@ionic/react';
import {useHistory} from "react-router";
import React, {useState} from "react";

import './Register.css';

import {pizza} from "ionicons/icons";
import axios from "axios";

const Register: React.FC = () => {
    const history = useHistory();
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordConfirmed, setPasswordConfirmed] = useState<string>("");
    const [iserror, setIserror] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");

    const handleRegister = () => {
        if (password != passwordConfirmed) {
            setMessage("The two password fields must match!");
            setIserror(true);
            return;
        }

        // Check if the name/email is not already used (or just email)
        // Email format error/name/password checked in backend?

        const loginData = {
            "username": name,
            "password": password,
            "email": email
        }

        axios.post('http://localhost:7768/api/Authentication/Register/User', loginData)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Sign up</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className="ion-padding ion-text-center">
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonIcon
                                style={{ fontSize: "40px", color:"#DEA54B" }}
                                icon={pizza}
                            />
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol>
                            <IonLabel class="header-text" position="floating">
                                Sign up to see all the available kitchens in your city
                                <br/><br/>
                            </IonLabel>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">Name</IonLabel>
                                <IonInput
                                    type="text"
                                    value={name}
                                    onIonChange={(e) => setName(e.detail.value!)}
                                >
                                </IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">Email</IonLabel>
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
                                <IonLabel position="floating">Password</IonLabel>
                                <IonInput
                                    type="password"
                                    value={password}
                                    onIonChange={(e) => setPassword(e.detail.value!)}
                                >
                                </IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">Confirm Password</IonLabel>
                                <IonInput
                                    type="password"
                                    value={passwordConfirmed}
                                    onIonChange={(e) => setPasswordConfirmed(e.detail.value!)}
                                >
                                </IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <br/>
                    <IonRow>
                        <IonCol>
                            <IonButton expand="block"  onClick={handleRegister}>Sign up</IonButton>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol>
                            <IonAlert
                                isOpen={iserror}
                                onDidDismiss={() => setIserror(false)}
                                header={"Error!"}
                                message={message}
                                buttons={["Dismiss"]}
                            />
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Register;
