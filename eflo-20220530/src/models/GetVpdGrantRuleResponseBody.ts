// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVpdGrantRuleResponseBodyContent extends $dara.Model {
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
   * er-kkopgtne
   */
  erId?: string;
  /**
   * @remarks
   * Authorized Resource ID
   * 
   * @example
   * grant-rule-xxxxxx
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
   * vpd-xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Network Instance Name
   * 
   * @example
   * vpd-lingjun
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
   * rg-aek2l4sq6l7u***
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
   * Whether the current authorization information has been used; default is false
   * 
   * @example
   * 0
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

export class GetVpdGrantRuleResponseBody extends $dara.Model {
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
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response parameters.
   */
  content?: GetVpdGrantRuleResponseBodyContent;
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
   * 9C50C9CD-E799-54DA-BA7A-1FAF3DF80857
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
      content: GetVpdGrantRuleResponseBodyContent,
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

