export class Current {
   
    loginData: any;
    envorment:any
    forgotData: any;
    registrationData:any;
    currentLocation:any;
    currentAppointment:any={};
    currentChecking:any={}
    checkinAppointment:any={};
    selectedBody:any;
    frontBody:any=[]
    backBody:any=[]
    constructor() {
    }
}


import { Injectable } from "@angular/core";


@Injectable()
export class AppProvider {
    current: Current;

    constructor() {

        this.current = new Current();
        this.current.envorment='dev'
        this.current.frontBody=[
            {
                "name": "Head",
                "subBodyParts": [
                    {
                        "name": "Scalp",
                        "symptoms": [
                            {
                                "name": "fatigue"
                            },
                            {
                                "name": "fever"
                            },
                            {
                                "name": "forehead is tender"
                            },
                            {
                                "name": "forehead sticks out"
                            },
                            {
                                "name": "headache"
                            },
                            {
                                "name": "headache in front of head"
                            },
                            {
                                "name": "high forehead"
                            },
                            {
                                "name": "lightheadedness"
                            }
                        ]
                    },
                    {
                        "name": "Forehead",
                        "symptoms": [
                            {
                                "name": "fatigue"
                            },
                            {
                                "name": "fever"
                            },
                            {
                                "name": "forehead is tender"
                            },
                            {
                                "name": "forehead sticks out"
                            },
                            {
                                "name": "headache"
                            },
                            {
                                "name": "headache in front of head"
                            },
                            {
                                "name": "lightheadedness"
                            }
                        ]
                    },
                    {
                        "name": "Nose",
                        "symptoms": [
                            {
                                "name": "blockage in nose"
                            },
                            {
                                "name": "bloody nose"
                            },
                            {
                                "name": "dry nasal passages"
                            },
                            {
                                "name": "hay fever"
                            },
                            {
                                "name": "head congestion"
                            },
                            {
                                "name": "itchy nose"
                            },
                            {
                                "name": "nasal sinus draining"
                            },
                            {
                                "name": "nasal sinus feels full"
                            },
                            {
                                "name": "nasal sinus sore"
                            },
                            {
                                "name": "nose discharge"
                            },
                            {
                                "name": "foul smelling, unilateral nose discharge"
                            },
                            {
                                "name": "nosebleed"
                            },
                            {
                                "name": "postnasal drip"
                            },
                            {
                                "name": "pus coming out of nose"
                            },
                            {
                                "name": "runny nose"
                            },
                            {
                                "name": "sinusitis"
                            },
                            {
                                "name": "smelly, runny nose"
                            },
                            {
                                "name": "sneezing snotty, runny nose"
                            },
                            {
                                "name": "stuffy nose"
                            },
                            {
                                "name": "trouble smelling"
                            },
                            {
                                "name": "using decongestant"
                            },
                            {
                                "name": "nose drops"
                            }
                        ]
                    },
                    {
                        "name": "Mouth",
                        "symptoms": [
                            {
                                "name": "bad breath"
                            },
                            {
                                "name": "bleeding gums"
                            },
                            {
                                "name": "breath has a fruity smell"
                            },
                            {
                                "name": "breath smells like almonds"
                            },
                            {
                                "name": "bulimia"
                            },
                            {
                                "name": "cold sore"
                            },
                            {
                                "name": "cough"
                            },
                            {
                                "name": "crack at the corner of mouth"
                            },
                            {
                                "name": "crack on tongue"
                            },
                            {
                                "name": "dehydration"
                            },
                            {
                                "name": "dental caries"
                            },
                            {
                                "name": "denture pain"
                            },
                            {
                                "name": "drooling"
                            },
                            {
                                "name": "dry mouth"
                            },
                            {
                                "name": "gingival"
                            },
                            {
                                "name": "gingivitis"
                            },
                            {
                                "name": "gums hurt"
                            },
                            {
                                "name": "hives on lips"
                            },
                            {
                                "name": "hot food or liquids hurt tooth"
                            },
                            {
                                "name": "large tongue"
                            },
                            {
                                "name": "lip hurts"
                            },
                            {
                                "name": "lips turning blue"
                            },
                            {
                                "name": "lower lip droops"
                            },
                            {
                                "name": "metal taste in mouth"
                            },
                            {
                                "name": "more thirsty than usual"
                            },
                            {
                                "name": "mouth bleeding"
                            },
                            {
                                "name": "mouth hurts"
                            },
                            {
                                "name": "mouth is swollen"
                            },
                            {
                                "name": "mouth mucous membrane bleeding"
                            },
                            {
                                "name": "open sore(s) in mouth"
                            },
                            {
                                "name": "open sore(s) on lip"
                            },
                            {
                                "name": "self induced vomiting"
                            },
                            {
                                "name": "severely bad breath"
                            },
                            {
                                "name": "snoring"
                            },
                            {
                                "name": "swelling around the mouth"
                            },
                            {
                                "name": "swollen gums"
                            },
                            {
                                "name": "swollen lips"
                            },
                            {
                                "name": "swollen throat"
                            },
                            {
                                "name": "swollen tonsils"
                            },
                            {
                                "name": "throat is dry"
                            },
                            {
                                "name": "tonsil inflammation"
                            },
                            {
                                "name": "tooth discoloration"
                            },
                            {
                                "name": "tooth erosion"
                            },
                            {
                                "name": "tooth hurts with cold liquids or food"
                            },
                            {
                                "name": "tooth impaction"
                            },
                            {
                                "name": "tooth loose"
                            },
                            {
                                "name": "toothache"
                            },
                            {
                                "name": "upper lip is swollen"
                            },
                            {
                                "name": "vomiting blood"
                            }
                        ]
                    },
                    {
                        "name": "Face",
                        "symptoms": [
                            {
                                "name": "can't move one side of my face"
                            },
                            {
                                "name": "cheek bone pain"
                            },
                            {
                                "name": "cheek pain"
                            },
                            {
                                "name": "face feels numb"
                            },
                            {
                                "name": "face feels weak"
                            },
                            {
                                "name": "face hurts"
                            },
                            {
                                "name": "face is swollen"
                            },
                            {
                                "name": "face sweats a lot"
                            },
                            {
                                "name": "face turns reddish color"
                            },
                            {
                                "name": "half of face is flushed "
                            },
                            {
                                "name": "horner syndrome"
                            },
                            {
                                "name": "loss of facial hair"
                            },
                            {
                                "name": "nasal sinus pain"
                            },
                            {
                                "name": "numbness of face"
                            },
                            {
                                "name": "one side of face feels weak"
                            },
                            {
                                "name": "one side of face not the same as the other"
                            },
                            {
                                "name": "rash limited to face"
                            },
                            {
                                "name": "red face"
                            },
                            {
                                "name": "red flaky rash"
                            },
                            {
                                "name": "limited to smile or laugh lines"
                            },
                            {
                                "name": "red, swollen, runny nose"
                            },
                            {
                                "name": "rough hair on facee"
                            },
                            {
                                "name": "thinning facial hair"
                            },
                            {
                                "name": "tingling or pricking face"
                            },
                            {
                                "name": "skin tingling or pricking on one side of face"
                            },
                            {
                                "name": "tingling or pricking skin of face"
                            },
                            {
                                "name": "paralysis"
                            },
                            {
                                "name": "weak muscles in face"
                            }
                        ]
                    },
                    {
                        "name": "Ears",
                        "symptoms": [
                            {
                                "name": "blocked ear "
                            },
                            {
                                "name": "can't hear on one side"
                            },
                            {
                                "name": "constant ear ringing"
                            },
                            {
                                "name": "dry skin in ear"
                            },
                            {
                                "name": "ear bleeding"
                            },
                            {
                                "name": "ear infection"
                            },
                            {
                                "name": "ear is red"
                            },
                            {
                                "name": "ear tender to touch"
                            },
                            {
                                "name": "ear wax blocking ear"
                            },
                            {
                                "name": "earache"
                            },
                            {
                                "name": "ears feel full"
                            },
                            {
                                "name": "ears set low"
                            },
                            {
                                "name": "fluid leaking from my ear "
                            },
                            {
                                "name": "headache behind ears"
                            },
                            {
                                "name": "hearing is getting worse"
                            },
                            {
                                "name": "itchy ear outside of ear hurts"
                            },
                            {
                                "name": "pus coming from my ear"
                            },
                            {
                                "name": "rash limited to ear"
                            },
                            {
                                "name": "swollen ear cartilage "
                            },
                            {
                                "name": "trouble hearing"
                            }
                        ]
                    },
                    {
                        "name": "Jaw",
                        "symptoms": [
                            {
                                "name": "cheek and jaw swollen clicking or popping sound from jaw "
                            },
                            {
                                "name": "jaw angle tenderness"
                            },
                            {
                                "name": "jaw hurts"
                            },
                            {
                                "name": "lower jaw hurts"
                            },
                            {
                                "name": "lymph node under jaw enlarged"
                            },
                            {
                                "name": "pain in jaw when chewing"
                            },
                            {
                                "name": "upper jaw hurts"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Chest",
                "subBodyParts": [
                    {
                        "name": "Sternum",
                        "symptoms": [
                            {
                                "name": "breastbone tender to touch "
                            },
                            {
                                "name": "chest bones cave in "
                            },
                            {
                                "name": "chest bones stick out"
                            },
                            {
                                "name": "congestive heart failure"
                            },
                            {
                                "name": "feeling of pressure in food pipe"
                            },
                            {
                                "name": "food gets stuck"
                            },
                            {
                                "name": "hard for food to go down"
                            },
                            {
                                "name": "heartburn"
                            },
                            {
                                "name": "hiccups"
                            },
                            {
                                "name": "inflammation of esophagus"
                            },
                            {
                                "name": "palpitations"
                            },
                            {
                                "name": "pressure on heart due to fluid buildup"
                            },
                            {
                                "name": "severe chest pain/pressure"
                            },
                            {
                                "name": "sternal lift"
                            },
                            {
                                "name": "sternal pulsation"
                            },
                            {
                                "name": "visible tightening of esophagus"
                            }
                        ]
                    },
                    {
                        "name": "Breast",
                        "symptoms": [
                            {
                                "name": "abnormal growth of male breasts"
                            },
                            {
                                "name": "bloody nipple discharge"
                            },
                            {
                                "name": "breast getting bigger"
                            },
                            {
                                "name": "breast hurts"
                            },
                            {
                                "name": "breast redness"
                            },
                            {
                                "name": "breast skin feels like an orange peel"
                            },
                            {
                                "name": "breasts not developing"
                            },
                            {
                                "name": "fluid leaking from nipple"
                            },
                            {
                                "name": "growth on nipple"
                            },
                            {
                                "name": "hard lump in breast"
                            },
                            {
                                "name": "infected lump or sore on breast"
                            },
                            {
                                "name": "lump in breast"
                            },
                            {
                                "name": "nipple pulling to one side"
                            },
                            {
                                "name": "nipple redness "
                            },
                            {
                                "name": "nipple tender to touch"
                            },
                            {
                                "name": "part of breast skin appears pulled inward"
                            },
                            {
                                "name": "rash limited to under the breast"
                            },
                            {
                                "name": "red, irritated nipple"
                            },
                            {
                                "name": "swollen breast"
                            }
                        ]
                    },
                    {
                        "name": "Chest",
                        "symptoms": [
                            {
                                "name": "abnormal growth of male breasts"
                            },
                            {
                                "name": "barky cough"
                            },
                            {
                                "name": "blood clot traveled to lung"
                            },
                            {
                                "name": "bloody nipple discharge"
                            },
                            {
                                "name": "breast getting bigger"
                            },
                            {
                                "name": "breast hurts"
                            },
                            {
                                "name": "breast redness"
                            },
                            {
                                "name": "breast skin feels like an orange peel"
                            },
                            {
                                "name": "breastbone tender to touch"
                            },
                            {
                                "name": "breasts not developing"
                            },
                            {
                                "name": "breathing too fast"
                            },
                            {
                                "name": "buildup of fluid in lungs"
                            },
                            {
                                "name": "can't cough up mucus or phlegm"
                            },
                            {
                                "name": "chest bones cave in"
                            },
                            {
                                "name": "chest bones stick out"
                            },
                            {
                                "name": "chest hair loss"
                            },
                            {
                                "name": "chest infection"
                            },
                            {
                                "name": "chest pain"
                            },
                            {
                                "name": "chest pain made worse by breathing"
                            },
                            {
                                "name": "chest pain made worse by exertion/exercise"
                            },
                            {
                                "name": "chest tightness"
                            },
                            {
                                "name": "chronic cough (more than 8 weeks)"
                            },
                            {
                                "name": "congestive heart failure"
                            },
                            {
                                "name": "cough"
                            },
                            {
                                "name": "cough out mucus"
                            },
                            {
                                "name": "cough up thick gunk"
                            },
                            {
                                "name": "cough up yellow gunk"
                            },
                            {
                                "name": "cough with mucus"
                            },
                            {
                                "name": "long time coughing at night"
                            },
                            {
                                "name": "coughing attacks"
                            },
                            {
                                "name": "coughing up bad smelling mucus"
                            },
                            {
                                "name": "coughing up blood"
                            },
                            {
                                "name": "crushing chest pain"
                            },
                            {
                                "name": "dry cough"
                            },
                            {
                                "name": "emphysema"
                            },
                            {
                                "name": "fatty area above collar bone"
                            },
                            {
                                "name": "feeling of pressure in food pipe"
                            },
                            {
                                "name": "fluid leaking from nipple"
                            },
                            {
                                "name": "food gets stuck"
                            },
                            {
                                "name": "forceful cough"
                            },
                            {
                                "name": "growth on nipple"
                            },
                            {
                                "name": "hacking cough"
                            },
                            {
                                "name": "hard for food to go down"
                            },
                            {
                                "name": "hard lump in breast"
                            },
                            {
                                "name": "heartburn"
                            },
                            {
                                "name": "hiccups"
                            },
                            {
                                "name": "infected lump or sore on breast"
                            },
                            {
                                "name": "inflammation of esophagus"
                            },
                            {
                                "name": "lump in breast"
                            },
                            {
                                "name": "lung disease"
                            },
                            {
                                "name": "lung infection"
                            },
                            {
                                "name": "making a whooping noise when inhaling"
                            },
                            {
                                "name": "muscle cramp on trunk"
                            },
                            {
                                "name": "nipple pulling to one side"
                            },
                            {
                                "name": "nipple redness"
                            },
                            {
                                "name": "nipple tender to touch"
                            },
                            {
                                "name": "obese"
                            },
                            {
                                "name": "upper body pain"
                            },
                            {
                                "name": "palpitations"
                            },
                            {
                                "name": "part of breast skin appears pulled inward"
                            },
                            {
                                "name": "pneumonia"
                            },
                            {
                                "name": "pressure on heart due to fluid buildup"
                            },
                            {
                                "name": "rapid breathing"
                            },
                            {
                                "name": "rash limited to chest"
                            },
                            {
                                "name": "rash limited to under the breast"
                            },
                            {
                                "name": "red, irritated nipple"
                            },
                            {
                                "name": "severe chest pain/pressure"
                            },
                            {
                                "name": "sharp chest pain"
                            },
                            {
                                "name": "shortness breath"
                            },
                            {
                                "name": "leaning forward shortness of breath"
                            },
                            {
                                "name": "shortness of breath when lying flat"
                            },
                            {
                                "name": "shortness of breath with activity"
                            },
                            {
                                "name": "sternal lift"
                            },
                            {
                                "name": "sternal pulsation"
                            },
                            {
                                "name": "swollen breast"
                            },
                            {
                                "name": "tightening of esophagus"
                            },
                            {
                                "name": "tingling or prickling in upper body"
                            },
                            {
                                "name": "upper body muscles shrinking"
                            },
                            {
                                "name": "vomiting after cough"
                            },
                            {
                                "name": "wet coug"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Arms",
                "subBodyParts": [
                    {
                        "name": "Armpit",
                        "symptoms": [
                            {
                                "name": "axillary lymph node enlargement"
                            },
                            {
                                "name": "axillary lymph node tenderness "
                            },
                            {
                                "name": "darkening skin on armpit"
                            },
                            {
                                "name": "firm lump in arm pit"
                            },
                            {
                                "name": "losing armpit hair"
                            },
                            {
                                "name": "lump in armpit that doesn't move"
                            },
                            {
                                "name": "painful nodules in armpits"
                            },
                            {
                                "name": "rash limited to armpit"
                            },
                            {
                                "name": "very little armpit hair"
                            }
                        ]
                    },
                    {
                        "name": "Shoulder",
                        "symptoms": [
                            {
                                "name": "lump in shoulder"
                            },
                            {
                                "name": "muscle weakness"
                            },
                            {
                                "name": "shoulder muscle pain"
                            },
                            {
                                "name": "shoulder muscle twitching"
                            },
                            {
                                "name": "shoulder tender to touch "
                            }
                        ]
                    },
                    {
                        "name": "Upper Arm",
                        "symptoms": [
                            {
                                "name": "bicep shaking"
                            },
                            {
                                "name": "upper arm pain"
                            }
                        ]
                    },
                    {
                        "name": "Elbow",
                        "symptoms": [
                            {
                                "name": "darkened skin on elbow"
                            },
                            {
                                "name": "elbow bones out of place"
                            },
                            {
                                "name": "elbow pain"
                            },
                            {
                                "name": "flaky bump(s) limited to elbows or knees"
                            },
                            {
                                "name": "red bump(s) on elbow"
                            },
                            {
                                "name": "single flaky raised skin patch on elbows or knees"
                            },
                            {
                                "name": "stiff elbow"
                            }
                        ]
                    },
                    {
                        "name": "Forearm",
                        "symptoms": [
                            {
                                "name": "forearm feels more sensitive"
                            },
                            {
                                "name": "forearm hurts"
                            },
                            {
                                "name": "forearm itches"
                            },
                            {
                                "name": "lump on forearm"
                            },
                            {
                                "name": "tingling or prickling in forearm"
                            }
                        ]
                    },
                    {
                        "name": "Wrist",
                        "symptoms": [
                            {
                                "name": "crackling sound when moving wrist"
                            },
                            {
                                "name": "wrist hurts when moved"
                            },
                            {
                                "name": "wrist pain"
                            },
                            {
                                "name": "wrist stiffness"
                            },
                            {
                                "name": "wrist swelling"
                            }
                        ]
                    },
                    {
                        "name": "Hand",
                        "symptoms": [
                            {
                                "name": "asterixis"
                            },
                            {
                                "name": "cold hand"
                            },
                            {
                                "name": "compressed nerve in wrist/hand"
                            },
                            {
                                "name": "cramp in my palm"
                            },
                            {
                                "name": "darkened skin on knuckle(s) "
                            },
                            {
                                "name": "hand cramping at night"
                            },
                            {
                                "name": "hand hurts"
                            },
                            {
                                "name": "hand is numb"
                            },
                            {
                                "name": "hand muscle weakness"
                            },
                            {
                                "name": "hand shaking"
                            },
                            {
                                "name": "hand swelling"
                            },
                            {
                                "name": "knuckle joint on hand hurts "
                            },
                            {
                                "name": "rash limited to hand"
                            },
                            {
                                "name": "rash limited to palm"
                            },
                            {
                                "name": "rash on hand red flaky"
                            },
                            {
                                "name": "rash limited to palms or soles"
                            },
                            {
                                "name": "stiff hands"
                            },
                            {
                                "name": "stiff knuckles in hands or toes"
                            },
                            {
                                "name": "swollen knuckles tingling or prickling in hand"
                            },
                            {
                                "name": "trouble moving hands weak hand grip"
                            }
                        ]
                    },
                    {
                        "name": "Fingers",
                        "symptoms": [
                            {
                                "name": "can't straighten bent finger(s)"
                            },
                            {
                                "name": "finger shaking"
                            },
                            {
                                "name": "finger(s) are swollen"
                            },
                            {
                                "name": "finger(s) hurts"
                            },
                            {
                                "name": "finger(s) locks in place"
                            },
                            {
                                "name": "finger(s) turn red"
                            },
                            {
                                "name": "finger(s) turns blue"
                            },
                            {
                                "name": "nail loss"
                            },
                            {
                                "name": "nail not growing the way it should"
                            },
                            {
                                "name": "nail pulling away from cuticle"
                            },
                            {
                                "name": "thumb hurts"
                            },
                            {
                                "name": "tingling and prickling in finger(s)"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Neck",
                "subBodyParts": [
                    {
                        "name": "Neck",
                        "symptoms": [
                            {
                                "name": "choking sensation"
                            },
                            {
                                "name": "cough"
                            },
                            {
                                "name": "epiglottis swelling"
                            },
                            {
                                "name": "episodes of not breathing during sleep"
                            },
                            {
                                "name": "food comes back up food or liquid goes down wrong pipe"
                            },
                            {
                                "name": "high pitched breathing "
                            },
                            {
                                "name": "itchy throat"
                            },
                            {
                                "name": "jugular vein"
                            },
                            {
                                "name": "a wave increased laryngeal pain"
                            },
                            {
                                "name": "laryngitis"
                            },
                            {
                                "name": "lump on neck"
                            },
                            {
                                "name": "lump on one side of neck"
                            },
                            {
                                "name": "neck bones fused together"
                            },
                            {
                                "name": "neck bones sticking out"
                            },
                            {
                                "name": "neck hurts"
                            },
                            {
                                "name": "neck is swollen"
                            },
                            {
                                "name": "neck tender to touch"
                            },
                            {
                                "name": "pain on one side of throat"
                            },
                            {
                                "name": "pain when i swallow"
                            },
                            {
                                "name": "painful swollen gland in front part of neck"
                            },
                            {
                                "name": "choking sensation"
                            },
                            {
                                "name": "cough"
                            },
                            {
                                "name": "epiglottis swelling"
                            },
                            {
                                "name": "episodes of not breathing during sleep"
                            },
                            {
                                "name": "food comes back up food or liquid goes down wrong pipe"
                            },
                            {
                                "name": "high pitched breathing "
                            },
                            {
                                "name": "itchy throat"
                            },
                            {
                                "name": "jugular vein"
                            },
                            {
                                "name": "a wave increased laryngeal pain"
                            },
                            {
                                "name": "laryngitis"
                            },
                            {
                                "name": "rash limited to neck"
                            },
                            {
                                "name": "sore throat"
                            },
                            {
                                "name": "stiff neck"
                            },
                            {
                                "name": "tender neck"
                            },
                            {
                                "name": "lymph node"
                            },
                            {
                                "name": "throat burning sensation"
                            },
                            {
                                "name": "throat clearing"
                            },
                            {
                                "name": "throat dryness"
                            },
                            {
                                "name": "thyroid enlargement"
                            },
                            {
                                "name": "thyroid nodule"
                            },
                            {
                                "name": "tightness in throat"
                            },
                            {
                                "name": "trouble swallowing"
                            },
                            {
                                "name": "voice is hoarse"
                            },
                            {
                                "name": "white stuff on throat"
                            }
                        ]
                    },
                    {
                        "name": "Head",
                        "symptoms": [
                            {
                                "name": "headache in back of head"
                            },
                            {
                                "name": "lump under base of skull"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Abdomen",
                "subBodyParts": [
                    {
                        "name": "Upper Abdomen",
                        "symptoms": [
                            {
                                "name": "burping"
                            },
                            {
                                "name": "can't digest fatty foods"
                            },
                            {
                                "name": "diarrhea after meals"
                            },
                            {
                                "name": "gallbladder inflammation"
                            },
                            {
                                "name": "gallstones"
                            },
                            {
                                "name": "inflammation of stomach and intestines"
                            },
                            {
                                "name": "liver disease"
                            },
                            {
                                "name": "nausea"
                            },
                            {
                                "name": "pancreas inflammation"
                            },
                            {
                                "name": "reflux"
                            },
                            {
                                "name": "scarring of the liver"
                            },
                            {
                                "name": "stomach pain upper left side"
                            },
                            {
                                "name": "stomach pain upper right side"
                            },
                            {
                                "name": "ulcer in muscle connecting stomach to duodenum"
                            },
                            {
                                "name": "upper belly bloating "
                            },
                            {
                                "name": "upper stomach pain"
                            }
                        ]
                    },
                    {
                        "name": "Lower Abdomen",
                        "symptoms": [
                            {
                                "name": "bladder distention"
                            },
                            {
                                "name": "bladder feels full"
                            },
                            {
                                "name": "diarrhea"
                            },
                            {
                                "name": "feels like need to pee all the time"
                            },
                            {
                                "name": "gassy"
                            },
                            {
                                "name": "inflammation of stomach and intestines "
                            },
                            {
                                "name": "lower belly bloating"
                            },
                            {
                                "name": "lower stomach pain"
                            },
                            {
                                "name": "stomach pain"
                            },
                            {
                                "name": "lower left side stomach pain"
                            },
                            {
                                "name": "lower right side stomach pain"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Pelvis",
                "subBodyParts": [
                    {
                        "name": "Pelvic",
                        "symptoms": [
                            {
                                "name": "blood in urine"
                            },
                            {
                                "name": "bend at hip"
                            },
                            {
                                "name": "decreased sex drive"
                            },
                            {
                                "name": "tenderness"
                            },
                            {
                                "name": "groin pain"
                            },
                            {
                                "name": "groin tenderness"
                            },
                            {
                                "name": "hip deformity"
                            },
                            {
                                "name": "hip feels like it pops out of socket"
                            },
                            {
                                "name": "hip feels stiff"
                            },
                            {
                                "name": "hip hurts"
                            },
                            {
                                "name": "hip is swollen"
                            },
                            {
                                "name": "hip muscle is weak"
                            },
                            {
                                "name": "hip tenderness"
                            },
                            {
                                "name": "impotence"
                            },
                            {
                                "name": "incontinence"
                            },
                            {
                                "name": "lymph node enlargement"
                            },
                            {
                                "name": "inguinal lymph node tenderness"
                            },
                            {
                                "name": "itching in pubic hair area"
                            },
                            {
                                "name": "pelvic inflammatory disease"
                            },
                            {
                                "name": "prostate pain"
                            },
                            {
                                "name": "prostate tenderness"
                            },
                            {
                                "name": "prostatitis pubic area swollen"
                            },
                            {
                                "name": "pubic hair early onset"
                            },
                            {
                                "name": "pubic hair lice"
                            },
                            {
                                "name": "rash limited to genitals"
                            },
                            {
                                "name": "rash limited to groin"
                            },
                            {
                                "name": "redness of groin"
                            },
                            {
                                "name": "thinning pubic hair"
                            },
                            {
                                "name": "trouble starting to pee"
                            },
                            {
                                "name": "urinary incontinence"
                            },
                            {
                                "name": "urinary tract infection"
                            },
                            {
                                "name": "urinating less"
                            }
                        ]
                    },
                    {
                        "name": "Genitals",
                        "symptoms": [
                            {
                                "name": "a lot of blood in urine"
                            },
                            {
                                "name": "bladder distention"
                            },
                            {
                                "name": "bladder feels full"
                            },
                            {
                                "name": "bladder infection"
                            },
                            {
                                "name": "blood in urine"
                            },
                            {
                                "name": "bloody pee"
                            },
                            {
                                "name": "bloody sperm"
                            },
                            {
                                "name": "can't have orgasm"
                            },
                            {
                                "name": "can't pee"
                            },
                            {
                                "name": "cloudy pee"
                            },
                            {
                                "name": "decreased sex drive"
                            },
                            {
                                "name": "delayed or late period"
                            },
                            {
                                "name": "discharge from penis"
                            },
                            {
                                "name": "enlarged prostate"
                            },
                            {
                                "name": "epididymal mass"
                            },
                            {
                                "name": "epididymal tenderness"
                            },
                            {
                                "name": "erection that won't go down or soften"
                            },
                            {
                                "name": "feels like need to pee all the time"
                            },
                            {
                                "name": "firm pus filled rash around head of penis"
                            },
                            {
                                "name": "foreskin stuck over head of penis"
                            },
                            {
                                "name": "genital pain genitals itching"
                            },
                            {
                                "name": "genitals swollen"
                            },
                            {
                                "name": "hard bump(s) around head of penis"
                            },
                            {
                                "name": "hard bump(s) on head of penis"
                            },
                            {
                                "name": "head of penis curves downward"
                            },
                            {
                                "name": "head of penis hurts"
                            },
                            {
                                "name": "head of penis is irritated"
                            },
                            {
                                "name": "head of penis is red and swollen"
                            },
                            {
                                "name": "hurts to ejaculate"
                            },
                            {
                                "name": "immediate urge to pee"
                            },
                            {
                                "name": "impotence incontinence"
                            },
                            {
                                "name": "inflamed scrotum"
                            },
                            {
                                "name": "irritation between butt and genitals"
                            },
                            {
                                "name": "itching on urethra"
                            },
                            {
                                "name": "large blister(s) on penis"
                            },
                            {
                                "name": "lump in genital area"
                            },
                            {
                                "name": "lump on penis"
                            },
                            {
                                "name": "lump on scrotum"
                            },
                            {
                                "name": "lump on testicle"
                            },
                            {
                                "name": "man ejaculates sooner during sexual intercourse than he or his partner would like"
                            },
                            {
                                "name": "need to pee often"
                            },
                            {
                                "name": "open sore(s) around head of penis"
                            },
                            {
                                "name": "open sore(s) on head of penis"
                            },
                            {
                                "name": "open sore(s) on penis"
                            },
                            {
                                "name": "open sore(s) on urethra"
                            },
                            {
                                "name": "pain in testicle or ovary"
                            },
                            {
                                "name": "pain in tube behind testicle"
                            },
                            {
                                "name": "pain while peeing"
                            },
                            {
                                "name": "painful erection"
                            },
                            {
                                "name": "painless ulcer on the genitals"
                            },
                            {
                                "name": "passing small kidney stones"
                            },
                            {
                                "name": "pee more than usual"
                            },
                            {
                                "name": "penis hurts"
                            },
                            {
                                "name": "penis is red and irritated"
                            },
                            {
                                "name": "prostate pain"
                            },
                            {
                                "name": "prostate tenderness"
                            },
                            {
                                "name": "prostatitis rash limited to genitals"
                            },
                            {
                                "name": "red bump(s) around head of penis"
                            },
                            {
                                "name": "red bump(s) on head of penis"
                            },
                            {
                                "name": "redness of testicle sac"
                            },
                            {
                                "name": "scrotal mass"
                            },
                            {
                                "name": "scrotal mass, firm"
                            },
                            {
                                "name": "scrotal ulceration"
                            },
                            {
                                "name": "scrotum hurts"
                            },
                            {
                                "name": "small penis"
                            },
                            {
                                "name": "swollen scrotum"
                            },
                            {
                                "name": "testicles hurt to touch"
                            },
                            {
                                "name": "trouble starting to pee"
                            },
                            {
                                "name": "undescended testicles"
                            },
                            {
                                "name": "urethral pain"
                            },
                            {
                                "name": "urinary incontinence"
                            },
                            {
                                "name": "urinary tract infection"
                            },
                            {
                                "name": "urinating less weak pee stream"
                            }
                        ]
                    },
                    {
                        "name": "Groin",
                        "symptoms": [
                            {
                                "name": "groin pain"
                            },
                            {
                                "name": "groin tenderness"
                            },
                            {
                                "name": "inguinal hernia"
                            },
                            {
                                "name": "inguinal lymph node abscess"
                            },
                            {
                                "name": "inguinal lymph node enlargement"
                            },
                            {
                                "name": "inguinal lymph node tenderness"
                            },
                            {
                                "name": "lump in groin"
                            },
                            {
                                "name": "painful gland in groin"
                            },
                            {
                                "name": "rash limited to groin"
                            },
                            {
                                "name": "redness of groin"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Legs",
                "subBodyParts": [
                    {
                        "name": "Thigh",
                        "symptoms": [
                            {
                                "name": "burning feeling on thigh"
                            },
                            {
                                "name": "cramp in thigh muscle"
                            },
                            {
                                "name": "itching thigh"
                            },
                            {
                                "name": "numb thigh"
                            },
                            {
                                "name": "muscle pain in thigh"
                            }
                        ]
                    },
                    {
                        "name": "Knee",
                        "symptoms": [
                            {
                                "name": "back of knee hurts"
                            },
                            {
                                "name": "darkened skin on knee"
                            },
                            {
                                "name": "dislocated knee"
                            },
                            {
                                "name": "flaky bump(s) limited to elbows or knees"
                            },
                            {
                                "name": "hurts to walk"
                            },
                            {
                                "name": "inflamed fluid sac in knee"
                            },
                            {
                                "name": "knee cracking when moving"
                            },
                            {
                                "name": "knee gets stuck when moving"
                            },
                            {
                                "name": "knee hurts"
                            },
                            {
                                "name": "knee instability"
                            },
                            {
                                "name": "knee joint inflammation"
                            },
                            {
                                "name": "outer side of knee hurts"
                            },
                            {
                                "name": "single flaky raised skin patch on elbows or knees"
                            },
                            {
                                "name": "stiff knee"
                            },
                            {
                                "name": "swollen knee"
                            },
                            {
                                "name": "trouble moving knee"
                            }
                        ]
                    },
                    {
                        "name": "Shin",
                        "symptoms": [
                            {
                                "name": "ridges on shin bone"
                            },
                            {
                                "name": "sharp forward bowing of shin"
                            },
                            {
                                "name": "tibial bone mass"
                            },
                            {
                                "name": "tibial deformity"
                            },
                            {
                                "name": "tibial pulse absence"
                            }
                        ]
                    },
                    {
                        "name": "Ankle",
                        "symptoms": [
                            {
                                "name": "ankle pain"
                            },
                            {
                                "name": "ankle redness"
                            },
                            {
                                "name": "ankle swollen"
                            },
                            {
                                "name": "bruise on ankle"
                            },
                            {
                                "name": "lump on ankle"
                            }
                        ]
                    },
                    {
                        "name": "Foot",
                        "symptoms": [
                            {
                                "name": "ball of foot joint hurts when move big toe joint is swollen"
                            },
                            {
                                "name": "big toe joint is tender to touch"
                            },
                            {
                                "name": "foot feels weak"
                            },
                            {
                                "name": "foot hurts"
                            },
                            {
                                "name": "foot is numb"
                            },
                            {
                                "name": "foot turning blue"
                            },
                            {
                                "name": "heel hurts"
                            },
                            {
                                "name": "heel is swollen"
                            },
                            {
                                "name": "heel spur"
                            },
                            {
                                "name": "heel tenderness"
                            },
                            {
                                "name": "itchy foot"
                            },
                            {
                                "name": "pain in the arch of foot"
                            },
                            {
                                "name": "rash limited to feet"
                            },
                            {
                                "name": "rash limited to soles of feet"
                            },
                            {
                                "name": "swollen foot"
                            },
                            {
                                "name": "tingling or prickling in foot"
                            },
                            {
                                "name": "trouble moving foot"
                            }
                        ]
                    },
                    {
                        "name": "Toe",
                        "symptoms": [
                            {
                                "name": "arthritis in big toe"
                            },
                            {
                                "name": "big toe hurts"
                            },
                            {
                                "name": "big toe hurts when moving"
                            },
                            {
                                "name": "big toe is under the second toe"
                            },
                            {
                                "name": "big toe joint is swollen"
                            },
                            {
                                "name": "big toe joint is tender to touch"
                            },
                            {
                                "name": "great toe metatarsophalangeal prominence"
                            },
                            {
                                "name": "nail loss"
                            },
                            {
                                "name": "nail not growing the way it should"
                            },
                            {
                                "name": "nail pulling away from cuticle"
                            },
                            {
                                "name": "rash limited to between toes"
                            },
                            {
                                "name": "stiff knuckles in hands or toes "
                            },
                            {
                                "name": "toe pain"
                            }
                        ]
                    }
                ]
            }
        ]
        this.current.backBody=[
            {
                "name": "Legs",
                "subBodyParts": [
                    {
                        "name": "Hamstring",
                        "symptoms": [
                            {
                                "name": "back of upper leg is weak"
                            }
                        ]
                    },
                    {
                        "name": "Back of knee",
                        "symptoms": [
                            {
                                "name": "back of knee is swollen"
                            },
                            {
                                "name": "joint fluid swelling of back off knee"
                            },
                            {
                                "name": "joint lachman test positive"
                            }
                        ]
                    },
                    {
                        "name": "Calf",
                        "symptoms": [
                            {
                                "name": "calf muscle cramp"
                            },
                            {
                                "name": "calf pain"
                            },
                            {
                                "name": "calf swelling"
                            },
                            {
                                "name": "hurts to walk"
                            },
                            {
                                "name": "tender calf muscle"
                            },
                            {
                                "name": "weakness in lower legs"
                            }
                        ]
                    },
                    {
                        "name": "Buttocks",
                        "symptoms": [
                            {
                                "name": "anal bleeding"
                            },
                            {
                                "name": "anal bulla, hemorrhagic "
                            },
                            {
                                "name": "anal fistula"
                            },
                            {
                                "name": "anal inflammation"
                            },
                            {
                                "name": "anal sphincter spasm"
                            },
                            {
                                "name": "anal ulceration"
                            },
                            {
                                "name": "blood in poop"
                            },
                            {
                                "name": "butt hurts"
                            },
                            {
                                "name": "butt pain"
                            },
                            {
                                "name": "can't poop completely"
                            },
                            {
                                "name": "clay colored poop"
                            },
                            {
                                "name": "constipation"
                            },
                            {
                                "name": "diarrhea"
                            },
                            {
                                "name": "diarrhea after meals"
                            },
                            {
                                "name": "diarrhea at night"
                            },
                            {
                                "name": "feels like need to poop all the time"
                            },
                            {
                                "name": "gassy"
                            },
                            {
                                "name": "hard stool"
                            },
                            {
                                "name": "hemorrhoid infected lump or sore on tailbone"
                            },
                            {
                                "name": "infrequent bowel movements"
                            },
                            {
                                "name": "itchy anus"
                            },
                            {
                                "name": "itchy buttocks"
                            },
                            {
                                "name": "large crack between or under butt cheeks"
                            },
                            {
                                "name": "mucous leaking from butt"
                            },
                            {
                                "name": "oily greasy looking poop "
                            },
                            {
                                "name": "pain during pooping poop leaking"
                            },
                            {
                                "name": "poop smells bad"
                            },
                            {
                                "name": "pus-filled bump(s) in buttocks"
                            },
                            {
                                "name": "hair follicle(s) rash limited to anus"
                            },
                            {
                                "name": "rash limited to buttocks"
                            },
                            {
                                "name": "rectal fissure"
                            },
                            {
                                "name": "rectal pain"
                            },
                            {
                                "name": "rectal tenderness"
                            },
                            {
                                "name": "rectum protrudes out anus"
                            },
                            {
                                "name": "red bumps around hair follicles on buttocks"
                            },
                            {
                                "name": "sciatic nerve pain"
                            },
                            {
                                "name": "sciatic nerve tenderness"
                            },
                            {
                                "name": "severe constipation"
                            },
                            {
                                "name": "stool backed up or blocked"
                            },
                            {
                                "name": "straining during bowel movement "
                            },
                            {
                                "name": "tarry stool"
                            },
                            {
                                "name": "wart on butt"
                            },
                            {
                                "name": "yellow colored poop"
                            }
                        ]
                    },
                    {
                        "name": "Hip",
                        "symptoms": [
                            {
                                "name": "bend at hip"
                            },
                            {
                                "name": "greater tuberosity tenderness"
                            },
                            {
                                "name": "hip deformity"
                            },
                            {
                                "name": "hip feels like it pops out of socket"
                            },
                            {
                                "name": "hip feels stiff"
                            },
                            {
                                "name": "hip hurts"
                            },
                            {
                                "name": "hip is swollen"
                            },
                            {
                                "name": "hip muscle is weak"
                            },
                            {
                                "name": "hip tenderness"
                            },
                            {
                                "name": "hurts to walk"
                            }
                        ]
                    }
                ]
    
            },
            {
                "name": "Back",
                "subBodyParts": [
                    {
                        "name": "Tailbone",
                        "symptoms": [
                            {
                                "name": "compression of spinal nerves"
                            },
                            {
                                "name": "pain in tailbone"
                            },
                            {
                                "name": "pain when sitting"
                            },
                            {
                                "name": "sacroiliac pain"
                            }
                        ]
                    },
                    {
                        "name": "Lower Back",
                        "symptoms": [
                            {
                                "name": "back pain"
                            },
                            {
                                "name": "can't bend backwards"
                            },
                            {
                                "name": "extreme curve in low back"
                            },
                            {
                                "name": "low back pain"
                            },
                            {
                                "name": "low back tenderness "
                            },
                            {
                                "name": "lower back muscle spasm"
                            },
                            {
                                "name": "severe back pain"
                            },
                            {
                                "name": "solitary patch, rough, raised, lumbosacral"
                            },
                            {
                                "name": "spine curvature in side-to-side direction"
                            }
                        ]
                    },
                    {
                        "name": "Back",
                        "symptoms": [
                            {
                                "name": "back muscle spasm"
                            },
                            {
                                "name": "back pain"
                            },
                            {
                                "name": "can't bend backwards"
                            },
                            {
                                "name": "extreme curve in low back"
                            },
                            {
                                "name": "flank tenderness"
                            },
                            {
                                "name": "hunched or stooped posture"
                            },
    
                            {
                                "name": "kidney disease"
                            },
                            {
                                "name": "kidney stone"
                            },
                            {
                                "name": "kidney, polycystic"
                            },
                            {
                                "name": "kyphoscoliosis"
                            },
                            {
                                "name": "low back pain"
                            },
                            {
                                "name": "low back tenderness"
                            },
                        ]
                    },
                    {
                        "name": "Flank",
                        "symptoms": [
                            {
                                "name": "flank tenderness"
                            },
                            {
                                "name": "kidney disease"
                            },
                            {
                                "name": "kidney stone"
                            },
                            {
                                "name": "kidney, polycystic"
                            },
                            {
                                "name": "one side of low back hurts"
                            },
                            {
                                "name": "one side of low back is red"
                            }
                        ]
                    },
                    {
                        "name": "Upper Back",
                        "symptoms": [
                            {
                                "name": "back pain"
                            },
                            {
                                "name": "upper back pain"
                            }
                        ]
                    }
                ]
    
            },
            {
                "name": "Arms",
                "subBodyParts": [
                    {
                        "name": "Shoulder",
                        "symptoms": [
                            {
                                "name": "lump in shoulder"
                            },
                            {
                                "name": "muscle weakness"
                            },
                            {
                                "name": "shoulder muscle pain"
                            },
                            {
                                "name": "shoulder muscle twitching"
                            },
                            {
                                "name": "shoulder tender to touch "
                            }
                        ]
                    },
                    {
                        "name": "Upper Arm",
                        "symptoms": [
                            {
                                "name": "bicep shaking"
                            },
                            {
                                "name": "upper arm pain"
                            }
                        ]
                    },
                    {
                        "name": "Elbow",
                        "symptoms": [
                            {
                                "name": "darkened skin on elbow"
                            },
                            {
                                "name": "elbow bones out of place"
                            },
                            {
                                "name": "elbow pain"
                            },
                            {
                                "name": "flaky bump(s) limited to elbows or knees"
                            },
                            {
                                "name": "red bump(s) on elbow"
                            },
                            {
                                "name": "single flaky raised skin patch on elbows or knees"
                            },
                            {
                                "name": "stiff elbow"
                            }
                        ]
                    },
                    {
                        "name": "Forearm",
                        "symptoms": [
                            {
                                "name": "forearm feels more sensitive"
                            },
                            {
                                "name": "forearm hurts"
                            },
                            {
                                "name": "forearm itches"
                            },
                            {
                                "name": "lump on forearm"
                            },
                            {
                                "name": "tingling or prickling in forearm"
                            }
                        ]
                    },
                    {
                        "name": "Wrist",
                        "symptoms": [
                            {
                                "name": "crackling sound when moving wrist"
                            },
                            {
                                "name": "wrist hurts when moved"
                            },
                            {
                                "name": "wrist pain"
                            },
                            {
                                "name": "wrist stiffness"
                            },
                            {
                                "name": "wrist swelling"
                            }
                        ]
                    },
                    {
                        "name": "Hand",
                        "symptoms": [
                            {
                                "name": "asterixis"
                            },
                            {
                                "name": "cold hand"
                            },
                            {
                                "name": "compressed nerve in wrist/hand"
                            },
                            {
                                "name": "cramp in my palm"
                            },
                            {
                                "name": "darkened skin on knuckle(s) "
                            },
    
                            {
                                "name": "hand cramping at night"
                            },
                            {
                                "name": "hand hurts"
                            },
                            {
                                "name": "hand is numb"
                            },
                            {
                                "name": "hand muscle weakness"
                            },
                            {
                                "name": "hand shaking"
                            },
                            {
                                "name": "hand swelling"
                            },
                            {
                                "name": "knuckle joint on hand hurts "
                            },
                            {
                                "name": "rash limited to hand"
                            },
                            {
                                "name": "rash limited to palm"
                            },
                            {
                                "name": "rash on hand red flaky"
                            },
    
                            {
                                "name": "rash limited to palms or soles"
                            },
                            {
                                "name": "stiff hands"
                            },
                            {
                                "name": "stiff knuckles in hands or toes"
                            },
                            {
                                "name": "swollen knuckles tingling or prickling in hand"
                            },
                            {
                                "name": "trouble moving hands weak hand grip"
                            }
                        ]
                    },
                    {
                        "name": "Fingers",
                        "symptoms": [
                            {
                                "name": "can't straighten bent finger(s)"
                            },
                            {
                                "name": "finger shaking"
                            },
                            {
                                "name": "finger(s) are swollen"
                            },
                            {
                                "name": "finger(s) hurts"
                            },
                            {
                                "name": "finger(s) locks in place"
                            },
    
                            {
                                "name": "finger(s) turn red"
                            },
                            {
                                "name": "finger(s) turns blue"
                            },
                            {
                                "name": "nail loss"
                            },
                            {
                                "name": "nail not growing the way it should"
                            },
                            {
                                "name": "nail pulling away from cuticle"
                            },
                            {
                                "name": "thumb hurts"
                            },
                            {
                                "name": "tingling and prickling in finger(s)"
                            }
                        ]
                    }
                ]
    
            },
            
            {
                "name": "Neck",
                "subBodyParts": [
                    {
                        "name": "Neck",
                        "symptoms": [
                            {
                                "name": "choking sensation"
                            },
                            {
                                "name": "cough"
                            },
                            {
                                "name": "epiglottis swelling"
                            },
                            {
                                "name": "episodes of not breathing during sleep"
                            },
                            {
                                "name": "food comes back up food or liquid goes down wrong pipe"
                            },
    
                            {
                                "name": "high pitched breathing "
                            },
                            {
                                "name": "itchy throat"
                            },
                            {
                                "name": "jugular vein"
                            },
                            {
                                "name": "a wave increased laryngeal pain"
                            },
                            {
                                "name": "laryngitis"
                            },
    
    
                            {
                                "name": "lump on neck"
                            },
                            {
                                "name": "lump on one side of neck"
                            },
                            {
                                "name": "neck bones fused together"
                            },
                            {
                                "name": "neck bones sticking out"
                            },
                            {
                                "name": "neck hurts"
                            },
    
                            {
                                "name": "neck is swollen"
                            },
                            {
                                "name": "neck tender to touch"
                            },
                            {
                                "name": "pain on one side of throat"
                            },
                            {
                                "name": "pain when i swallow"
                            },
                            {
                                "name": "painful swollen gland in front part of neck"
                            },
    
    
                            {
                                "name": "choking sensation"
                            },
                            {
                                "name": "cough"
                            },
                            {
                                "name": "epiglottis swelling"
                            },
                            {
                                "name": "episodes of not breathing during sleep"
                            },
                            {
                                "name": "food comes back up food or liquid goes down wrong pipe"
                            },
    
                            {
                                "name": "high pitched breathing "
                            },
                            {
                                "name": "itchy throat"
                            },
                            {
                                "name": "jugular vein"
                            },
                            {
                                "name": "a wave increased laryngeal pain"
                            },
                            {
                                "name": "laryngitis"
                            },
    
    
                            {
                                "name": "rash limited to neck"
                            },
                            {
                                "name": "sore throat"
                            },
                            {
                                "name": "stiff neck"
                            },
                            {
                                "name": "tender neck"
                            },
                            {
                                "name": "lymph node"
                            },
    
                            {
                                "name": "throat burning sensation"
                            },
                            {
                                "name": "throat clearing"
                            },
                            {
                                "name": "throat dryness"
                            },
                            {
                                "name": "thyroid enlargement"
                            },
                            {
                                "name": "thyroid nodule"
                            },
                            {
                                "name": "tightness in throat"
                            },
                            {
                                "name": "trouble swallowing"
                            },
                            {
                                "name": "voice is hoarse"
                            },
                            {
                                "name": "white stuff on throat"
                            }
                            
    
                            
                        ]
                    },
                    {
                        "name": "Head",
                        "symptoms": [
                            {
                                "name": "headache in back of head"
                            },
                            {
                                "name": "lump under base of skull"
                            }
                        ]
                    }
                ]
    
            }
    
        ]
    }

}
