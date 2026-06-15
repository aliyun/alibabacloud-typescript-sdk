// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceAttributeRequestCpuOptions extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores. This parameter is not customizable and uses a default value.
   * 
   * <props="china">
   * 
   * For information about the default value, see [Custom CPU options](https://help.aliyun.com/document_detail/145895.html).
   * 
   * @example
   * 2
   */
  core?: number;
  /**
   * @remarks
   * The number of threads per core. The total number of vCPUs for an ECS instance is the value of `CpuOptions.Core` multiplied by the value of `CpuOptions.ThreadsPerCore`.
   * 
   * - Setting `CpuOptions.ThreadsPerCore` to 1 disables hyper-threading.
   * 
   * - Only some instance types support specifying the number of threads per core.
   * 
   * <props="china">
   * 
   * For information about the valid values and default value, see [Custom CPU options](https://help.aliyun.com/document_detail/145895.html).
   * 
   * @example
   * 2
   */
  threadsPerCore?: number;
  /**
   * @remarks
   * The CPU topology type of the instance. Valid values:
   * 
   * - ContinuousCoreToHTMapping: The hyper-threads of the same core are contiguous.
   * 
   * - DiscreteCoreToHTMapping: The hyper-threads of the same core are discrete.
   * 
   * Default value: None.
   * 
   * Note the following when you use this parameter:
   * 
   * - The instance must be in the `Stopped` state.
   * 
   * > This parameter is supported by only some instance families. See [View and modify the CPU topology](https://help.aliyun.com/document_detail/2636059.html) for a list of supported families.
   * 
   * @example
   * DiscreteCoreToHTMapping
   */
  topologyType?: string;
  /**
   * @remarks
   * > This parameter is in invitation-only preview and is not publicly available.
   * 
   * @example
   * enabled
   */
  nestedVirtualization?: string;
  static names(): { [key: string]: string } {
    return {
      core: 'Core',
      threadsPerCore: 'ThreadsPerCore',
      topologyType: 'TopologyType',
      nestedVirtualization: 'NestedVirtualization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      core: 'number',
      threadsPerCore: 'number',
      topologyType: 'string',
      nestedVirtualization: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceAttributeRequestPrivateDnsNameOptions extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable resolution of the instance ID-based domain name to an IPv6 address. Valid values:
   * 
   * - true
   * 
   * - false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  enableInstanceIdDnsAAAARecord?: boolean;
  /**
   * @remarks
   * Specifies whether to enable resolution of the instance ID-based domain name to an IPv4 address. Valid values:
   * 
   * - true
   * 
   * - false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  enableInstanceIdDnsARecord?: boolean;
  /**
   * @remarks
   * Specifies whether to enable resolution of the IP address-based domain name to an IPv4 address. Valid values:
   * 
   * - true
   * 
   * - false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  enableIpDnsARecord?: boolean;
  /**
   * @remarks
   * Specifies whether to enable reverse DNS resolution of an IPv4 address to an IP address-based domain name. Valid values:
   * 
   * - true
   * 
   * - false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  enableIpDnsPtrRecord?: boolean;
  /**
   * @remarks
   * The hostname type. Valid values:
   * 
   * - Custom: a custom hostname.
   * 
   * - IpBased: an IP address-based hostname.
   * 
   * - InstanceIdBased: an instance ID-based hostname.
   * 
   * Default value: Custom.
   * 
   * @example
   * Custom
   */
  hostnameType?: string;
  static names(): { [key: string]: string } {
    return {
      enableInstanceIdDnsAAAARecord: 'EnableInstanceIdDnsAAAARecord',
      enableInstanceIdDnsARecord: 'EnableInstanceIdDnsARecord',
      enableIpDnsARecord: 'EnableIpDnsARecord',
      enableIpDnsPtrRecord: 'EnableIpDnsPtrRecord',
      hostnameType: 'HostnameType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableInstanceIdDnsAAAARecord: 'boolean',
      enableInstanceIdDnsARecord: 'boolean',
      enableIpDnsARecord: 'boolean',
      enableIpDnsPtrRecord: 'boolean',
      hostnameType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceAttributeRequestRemoteConnectionOptions extends $dara.Model {
  /**
   * @remarks
   * > This parameter is in invitation-only preview and is not publicly available.
   * 
   * @example
   * hide
   */
  password?: string;
  /**
   * @remarks
   * > This parameter is in invitation-only preview and is not publicly available.
   * 
   * @example
   * hide
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'Password',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceAttributeRequest extends $dara.Model {
  cpuOptions?: ModifyInstanceAttributeRequestCpuOptions;
  /**
   * @remarks
   * The performance mode of the burstable performance instance. Valid values:
   * 
   * - Standard: standard mode.
   * 
   * - Unlimited: unlimited mode.
   * 
   * For more information about the performance modes of burstable performance instances, see [Overview of burstable performance instances](https://help.aliyun.com/document_detail/59977.html).
   * 
   * @example
   * Standard
   */
  creditSpecification?: string;
  /**
   * @remarks
   * Specifies whether to enable deletion protection for the instance. This setting prevents the instance from being released from the console or by calling the [DeleteInstance](https://help.aliyun.com/document_detail/25507.html) operation.
   * 
   * > This feature applies only to pay-as-you-go instances and protects instances only from manual release operations. It does not affect system-initiated release operations.
   * 
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The instance description. The description must be 2 to 256 characters long and cannot start with `http://` or `https://`.
   * 
   * @example
   * testInstanceDescription
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable jumbo frames. When jumbo frames are enabled, the MTU of the instance is 8500. When jumbo frames are disabled, the MTU of the instance is 1500. Valid values:
   * 
   * - true
   * 
   * - false
   * 
   * Note the following when you use this parameter:
   * 
   * - The instance must be in the `Running` or `Stopped` state.
   * 
   * - The instance must be in a VPC.
   * 
   * - Only some instance types support jumbo frames. For more information, see [ECS instance MTU](https://help.aliyun.com/document_detail/200512.html).
   * 
   * @example
   * false
   */
  enableJumboFrame?: boolean;
  /**
   * @remarks
   * Specifies whether to enable VPC network traffic encryption. Valid values:
   * 
   * - true
   * 
   * - false
   * 
   * > This parameter is in invitation-only preview and is not publicly available.
   * 
   * @example
   * true
   */
  enableNetworkEncryption?: boolean;
  /**
   * @remarks
   * The hostname of the operating system. Note the following when you use this parameter:
   * 
   * - The instance cannot be in the `Pending` or `Starting` state. Otherwise, the specified hostname and the `/etc/hosts` configuration may not take effect. You can call the [DescribeInstances](https://help.aliyun.com/document_detail/25506.html) operation to query the current state of the instance.
   * 
   * - The new hostname takes effect after you restart the instance from the ECS console (see [Restart an instance](https://help.aliyun.com/document_detail/25440.html)) or by calling the [RebootInstance](https://help.aliyun.com/document_detail/25502.html) operation. Restarting the instance from within its operating system does not apply the change.
   * 
   * The hostname must meet the following requirements for different operating systems:
   * 
   * - For Windows Server instances: The hostname must be 2 to 15 characters long and contain letters, digits, and hyphens (-). It cannot start or end with a hyphen, contain consecutive hyphens, or consist of only digits.
   * 
   * - For other types of instances (such as Linux): The hostname must be 2 to 64 characters long. You can use periods (.) to separate the hostname into segments. Each segment can contain letters, digits, and hyphens (-). The hostname cannot start or end with a period or hyphen, and cannot contain consecutive periods or hyphens.
   * 
   * @example
   * testHostName
   */
  hostName?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp67acfmxazb4ph****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name. The name must be 2 to 128 characters long. It must start with a letter or a Chinese character and cannot start with `http://` or `https://`. The name can contain digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * testInstanceName
   */
  instanceName?: string;
  /**
   * @remarks
   * The number of queues for the primary network interface. Note the following when you use this parameter:
   * 
   * - The instance must be in the `Stopped` state.
   * 
   * - The value cannot exceed the maximum number of queues that the instance type supports for a single network interface. The total number of queues across all network interfaces of the instance cannot exceed the total queue quota that the instance type supports. You can call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) operation to query the maximum number of queues per network interface and the total queue quota for an instance type.
   * 
   * - If you set this parameter to -1, the number of queues for the primary network interface is reset to the default value for the instance type. You can call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) operation to query the default number of queues for an elastic network interface of an instance type.
   * 
   * @example
   * 8
   */
  networkInterfaceQueueNumber?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The password of the instance. The password must be 8 to 30 characters long and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. The supported special characters are **()\\~!@#$%^&\\*-_+=|{}[]:;\\"<>,.?/**. For a Windows instance, the password cannot start with a forward slash (/). Note the following when you use this parameter:
   * 
   * - The instance cannot be in the `Starting` state.
   * 
   * - The new password takes effect after you restart the instance from the ECS console (see [Restart an instance](https://help.aliyun.com/document_detail/25440.html)) or by calling the [RebootInstance](https://help.aliyun.com/document_detail/25502.html) operation. Restarting the instance from within its operating system does not apply the change.
   * 
   * > To prevent password exposure, send requests that include the `Password` parameter over HTTPS.
   * 
   * @example
   * Test123456&$
   */
  password?: string;
  /**
   * @remarks
   * The private DNS name settings for the instance.
   * 
   * For more information about private DNS name resolution, see [ECS private DNS resolution
   * ](https://help.aliyun.com/document_detail/2844797.html).
   */
  privateDnsNameOptions?: ModifyInstanceAttributeRequestPrivateDnsNameOptions;
  /**
   * @remarks
   * > This parameter is in invitation-only preview and is not publicly available.
   * 
   * @example
   * true
   */
  recyclable?: boolean;
  /**
   * @remarks
   * > This parameter is in invitation-only preview and is not publicly available.
   */
  remoteConnectionOptions?: ModifyInstanceAttributeRequestRemoteConnectionOptions;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The IDs of security groups to assign to the instance. Note the following when you use this parameter:
   * 
   * - The security group IDs in the array must be unique. The number of security groups that an instance can join is limited. For more information, see [Limits](~~25412#SecurityGroupQuota1~~).
   * 
   * - Specifying this parameter removes the instance from its current security groups. To retain existing security group associations, you must include their IDs in this array.
   * 
   * - You can switch the security group type. However, the specified security groups cannot include both basic and enterprise security groups.
   * 
   * - The security groups must belong to the same VPC as the instance.
   * 
   * - This parameter is not supported for instances in the classic network.
   * 
   * > The change takes effect on the instance after a short delay.
   * 
   * @example
   * sg-bp15ed6xe1yxeycg7o****
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * The user data of the instance. User data should be Base64-encoded before it is passed. Note the following when you use this parameter:
   * 
   * - The user data must comply with the limits described in [Generate user data](https://help.aliyun.com/document_detail/49121.html).
   * 
   * - After you restart the instance, the new user data is available on the instance but is not executed.
   * 
   * > The raw data cannot exceed 32 KB before being encoded. Do not pass confidential information, such as passwords and private keys, in plaintext. If you must pass confidential information, encrypt and then Base64-encode it. On the instance, decrypt the information by using the corresponding decryption method.
   * 
   * @example
   * ZWNobyBoZWxsbyBlY3Mh
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      cpuOptions: 'CpuOptions',
      creditSpecification: 'CreditSpecification',
      deletionProtection: 'DeletionProtection',
      description: 'Description',
      enableJumboFrame: 'EnableJumboFrame',
      enableNetworkEncryption: 'EnableNetworkEncryption',
      hostName: 'HostName',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      networkInterfaceQueueNumber: 'NetworkInterfaceQueueNumber',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      password: 'Password',
      privateDnsNameOptions: 'PrivateDnsNameOptions',
      recyclable: 'Recyclable',
      remoteConnectionOptions: 'RemoteConnectionOptions',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityGroupIds: 'SecurityGroupIds',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuOptions: ModifyInstanceAttributeRequestCpuOptions,
      creditSpecification: 'string',
      deletionProtection: 'boolean',
      description: 'string',
      enableJumboFrame: 'boolean',
      enableNetworkEncryption: 'boolean',
      hostName: 'string',
      instanceId: 'string',
      instanceName: 'string',
      networkInterfaceQueueNumber: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      password: 'string',
      privateDnsNameOptions: ModifyInstanceAttributeRequestPrivateDnsNameOptions,
      recyclable: 'boolean',
      remoteConnectionOptions: ModifyInstanceAttributeRequestRemoteConnectionOptions,
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      userData: 'string',
    };
  }

  validate() {
    if(this.cpuOptions && typeof (this.cpuOptions as any).validate === 'function') {
      (this.cpuOptions as any).validate();
    }
    if(this.privateDnsNameOptions && typeof (this.privateDnsNameOptions as any).validate === 'function') {
      (this.privateDnsNameOptions as any).validate();
    }
    if(this.remoteConnectionOptions && typeof (this.remoteConnectionOptions as any).validate === 'function') {
      (this.remoteConnectionOptions as any).validate();
    }
    if(Array.isArray(this.securityGroupIds)) {
      $dara.Model.validateArray(this.securityGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

