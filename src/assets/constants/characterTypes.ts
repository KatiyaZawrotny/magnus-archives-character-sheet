import {Ability, ActivationType, Statistic} from '../classes/Ability'
export const types = {
    "Occultist" : {
        "abilities": {
            1 : {
                //[new Ability("Already Tainted", "You begin the game with access to abilities considered supernatural. Such abilities are marked with Supernatural. Check with the GM to make certain that this is appropriate for the campaign. Enabler.")]
                "Already Tainted" : new Ability(
                    "Already Tainted", 
                    "You begin the game with access to abilities considered supernatural. Such abilities are marked with Supernatural. Check with the GM to make certain that this is appropriate for the campaign. Enabler.",
                    ActivationType.EN),
                "Artefact Affinity" : new Ability(
                    "Artefact Affinity",
                    "Any tasks in which you identify or use an artefact are eased. Enabler.",
                    ActivationType.EN
                ),
                "Esoteric Skills": new Ability(
                    "Esoteric Skills",
                    "Your background has led you down many strange rabbit holes. Choose two of the following skills in which you are not already trained: biology, history, identifying, philosophy, physics, publishing, religion, or researching. You become trained in these two skills. Enabler.",
                    ActivationType.EN
                ),
                "Intuition" : new Ability (
                    "Intuition",
                    "You get a weird feeling when something is not quite right. You don’t choose when this ability works—the GM does, telling you to spend the Intellect points and giving you a clue as to what feels wrong. The GM might tell you that something feels bad about opening the door at the end of the hallway, that the man in the hat reminds you of a terrible dream you had, or that the child you’re looking for is no longer nearby. The GM does not have to trigger this ability, and in fact it should be a surprising but occasional insight rather than an always-available ability you can rely on. If you don’t have the points to spend to activate this ability, it doesn’t work. Enabler.",
                    ActivationType.EN,
                    false,
                    2,
                    Statistic.Intelligence
                ),
                "Sensitive" : new Ability (
                    "Sensitive",
                    "For the next ten minutes, your tasks to perceive abnormal presences or influences are eased (including those that are usually imperceptible to regular people or animals). Action to initiate.",
                    ActivationType.ATI,
                    false,
                    1,
                    Statistic.Intelligence
                )

            }
        }
    }
}