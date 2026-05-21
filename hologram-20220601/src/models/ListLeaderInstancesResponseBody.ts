// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLeaderInstancesResponseBodyInstanceListTags extends $dara.Model {
  /**
   * @example
   * tagKey
   */
  key?: string;
  /**
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
   * @example
   * 0
   */
  bindingCode?: string;
  /**
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @example
   * hologram_combo_public_cn
   */
  commodityCode?: string;
  /**
   * @example
   * 2022-07-25T02:15:35Z
   */
  creationTime?: string;
  /**
   * @example
   * 2022-07-25T02:15:35Z
   */
  expirationTime?: string;
  /**
   * @example
   * hgpostcn-cn-tl32vsdir00h
   */
  instanceId?: string;
  /**
   * @example
   * user_defined_name
   */
  instanceName?: string;
  /**
   * @example
   * Running
   */
  instanceStatus?: string;
  /**
   * @example
   * Standard
   */
  instanceType?: string;
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
   * @example
   * 404
   */
  errorCode?: string;
  /**
   * @example
   * Internal server error.
   */
  errorMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: string;
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

