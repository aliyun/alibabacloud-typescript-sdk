// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConfigDeliveryChannelRequest extends $dara.Model {
  /**
   * @remarks
   * A client token. It is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that the value is unique among different requests.
   * 
   * `ClientToken` can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 1594295238-f9361358-5843-4294-8d30-b5183fac****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to deliver compliance snapshots. Cloud Config delivers the compliance and non-compliance information of resources to SLS. Valid values:
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
   * Specifies whether to deliver resource configuration histories. When the configuration of a resource changes, Cloud Config delivers the resource configuration history to OSS, SLS, or MNS. Valid values:
   * 
   * - true: Deliver resource configuration histories.
   * 
   * - false (default): Do not deliver resource configuration histories.
   * 
   * > * If the delivery channel is OSS, you must set at least one of `ConfigurationSnapshot` (scheduled resource snapshots) and `ConfigurationItemChangeNotification` (resource configuration histories) to true.
   * 
   * > - If the delivery channel is SLS, you must set at least one of `ConfigurationSnapshot` (scheduled resource snapshots), `CompliantSnapshot` (compliance snapshots), `ConfigurationItemChangeNotification` (resource configuration histories), and `NonCompliantNotification` (non-compliant events) to true.
   * 
   * > - If the delivery channel is MNS, you must set at least one of `ConfigurationItemChangeNotification` (resource configuration histories) and `NonCompliantNotification` (non-compliant events) to true.
   * 
   * @example
   * false
   */
  configurationItemChangeNotification?: boolean;
  /**
   * @remarks
   * Specifies whether to deliver scheduled resource snapshots. Cloud Config delivers scheduled resource snapshots to OSS or SLS at `04:00Z` and `16:00Z` (UTC) every day. Valid values:
   * 
   * - true: Deliver scheduled resource snapshots.
   * 
   * - false (default): Do not deliver scheduled resource snapshots.
   * 
   * > * If the delivery channel is OSS, you must set at least one of `ConfigurationSnapshot` (scheduled resource snapshots) and `ConfigurationItemChangeNotification` (resource configuration histories) to true.
   * 
   * > - If the delivery channel is SLS, you must set at least one of `ConfigurationSnapshot` (scheduled resource snapshots), `ConfigurationItemChangeNotification` (resource configuration histories), `CompliantSnapshot` (compliance snapshots), and `NonCompliantNotification` (non-compliant events) to true.
   * 
   * @example
   * true
   */
  configurationSnapshot?: boolean;
  /**
   * @remarks
   * An additional rule for the delivery channel. Use this rule to specify filter conditions for subscriptions.
   * 
   * - If you subscribe to compliance events, you can specify the minimum risk level and resource types as follows:
   * 
   *   - To specify the minimum risk level of events, use `{"filterType":"RuleRiskLevel","value":"1","multiple":false}`.
   * 
   *     `value` specifies the risk level to filter. Valid values: 1 for high, 2 for medium, and 3 for low.
   * 
   *     `multiple` specifies whether the filter supports multiple values. The risk level filter supports only a single value. Therefore, set `multiple` to `false` when you deliver compliance events.
   * 
   *   - To specify the resource types of events, use `{"filterType":"ResourceType","values":["ACS::ACK::Cluster","ACS::ActionTrail::Trail","ACS::CBWP::CommonBandwidthPackage"],"multiple":true}`.
   * 
   *     `values` specifies the resource types to which you want to subscribe. The value is a JSON array of resource types.
   *     Example:
   *     `[{"filterType":"ResourceType","values":["ACS::ActionTrail::Trail","ACS::CBWP::CommonBandwidthPackage","ACS::CDN::Domain","ACS::CEN::CenBandwidthPackage","ACS::CEN::CenInstance","ACS::CEN::Flowlog","ACS::DdosCoo::Instance"],"multiple":true}]`
   * 
   *     `multiple` specifies whether the filter supports multiple values. The resource type filter supports multiple values. If you select multiple resource types, set `multiple` to `true`.
   * 
   *   - You can also specify a risk level and resource types at the same time. Example:
   *     `[{"filterType":"RuleRiskLevel","value":"2","multiple":false},{"filterType":"ResourceType","values":["ACS::CDN::Domain","ACS::ActionTrail::Trail"],"multiple":true}]`
   * 
   * - If you subscribe to resource configuration deliveries, you can specify the resource types as `{"filterType":"ResourceType","values":["ACS::ACK::Cluster","ACS::ActionTrail::Trail","ACS::CBWP::CommonBandwidthPackage"],"multiple":true}`.
   * 
   *   `values` specifies the resource types that you want to deliver. The value is a JSON array of resource types.
   *   Example:
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
   * > If you do not set this parameter, the value is left empty.
   * 
   * @example
   * testoss
   */
  deliveryChannelName?: string;
  /**
   * @remarks
   * The ARN of the delivery destination. Valid values:
   * 
   * - If the delivery channel is OSS, the value is in the format of `acs:oss:{RegionId}:{accountId}:{bucketName}`. Example: `acs:oss:cn-shanghai:100931896542****:new-bucket`.
   * 
   * - If the delivery channel is MNS, the value is in the format of `acs:mns:{RegionId}:{accountId}:/topics/{topicName}`. Example: `acs:mns:cn-shanghai:100931896542****:/topics/topic1`.
   * 
   * - If the delivery channel is SLS, the value is in the format of `acs:log:{RegionId}:{accountId}:project/{projectName}/logstore/{logstoreName}`. Example: `acs:log:cn-shanghai:100931896542****:project/project1/logstore/logstore1`.
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
   * - OSS: Object Storage Service.
   * 
   * - MNS: Simple Message Queue (formerly MNS).
   * 
   * - SLS: Simple Log Service.
   * 
   * This parameter is required.
   * 
   * @example
   * OSS
   */
  deliveryChannelType?: string;
  /**
   * @remarks
   * The time when Cloud Config starts to deliver scheduled resource snapshots every day.
   * 
   * The value must be in the `HH:mmZ` format (UTC).
   * 
   * > When you enable scheduled resource snapshot delivery, you can use this parameter to customize the delivery time. If you do not set this parameter, the snapshots are delivered at `04:00Z` and `16:00Z` (UTC) by default.
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
   * Specifies whether to deliver non-compliant events. When a resource is evaluated as non-compliant, Cloud Config delivers the non-compliant event to SLS or MNS. Valid values:
   * 
   * - true: Deliver non-compliant events.
   * 
   * - false (default): Do not deliver non-compliant events.
   * 
   * > * If the delivery channel is SLS, you must set at least one of `ConfigurationSnapshot` (scheduled resource snapshots), `CompliantSnapshot` (compliance snapshots), `ConfigurationItemChangeNotification` (resource configuration histories), and `NonCompliantNotification` (non-compliant events) to true.
   * 
   * > - If the delivery channel is MNS, you must set at least one of `ConfigurationItemChangeNotification` (resource configuration histories) and `NonCompliantNotification` (non-compliant events) to true.
   * 
   * @example
   * false
   */
  nonCompliantNotification?: boolean;
  /**
   * @remarks
   * The ARN of the OSS bucket to which the oversized data is delivered when the size of the data exceeds the limit of the delivery channel. The format is `acs:oss:{RegionId}:{accountId}:{bucketName}`.
   * 
   * If you do not set this parameter, Cloud Config delivers only the summary of the data.
   * 
   * > This parameter is supported only for SLS and MNS delivery channels. The delivery channel limit for SLS is 1 MB. The delivery channel limit for MNS is 64 KB.
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

