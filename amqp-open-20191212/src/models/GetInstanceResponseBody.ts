// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceResponseBodyDataTags extends $dara.Model {
  key?: string;
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

export class GetInstanceResponseBodyData extends $dara.Model {
  /**
   * @example
   * false
   */
  autoRenewInstance?: boolean;
  /**
   * @example
   * amqp-cn-st21x7kv****.not-support
   */
  classicEndpoint?: string;
  edition?: string;
  encryptedInstance?: boolean;
  /**
   * @example
   * 1651507200000
   */
  expireTime?: number;
  /**
   * @example
   * amqp-cn-*********
   */
  instanceId?: string;
  /**
   * @example
   * yunQi-instance
   */
  instanceName?: string;
  /**
   * @example
   * enterprise
   */
  instanceType?: string;
  kmsKeyId?: string;
  /**
   * @example
   * 1500
   */
  maxConnections?: number;
  /**
   * @example
   * 1000
   */
  maxEipTps?: number;
  /**
   * @example
   * 1000
   */
  maxQueue?: number;
  /**
   * @example
   * 1000
   */
  maxTps?: number;
  /**
   * @example
   * 50
   */
  maxVhost?: number;
  /**
   * @example
   * 1651507200000
   */
  orderCreateTime?: number;
  /**
   * @example
   * PRE_PAID
   */
  orderType?: string;
  /**
   * @example
   * amqp-cn-st21x7kv****.mq-amqp.cn-hangzhou-a.aliyuncs.com
   */
  privateEndpoint?: string;
  provisionedCapacity?: number;
  /**
   * @example
   * xxx.cn-hangzhou.xxx.net.mq.amqp.aliyuncs.com
   */
  publicEndpoint?: string;
  resourceGroupId?: string;
  /**
   * @example
   * SERVING
   */
  status?: string;
  /**
   * @example
   * 200
   */
  storageSize?: number;
  /**
   * @example
   * true
   */
  supportEIP?: boolean;
  /**
   * @example
   * True
   */
  supportTracing?: boolean;
  tags?: GetInstanceResponseBodyDataTags[];
  /**
   * @example
   * 15
   */
  tracingStorageTime?: number;
  static names(): { [key: string]: string } {
    return {
      autoRenewInstance: 'AutoRenewInstance',
      classicEndpoint: 'ClassicEndpoint',
      edition: 'Edition',
      encryptedInstance: 'EncryptedInstance',
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      kmsKeyId: 'KmsKeyId',
      maxConnections: 'MaxConnections',
      maxEipTps: 'MaxEipTps',
      maxQueue: 'MaxQueue',
      maxTps: 'MaxTps',
      maxVhost: 'MaxVhost',
      orderCreateTime: 'OrderCreateTime',
      orderType: 'OrderType',
      privateEndpoint: 'PrivateEndpoint',
      provisionedCapacity: 'ProvisionedCapacity',
      publicEndpoint: 'PublicEndpoint',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      storageSize: 'StorageSize',
      supportEIP: 'SupportEIP',
      supportTracing: 'SupportTracing',
      tags: 'Tags',
      tracingStorageTime: 'TracingStorageTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewInstance: 'boolean',
      classicEndpoint: 'string',
      edition: 'string',
      encryptedInstance: 'boolean',
      expireTime: 'number',
      instanceId: 'string',
      instanceName: 'string',
      instanceType: 'string',
      kmsKeyId: 'string',
      maxConnections: 'number',
      maxEipTps: 'number',
      maxQueue: 'number',
      maxTps: 'number',
      maxVhost: 'number',
      orderCreateTime: 'number',
      orderType: 'string',
      privateEndpoint: 'string',
      provisionedCapacity: 'number',
      publicEndpoint: 'string',
      resourceGroupId: 'string',
      status: 'string',
      storageSize: 'number',
      supportEIP: 'boolean',
      supportTracing: 'boolean',
      tags: { 'type': 'array', 'itemType': GetInstanceResponseBodyDataTags },
      tracingStorageTime: 'number',
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

export class GetInstanceResponseBody extends $dara.Model {
  data?: GetInstanceResponseBodyData;
  /**
   * @example
   * 92385FD2-624A-48C9-8FB5-753F2AFA***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetInstanceResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

