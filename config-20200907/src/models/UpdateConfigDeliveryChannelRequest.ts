// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateConfigDeliveryChannelRequest extends $dara.Model {
  /**
   * @remarks
   * A client token used to ensure the idempotence of the request. Use a client to generate the token, and make sure that the token is unique among different requests.
   * 
   * The `ClientToken` parameter can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 1594295238-f9361358-5843-4294-8d30-b5183fac****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to deliver resource compliance snapshots. Cloud Config delivers resource compliance and non-compliance information to SLS. Valid values:
   * 
   * - true: The resource compliance snapshots are delivered.
   * 
   * - false: The resource compliance snapshots are not delivered.
   * 
   * @example
   * false
   * 
   * **if can be null:**
   * true
   */
  compliantSnapshot?: boolean;
  /**
   * @remarks
   * Specifies whether to deliver the resource configuration history. Cloud Config delivers the resource configuration history to OSS, SLS, or MNS when the configuration of a resource changes. Valid values:
   * 
   * - true: The resource configuration history is delivered.
   * 
   * - false (default): The resource configuration history is not delivered.
   * 
   * > This parameter is available for delivery channels of the OSS, SLS, and MNS types.
   * 
   * @example
   * false
   * 
   * **if can be null:**
   * true
   */
  configurationItemChangeNotification?: boolean;
  /**
   * @remarks
   * Specifies whether to deliver scheduled resource snapshots. Cloud Config delivers scheduled resource snapshots to OSS or SLS at `04:00Z` and `16:00Z` (UTC) every day. Valid values:
   * 
   * - true: The scheduled resource snapshots are delivered.
   * 
   * - false (default): The scheduled resource snapshots are not delivered.
   * 
   * @example
   * false
   * 
   * **if can be null:**
   * true
   */
  configurationSnapshot?: boolean;
  /**
   * @remarks
   * The rule that is attached to the delivery channel. This parameter is applicable to all deliveries to MNS and snapshot deliveries to SLS.
   * 
   * - If you specify the minimum risk level of events and the resource types for an MNS subscription, use the following formats:
   * 
   *   - The minimum risk level of the subscribed events: `{"filterType":"RuleRiskLevel","value":"1","multiple":false}`.
   * 
   *     `value` specifies the risk level. Valid values: 1 (high risk), 2 (medium risk), and 3 (low risk).
   * 
   *   - The resource types of the subscribed events: `{"filterType":"ResourceType","values":["ACS::ACK::Cluster","ACS::ActionTrail::Trail","ACS::CBWP::CommonBandwidthPackage"],"multiple":true}`.
   * 
   *     `values` specifies the resource types of the subscribed events. The value is a JSON array.
   *     Example:
   *     `[{"filterType":"ResourceType","values":["ACS::ActionTrail::Trail","ACS::CBWP::CommonBandwidthPackage","ACS::CDN::Domain","ACS::CEN::CenBandwidthPackage","ACS::CEN::CenInstance","ACS::CEN::Flowlog","ACS::DdosCoo::Instance"],"multiple":true}]`
   * 
   * - If you specify the resource types of snapshots delivered to SLS, use the following format: `{"filterType":"ResourceType","values":["ACS::ACK::Cluster","ACS::ActionTrail::Trail","ACS::CBWP::CommonBandwidthPackage"],"multiple":true}`.
   * 
   *   `values` specifies the resource types of the snapshots to deliver. The value is a JSON array.
   *   Example:
   *   `[{"filterType":"ResourceType","values":["ACS::ActionTrail::Trail","ACS::CBWP::CommonBandwidthPackage","ACS::CDN::Domain","ACS::CEN::CenBandwidthPackage","ACS::CEN::CenInstance","ACS::CEN::Flowlog","ACS::DdosCoo::Instance"],"multiple":true}]`
   * 
   * @example
   * [{"filterType":"ResourceType","values":["ACS::ActionTrail::Trail","ACS::CBWP::CommonBandwidthPackage","ACS::CDN::Domain","ACS::CEN::CenBandwidthPackage","ACS::CEN::CenInstance","ACS::CEN::Flowlog","ACS::DdosCoo::Instance"],"multiple":true}]
   */
  deliveryChannelCondition?: string;
  /**
   * @remarks
   * The ID of the delivery channel.
   * 
   * For more information about how to obtain the delivery channel ID, see [ListConfigDeliveryChannels](https://help.aliyun.com/document_detail/429841.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cdc-8e45ff4e06a3a8****
   */
  deliveryChannelId?: string;
  /**
   * @remarks
   * The name of the delivery channel.
   * 
   * @example
   * testoss
   */
  deliveryChannelName?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the delivery destination. Valid values:
   * 
   * - If the delivery channel is Object Storage Service (OSS), the value is in the format of `acs:oss:{RegionId}:{accountId}:{bucketName}`. Example: `acs:oss:cn-shanghai:100931896542****:new-bucket`.
   * 
   * - If the delivery channel is MNS, the value is in the format of `acs:mns:{RegionId}:{accountId}:/topics/{topicName}`. Example: `acs:mns:cn-shanghai:100931896542****:/topics/topic1`.
   * 
   * - If the delivery channel is Simple Log Service (SLS), the value is in the format of `acs:log:{RegionId}:{accountId}:project/{projectName}/logstore/{logstoreName}`. Example: `acs:log:cn-shanghai:100931896542****:project/project1/logstore/logstore1`.
   * 
   * @example
   * acs:oss:cn-shanghai:100931896542****:new-bucket
   */
  deliveryChannelTargetArn?: string;
  /**
   * @remarks
   * The time of day when the scheduled resource snapshot is delivered.
   * 
   * The value is in the `HH:mmZ` format. The time is in UTC.
   * 
   * > If you enable scheduled delivery of resource snapshots, use this parameter to specify a delivery time. If you do not specify this parameter, Cloud Config delivers the scheduled resource snapshots at `04:00Z` and `16:00Z` by default.
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
   * Specifies whether to deliver resource non-compliance events. Cloud Config delivers resource non-compliance events to SLS or MNS when a resource is evaluated as non-compliant. Valid values:
   * 
   * - true: The resource non-compliance events are delivered.
   * 
   * - false (default): The resource non-compliance events are not delivered.
   * 
   * > This parameter is available only for delivery channels of the SLS and MNS types.
   * 
   * @example
   * false
   * 
   * **if can be null:**
   * true
   */
  nonCompliantNotification?: boolean;
  /**
   * @remarks
   * The ARN of the OSS bucket where data is delivered when the data size exceeds the limit of the delivery channel. The value is in the format of `acs:oss:{RegionId}:{accountId}:{bucketName}`.
   * 
   * If you do not specify this parameter, Cloud Config delivers only the summary of the data.
   * 
   * > This parameter is available only for delivery channels of the SLS and MNS types. The maximum size of data that can be delivered to SLS is 1 MB. The maximum size of data that can be delivered to MNS is 64 KB.
   * 
   * @example
   * acs:oss:cn-shanghai:100931896542****:new-bucket
   */
  oversizedDataOSSTargetArn?: string;
  /**
   * @remarks
   * The status of the delivery channel. Valid values:
   * 
   * - 0: The delivery channel is disabled. Cloud Config retains the most recent delivery configuration and stops delivering resource data.
   * 
   * - 1 (default): The delivery channel is enabled.
   * 
   * @example
   * 0
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      compliantSnapshot: 'CompliantSnapshot',
      configurationItemChangeNotification: 'ConfigurationItemChangeNotification',
      configurationSnapshot: 'ConfigurationSnapshot',
      deliveryChannelCondition: 'DeliveryChannelCondition',
      deliveryChannelId: 'DeliveryChannelId',
      deliveryChannelName: 'DeliveryChannelName',
      deliveryChannelTargetArn: 'DeliveryChannelTargetArn',
      deliverySnapshotTime: 'DeliverySnapshotTime',
      description: 'Description',
      nonCompliantNotification: 'NonCompliantNotification',
      oversizedDataOSSTargetArn: 'OversizedDataOSSTargetArn',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      compliantSnapshot: 'boolean',
      configurationItemChangeNotification: 'boolean',
      configurationSnapshot: 'boolean',
      deliveryChannelCondition: 'string',
      deliveryChannelId: 'string',
      deliveryChannelName: 'string',
      deliveryChannelTargetArn: 'string',
      deliverySnapshotTime: 'string',
      description: 'string',
      nonCompliantNotification: 'boolean',
      oversizedDataOSSTargetArn: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

