// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLeaderInstancesResponseBodyInstanceListTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * tagKey
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

export class ListLeaderInstancesResponseBodyInstanceList extends $dara.Model {
  /**
   * @remarks
   * The match level between the primary and secondary instances. A value of 0 indicates a perfect match, and other values indicate a mismatch.
   * 
   * @example
   * 0
   */
  bindingCode?: string;
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
   * The commodity code.
   * 
   * @example
   * hologram_combo_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The creation time in UTC formatted according to ISO 8601.
   * 
   * @example
   * 2022-07-25T02:15:35Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The expiration time. Pay-as-you-go instances do not have an expiration time. The time is displayed in UTC and formatted in accordance with ISO 8601.
   * 
   * @example
   * 2022-07-25T02:15:35Z
   */
  expirationTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * hgpostcn-cn-tl32vsdir00h
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * user_defined_name
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
   * The list of tags.
   */
  tags?: ListLeaderInstancesResponseBodyInstanceListTags[];
  static names(): { [key: string]: string } {
    return {
      bindingCode: 'BindingCode',
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
      bindingCode: 'string',
      chargeType: 'string',
      commodityCode: 'string',
      creationTime: 'string',
      expirationTime: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceStatus: 'string',
      instanceType: 'string',
      tags: { 'type': 'array', 'itemType': ListLeaderInstancesResponseBodyInstanceListTags },
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

export class ListLeaderInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 404
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Internal server error.
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
   * The list of instances.
   */
  instanceList?: ListLeaderInstancesResponseBodyInstanceList[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 5600196E-78E2-50F2-B2A1-C44D3B665438
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. This parameter is unrelated to the business logic.
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
      instanceList: { 'type': 'array', 'itemType': ListLeaderInstancesResponseBodyInstanceList },
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

