// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceAttributeRequestCpuOptions extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores. This parameter cannot be specified but only uses its default value.
   * 
   * @example
   * 2
   */
  core?: number;
  /**
   * @remarks
   * The number of threads per CPU core. The following formula is used to calculate the number of vCPUs of the instance: `CpuOptions.Core` value × `CpuOptions.ThreadsPerCore` value.
   * 
   * *   If `CpuOptionsThreadPerCore` is set to 1, Hyper-Threading (HT) is disabled.
   * *   This parameter is applicable only to specific instance types.
   * 
   * @example
   * 2
   */
  threadsPerCore?: number;
  /**
   * @remarks
   * The CPU topology type of the instance. Valid values:
   * 
   * *   ContinuousCoreToHTMapping: The Hyper-Threading (HT) technology allows continuous threads to run on the same core in the CPU topology of the instance.
   * *   DiscreteCoreToHTMapping: The HT technology allows discrete threads to run on the same core.
   * 
   * This parameter is left empty by default.
   * 
   * Take note of the following items:
   * 
   * *   The instance must be in the Stopped (`Stopped`) state.
   * 
   * >  This parameter is supported only for specific instance families. For information about the supported instance families, see [View and modify CPU topologies](https://help.aliyun.com/document_detail/2636059.html).
   * 
   * @example
   * DiscreteCoreToHTMapping
   */
  topologyType?: string;
  static names(): { [key: string]: string } {
    return {
      core: 'Core',
      threadsPerCore: 'ThreadsPerCore',
      topologyType: 'TopologyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      core: 'number',
      threadsPerCore: 'number',
      topologyType: 'string',
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
   * Specifies whether DNS Resolution from the Instance ID-based Hostname to the Instance Primary Private IPv6 Address (AAAA Record) is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  enableInstanceIdDnsAAAARecord?: boolean;
  /**
   * @remarks
   * Specifies whether DNS Resolution from the Instance ID-based Hostname to the Instance Primary Private IPv4 Address (A Record) is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  enableInstanceIdDnsARecord?: boolean;
  /**
   * @remarks
   * Specifies whether DNS Resolution from the IP Address-based Hostname to the Instance Primary Private IPv4 Address (A Record) is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  enableIpDnsARecord?: boolean;
  /**
   * @remarks
   * Specifies whether Reverse DNS Resolution from the Instance Primary Private IPv4 Address to the IP Address-based Hostname (PTR Record) is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  enableIpDnsPtrRecord?: boolean;
  /**
   * @remarks
   * The type of the hostname. Valid values:
   * 
   * *   Custom: custom hostname.
   * *   IpBased: IP address-based hostname.
   * *   InstanceIdBased: instance ID-based hostname.
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
   * >  This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * hide
   */
  password?: string;
  /**
   * @remarks
   * >  This parameter is in invitational preview and is not publicly available.
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
   * The performance mode of the burstable instance. Valid values:
   * 
   * *   Standard
   * *   Unlimited
   * 
   * For more information about the performance modes of burstable instances, see [Overview](https://help.aliyun.com/document_detail/59977.html).
   * 
   * @example
   * Standard
   */
  creditSpecification?: string;
  /**
   * @remarks
   * The release protection attribute of the instance. This parameter specifies whether you can use the ECS console or call the [DeleteInstance](https://help.aliyun.com/document_detail/25507.html) operation to release the instance.
   * 
   * >  This parameter is applicable only to pay-as-you-go instances. The release protection attribute can protect instances against manual releases, but not against automatic releases.
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
   * Specifies whether to enable the Jumbo Frames feature for the instance. Valid values:
   * 
   * *   true: The Jumbo Frame feature is enabled for the instance.
   * *   false: The Jumbo Frame feature is disabled for the instance.
   * 
   * Take note of the following items:
   * 
   * *   The instance must be in the Running (`Running`) or Stopped (`Stopped`) state.
   * *   The instance must reside in a VPC.
   * *   After the Jumbo Frames feature is enabled, the MTU value of the instance is set to 8500. After the Jumbo Frames feature is disabled, the MTU value of the instance is set to 1500. You can enable the Jumbo Frames feature only for specific instance types. For more information, see [Jumbo Frames](https://help.aliyun.com/document_detail/200512.html).
   * 
   * @example
   * false
   */
  enableJumboFrame?: boolean;
  enableNetworkEncryption?: boolean;
  /**
   * @remarks
   * The hostname of the instance. Take note of the following items:
   * 
   * *   The instance cannot be in the Creating (`Pending`) or Starting (`Starting`) state. Otherwise, the new hostname and the configurations in the `/etc/hosts` file may not take effect. You can call the [DescribeInstances](https://help.aliyun.com/document_detail/25506.html) operation to query the status of the instance.
   * *   The parameter takes effect after the instance is restarted. You can restart an instance in the ECS console. For more information, see [Restart an instance](https://help.aliyun.com/document_detail/25440.html). You can also call the [RebootInstance](https://help.aliyun.com/document_detail/25502.html) operation to restart the instance. The parameter cannot take effect if you restart an instance within the operating system.
   * 
   * The following limits apply to the hostnames of instances that run different operating systems:
   * 
   * *   For Windows Server, the hostname must be 2 to 15 characters in length and can contain letters, digits, and hyphens (-). The hostname cannot start or end with a hyphen (-), contain consecutive hyphens (-), or contain only digits.
   * *   For other operating systems such as Linux, the hostname must be 2 to 64 characters in length. You can use periods (.) to separate a hostname into multiple segments. Each segment can contain letters, digits, and hyphens (-). The hostname cannot contain consecutive periods (.) or hyphens (-). The hostname cannot start or end with a period (.) or a hyphen (-).
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
   * The name of the instance. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with `http://` or `https://`. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * testInstanceName
   */
  instanceName?: string;
  /**
   * @remarks
   * The number of queues supported by the primary elastic network interface (ENI) of the instance. Take note of the following items:
   * 
   * *   The instance must be in the Stopped (`Stopped`) state.
   * *   The number of queues supported by an ENI cannot exceed the maximum number of queues that the instance type allows for each ENI. The total number of queues on all ENIs on the instance cannot exceed the queue quota that the instance type supports. To query the maximum number of queues that an instance type allows for each ENI and the queue quota for the instance type, call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) operation.
   * *   If you set this parameter to -1, the value is reset to the default value for the instance type. To query the default number of queues of an ENI of each instance type, call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) operation.
   * 
   * @example
   * 8
   */
  networkInterfaceQueueNumber?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The password of the instance. The password must be 8 to 30 characters in length and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. Special characters include **( ) \\` ~ ! @ # $ % ^ & \\* - _ + = | { } [ ] : ; \\" < > , . ? /** The password of a Windows instance cannot start with a forward slash (/). Take note of the following items:
   * 
   * *   The instance cannot be in the Starting (`Starting`) state.
   * *   The parameter takes effect after the instance is restarted. You can restart an instance in the ECS console. For more information, see [Restart an instance](https://help.aliyun.com/document_detail/25440.html). You can also call the [RebootInstance](https://help.aliyun.com/document_detail/25502.html) operation to restart the instance. The parameter cannot take effect if you restart an instance within the operating system.
   * 
   * >  For security reasons, we recommend that you use HTTPS to send requests if `Password` is specified.
   * 
   * @example
   * Test123456
   */
  password?: string;
  /**
   * @remarks
   * The private domain name options of the ECS instance.
   * 
   * For information about private domain name resolution, see [ECS private DNS resolution](https://help.aliyun.com/document_detail/2844797.html).
   */
  privateDnsNameOptions?: ModifyInstanceAttributeRequestPrivateDnsNameOptions;
  /**
   * @remarks
   * >  This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * hide
   */
  recyclable?: boolean;
  /**
   * @remarks
   * >  This parameter is in invitational preview and is not publicly available.
   */
  remoteConnectionOptions?: ModifyInstanceAttributeRequestRemoteConnectionOptions;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The IDs of the new security groups to which to assign the instance. Take note of the following items:
   * 
   * *   The security group IDs in the array cannot be duplicate. The length of the array is related to the quota of security groups to which the instance can be assigned. For more information, see the [Security group limits](~~25412#SecurityGroupQuota1~~) section in the "Limits and quotas" topic.
   * *   The instance is moved from the current security groups to the replacement security groups. If you want the instance to remain in the current security groups, add the IDs of the current security groups to the array.
   * *   You can move the instance to security groups of a different type. However, the array cannot contain the IDs of both basic and advanced security groups.
   * *   The security groups and the instance must belong to the same VPC.
   * *   Security groups of instances in the classic network cannot be changed.
   * 
   * >  New security groups become valid for the instance after a short delay.
   * 
   * @example
   * sg-bp15ed6xe1yxeycg7o****
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * The user data of the instance. We recommend that you encode the data in Base64. Take note of the following items:
   * 
   * *   The instance must meet the limits for user data. For more information, see [Initialize an instance by using instance user data](https://help.aliyun.com/document_detail/49121.html).
   * *   After you restart the instance, the new user data is displayed but not run as scripts.
   * 
   * >  The maximum size of the raw data before encoding is 32 KB. We recommend that you do not pass in confidential information such as passwords and private keys in plaintext. If you must pass in confidential information, we recommend that you encrypt and Base64-encode the information before you pass it in. Then, you can decode and decrypt the information in the same way within the instance.
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

