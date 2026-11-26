// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateQualityRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID of the AICCS instance. You can obtain instance ID from the Artificial Intelligence Cloud Call Service console.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre***
   */
  instanceId?: string;
  /**
   * @remarks
   * The keywords.
   * 
   * This parameter is required.
   */
  keyWords?: string[];
  /**
   * @remarks
   * The keyword match type. Valid values:	
   * 
   * - **1**: Any keyword appears.
   * - **2**: All keywords appear.
   * - **3**: No keyword appears.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  matchType?: number;
  /**
   * @remarks
   * The name of the quality check.
   * 
   * This parameter is required.
   * 
   * @example
   * Automated quality check rule
   */
  name?: string;
  /**
   * @remarks
   * The tag of the quality check rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 638
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

