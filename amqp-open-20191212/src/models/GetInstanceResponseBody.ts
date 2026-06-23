// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceResponseBodyDataTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * Tag key
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * Tag value
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

export class GetInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether auto-renewal is enabled for the instance.
   * 
   * @example
   * false
   */
  autoRenewInstance?: boolean;
  /**
   * @remarks
   * The classic network endpoint. This parameter is deprecated.
   * 
   * @example
   * amqp-cn-st21x7kv****.not-support
   */
  classicEndpoint?: string;
  /**
   * @remarks
   * The deployment architecture. Valid values:
   * 
   * - shared: shared architecture, which is suitable for reserved and elastic (shared) instances and pay-as-you-go instances.
   * 
   * - dedicated: dedicated architecture, which is suitable for reserved and elastic (dedicated) instances.
   * 
   * @example
   * shared
   */
  edition?: string;
  /**
   * @remarks
   * Indicates whether storage encryption is enabled for the instance data.
   * 
   * @example
   * true
   */
  encryptedInstance?: boolean;
  /**
   * @remarks
   * The timestamp that indicates when the instance expires, in milliseconds.
   * 
   * > The value is a long integer. Handle it with care in certain programming languages to prevent precision loss.
   * 
   * @example
   * 1651507200000
   */
  expireTime?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * amqp-cn-*********
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the instance. A length of 64 characters or less is recommended.
   * 
   * @example
   * yunQi-instance
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * - PROFESSIONAL: Professional Edition
   * 
   * - ENTERPRISE: Enterprise Edition
   * 
   * - VIP: Platinum Edition
   * 
   * - SERVERLESS: Serverless Edition
   * 
   * @example
   * enterprise
   */
  instanceType?: string;
  /**
   * @remarks
   * The KMS key ID of the cloud disk.
   * 
   * @example
   * key-hzz6566e86byam3lg5rw4
   */
  kmsKeyId?: string;
  /**
   * @remarks
   * The listener mode. A value of tcp_and_ssl enables both port 5672 and 5671, while ssl_only enables only port 5671.
   * 
   * @example
   * tcp_and_ssl
   */
  listenerMode?: string;
  /**
   * @remarks
   * The maximum number of connections.
   * 
   * For valid values, see the [ApsaraMQ for RabbitMQ purchase page](https://common-buy.aliyun.com/?commodityCode=ons_onsproxy_pre).
   * 
   * @example
   * 1500
   */
  maxConnections?: number;
  /**
   * @remarks
   * The peak public TPS.
   * 
   * For valid values, see the [ApsaraMQ for RabbitMQ purchase page](https://common-buy.aliyun.com/?commodityCode=ons_onsproxy_pre).
   * 
   * @example
   * 1000
   */
  maxEipTps?: number;
  /**
   * @remarks
   * The maximum number of queues for the instance.
   * 
   * @example
   * 1000
   */
  maxQueue?: number;
  /**
   * @remarks
   * The peak private TPS.
   * 
   * @example
   * 1000
   */
  maxTps?: number;
  /**
   * @remarks
   * The maximum number of vhosts for the instance.
   * 
   * @example
   * 50
   */
  maxVhost?: number;
  /**
   * @remarks
   * The timestamp that indicates when the order was created, in milliseconds.
   * 
   * > The value is a long integer. Handle it with care in certain programming languages to prevent precision loss.
   * 
   * @example
   * 1651507200000
   */
  orderCreateTime?: number;
  /**
   * @remarks
   * The billing method.
   * 
   * - PRE_PAID: subscription
   * 
   * - POST_PAID: pay-as-you-go
   * 
   * @example
   * PRE_PAID
   */
  orderType?: string;
  /**
   * @remarks
   * The VPC endpoint of the instance.
   * 
   * @example
   * amqp-cn-st21x7kv****.mq-amqp.cn-hangzhou-a.aliyuncs.com
   */
  privateEndpoint?: string;
  /**
   * @remarks
   * The reserved TPS capacity for reserved and elastic instances.
   * 
   * @example
   * 2000
   */
  provisionedCapacity?: number;
  /**
   * @remarks
   * The public endpoint of the instance.
   * 
   * @example
   * xxx.cn-hangzhou.xxx.net.mq.amqp.aliyuncs.com
   */
  publicEndpoint?: string;
  /**
   * @remarks
   * The ID of the resource group for the instance.
   * 
   * @example
   * rg-acfm2vn6jkayvfy
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The security group ID used to create a PrivateLink endpoint for the instance.
   * 
   * @example
   * sg-xxx
   */
  securityGroupId?: string;
  serverlessSwitch?: boolean;
  /**
   * @remarks
   * The instance status. Valid values:
   * 
   * - DEPLOYING: The instance is being deployed.
   * 
   * - EXPIRED: The instance has expired.
   * 
   * - SERVING: The instance is in service.
   * 
   * - RELEASED: The instance has been released.
   * 
   * @example
   * SERVING
   */
  status?: string;
  /**
   * @remarks
   * The disk capacity. Unit: GB.
   * 
   * > For Professional and Enterprise Edition instances, this parameter returns **-1**.
   * 
   * @example
   * 200
   */
  storageSize?: number;
  /**
   * @remarks
   * Indicates whether the instance supports EIPs.
   * 
   * @example
   * true
   */
  supportEIP?: boolean;
  /**
   * @remarks
   * Indicates whether the message trace feature is enabled.
   * 
   * @example
   * True
   */
  supportTracing?: boolean;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: GetInstanceResponseBodyDataTags[];
  /**
   * @remarks
   * The retention period of message traces. Unit: days. Valid values:
   * 
   * - 3: 3 days
   * 
   * - 7: 7 days
   * 
   * - 15: 15 days
   * 
   * This parameter applies only when `SupportTracing` is set to true.
   * 
   * @example
   * 15
   */
  tracingStorageTime?: number;
  /**
   * @remarks
   * The VPC ID used to create a PrivateLink endpoint for the instance.
   * 
   * @example
   * vpc-xxx
   */
  vpcId?: string;
  /**
   * @remarks
   * The VSwitch IDs used to create a PrivateLink endpoint for the instance.
   */
  vswitchIds?: string[];
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
      listenerMode: 'ListenerMode',
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
      securityGroupId: 'SecurityGroupId',
      serverlessSwitch: 'ServerlessSwitch',
      status: 'Status',
      storageSize: 'StorageSize',
      supportEIP: 'SupportEIP',
      supportTracing: 'SupportTracing',
      tags: 'Tags',
      tracingStorageTime: 'TracingStorageTime',
      vpcId: 'VpcId',
      vswitchIds: 'VswitchIds',
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
      listenerMode: 'string',
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
      securityGroupId: 'string',
      serverlessSwitch: 'boolean',
      status: 'string',
      storageSize: 'number',
      supportEIP: 'boolean',
      supportTracing: 'boolean',
      tags: { 'type': 'array', 'itemType': GetInstanceResponseBodyDataTags },
      tracingStorageTime: 'number',
      vpcId: 'string',
      vswitchIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.vswitchIds)) {
      $dara.Model.validateArray(this.vswitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: GetInstanceResponseBodyData;
  /**
   * @remarks
   * The unique ID generated for the request. You can use this ID to troubleshoot issues.
   * 
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

