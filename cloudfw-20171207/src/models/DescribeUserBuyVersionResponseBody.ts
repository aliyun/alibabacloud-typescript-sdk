// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserBuyVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The quota for ACK cluster connectors.
   * 
   * @example
   * 5
   */
  ackClusterConnectorQuota?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 119898001566xxxx
   */
  aliUid?: number;
  /**
   * @remarks
   * The default bandwidth of the edition.
   * 
   * @example
   * 1000
   */
  defaultBandwidth?: number;
  /**
   * @remarks
   * The expiration time of the Cloud Firewall instance.
   * 
   * > The value is a UNIX timestamp in milliseconds.
   * 
   * > This parameter does not apply to pay-as-you-go editions.
   * 
   * @example
   * 1726934400000
   */
  expire?: number;
  /**
   * @remarks
   * The extended bandwidth.
   * 
   * @example
   * 1000
   */
  extensionBandwidth?: number;
  /**
   * @remarks
   * The number of general-purpose instances.
   * 
   * @example
   * 10
   */
  generalInstance?: number;
  /**
   * @remarks
   * The ID of the Cloud Firewall instance.
   * 
   * > This parameter does not apply to trial editions.
   * 
   * @example
   * vipcloudfw-cn-xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The operational status of the Cloud Firewall instance. Valid values:
   * 
   * - **normal**: The instance is running as expected.
   * 
   * - **init**: The instance is being initialized.
   * 
   * - **deleting**: The instance is being deleted.
   * 
   * - **abnormal**: The instance is in an abnormal state.
   * 
   * - **free**: No valid instance is available.
   * 
   * @example
   * normal
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The purchased traffic processing capability for the Internet firewall.
   * 
   * @example
   * 3000
   */
  internetBandwidth?: number;
  /**
   * @remarks
   * The number of public IP addresses that can be protected.
   * 
   * > This parameter applies only to subscription instances.
   * 
   * @example
   * 63
   */
  ipNumber?: number;
  /**
   * @remarks
   * Indicates whether log delivery is enabled. Valid values:
   * 
   * - **true**: Enabled
   * 
   * - **false**: Disabled
   * 
   * @example
   * true
   */
  logStatus?: boolean;
  /**
   * @remarks
   * The purchased log storage capacity.
   * 
   * > This parameter applies only to subscription instances.
   * 
   * @example
   * 3000
   */
  logStorage?: number;
  /**
   * @remarks
   * The major version.
   * 
   * @example
   * 1
   */
  majorVersion?: number;
  /**
   * @remarks
   * Indicates whether elastic billing for excess traffic is enabled. Valid values:
   * 
   * - **1000000**: Enabled
   * 
   * - **0**: Disabled
   * 
   * > This parameter applies only to subscription instances.
   * 
   * @example
   * 0
   */
  maxOverflow?: number;
  /**
   * @remarks
   * The purchased traffic processing capability for the NAT firewall.
   * 
   * @example
   * 3000
   */
  natBandwidth?: number;
  /**
   * @remarks
   * The quota for private DNS connectors.
   * 
   * @example
   * 5
   */
  privateDnsConnectorQuota?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F71B03EE-xxxxx-91D79CC6AA1A
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether data leakage prevention is enabled.
   * 
   * @example
   * 1
   */
  sdl?: number;
  /**
   * @remarks
   * The time when the Cloud Firewall instance was enabled.
   * 
   * > The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1692504764000
   */
  startTime?: number;
  /**
   * @remarks
   * The temporary bandwidth.
   * 
   * @example
   * 1000
   */
  temporaryBandwidth?: number;
  /**
   * @remarks
   * Indicates whether threat intelligence is enabled.
   * 
   * @example
   * 1
   */
  threatIntelligence?: number;
  /**
   * @remarks
   * The status of the Cloud Firewall instance. Valid values:
   * 
   * - **true**: The instance is valid.
   * 
   * - **false**: The instance is invalid.
   * 
   * @example
   * true
   */
  userStatus?: boolean;
  /**
   * @remarks
   * The edition of the Cloud Firewall instance. Valid values:
   * 
   * - **2**: Premium Edition
   * 
   * - **3**: Enterprise Edition
   * 
   * - **4**: Ultimate Edition
   * 
   * - **10**: Pay-as-you-go
   * 
   * @example
   * 2
   */
  version?: number;
  /**
   * @remarks
   * The purchased traffic processing capability for the VPC firewall.
   * 
   * @example
   * 3000
   */
  vpcBandwidth?: number;
  /**
   * @remarks
   * The number of purchased VPC firewalls.
   * 
   * > This parameter applies only to subscription instances.
   * 
   * @example
   * 21
   */
  vpcNumber?: number;
  static names(): { [key: string]: string } {
    return {
      ackClusterConnectorQuota: 'AckClusterConnectorQuota',
      aliUid: 'AliUid',
      defaultBandwidth: 'DefaultBandwidth',
      expire: 'Expire',
      extensionBandwidth: 'ExtensionBandwidth',
      generalInstance: 'GeneralInstance',
      instanceId: 'InstanceId',
      instanceStatus: 'InstanceStatus',
      internetBandwidth: 'InternetBandwidth',
      ipNumber: 'IpNumber',
      logStatus: 'LogStatus',
      logStorage: 'LogStorage',
      majorVersion: 'MajorVersion',
      maxOverflow: 'MaxOverflow',
      natBandwidth: 'NatBandwidth',
      privateDnsConnectorQuota: 'PrivateDnsConnectorQuota',
      requestId: 'RequestId',
      sdl: 'Sdl',
      startTime: 'StartTime',
      temporaryBandwidth: 'TemporaryBandwidth',
      threatIntelligence: 'ThreatIntelligence',
      userStatus: 'UserStatus',
      version: 'Version',
      vpcBandwidth: 'VpcBandwidth',
      vpcNumber: 'VpcNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ackClusterConnectorQuota: 'number',
      aliUid: 'number',
      defaultBandwidth: 'number',
      expire: 'number',
      extensionBandwidth: 'number',
      generalInstance: 'number',
      instanceId: 'string',
      instanceStatus: 'string',
      internetBandwidth: 'number',
      ipNumber: 'number',
      logStatus: 'boolean',
      logStorage: 'number',
      majorVersion: 'number',
      maxOverflow: 'number',
      natBandwidth: 'number',
      privateDnsConnectorQuota: 'number',
      requestId: 'string',
      sdl: 'number',
      startTime: 'number',
      temporaryBandwidth: 'number',
      threatIntelligence: 'number',
      userStatus: 'boolean',
      version: 'number',
      vpcBandwidth: 'number',
      vpcNumber: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

