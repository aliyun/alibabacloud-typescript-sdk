// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceAttributeRequestCpuOptions extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores. This parameter does not support custom values and can only use the default value.
   * 
   * <props="china">Default value: see [Customize CPU options](https://help.aliyun.com/document_detail/145895.html).
   * 
   * @example
   * 2
   */
  core?: number;
  /**
   * @remarks
   * The number of threads per CPU core. The number of vCPUs of the ECS instance = CpuOptions.Core value × CpuOptions.ThreadsPerCore value.
   * 
   * - CpuOptions.ThreadsPerCore=1 indicates that hyper-threading is disabled.
   * 
   * - Only some instance types support custom thread counts.
   * 
   * <props="china">Valid values and default value: see [Customize CPU options](https://help.aliyun.com/document_detail/145895.html).
   * 
   * @example
   * 2
   */
  threadsPerCore?: number;
  /**
   * @remarks
   * The CPU topology type of the instance. Valid values:
   * 
   * - ContinuousCoreToHTMapping: the hyper-threads of the same core in the CPU topology are continuous.
   * - DiscreteCoreToHTMapping: the hyper-threads of the same core are discrete.
   * 
   * Default value: none.
   * 
   * Take note of the following items:
   * - The instance must be in the Stopped state.
   * 
   * > Only some instance families support this parameter. For information about the supported instance families, see [View and modify the CPU topology structure](https://help.aliyun.com/document_detail/2636059.html).
   * 
   * @example
   * DiscreteCoreToHTMapping
   */
  topologyType?: string;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not publicly available.
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
   * Specifies whether to enable DNS resolution from the instance ID-based domain name to the IPv6 address. Valid values:
   *  
   * - true: enables the resolution.
   * - false: disables the resolution.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  enableInstanceIdDnsAAAARecord?: boolean;
  /**
   * @remarks
   * Specifies whether to enable DNS resolution from the instance ID-based domain name to the IPv4 address. Valid values:
   *  
   * - true: enables the resolution.
   * - false: disables the resolution.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  enableInstanceIdDnsARecord?: boolean;
  /**
   * @remarks
   * Specifies whether to enable DNS resolution from the IP-based domain name to the IPv4 address. Valid values:
   * - true: enables the resolution.
   * - false: disables the resolution.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  enableIpDnsARecord?: boolean;
  /**
   * @remarks
   * Specifies whether to enable reverse DNS resolution from the IPv4 address to the IP-based domain name. Valid values:
   * - true: enables the resolution.
   * - false: disables the resolution.
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
   * - Custom: custom.
   * - IpBased: IP-based hostname.
   * - InstanceIdBased: instance ID-based hostname.
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
   * > This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * hide
   */
  password?: string;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not publicly available.
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
   * The running mode of the burstable instance. Valid values:
   * 
   * - Standard: standard mode.
   * - Unlimited: unlimited mode.
   * 
   * For more information about the running modes of burstable instances, see [What are burstable instances?](https://help.aliyun.com/document_detail/59977.html).
   * 
   * @example
   * Standard
   */
  creditSpecification?: string;
  /**
   * @remarks
   * The release protection attribute of the instance. Specifies whether the instance can be released from the console or by calling [DeleteInstance](https://help.aliyun.com/document_detail/25507.html).
   * 
   * > This attribute applies only to pay-as-you-go instances and only prevents manual release operations. It does not apply to system-initiated release operations.
   * 
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The description of the instance. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * testInstanceDescription
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable the Jumbo Frame feature for the instance MTU. Valid values:
   * 
   * - true: enables the feature.
   * - false: does not enable the feature.
   * 
   * Take note of the following items:
   * - The instance must be in the Running or Stopped state.
   * - The instance must be a VPC-connected instance.
   * - After the Jumbo Frame feature is enabled, the MTU value of the instance changes to 8500. After the feature is disabled, the MTU value reverts to 1500.
   * Only some instance types support the Jumbo Frame feature. For more information, see [ECS instance MTU](https://help.aliyun.com/document_detail/200512.html).
   * 
   * @example
   * false
   */
  enableJumboFrame?: boolean;
  /**
   * @remarks
   * Specifies whether to enable VPC network traffic encryption. Valid values:
   * 
   * - true: enables the encryption.
   * - false: disables the encryption.
   * > This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * true
   */
  enableNetworkEncryption?: boolean;
  /**
   * @remarks
   * The hostname of the operating system. Take note of the following items:
   * 
   * - The instance cannot be in the Pending or Starting state. Otherwise, the hostname and `/etc/hosts` configuration may not take effect. You can call [DescribeInstances](https://help.aliyun.com/document_detail/25506.html) to query the current status of the instance.
   * 
   * - The new hostname takes effect after you restart the instance. You can restart the instance in the ECS console (for more information, see [Restart an instance](https://help.aliyun.com/document_detail/25440.html)) or by calling [RebootInstance](https://help.aliyun.com/document_detail/25502.html). Restarting the instance from within the operating system does not take effect.
   * 
   * 
   * The hostname has the following limits for different operating systems:
   * 
   * - Windows Server: The hostname must be 2 to 15 characters in length and can contain uppercase letters, lowercase letters, digits, and hyphens (-). It cannot start or end with a hyphen (-), cannot contain consecutive hyphens (-), and cannot contain only digits.
   * 
   * - Other instances (such as Linux): The hostname must be 2 to 64 characters in length. You can use periods (.) to separate the hostname into multiple segments. Each segment can contain uppercase letters, lowercase letters, digits, and hyphens (-), but cannot contain consecutive periods (.) or hyphens (-). The hostname cannot start or end with a period (.) or hyphen (-).
   * 
   * @example
   * testHostName
   */
  hostName?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp67acfmxazb4ph****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the instance. The name must be 2 to 128 characters in length. It must start with an uppercase letter, lowercase letter, or Chinese character and cannot start with `http://` or `https://`. The name can contain digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * testInstanceName
   */
  instanceName?: string;
  /**
   * @remarks
   * The number of queues for the primary network interface controller (NIC). Take note of the following items:
   * - The instance must be in the Stopped state.
   * - The value cannot exceed the maximum number of queues per NIC allowed by the instance type. The total number of queues for all NICs on the instance cannot exceed the total queue quota allowed by the instance type. You can call [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) to query the maximum number of queues per NIC and the total queue quota for an instance type.
   * - If you set this parameter to -1, the number of queues for the primary NIC is reset to the default value for the instance type. You can call [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) to query the default number of Elastic Network Interface (ENI) queues for an instance type.
   * 
   * @example
   * 8
   */
  networkInterfaceQueueNumber?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The password of the instance. The password must be 8 to 30 characters in length and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. The following special characters are supported: **()`~!@#$%^&*-_+=|{}[]:;\\"<>,.?/**
   * . For Windows instances, the password cannot start with a forward slash (/). Take note of the following items:
   * 
   * - The instance cannot be in the Starting state.
   * - The new password takes effect after you restart the instance. You can restart the instance in the ECS console (for more information, see [Restart an instance](https://help.aliyun.com/document_detail/25440.html)) or by calling [RebootInstance](https://help.aliyun.com/document_detail/25502.html). Restarting the instance from within the operating system does not take effect.
   * 
   * > If you specify the Password parameter, use HTTPS to send the request to avoid password leaks.
   * 
   * @example
   * Test123456&$
   */
  password?: string;
  /**
   * @remarks
   * The private domain name configuration of the instance.
   * 
   * 
   * For more information about private private domain resolution, see [ECS private private domain resolution](https://help.aliyun.com/document_detail/2844797.html).
   */
  privateDnsNameOptions?: ModifyInstanceAttributeRequestPrivateDnsNameOptions;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * true
   */
  recyclable?: boolean;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not publicly available.
   */
  remoteConnectionOptions?: ModifyInstanceAttributeRequestRemoteConnectionOptions;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The IDs of the security groups to which the instance is reassigned. Take note of the following items:
   * 
   * - Security group IDs in the array cannot be duplicated. The maximum length of the array depends on the maximum number of security groups to which the instance can belong. For more information, see [Limits](~~25412#SecurityGroupQuota1~~).
   * - The instance leaves its current security groups. To retain the current security groups, add their IDs to the array.
   * - You can switch between security group types, but the list cannot contain both basic security groups and advanced security groups at the same time.
   * - The security groups must belong to the same VPC as the instance.
   * 
   * > Changes to security groups take effect on the instance shortly after the modification, but a slight delay may occur.
   * 
   * @example
   * sg-bp15ed6xe1yxeycg7o****
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * The instance user data. We recommend that you Base64-encode the data before you pass it in. Take note of the following items:
   * 
   * - The instance must meet the usage limits for instance user data. For more information, see [Create instance user data](https://help.aliyun.com/document_detail/49121.html).
   * - After you restart the instance, the new user data is displayed on the instance but is not run.
   * 
   * > Before Base64 encoding, the raw data cannot exceed 32 KB. Do not pass in sensitive information such as passwords and private keys in plaintext. If you must pass in sensitive information, encrypt the information, Base64-encode it, and then decrypt it in the same way within the instance.
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

