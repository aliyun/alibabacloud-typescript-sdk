// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVpdGrantRulesResponseBodyContentData extends $dara.Model {
  /**
   * @remarks
   * The time when the data address was created.
   * 
   * @example
   * 1643013506000
   */
  createTime?: string;
  /**
   * @remarks
   * The current network sample is authorized to the specified Lingjun HUB sample ID.
   * 
   * @example
   * er-kkopgtne
   */
  erId?: string;
  /**
   * @remarks
   * Authorization Entry ID
   * 
   * @example
   * grant-rule-8rgvqazb
   */
  grantRuleId?: string;
  /**
   * @remarks
   * The ID of the tenant to which the current instance is authorized.
   * 
   * @example
   * 1672372231790
   */
  grantTenantId?: string;
  /**
   * @remarks
   * Lingjun CIDR block instance ID
   * 
   * @example
   * vpd-8rgvqazb
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the ECU.
   * 
   * @example
   * vpd-1
   */
  instanceName?: string;
  /**
   * @remarks
   * The type of the authorized product. Valid values:
   * 
   * *   **VPD**: indicates a VPD instance of the Lingjun network segment.
   * *   **VCC**: indicates that Lingjun connects to the VCC instance.
   * 
   * The caller does not need to specify.
   * 
   * @example
   * VPD
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
   * Whether the current authorized instance has been bound
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

