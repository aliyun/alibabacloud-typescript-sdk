// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAggregateConfigDeliveryChannelRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the account group.
   * 
   * For more information about how to obtain the ID of an account group, see [ListAggregators](https://help.aliyun.com/document_detail/255797.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ca-a4e5626622af0079****
   */
  aggregatorId?: string;
  /**
   * @remarks
   * A client-generated token that you can use to ensure the idempotence of the request. You must make sure that the token is unique for each request.
   * 
   * The `ClientToken` parameter can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 1594295238-f9361358-5843-4294-8d30-b5183fac****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to deliver compliance snapshots. Cloud Config delivers information about the compliance and non-compliance of resources to SLS. Valid values:
   * 
   * - true: Deliver compliance snapshots.
   * 
   * - false: Do not deliver compliance snapshots.
   * 
   * @example
   * false
   */
  compliantSnapshot?: boolean;
  /**
   * @remarks
   * Specifies whether to deliver the resource configuration change history. If the configurations of a resource change, Cloud Config delivers the configuration change history to OSS, SLS, or MNS. Valid values:
   * 
   * - true: Deliver the resource configuration change history.
   * 
   * - false (default): Do not deliver the resource configuration change history.
   * 
   * > * If the delivery channel type is OSS, you must set at least one of the \\`ConfigurationSnapshot\\` and \\`ConfigurationItemChangeNotification\\` parameters to true.
   * 
   * > - If the delivery channel type is SLS, you must set at least one of the \\`ConfigurationSnapshot\\`, \\`ConfigurationItemChangeNotification\\`, and \\`NonCompliantNotification\\` parameters to true.
   * 
   * > - If the delivery channel type is MNS, you must set at least one of the \\`ConfigurationItemChangeNotification\\` and \\`NonCompliantNotification\\` parameters to true.
   * 
   * @example
   * false
   */
  configurationItemChangeNotification?: boolean;
  /**
   * @remarks
   * Specifies whether to deliver scheduled resource snapshots. Cloud Config delivers scheduled resource snapshots to OSS, SLS, or MNS at `04:00Z` and `16:00Z` (UTC) every day. Valid values:
   * 
   * - true: Deliver scheduled resource snapshots.
   * 
   * - false (default): Do not deliver scheduled resource snapshots.
   * 
   * > * If the delivery channel type is OSS, you must set at least one of the \\`ConfigurationSnapshot\\` and \\`ConfigurationItemChangeNotification\\` parameters to true.
   * 
   * > - If the delivery channel type is SLS, you must set at least one of the \\`ConfigurationSnapshot\\`, \\`ConfigurationItemChangeNotification\\`, and \\`NonCompliantNotification\\` parameters to true.
   * 
   * @example
   * true
   */
  configurationSnapshot?: boolean;
  /**
   * @remarks
   * The rule that is used to filter events or resources for the delivery channel. This parameter is supported for all deliveries to MNS channels and for snapshot deliveries to SLS channels.
   * 
   * - For an MNS channel, you can specify the following rules to filter events:
   * 
   *   - The minimum risk level of the events to which you want to subscribe is `{"filterType":"RuleRiskLevel","value":"1","multiple":false}`.
   * 
   *     The \\`value\\` parameter specifies the risk level. Valid values: 1, 2, and 3. The value 1 indicates high risk. The value 2 indicates medium risk. The value 3 indicates low risk.
   * 
   *   - The resource types of the events to which you want to subscribe are `{"filterType":"ResourceType","values":["ACS::ACK::Cluster","ACS::ActionTrail::Trail","ACS::CBWP::CommonBandwidthPackage"],"multiple":true}`.
   * 
   *     The \\`values\\` parameter specifies the resource types of the events to which you want to subscribe. The value of this parameter is a JSON array of strings.
   *     Example:
   *     `[{"filterType":"ResourceType","values":["ACS::ActionTrail::Trail","ACS::CBWP::CommonBandwidthPackage","ACS::CDN::Domain","ACS::CEN::CenBandwidthPackage","ACS::CEN::CenInstance","ACS::CEN::Flowlog","ACS::DdosCoo::Instance"],"multiple":true}]`
   * 
   * - For an SLS channel, you can specify the following rule to filter snapshots:
   * 
   *   The resource types of the snapshots to be delivered are `{"filterType":"ResourceType","values":["ACS::ACK::Cluster","ACS::ActionTrail::Trail","ACS::CBWP::CommonBandwidthPackage"],"multiple":true}`.
   * 
   *   `[{"filterType":"ResourceType","values":["ACS::ActionTrail::Trail","ACS::CBWP::CommonBandwidthPackage","ACS::CDN::Domain","ACS::CEN::CenBandwidthPackage","ACS::CEN::CenInstance","ACS::CEN::Flowlog","ACS::DdosCoo::Instance"],"multiple":true}]`
   * 
   * @example
   * [{"filterType":"ResourceType","values":["ACS::ActionTrail::Trail","ACS::CBWP::CommonBandwidthPackage","ACS::CDN::Domain","ACS::CEN::CenBandwidthPackage","ACS::CEN::CenInstance","ACS::CEN::Flowlog","ACS::DdosCoo::Instance"],"multiple":true}]
   */
  deliveryChannelCondition?: string;
  /**
   * @remarks
   * The name of the delivery channel.
   * 
   * > If you do not set this parameter, this parameter is empty.
   * 
   * @example
   * testoss
   */
  deliveryChannelName?: string;
  /**
   * @remarks
   * The ARN of the delivery destination. Valid values:
   * 
   * - If the delivery channel type is OSS, the value of this parameter is in the `acs:oss:{RegionId}:{accountId}:{bucketName}` format. Example: `acs:oss:cn-shanghai:100931896542****:new-bucket`.
   * 
   * - If the delivery channel type is MNS, the value of this parameter is in the `acs:mns:{RegionId}:{accountId}:/topics/{topicName}` format. Example: `acs:mns:cn-shanghai:100931896542****:/topics/topic1`.
   * 
   * - If the delivery channel type is SLS, the value of this parameter is in the `acs:log:{RegionId}:{accountId}:project/{projectName}/logstore/{logstoreName}` format. Example: `acs:log:cn-shanghai:100931896542****:project/project1/logstore/logstore1`.
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
   * - OSS: Object Storage Service
   * 
   * - MNS: Simple Message Queue
   * 
   * - SLS: Simple Log Service
   * 
   * This parameter is required.
   * 
   * @example
   * OSS
   */
  deliveryChannelType?: string;
  /**
   * @remarks
   * The time of day from which scheduled resource snapshots are delivered. The time is displayed in UTC.
   * 
   * The value is in the `HH:mmZ` format.
   * 
   * > If you enable the scheduled delivery of resource snapshots, you can use this parameter to customize the delivery time. If you do not set this parameter, the snapshots are delivered at `04:00Z` and `16:00Z` every day by default.
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
   * Specifies whether to deliver resource non-compliance events. If a resource is evaluated as non-compliant, Cloud Config delivers the non-compliance event to SLS or MNS. Valid values:
   * 
   * - true: Deliver resource non-compliance events.
   * 
   * - false (default): Do not deliver resource non-compliance events.
   * 
   * > * If the delivery channel type is SLS, you must set at least one of the \\`ConfigurationSnapshot\\`, \\`ConfigurationItemChangeNotification\\`, and \\`NonCompliantNotification\\` parameters to true.
   * 
   * > - If the delivery channel type is MNS, you must set at least one of the \\`ConfigurationItemChangeNotification\\` and \\`NonCompliantNotification\\` parameters to true.
   * 
   * @example
   * false
   */
  nonCompliantNotification?: boolean;
  /**
   * @remarks
   * The ARN of the OSS bucket that is used to store oversized data to be delivered when the size of the data exceeds the specified limit of the delivery channel. The value is in the `acs:oss:{RegionId}:{accountId}:{bucketName}` format.
   * 
   * If you do not set this parameter, Cloud Config delivers only summary information.
   * 
   * > This parameter is applicable only to delivery channels of the SLS or MNS type. The maximum size of data that can be delivered to an SLS Logstore is 1 MB. The maximum size of data that can be delivered to an MNS topic is 64 KB.
   * 
   * @example
   * acs:oss:cn-shanghai:100931896542****:new-bucket
   */
  oversizedDataOSSTargetArn?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
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
      aggregatorId: 'string',
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

