// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { JudgeNodeMetaDesc } from "./JudgeNodeMetaDesc";


export class NextNodeSituationsConditionGroup extends $dara.Model {
  conditions?: JudgeNodeMetaDesc[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': JudgeNodeMetaDesc },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

