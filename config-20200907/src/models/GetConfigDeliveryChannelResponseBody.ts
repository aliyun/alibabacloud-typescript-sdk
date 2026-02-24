// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConfigDeliveryChannelResponseBodyDeliveryChannel extends $dara.Model {
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
   * Indicates whether to deliver compliance snapshots. Cloud Config delivers compliance and non-compliance information of resources to SLS. Valid values:
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
   * Indicates whether to deliver resource configuration changes. When the configuration of a resource changes, Cloud Config delivers the resource configuration changes to OSS, SLS, or MNS. Valid values:
   * 
   * - true: Deliver resource configuration changes.
   * 
   * - false: Do not deliver resource configuration changes.
   * 
   * @example
   * true
   */
  configurationItemChangeNotification?: boolean;
  /**
   * @remarks
   * Indicates whether to deliver scheduled resource snapshots. Cloud Config delivers scheduled resource snapshots to OSS or SLS at `04:00Z` and `16:00Z` (UTC) every day. Valid values:
   * 
   * - true: Deliver scheduled resource snapshots.
   * 
   * - false: Do not deliver scheduled resource snapshots.
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
   * The rule that is attached to the delivery channel. This parameter is available only for delivery channels of the MNS type and for snapshot deliveries to delivery channels of the SLS type.
   * 
   * - If you deliver data to an MNS topic, you can specify the lowest risk level of the events to subscribe to and the resource types to subscribe to.
   * 
   *   - The lowest risk level of the events to subscribe to: `{"filterType":"RuleRiskLevel","value":"1","multiple":false}`.
   * 
   *     The \\`value\\` parameter indicates the risk level. Valid values: 1 (high), 2 (medium), and 3 (low).
   * 
   *   - The resource types to subscribe to: `{"filterType":"ResourceType","values":["ACS::ACK::Cluster","ACS::ActionTrail::Trail","ACS::CBWP::CommonBandwidthPackage"],"multiple":true}`.
   * 
   *     The \\`values\\` parameter indicates the resource types. The value is a JSON array.
   *     Example:
   *     `[{"filterType":"ResourceType","values":["ACS::ActionTrail::Trail","ACS::CBWP::CommonBandwidthPackage","ACS::CDN::Domain","ACS::CEN::CenBandwidthPackage","ACS::CEN::CenInstance","ACS::CEN::Flowlog","ACS::DdosCoo::Instance"],"multiple":true}]`
   * 
   * - If you deliver snapshots to an SLS Logstore, you can specify the resource types to deliver: `{"filterType":"ResourceType","values":["ACS::ACK::Cluster","ACS::ActionTrail::Trail","ACS::CBWP::CommonBandwidthPackage"],"multiple":true}`.
   * 
   *   The \\`values\\` parameter indicates the resource types. The value is a JSON array.
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
   * - If the DeliveryChannelType parameter is set to OSS, this parameter is the ARN of the destination OSS bucket.
   * 
   * - If the DeliveryChannelType parameter is set to MNS, this parameter is the ARN of the destination MNS topic.
   * 
   * - If the DeliveryChannelType parameter is set to SLS, this parameter is the ARN of the destination Simple Log Service Logstore.
   * 
   * @example
   * acs:oss:cn-shanghai:120886317861****:new-bucket
   */
  deliveryChannelTargetArn?: string;
  /**
   * @remarks
   * The type of the delivery channel. Valid values:
   * 
   * - OSS: Object Storage Service.
   * 
   * - MNS: Simple Message Queue (formerly MNS).
   * 
   * - SLS: Simple Log Service.
   * 
   * @example
   * OSS
   */
  deliveryChannelType?: string;
  /**
   * @remarks
   * The time when Cloud Config starts to deliver scheduled resource snapshots every day.
   * 
   * The time is in the `HH:mmZ` format (UTC).
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
   * Indicates whether to deliver resource non-compliance events. When a resource is evaluated as non-compliant, Cloud Config delivers the non-compliance events to SLS or MNS. Valid values:
   * 
   * - true: Deliver resource non-compliance events.
   * 
   * - false: Do not deliver resource non-compliance events.
   * 
   * @example
   * false
   */
  nonCompliantNotification?: boolean;
  /**
   * @remarks
   * The ARN of the OSS bucket to which the delivered data is transferred when the size of the data exceeds the limit of the delivery channel.
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

export class GetConfigDeliveryChannelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the delivery channel.
   */
  deliveryChannel?: GetConfigDeliveryChannelResponseBodyDeliveryChannel;
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
      deliveryChannel: 'DeliveryChannel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryChannel: GetConfigDeliveryChannelResponseBodyDeliveryChannel,
      requestId: 'string',
    };
  }

  validate() {
    if(this.deliveryChannel && typeof (this.deliveryChannel as any).validate === 'function') {
      (this.deliveryChannel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

