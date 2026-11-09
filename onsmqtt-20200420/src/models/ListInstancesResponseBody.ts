// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesResponseBodyInstancesMqttTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * test
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * test
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstances extends $dara.Model {
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 1739345768000
   */
  createTime?: number;
  /**
   * @remarks
   * The expiration time of the instance.
   * 
   * @example
   * 1741795200000
   */
  expireTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * mqtt-cn-xxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * mqtt-cn-xxxxxxx
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance status.
   * 
   * - 0: Preparing
   * 
   * - 5: In Service
   * 
   * - 7: Upgrading
   * 
   * - 15: Frozen
   * 
   * - 10: Released
   * 
   * - 1: Not Activated
   * 
   * - 2: Overdue
   * 
   * - 3: Expired
   * 
   * @example
   * 5
   */
  instanceStatus?: number;
  /**
   * @remarks
   * The instance type:
   * 
   * - 0: Basic Edition
   * 
   * - 1: Platinum Edition
   * 
   * - 2: Pay-as-you-go
   * 
   * - 3: Subscription Lightweight
   * 
   * - 4: Professional Edition
   * 
   * - 5: Serverless Edition
   * 
   * @example
   * 4
   */
  instanceType?: number;
  /**
   * @remarks
   * The Milvus version.
   * 
   * @example
   * V3.3.0
   */
  kernelVersion?: string;
  /**
   * @remarks
   * The list of tags.
   */
  mqttTags?: ListInstancesResponseBodyInstancesMqttTags[];
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 245949616640095
   */
  orderId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @remarks
   * The instance type of the Professional Edition instance.
   * 
   * @example
   * mqtt.p2.1xlarge
   */
  specific?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceStatus: 'InstanceStatus',
      instanceType: 'InstanceType',
      kernelVersion: 'KernelVersion',
      mqttTags: 'MqttTags',
      orderId: 'OrderId',
      regionId: 'RegionId',
      specific: 'Specific',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      expireTime: 'number',
      instanceId: 'string',
      instanceName: 'string',
      instanceStatus: 'number',
      instanceType: 'number',
      kernelVersion: 'string',
      mqttTags: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstancesMqttTags },
      orderId: 'string',
      regionId: 'string',
      specific: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.mqttTags)) {
      $dara.Model.validateArray(this.mqttTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The list of instances.
   */
  instances?: ListInstancesResponseBodyInstances[];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 294F5B26-FADF-41D0-BE68-14ABE4EB****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instances: 'Instances',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      instances: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstances },
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

