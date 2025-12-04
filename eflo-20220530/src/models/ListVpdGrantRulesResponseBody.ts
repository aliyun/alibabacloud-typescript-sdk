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

export class ListVpdGrantRulesResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * Lingjun CIDR block authorization information list
   */
  data?: ListVpdGrantRulesResponseBodyContentData[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 0
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListVpdGrantRulesResponseBodyContentData },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpdGrantRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response parameters.
   */
  content?: ListVpdGrantRulesResponseBodyContent;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID of the current request
   * 
   * @example
   * A56F7D3C-8850-5AF4-A342-2D71C9A9D1CC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: ListVpdGrantRulesResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

