// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RuleTestDialogueContent } from "./RuleTestDialogueContent";


export class RuleTestDialogue extends $dara.Model {
  content?: RuleTestDialogueContent[];
  id?: number;
  name?: string;
  userGroup?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      id: 'Id',
      name: 'Name',
      userGroup: 'UserGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': RuleTestDialogueContent },
      id: 'number',
      name: 'string',
      userGroup: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

