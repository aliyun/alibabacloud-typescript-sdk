// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDialogAnalysisTaskRequestConversationListDialogueList } from "./CreateDialogAnalysisTaskRequestConversationListDialogueList";


export class CreateDialogAnalysisTaskRequestConversationList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  dialogueList?: CreateDialogAnalysisTaskRequestConversationListDialogueList[];
  static names(): { [key: string]: string } {
    return {
      dialogueList: 'dialogueList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogueList: { 'type': 'array', 'itemType': CreateDialogAnalysisTaskRequestConversationListDialogueList },
    };
  }

  validate() {
    if(Array.isArray(this.dialogueList)) {
      $dara.Model.validateArray(this.dialogueList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

