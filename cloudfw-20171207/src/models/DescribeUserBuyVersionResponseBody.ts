// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserBuyVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to purchase Cloud Firewall.
   * 
   * @example
   * 119898001566xxxx
   */
  aliUid?: number;
  /**
   * @remarks
   * The time when Cloud Firewall expires.
   * 
   * >  The value is a timestamp in milliseconds.
   * 
   * >  If you use Cloud Firewall that uses the pay-as-you-go billing method, ignore this parameter.
   * 
   * @example
   * 1726934400000
   */
  expire?: number;
  /**
   * @remarks
   * The instance ID of Cloud Firewall.
   * 
   * >  If you use a trial of Cloud Firewall, ignore this parameter.
   * 
   * @example
   * vipcloudfw-cn-xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The status of Cloud Firewall. Valid values:
   * 
   * *   **normal**: Cloud Firewall is running as expected.
   * *   **init**: Cloud Firewall is being initialized.
   * *   **deleting**: Cloud Firewall is being deleted.
   * *   **abnormal**: An exception occurs in Cloud Firewall.
   * *   **free**: Cloud Firewall is invalid.
   * 
   * @example
   * normal
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The peak Internet traffic that can be protected.
   * 
   * @example
   * 3000
   */
  internetBandwidth?: number;
  /**
   * @remarks
   * The number of public IP addresses that can be protected.
   * 
   * >  This parameter takes effect only for Cloud Firewall that uses the subscription billing method.
   * 
   * @example
   * 63
   */
  ipNumber?: number;
  /**
   * @remarks
   * Indicates whether log delivery is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  logStatus?: boolean;
  /**
   * @remarks
   * The log storage capacity.
   * 
   * >  This parameter takes effect only for Cloud Firewall that uses the subscription billing method.
   * 
   * @example
   * 3000
   */
  logStorage?: number;
  /**
   * @remarks
   * The status of the burstable protected traffic feature. Valid values:
   * 
   * *   **1000000**: enabled.
   * *   **0**: disabled.
   * 
   * >  This parameter takes effect only for Cloud Firewall that uses the subscription billing method.
   * 
   * @example
   * 0
   */
  maxOverflow?: number;
  /**
   * @remarks
   * The peak traffic of NAT private network that can be protected.
   * 
   * @example
   * 3000
   */
  natBandwidth?: number;
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
   * The time when Cloud Firewall was activated.
   * 
   * >  The value is a timestamp in milliseconds.
   * 
   * @example
   * 1692504764000
   */
  startTime?: number;
  /**
   * @remarks
   * Indicates whether Cloud Firewall is valid. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  userStatus?: boolean;
  /**
   * @remarks
   * The edition of Cloud Firewall. Valid values:
   * 
   * *   **2**: Premium Edition.
   * *   **3**: Enterprise Edition.
   * *   **4**: Ultimate Edition.
   * *   **10**: Cloud Firewall that uses the pay-as-you-go billing method.
   * 
   * @example
   * 2
   */
  version?: number;
  /**
   * @remarks
   * The peak cross-VPC traffic that can be protected.
   * 
   * @example
   * 3000
   */
  vpcBandwidth?: number;
  /**
   * @remarks
   * The number of virtual private clouds (VPCs) that can be protected.
   * 
   * >  This parameter takes effect only for Cloud Firewall that uses the subscription billing method.
   * 
   * @example
   * 21
   */
  vpcNumber?: number;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      expire: 'Expire',
      instanceId: 'InstanceId',
      instanceStatus: 'InstanceStatus',
      internetBandwidth: 'InternetBandwidth',
      ipNumber: 'IpNumber',
      logStatus: 'LogStatus',
      logStorage: 'LogStorage',
      maxOverflow: 'MaxOverflow',
      natBandwidth: 'NatBandwidth',
      requestId: 'RequestId',
      startTime: 'StartTime',
      userStatus: 'UserStatus',
      version: 'Version',
      vpcBandwidth: 'VpcBandwidth',
      vpcNumber: 'VpcNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      expire: 'number',
      instanceId: 'string',
      instanceStatus: 'string',
      internetBandwidth: 'number',
      ipNumber: 'number',
      logStatus: 'boolean',
      logStorage: 'number',
      maxOverflow: 'number',
      natBandwidth: 'number',
      requestId: 'string',
      startTime: 'number',
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

