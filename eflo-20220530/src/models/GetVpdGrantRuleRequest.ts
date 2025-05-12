// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVpdGrantRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Lingjun HUB Instance Id
   * 
   * @example
   * er-kkopgtne
   */
  erId?: string;
  /**
   * @remarks
   * Authorized Resource Instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * grant-rule-xrgvqazb
   */
  grantRuleId?: string;
  /**
   * @remarks
   * Authorized Tenant ID
   * 
   * @example
   * 1620939556166277
   */
  grantTenantId?: string;
  /**
   * @remarks
   * Authorized Instance ID
   * 
   * @example
   * vpd-xxxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region. This parameter is required.
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
      grantTenantId: 'GrantTenantId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      erId: 'string',
      grantRuleId: 'string',
      grantTenantId: 'string',
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

