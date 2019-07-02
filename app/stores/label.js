import {observable} from "mobx";

class LabelStore {
    @observable name = "ahendroo"
    @observable icon = ""
}

export default new LabelStore