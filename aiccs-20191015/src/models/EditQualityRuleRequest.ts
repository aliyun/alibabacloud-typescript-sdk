// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EditQualityRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AICCS instance. You can obtain the instance ID in the Artificial Intelligence Cloud Call Service console.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre***
   */
  instanceId?: string;
  /**
   * @remarks
   * The list of keywords.
   * 
   * This parameter is required.
   */
  keyWords?: string[];
  /**
   * @remarks
   * The keyword match type. Valid values:
   * 
   * - **1**: Matches any keyword.
   * - **2**: Matches all keywords.
   * - **3**: Matches no keyword.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  matchType?: number;
  /**
   * @remarks
   * The name of the quality check rule.
   * 
   * This parameter is required.
   * 
   * @example
   * Automated quality check rule
   */
  name?: string;
  /**
   * @remarks
   * The ID of the quality check item rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 5369
   */
  qualityRuleId?: number;
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
      qualityRuleId: 'QualityRuleId',
      ruleTag: 'RuleTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      keyWords: { 'type': 'array', 'itemType': 'string' },
      matchType: 'number',
      name: 'string',
      qualityRuleId: 'number',
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

