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
   * Indicates whether the instance is automatically renewed.
   * 
   * @example
   * false
   */
  autoRenewInstance?: boolean;
  /**
   * @remarks
   * The endpoint that is used to access the instance over the classic network. This parameter is no longer available.
   * 
   * @example
   * amqp-cn-st21x7kv****.not-support
   */
  classicEndpoint?: string;
  edition?: string;
  /**
   * @remarks
   * Indicates whether the encryption at rest feature is enabled for the instance.
   * 
   * @example
   * false
   */
  encryptedInstance?: boolean;
  /**
   * @remarks
   * The timestamp that indicates when the instance expires. Unit: milliseconds.
   * 
   * @example
   * 1651507200000
   */
  expireTime?: number;
  /**
   * @remarks
   * The instance ID
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
   * The instance type.
   * 
   * *   PROFESSIONAL: Professional Edition
   * *   ENTERPRISE: Enterprise Edition
   * *   VIP: Enterprise Platinum Edition
   * 
   * @example
   * professional
   */
  instanceType?: string;
  /**
   * @remarks
   * The ID of the Key Management Service (KMS) key used for the data disk.
   * 
   * @example
   * key-bjj66c2a893vmhawtq5fd
   */
  kmsKeyId?: string;
  /**
   * @remarks
   * The maximum number of Internet-based transactions per second (TPS) for the instance.
   * 
   * @example
   * 24832
   */
  maxEipTps?: number;
  /**
   * @remarks
   * The maximum number of queues on the instance.
   * 
   * @example
   * 50
   */
  maxQueue?: number;
  /**
   * @remarks
   * The maximum number of VPC-based TPS for the instance.
   * 
   * @example
   * 5000
   */
  maxTps?: number;
  /**
   * @remarks
   * The maximum number of vhosts on the instance.
   * 
   * @example
   * 50
   */
  maxVhost?: number;
  /**
   * @remarks
   * The timestamp that indicates when the order was created. Unit: milliseconds.
   * 
   * @example
   * 1572441939000
   */
  orderCreateTime?: number;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   PrePaid: the subscription billing method.
   * *   POST_PAID: the pay-as-you-go billing method.
   * 
   * @example
   * PRE_PAID
   */
  orderType?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) endpoint of the instance.
   * 
   * @example
   * amqp-cn-st21x7kv****.mq-amqp.cn-hangzhou-a.aliyuncs.com
   */
  privateEndpoint?: string;
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
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-aek3axfj2w4czrq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The instance status. Valid values:
   * 
   * *   DEPLOYING: The instance is being deployed.
   * *   EXPIRED: The instance is expired.
   * *   SERVING: The instance is running.
   * *   RELEASED: The instance is released.
   * 
   * @example
   * SERVING
   */
  status?: string;
  /**
   * @remarks
   * The disk size. Unit: GB.
   * 
   * >  For Professional Edition instances and Enterprise Edition instances, this parameter is unavailable and \\*\\*-1\\*\\* is returned.
   * 
   * @example
   * 200
   */
  storageSize?: number;
  /**
   * @remarks
   * Indicates whether the instance supports elastic IP addresses (EIPs).
   * 
   * @example
   * true
   */
  supportEIP?: boolean;
  /**
   * @remarks
   * The tags that are added to the instance.
   */
  tags?: ListInstancesResponseBodyDataInstancesTags[];
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
      tags: 'Tags',
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
      tags: { 'type': 'array', 'itemType': ListInstancesResponseBodyDataInstancesTags },
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

export class ListInstancesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The instances.
   */
  instances?: ListInstancesResponseBodyDataInstances[];
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the end of the current returned page. If this parameter is empty, all data is retrieved.
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
   * The data returned.
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

