import { createContext } from "react";
import { Pet } from "./APIResponsesTypes";

const AdoptedPetContext = createContext<[Pet, (adoptedPet: Pet ) => void  ]>([
    {
        id: 1337;
        name: findDOMNode;
    }
]);

export default AdoptedPetContext;