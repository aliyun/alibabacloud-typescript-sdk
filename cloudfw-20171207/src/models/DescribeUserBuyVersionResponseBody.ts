// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserBuyVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ACK cluster connector quota.
   * 
   * @example
   * 5
   */
  ackClusterConnectorQuota?: number;
  /**
   * @remarks
   * The AliUid of the Cloud Firewall account.
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
   * > The value is a millisecond-level UNIX timestamp.
   * 
   * > This field is meaningless when you use the pay-as-you-go edition.
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
   * The general-purpose instance quota.
   * 
   * @example
   * 10
   */
  generalInstance?: number;
  /**
   * @remarks
   * The ID of the purchased Cloud Firewall instance.
   * 
   * > This field is meaningless when you use the trial version.
   * 
   * @example
   * vipcloudfw-cn-xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The provisioning status of the Cloud Firewall instance. Valid values:
   * 
   * - **normal**: The instance is running normally.
   * 
   * - **init**: The instance is being initialized.
   * 
   * - **deleting**: The instance is being deleted. 
   * 
   * - **abnormal**: The instance is abnormal.
   * 
   * - **free**: No valid instance exists.
   * 
   * @example
   * normal
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The purchased traffic processing capacity of the Internet firewall.
   * 
   * @example
   * 3000
   */
  internetBandwidth?: number;
  /**
   * @remarks
   * The purchased quota for the Internet border protection.
   * 
   * > This field takes effect only for subscription users.
   * 
   * @example
   * 63
   */
  ipNumber?: number;
  /**
   * @remarks
   * The enabling status of log delivery. Valid values:
   * - **true**: Enabled.
   * - **false**: Disabled.
   * 
   * @example
   * true
   */
  logStatus?: boolean;
  /**
   * @remarks
   * The purchased log storage capacity.
   * > This field takes effect only for subscription users.
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
   * Indicates whether burstable elastic billing is enabled. Valid values:
   * - **1000000**: Enabled.
   * - **0**: Disabled.
   * 
   * > This field takes effect only for subscription users.
   * 
   * @example
   * 0
   */
  maxOverflow?: number;
  /**
   * @remarks
   * The purchased traffic processing capacity of NAT firewalls.
   * 
   * @example
   * 3000
   */
  natBandwidth?: number;
  /**
   * @remarks
   * The private DNS connector quota.
   * 
   * @example
   * 5
   */
  privateDnsConnectorQuota?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F71B03EE-xxxxx-91D79CC6AA1A
   */
  requestId?: string;
  /**
   * @remarks
   * The enabling status of sensitive data leak detection. In the Resource field, true indicates enabled and false indicates disabled. In the API response, 1 indicates enabled and 0 indicates disabled.
   * 
   * @example
   * 1
   */
  sdl?: number;
  /**
   * @remarks
   * The activation time of the Cloud Firewall instance.
   * > The value is a millisecond-level UNIX timestamp.
   * 
   * @example
   * 1692504764000
   */
  startTime?: number;
  /**
   * @remarks
   * The temporary upgrade bandwidth.
   * 
   * @example
   * 1000
   */
  temporaryBandwidth?: number;
  /**
   * @remarks
   * The enabling status of threat intelligence.
   * 
   * @example
   * 1
   */
  threatIntelligence?: number;
  /**
   * @remarks
   * The status of the Cloud Firewall instance. Valid values:
   * - **true**: Valid.
   * - **false**: Invalid.
   * 
   * @example
   * true
   */
  userStatus?: boolean;
  /**
   * @remarks
   * The version of the Cloud Firewall instance. Valid values:
   * - **2**: Premium Edition
   * - **3**: Enterprise Edition
   * - **4**: Ultimate Edition
   * - **10**: Pay-as-you-go Edition
   * 
   * @example
   * 2
   */
  version?: number;
  /**
   * @remarks
   * The purchased traffic processing capacity of VPC firewalls.
   * 
   * @example
   * 3000
   */
  vpcBandwidth?: number;
  /**
   * @remarks
   * The purchased quota for VPC firewalls.
   * 
   * > This field takes effect only for subscription users.
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

