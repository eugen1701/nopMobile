import React, {useEffect, useState} from "react";
import {RouteComponentProps, useHistory} from "react-router-dom";
import {

    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
} from "@ionic/react";


export function KitchenDetail(props:RouteComponentProps<{ id?: string }>) {
   let id = props.match.params.id
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>All kitchens</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className="ion-text-center">
                <h2> {id}</h2>
            </IonContent>
        </IonPage>
    );
}


