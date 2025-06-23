// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesResponseBodyInstances extends $dara.Model {
  /**
   * @remarks
   * The time when the instance was created. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1637751953000
   */
  createTime?: number;
  /**
   * @remarks
   * The overdue status of the instance. The value is fixed as **0**, which indicates that your Alibaba Cloud account does not have overdue payments. The instance supports only the subscription billing method.
   * 
   * @example
   * 0
   */
  debtStatus?: number;
  /**
   * @remarks
   * The mitigation plan of the instance. Valid values:
   * 
   * *   **0**: Anti-DDoS Proxy (Outside Chinese Mainland) instance of the Insurance mitigation plan
   * *   **1**: Anti-DDoS Proxy (Outside Chinese Mainland) instance of the Unlimited mitigation plan
   * *   **2**: Anti-DDoS Proxy (Outside Chinese Mainland) instance of the Chinese Mainland Acceleration (CMA) mitigation plan
   * *   **9**: Anti-DDoS Proxy (Chinese Mainland) instance of the Profession mitigation plan
   * 
   * @example
   * 9
   */
  edition?: number;
  /**
   * @remarks
   * The traffic forwarding status of the instance. Valid values:
   * 
   * *   **0**: The instance no longer forwards service traffic.
   * *   **1**: The instance forwards service traffic as expected.
   * 
   * @example
   * 1
   */
  enabled?: number;
  /**
   * @remarks
   * The time when the instance expires. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1640361600000
   */
  expireTime?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * ddoscoo-cn-7pp2g9ed****
   */
  instanceId?: string;
  /**
   * @remarks
   * The IP address of the instance.
   * 
   * @example
   * 203.199.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The IP address-based forwarding mode of the instance. Valid values:
   * 
   * *   **fnat**: Requests from IPv4 addresses are forwarded to origin servers that use IPv4 addresses and requests from IPv6 addresses are forwarded to origin servers that use IPv6 addresses.
   * *   **v6tov4**: All requests are forwarded to origin servers that use IPv4 addresses.
   * 
   * @example
   * fnat
   */
  ipMode?: string;
  /**
   * @remarks
   * The IP version of the instance. Valid values:
   * 
   * *   **Ipv4**
   * *   **Ipv6**
   * 
   * @example
   * Ipv4
   */
  ipVersion?: string;
  /**
   * @remarks
   * Indicates whether the metering method of the 95th percentile burstable clean bandwidth is enabled for the instance. Valid values:
   * 
   * *   0: no
   * *   1: yes
   * 
   * @example
   * 0
   */
  isFirstOpenBw?: number;
  /**
   * @remarks
   * Indicates whether the metering method of the 95th percentile burstable QPS is enabled for the instance. Valid values:
   * 
   * *   0: no
   * *   1: yes
   * 
   * @example
   * 0
   */
  isFirstOpenQps?: number;
  /**
   * @remarks
   * The remarks of the instance.
   * 
   * @example
   * doc-test
   */
  remark?: string;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * *   **1**: normal
   * *   **2**: expired
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      debtStatus: 'DebtStatus',
      edition: 'Edition',
      enabled: 'Enabled',
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      ip: 'Ip',
      ipMode: 'IpMode',
      ipVersion: 'IpVersion',
      isFirstOpenBw: 'IsFirstOpenBw',
      isFirstOpenQps: 'IsFirstOpenQps',
      remark: 'Remark',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      debtStatus: 'number',
      edition: 'number',
      enabled: 'number',
      expireTime: 'number',
      instanceId: 'string',
      ip: 'string',
      ipMode: 'string',
      ipVersion: 'string',
      isFirstOpenBw: 'number',
      isFirstOpenQps: 'number',
      remark: 'string',
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

