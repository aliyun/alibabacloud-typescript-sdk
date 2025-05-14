// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateQualityRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  keyWords?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  matchType?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ruleTag?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      keyWords: 'KeyWords',
      matchType: 'MatchType',
      name: 'Name',
      ruleTag: 'RuleTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      keyWords: { 'type': 'array', 'itemType': 'string' },
      matchType: 'number',
      name: 'string',
      ruleTag: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.keyWords)) {
      $dara.Model.validateArray(this.keyWords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

