// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVccGrantRulesResponseBodyContentData extends $dara.Model {
  /**
   * @remarks
   * The time when the data address was created.
   * 
   * @example
   * 1678273219000
   */
  createTime?: string;
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
   * Cross-account authorization information Instance ID
   * 
   * @example
   * grant-rule-jpumgwvp
   */
  grantRuleId?: string;
  /**
   * @remarks
   * Authorized Tenant ID
   * 
   * @example
   * 1013666993027780
   */
  grantTenantId?: string;
  /**
   * @remarks
   * Network Instance ID
   * 
   * @example
   * vcc-cn-jaj33d1kb05
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the ECU.
   * 
   * @example
   * vcc-1
   */
  instanceName?: string;
  /**
   * @remarks
   * The type of the authorized product. Valid values:
   * 
   * *   **VPD**: indicates a VPD instance of the Lingjun network segment.
   * *   **VCC**: indicates that Lingjun connects to the VCC instance.
   * 
   * @example
   * VCC
   */
  product?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group instance ID
   * 
   * @example
   * rg-aek2l4sq6l7unhi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 1655449505171
   */
  tenantId?: string;
  /**
   * @remarks
   * Whether the current cross-account resource has been bound to the cross-account Lingjun HUB. Valid values:
   * 
   * *   **true**: Used
   * *   **false**: Not used
   * 
   * @example
   * true
   */
  used?: boolean;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      erId: 'ErId',
      grantRuleId: 'GrantRuleId',
      grantTenantId: 'GrantTenantId',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      product: 'Product',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tenantId: 'TenantId',
      used: 'Used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      erId: 'string',
      grantRuleId: 'string',
      grantTenantId: 'string',
      instanceId: 'string',
      instanceName: 'string',
      product: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tenantId: 'string',
      used: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

