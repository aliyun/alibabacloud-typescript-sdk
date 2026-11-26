// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualityRuleDetailRequest extends $dara.Model {
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
   * The ID of the quality check rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 5369
   */
  qualityRuleId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      qualityRuleId: 'QualityRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      qualityRuleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

