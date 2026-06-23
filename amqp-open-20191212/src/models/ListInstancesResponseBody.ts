// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesResponseBodyDataInstancesTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * region
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * hangzhou
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

export class ListInstancesResponseBodyDataInstances extends $dara.Model {
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
   * The deployment architecture, which is applicable only to Serverless Edition instances. Valid values:
   * 
   * - shared: A shared architecture, used for reserved, elastic (shared), and pay-as-you-go instances.
   * 
   * - dedicated: A dedicated architecture, used for reserved and elastic (dedicated) instances.
   * 
   * @example
   * shared
   */
  edition?: string;
  /**
   * @remarks
   * Indicates whether storage encryption is enabled for the instance.
   * 
   * @example
   * false
   */
  encryptedInstance?: boolean;
  /**
   * @remarks
   * The expiration timestamp of the instance, in milliseconds.
   * 
   * @example
   * 1651507200000
   */
  expireTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * amqp-cn-st21x7kv****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * amqp-cn-st21x7kv****
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance type. Valid values:
   * 
   * - professional: Professional Edition
   * 
   * - enterprise: Enterprise Edition
   * 
   * - vip: Platinum Edition
   * 
   * <props="china">
   * 
   * - serverless: Serverless Edition
   * 
   * @example
   * professional
   */
  instanceType?: string;
  /**
   * @remarks
   * The ID of the KMS key used for data disk encryption.
   * 
   * @example
   * key-bjj66c2a893vmhawtq5fd
   */
  kmsKeyId?: string;
  /**
   * @remarks
   * The port listener mode of the instance. `tcp_and_ssl` enables both port `5672` and port `5671`, while `ssl_only` enables only port `5671`.
   * 
   * @example
   * tcp_and_ssl
   */
  listenerMode?: string;
  /**
   * @remarks
   * The peak transactions per second (TPS) of the instance over the public network.
   * 
   * @example
   * 24832
   */
  maxEipTps?: number;
  /**
   * @remarks
   * The maximum number of queues for the instance.
   * 
   * @example
   * 50
   */
  maxQueue?: number;
  /**
   * @remarks
   * The peak transactions per second (TPS) of the instance over the private network.
   * 
   * @example
   * 5000
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
   * The creation timestamp of the order, in milliseconds.
   * 
   * @example
   * 1572441939000
   */
  orderCreateTime?: number;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - PRE_PAID: The instance uses the subscription billing method.
   * 
   * - POST_PAID: The instance uses the pay-as-you-go billing method.
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
   * amqp-cn-st21x7kv****.mq-amqp.cn-hangzhou-a.aliyuncs.com
   */
  publicEndpoint?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aek3axfj2w4czrq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the security group to which the instance belongs. This security group is used for PrivateLink endpoint creation.
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
   * - SERVING: The instance is running.
   * 
   * - RELEASED: The instance is released.
   * 
   * @example
   * SERVING
   */
  status?: string;
  /**
   * @remarks
   * The storage capacity of the disk. Unit: GB.
   * 
   * > This parameter returns a value of **-1** for Professional Edition and Enterprise Edition instances, to which it does not apply.
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
   * The tags attached to the instance.
   */
  tags?: ListInstancesResponseBodyDataInstancesTags[];
  /**
   * @remarks
   * The ID of the VPC in which the instance resides. This VPC is used for PrivateLink endpoint creation.
   * 
   * @example
   * vpc-xxx
   */
  vpcId?: string;
  /**
   * @remarks
   * The IDs of the VSwitches to which the instance is connected. These VSwitches are used for PrivateLink endpoint creation.
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
      tags: 'Tags',
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
      tags: { 'type': 'array', 'itemType': ListInstancesResponseBodyDataInstancesTags },
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

export class ListInstancesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * A list of instances.
   */
  instances?: ListInstancesResponseBodyDataInstances[];
  /**
   * @remarks
   * The maximum number of entries returned per page.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page of results. If this field is empty, it means all results have been returned.
   * 
   * @example
   * caebacccb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': ListInstancesResponseBodyDataInstances },
      maxResults: 'number',
      nextToken: 'string',
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

export class ListInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListInstancesResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CCBB1225-C392-480E-8C7F-D09AB2CD2***
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
      data: ListInstancesResponseBodyData,
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

