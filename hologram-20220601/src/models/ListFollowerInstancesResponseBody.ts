// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFollowerInstancesResponseBodyInstanceListTags extends $dara.Model {
  /**
   * @example
   * tag
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

export class ListFollowerInstancesResponseBodyInstanceList extends $dara.Model {
  /**
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @example
   * hologram_postpay_public_cn
   */
  commodityCode?: string;
  /**
   * @example
   * 2022-12-16T02:24:05Z
   */
  creationTime?: string;
  /**
   * @example
   * 2023-05-04T16:00:00.000Z
   */
  expirationTime?: string;
  /**
   * @example
   * hgpostcn-cn-aaab9ad2d8fb
   */
  instanceId?: string;
  /**
   * @example
   * test_instance
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
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @example
   * null
   */
  errorMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: string;
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

