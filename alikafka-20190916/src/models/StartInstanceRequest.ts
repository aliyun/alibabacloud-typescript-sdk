// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The initial configurations of the ApsaraMQ for Kafka instance. The values must be valid JSON strings. If you do not specify this parameter, it is left empty.
   * 
   * > - You cannot configure this parameter when you deploy an ApsaraMQ for Confluent instance.
   * > - You cannot configure enable.acl for instances whose versions are earlier than 2.2.0.
   * 
   * The **Config** parameter supports the following parameters:
   * 
   * *   **enable.vpc_sasl_ssl**: specifies whether to enable VPC transmission encryption. Valid values:
   * 
   *     *   **true**: enables VPC transmission encryption. If you enable VPC transmission encryption, you must also enable access control list (ACL).
   *     *   **false**: disables VPC transmission encryption. This is the default value.
   * 
   * *   **enable.acl**: specifies whether to enable ACL. Valid values:
   * 
   *     *   **true**: enables ACL.
   *     *   **false**: disables the ACL feature. This is the default value.
   * 
   * *   **kafka.log.retention.hours**: the maximum message retention period when the disk capacity is sufficient. Unit: hours. Valid values: 24 to 480. Default value: **72**. When the disk usage reaches 85%, the disk capacity is insufficient. In this case, the system deletes the earliest stored messages to ensure service availability.
   * 
   * *   **kafka.message.max.bytes**: the maximum size of a message that can be sent and received by ApsaraMQ for Kafka. Unit: bytes. Valid values: 1048576 to 10485760. Default value: **1048576**. Before you change the maximum message size to a new value, make sure that the new value matches the configurations of the producers and consumers.
   * 
   * @example
   * {"kafka.log.retention.hours":"33"}
   */
  config?: string;
  /**
   * @remarks
   * Specifies whether cross-zone deployment is required. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: true.
   * 
   * @example
   * false
   */
  crossZone?: boolean;
  /**
   * @remarks
   * The deployment mode. If the instance is an ApsaraMQ for Kafka V2 instance, this parameter is required. If the instance is an ApsaraMQ for Kafka V3 instance or an ApsaraMQ for Confluent instance, this parameter is optional. Valid values:
   * 
   * *   **vpc**: deploys the instance in a virtual private cloud (VPC).
   * *   **eip**: deploys the instance over the Internet and in the VPC.
   * 
   * The deployment mode of the ApsaraMQ for Kafka instance must be consistent with the instance type. If the instance is a VPC-connected instance, set this parameter to **vpc**. If the instance is an Internet- and VPC-connected instance, set this parameter to **eip**.
   * 
   * @example
   * vpc
   */
  deployModule?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_post-cn-v0h1fgs2****
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether the instance supports elastic IP addresses (EIPs). Valid values:
   * 
   * *   **true**: supports EIPs and allows access from the Internet and a VPC.
   * *   **false**: does not support EIPs and allows access only from a VPC.
   * 
   * The value of this parameter must match the type of the instance. For example, if the instance allows access only from a VPC, set this parameter to **false**.
   * 
   * @example
   * false
   */
  isEipInner?: boolean;
  /**
   * @remarks
   * Specifies whether to forcibly deploy the instance in the selected zones.
   * 
   * @example
   * false
   */
  isForceSelectedZones?: boolean;
  /**
   * @remarks
   * Specifies whether to set a new username and password. Valid values:
   * 
   * *   **true**: sets a new username and password.
   * *   **false**: does not set a new username or password.
   * 
   * This parameter is available only if you deploy an instance that allows access from the Internet and a VPC.
   * 
   * @example
   * false
   */
  isSetUserAndPassword?: boolean;
  /**
   * @remarks
   * The ID of the key that is used for disk encryption in the region where the instance is deployed. You can obtain the ID of the key in the [Key Management Service (KMS) console](https://kms.console.aliyun.com/?spm=a2c4g.11186623.2.5.336745b8hfiU21) or create a key. For more information, see [Manage CMKs](https://help.aliyun.com/document_detail/181610.html).
   * 
   * If this parameter is configured, disk encryption is enabled for the instance. You cannot disable disk encryption after disk encryption is enabled. When you call this operation, the system checks whether the AliyunServiceRoleForAlikafkaInstanceEncryption service-linked role is created. If the role is not created, the system automatically creates the role. For more information, see [Service-linked roles](https://help.aliyun.com/document_detail/190460.html).
   * 
   * > When you deploy a serverless ApsaraMQ for Kafka V3 instance, you cannot configure this parameter.
   * 
   * @example
   * 0d24xxxx-da7b-4786-b981-9a164dxxxxxx
   */
  KMSKeyId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * >  If you specify a value for this parameter, make sure that the specified value is unique in the region of the instance.
   * 
   * @example
   * newInstanceName
   */
  name?: string;
  /**
   * @remarks
   * The alert contact.
   * 
   * @example
   * Mr. Wang
   */
  notifier?: string;
  /**
   * @remarks
   * The instance password.
   * 
   * *   This parameter is available only for Internet- and VPC- connected ApsaraMQ for Kafka V2 and V3 instances.
   * *   If the instance is an ApsaraMQ for Confluent instance, this parameter is required. The value of this parameter must be 8 to 32 characters in length and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. The following special characters are supported: ! @ # $ % ^ & \\* () _ + - =
   * 
   * @example
   * password
   */
  password?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The security group of the instance.
   * 
   * If you do not specify this parameter, ApsaraMQ for Kafka automatically configures a security group for your instance. If you specify this parameter, you must create a security group in advance. For more information, see [Create a security group](https://help.aliyun.com/document_detail/25468.html).
   * 
   * @example
   * sg-bp13wfx7kz9pko****
   */
  securityGroup?: string;
  /**
   * @remarks
   * The two-dimensional arrays that consist of the candidate set for primary zones and the candidate set for secondary zones. Custom code in the `zone {zone}` format and standard code in the `cn-RegionID-{zone}` format are supported.
   * 
   * *   If you set CrossZone to true and specify Zone H and Zone F as the candidate set for primary zones and Zone K as the candidate set for secondary zones, set this parameter to `[["zoneh","zonef"],["zonek"]]`.
   * 
   * > If you specify multiple zones as the primary or secondary zones, the system deploys the instance in one of the zones without prioritizing them. For example, if you set this parameter to `[["zoneh","zonef"],["zonek"]]`, the primary zone in which the instance is deployed can be Zone H or Zone F, and the secondary zone is Zone K.
   * 
   * *   If you set CrossZone to false and want to deploy the instance in Zone K, set this parameter to `[["zonek"],[]]`. In this case, the value of this parameter must still be two-dimensional arrays, but the array that specifies the candidate for secondary zones is left empty.
   * 
   * @example
   * [[\\"zonel\\"],[\\"zonek\\"]]
   */
  selectedZones?: string;
  /**
   * @remarks
   * The version of the ApsaraMQ for Kafka instance. Valid values:
   * 
   * *   ApsaraMQ for Kafka V2 instances: 2.2.0 and 2.6.2.
   * *   ApsaraMQ for Kafka V3 instances: 3.3.1.
   * *   ApsaraMQ for Confluent instances: 7.4.0.
   * 
   * Default value:
   * 
   * *   ApsaraMQ for Kafka V2 instances: 2.2.0.
   * *   ApsaraMQ for Kafka V3 instances: 3.3.1.
   * *   ApsaraMQ for Confluent instances: 7.4.0.
   * 
   * @example
   * ApsaraMQ for Kafka V2 instances: 2.2.0
   * ApsaraMQ for Kafka V3 instances: 3.3.1
   * ApsaraMQ for Confluent instances: 7.4.0
   */
  serviceVersion?: string;
  /**
   * @remarks
   * The mobile phone number of the alert contact.
   * 
   * @example
   * 1581234****
   */
  userPhoneNum?: string;
  /**
   * @remarks
   * The instance username.
   * 
   * *   This parameter is available only for Internet- and VPC- connected ApsaraMQ for Kafka V2 and V3 instances.
   * *   If the instance is an ApsaraMQ for Confluent instance, set this parameter to root or leave this parameter empty.
   * 
   * Default value for ApsaraMQ for Kafka V2 and V3 instances: username. Default value for ApsaraMQ for Confluent instances: root.
   * 
   * @example
   * username
   */
  username?: string;
  /**
   * @remarks
   * The ID of the vSwitch to which you want to connect the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-bp1j3sg5979fstnpl****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The IDs of the vSwitches with which the instance is associated. If the instance is an ApsaraMQ for Kafka V2 or V3 instance, this parameter is required. If the instance is an ApsaraMQ for Confluent instance, you must configure one of VSwitchIds and VSwitchId. If you configure both of the parameters, the value of VSwitchIds takes effect.
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) in which you want to deploy the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1r4eg3yrxmygv****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the zone where you want to deploy the ApsaraMQ for Kafka instance.
   * 
   * *   The zone ID of the ApsaraMQ for Kafka instance must be the same as that of the vSwitch.
   * *   The value must be in the zoneX or Region ID-X format. Examples: zonea and cn-hangzhou-k.
   * 
   * >  If resources in the specified zone is insufficient, the instance may be deployed in another zone.
   * 
   * @example
   * cn-hangzhou-k
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      crossZone: 'CrossZone',
      deployModule: 'DeployModule',
      instanceId: 'InstanceId',
      isEipInner: 'IsEipInner',
      isForceSelectedZones: 'IsForceSelectedZones',
      isSetUserAndPassword: 'IsSetUserAndPassword',
      KMSKeyId: 'KMSKeyId',
      name: 'Name',
      notifier: 'Notifier',
      password: 'Password',
      regionId: 'RegionId',
      securityGroup: 'SecurityGroup',
      selectedZones: 'SelectedZones',
      serviceVersion: 'ServiceVersion',
      userPhoneNum: 'UserPhoneNum',
      username: 'Username',
      vSwitchId: 'VSwitchId',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      crossZone: 'boolean',
      deployModule: 'string',
      instanceId: 'string',
      isEipInner: 'boolean',
      isForceSelectedZones: 'boolean',
      isSetUserAndPassword: 'boolean',
      KMSKeyId: 'string',
      name: 'string',
      notifier: 'string',
      password: 'string',
      regionId: 'string',
      securityGroup: 'string',
      selectedZones: 'string',
      serviceVersion: 'string',
      userPhoneNum: 'string',
      username: 'string',
      vSwitchId: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

