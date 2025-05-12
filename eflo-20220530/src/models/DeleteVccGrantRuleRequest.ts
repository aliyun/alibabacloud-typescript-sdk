// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteVccGrantRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Lingjun HUB ID
   * 
   * @example
   * er-kkopgtne
   */
  erId?: string;
  /**
   * @remarks
   * Authorization Entry ID
   * 
   * This parameter is required.
   * 
   * @example
   * grant-rule-jaj34d75h01
   */
  grantRuleId?: string;
  /**
   * @remarks
   * Network Instance ID
   * 
   * @example
   * vcc-cn-jaj34d75h01
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      erId: 'ErId',
      grantRuleId: 'GrantRuleId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      erId: 'string',
      grantRuleId: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

