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

const AllKitchens: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const history = useHistory();
    const [kitchens,setKitchens]=useState<any[]>([]);
    const [displaykitchens,setDisplayKitchens]=useState<any[]>([]);
    const [searchText, setSearchText] = useState();
    const token = localStorage.token
    const strringy = "http://localhost:7768/api/Kitchen/Get";
    useEffect(() => {
        axios.get(strringy, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((response) => {
            setKitchens(response.data)
            setDisplayKitchens(response.data)
        })
    }, [strringy, token]);

   const loadKitchenDetails = (id:String) =>{
       history.push("/kitchen_detail/"+id)
   }

   function textChanged(e: any){
       setSearchText(e.detail.value!);
       var testing : any[] = []
       //TODO ADD FILTERING BY CITY ONCE CITY PARAM IS ADDED
       // kitchens.forEach(kitchen => {
       //     if(kitchen.city===searchText){
       //         testing.push(kitchen)
       //     }
       // })
       // setDisplayKitchens(testing);
   }

    // @ts-ignore
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>All kitchens</IonTitle>

                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className="ion-text-center">
                <IonSearchbar value={searchText} onIonChange={(e) => textChanged(e) }></IonSearchbar>
                { displaykitchens.map(obj => {return <IonCard onClick={()=>loadKitchenDetails(obj.id)}>
                    <IonCardTitle>{obj.name}</IonCardTitle>
                    <IonCardSubtitle>{obj.additionalInformation}</IonCardSubtitle>
                </IonCard>}) }
            </IonContent>
        </IonPage>
    );
};

export default AllKitchens;