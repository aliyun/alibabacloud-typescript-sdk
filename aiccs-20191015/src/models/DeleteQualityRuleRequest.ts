// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteQualityRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the quality check rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 5369
   */
  id?: number;
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
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

