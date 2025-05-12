// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpdGrantRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Lingjun HUB ID
   * 
   * This parameter is required.
   * 
   * @example
   * er-kkopgtne
   */
  erId?: string;
  /**
   * @remarks
   * Authorized Tenant ID
   * 
   * This parameter is required.
   * 
   * @example
   * 1013666993027780
   */
  grantTenantId?: string;
  /**
   * @remarks
   * Network Instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * vpd-8rgvqazb
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
      grantTenantId: 'GrantTenantId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      erId: 'string',
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

