// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConfigDeliveryChannelsResponseBodyDeliveryChannels extends $dara.Model {
  /**
   * @remarks
   * The ID of the current Alibaba Cloud account.
   * 
   * @example
   * 120886317861****
   */
  accountId?: number;
  /**
   * @remarks
   * Specifies whether to receive compliance snapshots. Cloud Config delivers resource compliance and non-compliance information to SLS. Valid values:
   * 
   * - true: Receive compliance snapshots.
   * 
   * - false: Do not receive compliance snapshots.
   * 
   * @example
   * false
   */
  compliantSnapshot?: boolean;
  /**
   * @remarks
   * Specifies whether to receive the resource configuration history. When a resource configuration changes, Cloud Config delivers the resource configuration history to OSS, SLS, or MNS. Valid values:
   * 
   * - true: Receive the resource configuration history.
   * 
   * - false: Do not receive the resource configuration history.
   * 
   * @example
   * true
   */
  configurationItemChangeNotification?: boolean;
  /**
   * @remarks
   * Specifies whether to receive scheduled resource snapshots. Cloud Config delivers scheduled resource snapshots to OSS or SLS at `04:00Z` and `16:00Z` (UTC) every day. Valid values:
   * 
   * - true: Receive scheduled resource snapshots.
   * 
   * - false: Do not receive scheduled resource snapshots.
   * 
   * @example
   * false
   */
  configurationSnapshot?: boolean;
  /**
   * @remarks
   * The ARN of the role that is assumed by the delivery channel.
   * 
   * @example
   * acs:ram::120886317861****:role/aliyunserviceroleforconfig
   */
  deliveryChannelAssumeRoleArn?: string;
  /**
   * @remarks
   * The rule attached to the delivery channel. This parameter is supported for MNS channels and for snapshot delivery to SLS channels.
   * 
   * - To subscribe to MNS events, specify the minimum risk level and resource types:
   * 
   *   - Minimum risk level of subscribed events: `{"filterType":"RuleRiskLevel","value":"1","multiple":false}`.
   * 
   *     \\`value\\` specifies the risk level. Valid values: 1 (high risk), 2 (medium risk), and 3 (low risk).
   * 
   *   - Resource types of subscribed events: `{"filterType":"ResourceType","values":["ACS::ACK::Cluster","ACS::ActionTrail::Trail","ACS::CBWP::CommonBandwidthPackage"],"multiple":true}`.
   * 
   *     \\`values\\` is a JSON array of the resource types.
   *     Example:
   *     `[{"filterType":"ResourceType","values":["ACS::ActionTrail::Trail","ACS::CBWP::CommonBandwidthPackage","ACS::CDN::Domain","ACS::CEN::CenBandwidthPackage","ACS::CEN::CenInstance","ACS::CEN::Flowlog","ACS::DdosCoo::Instance"],"multiple":true}]`
   * 
   * - To deliver snapshots to SLS, specify the resource types: `{"filterType":"ResourceType","values":["ACS::ACK::Cluster","ACS::ActionTrail::Trail","ACS::CBWP::CommonBandwidthPackage"],"multiple":true}`.
   * 
   *   \\`values\\` is a JSON array of the resource types.
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
   * @example
   * cdc-d9106457e0d900b1****
   */
  deliveryChannelId?: string;
  /**
   * @remarks
   * The name of the delivery channel.
   * 
   * @example
   * myDeliveryChannel
   */
  deliveryChannelName?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the delivery destination.
   * 
   * - If \\`DeliveryChannelType\\` is \\`OSS\\`, this parameter is the ARN of an OSS bucket.
   * 
   * - If \\`DeliveryChannelType\\` is \\`MNS\\`, this parameter is the ARN of an MNS topic.
   * 
   * - If \\`DeliveryChannelType\\` is \\`SLS\\`, this parameter is the ARN of an SLS Logstore.
   * 
   * @example
   * acs:oss:cn-shanghai:120886317861****:new-bucket
   */
  deliveryChannelTargetArn?: string;
  /**
   * @remarks
   * The type of the delivery channel. Valid values:
   * 
   * - OSS: Object Storage Service (OSS).
   * 
   * - MNS: Simple Message Queue (formerly MNS).
   * 
   * - SLS: Simple Log Service (SLS).
   * 
   * @example
   * OSS
   */
  deliveryChannelType?: string;
  /**
   * @remarks
   * The time when scheduled resource snapshots start to be delivered every day.
   * 
   * The format is `HH:mmZ` (UTC).
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
   * Specifies whether to receive resource non-compliance events. When a resource becomes non-compliant, Cloud Config delivers a resource non-compliance event to SLS or MNS. Valid values:
   * 
   * - true: Receive resource non-compliance events.
   * 
   * - false: Do not receive resource non-compliance events.
   * 
   * @example
   * false
   */
  nonCompliantNotification?: boolean;
  /**
   * @remarks
   * The destination OSS bucket to which the data is transferred when the size of the data exceeds the limit of the delivery channel.
   * 
   * @example
   * acs:oss:cn-shanghai:100931896542****:new-bucket
   */
  oversizedDataOSSTargetArn?: string;
  /**
   * @remarks
   * The status of the delivery channel. Valid values:
   * 
   * - 0: The delivery channel is disabled.
   * 
   * - 1: The delivery channel is enabled.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      compliantSnapshot: 'CompliantSnapshot',
      configurationItemChangeNotification: 'ConfigurationItemChangeNotification',
      configurationSnapshot: 'ConfigurationSnapshot',
      deliveryChannelAssumeRoleArn: 'DeliveryChannelAssumeRoleArn',
      deliveryChannelCondition: 'DeliveryChannelCondition',
      deliveryChannelId: 'DeliveryChannelId',
      deliveryChannelName: 'DeliveryChannelName',
      deliveryChannelTargetArn: 'DeliveryChannelTargetArn',
      deliveryChannelType: 'DeliveryChannelType',
      deliverySnapshotTime: 'DeliverySnapshotTime',
      description: 'Description',
      nonCompliantNotification: 'NonCompliantNotification',
      oversizedDataOSSTargetArn: 'OversizedDataOSSTargetArn',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      compliantSnapshot: 'boolean',
      configurationItemChangeNotification: 'boolean',
      configurationSnapshot: 'boolean',
      deliveryChannelAssumeRoleArn: 'string',
      deliveryChannelCondition: 'string',
      deliveryChannelId: 'string',
      deliveryChannelName: 'string',
      deliveryChannelTargetArn: 'string',
      deliveryChannelType: 'string',
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

export class ListConfigDeliveryChannelsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of delivery channels.
   */
  deliveryChannels?: ListConfigDeliveryChannelsResponseBodyDeliveryChannels[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DC300244-FCE3-5061-8214-C27ECB668487
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryChannels: 'DeliveryChannels',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryChannels: { 'type': 'array', 'itemType': ListConfigDeliveryChannelsResponseBodyDeliveryChannels },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.deliveryChannels)) {
      $dara.Model.validateArray(this.deliveryChannels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

