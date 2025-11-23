// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDifyAttributeResponseBodyRoot extends $dara.Model {
  /**
   * @example
   * 92748163-af62-4ca4-ad85-1****
   */
  appUuid?: string;
  billingInstanceId?: string;
  chargeType?: string;
  expireTime?: number;
  /**
   * @example
   * 1
   */
  replicas?: string;
  /**
   * @example
   * 4CU
   */
  resourceQuota?: string;
  /**
   * @example
   * sg-bp1ik7t5d5f24b****
   */
  securityGroupId?: string;
  /**
   * @example
   * DEPLOYED
   */
  status?: string;
  storageType?: string;
  /**
   * @example
   * vsw-bp1tzpv5jfsuoqy****
   */
  vSwitchId?: string;
  /**
   * @example
   * vpc-bp1n16nsg8z1kn6****
   */
  vpcId?: string;
  /**
   * @example
   * 339170706****
   */
  workspaceId?: string;
  /**
   * @example
   * cn-hangzhou-j
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      appUuid: 'AppUuid',
      billingInstanceId: 'BillingInstanceId',
      chargeType: 'ChargeType',
      expireTime: 'ExpireTime',
      replicas: 'Replicas',
      resourceQuota: 'ResourceQuota',
      securityGroupId: 'SecurityGroupId',
      status: 'Status',
      storageType: 'StorageType',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      workspaceId: 'WorkspaceId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUuid: 'string',
      billingInstanceId: 'string',
      chargeType: 'string',
      expireTime: 'number',
      replicas: 'string',
      resourceQuota: 'string',
      securityGroupId: 'string',
      status: 'string',
      storageType: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      workspaceId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDifyAttributeResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * UnknownError
   */
  message?: string;
  /**
   * @example
   * 427688B8-ADFB-4C4E-9D45-EF5C1FD6E23D
   */
  requestId?: string;
  root?: DescribeDifyAttributeResponseBodyRoot;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      root: 'Root',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      root: DescribeDifyAttributeResponseBodyRoot,
      success: 'boolean',
    };
  }

  validate() {
    if(this.root && typeof (this.root as any).validate === 'function') {
      (this.root as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

