// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFollowerInstancesResponseBodyInstanceListTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * tag
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFollowerInstancesResponseBodyInstanceList extends $dara.Model {
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The commodity code, which is consistent with the product detail code in the User Center.
   * 
   * @example
   * hologram_postpay_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The creation time. The time is in UTC and follows the ISO 8601 standard.
   * 
   * @example
   * 2022-12-16T02:24:05Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The expiration time. The time is in UTC and follows the ISO 8601 standard.
   * 
   * @example
   * 2023-05-04T16:00:00.000Z
   */
  expirationTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * hgpostcn-cn-aaab9ad2d8fb
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * test_instance
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance status.
   * 
   * @example
   * Running
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * Standard
   */
  instanceType?: string;
  /**
   * @remarks
   * The tag details.
   */
  tags?: ListFollowerInstancesResponseBodyInstanceListTags[];
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      commodityCode: 'CommodityCode',
      creationTime: 'CreationTime',
      expirationTime: 'ExpirationTime',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceStatus: 'InstanceStatus',
      instanceType: 'InstanceType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      commodityCode: 'string',
      creationTime: 'string',
      expirationTime: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceStatus: 'string',
      instanceType: 'string',
      tags: { 'type': 'array', 'itemType': ListFollowerInstancesResponseBodyInstanceListTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFollowerInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * null
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The instance details.
   */
  instanceList?: ListFollowerInstancesResponseBodyInstanceList[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * D3AE84AB-0873-5FC7-A4C4-8CF869D2FA70
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. This parameter is unrelated to business logic.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      instanceList: 'InstanceList',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'string',
      instanceList: { 'type': 'array', 'itemType': ListFollowerInstancesResponseBodyInstanceList },
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceList)) {
      $dara.Model.validateArray(this.instanceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

