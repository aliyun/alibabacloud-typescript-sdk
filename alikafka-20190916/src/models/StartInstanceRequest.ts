// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The initial configurations of the ApsaraMQ for Kafka instance. The value must be a valid JSON string. If you do not specify this parameter, the default value is empty.
   * 
   * > - You cannot specify the Config parameter when you deploy a Confluent instance.
   * >
   * > - The enable.acl configuration is not supported for instances of versions earlier than 2.2.0. Only Professional Edition and Serverless instances support access control lists (ACLs).
   * 
   * The following parameters of **Config** are supported for reserved instances:
   * 
   * - **enable.vpc_sasl_ssl**
   * 
   * - **enable.acl**
   * 
   * - **kafka.log.retention.hours**
   * 
   * - **kafka.message.max.bytes**
   * 
   * The following parameters of **Config** are supported for Serverless instances:
   * 
   * - **enable.vpc_sasl_ssl**
   * 
   * - **enable.acl**
   * 
   * - **log.retention.hours**
   * 
   * - **offsets.retention.minutes**
   * 
   * - **message.max.bytes**
   * 
   * - **auto.create.topics.enable**
   * 
   * - **num.partitions**
   * 
   * <props="china">
   * 
   * For more information, see [UpdateInstanceConfig](https://help.aliyun.com/zh/apsaramq-for-kafka/cloud-message-queue-for-kafka/developer-reference/api-alikafka-2019-09-16-updateinstanceconfig?spm=a2c4g.11186623.0.0.3e9e2a04vLr5nF).
   * 
   * 
   * 
   * <props="intl">
   * 
   * For more information, see [UpdateInstanceConfig](https://www.alibabacloud.com/help/zh/apsaramq-for-kafka/cloud-message-queue-for-kafka/developer-reference/api-alikafka-2019-09-16-updateinstanceconfig?spm=a2c63.p38356.0.i1).
   * 
   * @example
   * {"kafka.log.retention.hours":"33"}
   */
  config?: string;
  /**
   * @remarks
   * Specifies whether to deploy the instance across zones.
   * 
   * - true: Deploy the instance across zones.
   * 
   * - false: Do not deploy the instance across zones.
   * 
   * Default value: true.
   * 
   * @example
   * false
   */
  crossZone?: boolean;
  /**
   * @remarks
   * The deployment mode of the instance. This parameter is required for provisioned instances. This parameter is not required for Serverless and Confluent instances. Valid values:
   * 
   * - **vpc**: VPC instance
   * 
   * - **eip**: Internet/VPC instance
   * 
   * The deployment mode of the instance must be consistent with the instance type. If the instance is a VPC instance, set this parameter to **vpc**. If the instance is an Internet/VPC instance, set this parameter to **eip**.
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
   * Specifies whether to enable elastic IP addresses (EIPs). Valid values:
   * 
   * - **true**: The instance is an Internet/VPC instance.
   * 
   * - **false**: The instance is a VPC instance.
   * 
   * The value of this parameter must be consistent with the instance type. For example, if the instance is a VPC instance, you must set this parameter to **false**.
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
   * - **true**: Set a new username and password.
   * 
   * - **false**: Do not set a new username and password.
   * 
   * This parameter is supported only for Internet/VPC instances.
   * 
   * @example
   * false
   */
  isSetUserAndPassword?: boolean;
  /**
   * @remarks
   * The ID of the key that is used for disk encryption in the same region. You can view the key ID in the [Key Management Service (KMS) console](https://kms.console.aliyun.com/?spm=a2c4g.11186623.2.5.336745b8hfiU21) or create a key. For more information, see [Manage keys](https://help.aliyun.com/document_detail/181610.html).
   * 
   * If you specify this parameter, disk encryption is enabled. You cannot disable disk encryption after it is enabled. When you call this operation, the system checks whether the AliyunServiceRoleForAlikafkaInstanceEncryption service-linked role is created. If the role is not created, the system automatically creates the role. For more information, see [Service-linked Role](https://help.aliyun.com/document_detail/190460.html).
   * 
   * > - You cannot specify the KMSKeyId parameter when you deploy a Serverless instance.
   * 
   * @example
   * 0d24xxxx-da7b-4786-b981-9a164dxxxxxx
   */
  KMSKeyId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * This parameter is not supported for Serverless and Confluent instances.
   * 
   * > If you specify this parameter, make sure that the value is unique in the same region.
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
   * The password.
   * 
   * - For provisioned and Serverless instances, this parameter is supported only for Internet/VPC instances.
   * 
   * - This parameter is required for Confluent instances. The password must be 8 to 32 characters in length and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. Special characters are !@#$%^&\\*()_+-=.
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
   * If you do not specify this parameter, ApsaraMQ for Kafka automatically configures a security group for your instance. If you want to specify this parameter, you must create a security group for the instance in advance. For more information, see [Create a security group](https://help.aliyun.com/document_detail/25468.html).
   * 
   * @example
   * sg-bp13wfx7kz9pko****
   */
  securityGroup?: string;
  /**
   * @remarks
   * A two-dimensional array that consists of the candidate set of the primary zone and the candidate set of the secondary zone. The values can be custom codes (`zone{zone}`) or standard codes (`cn-RegionID-{zone}`).
   * 
   * - If you want to deploy the instance across zones (isCrossZone=true), the candidate set of the primary zone is Zone H or Zone F, and the candidate set of the secondary zone is Zone K, set this parameter to `[[\\"zoneh\\",\\"zonef\\"],[\\"zonek\\"]]`. This example uses custom codes.
   * 
   *   > If you specify multiple zones for the primary or secondary zone, the system selects one of the zones for deployment without a priority. For example, if you set the parameter to `[[\\"zoneh\\",\\"zonef\\"],[\\"zonek\\"]]`, the primary zone of the deployed instance is Zone H or Zone F, and the secondary zone is Zone K.
   * 
   * - If you do not want to deploy the instance across zones (isCrossZone=false) and want to deploy the instance in Zone K, set this parameter to `[[\\"zonek\\"],[]]`. This example uses a custom code. Note that you must still specify two arrays. The second array, which represents the candidate set of the secondary zone, can be empty [].
   * 
   * > Relationship between the SelectedZones and VSwitchIds parameters for provisioned instances
   * >
   * > - If you specify only VSwitchIds and do not specify SelectedZones, the system preferentially selects the zones that correspond to the vSwitches in VSwitchIds.
   * 
   * @example
   * [[\\"zonel\\"],[\\"zonek\\"]]
   */
  selectedZones?: string;
  /**
   * @remarks
   * The version of the ApsaraMQ for Kafka instance that you want to deploy.
   * 
   * - For provisioned instances, valid values are 2.2.0 and 2.6.2.
   * 
   * - For Serverless instances, the valid value is 3.3.1.
   * 
   * - For Confluent instances, the valid value is 7.4.0.
   * 
   * Default value:
   * 
   * - Provisioned instances: 2.2.0
   * 
   * - Serverless instances: 3.3.1
   * 
   * - Confluent instances: 7.4.0
   * 
   * @example
   * Reserved Instance Series: 2.2.0
   * Serverless Instance Series: 3.3.1
   * Confluent Series: 7.4.0
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
   * The username.
   * 
   * - For provisioned and Serverless instances, this parameter is supported only for Internet/VPC instances.
   * 
   * - For Confluent instances, you can set this parameter only to root or leave it empty.
   * 
   * Default value: For provisioned and Serverless instances, the default value is username. For Confluent instances, the default value is root.
   * 
   * @example
   * username
   */
  username?: string;
  /**
   * @remarks
   * The ID of the vSwitch to which the instance is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-bp1j3sg5979fstnpl****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The list of vSwitch IDs. This parameter is required for provisioned and Serverless instances. This parameter is supported for Confluent instances. You must specify at least one of VSwitchIds and VSwitchId. If you specify both, VSwitchIds takes precedence.
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * The ID of the VPC in which the instance is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1r4eg3yrxmygv****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the zone in which the instance is deployed.
   * 
   * - The value must be the zone ID of the vSwitch.
   * 
   * - The value can be in the zoneX or RegionId-X format. For example, you can set the value to zonea or cn-hangzhou-k.
   * 
   * > If resources in the specified zone are insufficient, the instance may be deployed in another zone.
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

