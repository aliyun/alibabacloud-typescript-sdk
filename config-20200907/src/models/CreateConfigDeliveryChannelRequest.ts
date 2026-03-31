// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConfigDeliveryChannelRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotency of the request. You can use the client to generate the token, but you must ensure that the token is unique among different requests.
   * 
   * The `token` can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 1594295238-f9361358-5843-4294-8d30-b5183fac****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to deliver scheduled compliant snapshots. Cloud Config delivers scheduled compliant snapshots at `04:00Z` and `16:00Z` to Log Service every day. The time is displayed in UTC. Valid values:
   * 
   * *   true: Cloud Config delivers scheduled compliant snapshots.
   * *   false (default): Cloud Config does not deliver scheduled compliant snapshots.
   * 
   * @example
   * false
   */
  compliantSnapshot?: boolean;
  /**
   * @remarks
   * Specifies whether to deliver resource change logs. If you set this parameter to true, Cloud Config delivers resource change logs to OSS, Log Service, or MNS when the configurations of the resources change. Valid values:
   * 
   * *   true: Cloud Config delivers resource change logs.
   * *   false (default): Cloud Config does not deliver resource change logs.
   * 
   * > This parameter is available for delivery channels of the OSS, SLS, and MNS types.
   * 
   * @example
   * false
   */
  configurationItemChangeNotification?: boolean;
  /**
   * @remarks
   * Specifies whether to deliver scheduled resource snapshots. Cloud Config delivers scheduled resource snapshots at `04:00Z` and `16:00Z` to OSS, MNS, or Log Service every day. The time is displayed in UTC. Valid values:
   * 
   * *   true: Cloud Config delivers scheduled resource snapshots.
   * *   false (default): Cloud Config does not deliver scheduled resource snapshots.
   * 
   * @example
   * false
   */
  configurationSnapshot?: boolean;
  /**
   * @remarks
   * The rule that you want to attach to the delivery channel, used to specify subscription content filtering conditions.
   * 
   * *   If you specify the minimum risk level and resource types for compliance events, it should be as follows:
   * 
   *     *   The setting of the lowest risk level for the events to which you want to subscribe is in the following format: `{"filterType":"RuleRiskLevel","value":"1","multiple":false}`.
   * 
   *         The `value` field indicates the lowest risk level of the events to which you want to subscribe. Valid values: 1, 2, and 3. The value 1 indicates the high risk level, the value 2 indicates the medium risk level, and the value 3 indicates the low risk level.
   * 
   *         The `multiple` field indicates whether multiple values are supported for this group of filters. Risk levels only support single-value filtering, so the multiple field for compliance event type content can only be set to `false`.
   * 
   *     *   The setting of the resource types of the events to which you want to subscribe is in the following format: `{"filterType":"ResourceType","values":["ACS::ACK::Cluster","ACS::ActionTrail::Trail","ACS::CBWP::CommonBandwidthPackage"],"multiple":true}`.
   * 
   *         The `values` field indicates the resource types of the events to which you want to subscribe. 
   * 
   *         The `multiple` field indicates whether multiple values are supported for this group of filters. Resource types support multi-value filtering; when selecting multiple resource types, the multiple field can be set to true.
   * The value of the field is a JSON array. Examples:
   * 
   *         `[{"filterType":"ResourceType","values":["ACS::ActionTrail::Trail","ACS::CBWP::CommonBandwidthPackage","ACS::CDN::Domain","ACS::CEN::CenBandwidthPackage","ACS::CEN::CenInstance","ACS::CEN::Flowlog","ACS::DdosCoo::Instance"],"multiple":true}]`
   * 
   *     *   You can also simultaneously specify both risk levels and resource types, such as:
   * 
   *         `[{"filterType":"RuleRiskLevel","value":"2","multiple":false},{"filterType":"ResourceType","values":["ACS::CDN::Domain","ACS::ActionTrail::Trail"],"multiple":true}]`
   * 
   * *   If you specify the resource types for delivering configurations, the resource types are specified by: `{"filterType":"ResourceType","values":["ACS::ACK::Cluster","ACS::ActionTrail::Trail","ACS::CBWP::CommonBandwidthPackage"],"multiple":true}`.
   * 
   *     The `values` field specifies the resource types of the snapshots to which you want to deliver. The value of the field is a JSON array. Examples:
   * 
   *       `[{"filterType":"ResourceType","values":["ACS::ActionTrail::Trail","ACS::CBWP::CommonBandwidthPackage","ACS::CDN::Domain","ACS::CEN::CenBandwidthPackage","ACS::CEN::CenInstance","ACS::CEN::Flowlog","ACS::DdosCoo::Instance"],"multiple":true}]`
   * 
   * @example
   * [{"filterType":"ResourceType","values":["ACS::ActionTrail::Trail","ACS::CBWP::CommonBandwidthPackage","ACS::CDN::Domain","ACS::CEN::CenBandwidthPackage","ACS::CEN::CenInstance","ACS::CEN::Flowlog","ACS::DdosCoo::Instance"],"multiple":true}]
   */
  deliveryChannelCondition?: string;
  /**
   * @remarks
   * The name of the delivery channel.
   * 
   * > If you do not configure this parameter, this parameter is left empty.
   * 
   * @example
   * testoss
   */
  deliveryChannelName?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the delivery destination. Valid values:
   * 
   * *   `acs:oss:{RegionId}:{accountId}:{bucketName}` if your delivery destination is an OSS bucket. Example: `acs:oss:cn-shanghai:100931896542****:new-bucket`.
   * *   `acs:mns:{RegionId}:{accountId}:/topics/{topicName}` if your delivery destination is an MNS topic. Example: `acs:mns:cn-shanghai:100931896542****:/topics/topic1`.
   * *   `acs:log:{RegionId}:{accountId}:project/{projectName}/logstore/{logstoreName}` if your delivery destination is a Log Service Logstore. Example: `acs:log:cn-shanghai:100931896542****:project/project1/logstore/logstore1`.
   * 
   * This parameter is required.
   * 
   * @example
   * acs:oss:cn-shanghai:100931896542****:new-bucket
   */
  deliveryChannelTargetArn?: string;
  /**
   * @remarks
   * The type of the delivery channel. Valid values:
   * 
   * *   OSS: Object Storage Service (OSS)
   * *   MNS: Message Service (MNS)
   * *   SLS: Log Service
   * 
   * This parameter is required.
   * 
   * @example
   * OSS
   */
  deliveryChannelType?: string;
  /**
   * @remarks
   * The time when you want Cloud Config to deliver scheduled resource snapshots every day.
   * 
   * Format: `HH:mmZ`. This time is displayed in UTC.
   * 
   * > When you enable the scheduled resource delivery feature, you can configure this parameter to specify a custom delivery time. If you do not configure this parameter, Cloud Config automatically delivers scheduled resource snapshots at `04:00Z` and `16:00Z` every day.
   * 
   * @example
   * 09:10Z
   */
  deliverySnapshotTime?: string;
  /**
   * @remarks
   * The description of the delivery channel.
   * 
   * @example
   * My OSS delivery.
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to deliver resource non-compliance events. If you set this parameter to true, Cloud Config delivers resource non-compliance events to Log Service or MNS when resources are considered non-compliant. Valid values:
   * 
   * *   true: Cloud Config delivers resource non-compliance events.
   * *   false (default): Cloud Config does not deliver resource non-compliance events.
   * 
   * > This parameter is available only for delivery channels of the SLS or MNS type.
   * 
   * @example
   * false
   */
  nonCompliantNotification?: boolean;
  /**
   * @remarks
   * The ARN of the OSS bucket to which you want to transfer the delivery data when the size of the data exceeds the specified upper limit of the delivery channel. Format: `acs:oss:{RegionId}:{accountId}:{bucketName}`.
   * 
   * If you do not configure this parameter, Cloud Config delivers only summary data.
   * 
   * > This parameter is available only for delivery channels of the SLS or MNS type. The maximum storage size of delivery channels of the SLS type is 1 MB, and the maximum storage size of delivery channels of the MNS type is 64 KB.
   * 
   * @example
   * acs:oss:cn-shanghai:100931896542****:new-bucket
   */
  oversizedDataOSSTargetArn?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      compliantSnapshot: 'CompliantSnapshot',
      configurationItemChangeNotification: 'ConfigurationItemChangeNotification',
      configurationSnapshot: 'ConfigurationSnapshot',
      deliveryChannelCondition: 'DeliveryChannelCondition',
      deliveryChannelName: 'DeliveryChannelName',
      deliveryChannelTargetArn: 'DeliveryChannelTargetArn',
      deliveryChannelType: 'DeliveryChannelType',
      deliverySnapshotTime: 'DeliverySnapshotTime',
      description: 'Description',
      nonCompliantNotification: 'NonCompliantNotification',
      oversizedDataOSSTargetArn: 'OversizedDataOSSTargetArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      compliantSnapshot: 'boolean',
      configurationItemChangeNotification: 'boolean',
      configurationSnapshot: 'boolean',
      deliveryChannelCondition: 'string',
      deliveryChannelName: 'string',
      deliveryChannelTargetArn: 'string',
      deliveryChannelType: 'string',
      deliverySnapshotTime: 'string',
      description: 'string',
      nonCompliantNotification: 'boolean',
      oversizedDataOSSTargetArn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

