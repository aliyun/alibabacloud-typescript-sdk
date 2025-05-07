// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NextNodeSituationsConditionGroup } from "./NextNodeSituationsConditionGroup";


export class NextNodeSituations extends $dara.Model {
  conditionGroup?: NextNodeSituationsConditionGroup[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      conditionGroup: 'ConditionGroup',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionGroup: { 'type': 'array', 'itemType': NextNodeSituationsConditionGroup },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.conditionGroup)) {
      $dara.Model.validateArray(this.conditionGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

