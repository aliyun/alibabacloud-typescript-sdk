// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { JudgeNodeMetaDesc } from "./JudgeNodeMetaDesc";


export class NextNodeSituationsConditionGroup extends $dara.Model {
  /**
   * @remarks
   * Collection of matching conditions
   */
  conditions?: JudgeNodeMetaDesc[];
  /**
   * @remarks
   * The matching relationship between conditions
   * 
   * @example
   * 1
   */
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

export class NextNodeSituations extends $dara.Model {
  /**
   * @remarks
   * Judgment Conditions
   */
  conditionGroup?: NextNodeSituationsConditionGroup[];
  /**
   * @remarks
   * The matching relationship between conditions: currently all are OR relationships.
   * 
   * @example
   * 1
   */
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

