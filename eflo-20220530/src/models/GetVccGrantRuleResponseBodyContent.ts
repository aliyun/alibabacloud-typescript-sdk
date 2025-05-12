// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVccGrantRuleResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The time when the data address was created.
   * 
   * @example
   * 1648085472000
   */
  createTime?: string;
  /**
   * @remarks
   * Lingjun HUB Instance ID
   * 
   * @example
   * er-aueyxxsy
   */
  erId?: string;
  /**
   * @remarks
   * Authorized Resource ID
   * 
   * @example
   * grant-rule-jaj34d75h01
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
   * Network Instance ID
   * 
   * @example
   * vcc-cn-jaj34d75h01
   */
  instanceId?: string;
  /**
   * @remarks
   * Network Instance Name
   * 
   * @example
   * vcc-1
   */
  instanceName?: string;
  /**
   * @remarks
   * Network Product Code:
   * 
   * *   **VPD**: Lingjun CIDR block
   * *   **VCC**: Lingjun Connection
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
   * 1620939556166279
   */
  tenantId?: string;
  /**
   * @remarks
   * Whether the current authorization information has been used; optional values:
   * 
   * *   **true**: Used
   * *   **false**: Not used
   * 
   * @example
   * false
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

