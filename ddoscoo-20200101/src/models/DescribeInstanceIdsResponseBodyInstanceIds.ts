// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceIdsResponseBodyInstanceIds extends $dara.Model {
  /**
   * @remarks
   * The type of the instance. Valid values:
   * 
   * *   **0**: Anti-DDoS Proxy (Outside Chinese Mainland) instance of the Insurance mitigation plan
   * *   **1**: Anti-DDoS Proxy (Outside Chinese Mainland) instance of the Unlimited mitigation plan
   * *   **2**: Anti-DDoS Proxy (Outside Chinese Mainland) instance of the CMA mitigation plan
   * *   **3**: Anti-DDoS Proxy (Outside Chinese Mainland) instance of the Sec-CMA mitigation plan
   * *   **9**: Anti-DDoS Proxy (Chinese Mainland) instance of the Profession mitigation plan
   * 
   * @example
   * 9
   */
  edition?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * ddoscoo-cn-zvp2eibz****
   */
  instanceId?: string;
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
   * The description of the instance.
   * 
   * @example
   * test
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      edition: 'Edition',
      instanceId: 'InstanceId',
      ipMode: 'IpMode',
      ipVersion: 'IpVersion',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edition: 'number',
      instanceId: 'string',
      ipMode: 'string',
      ipVersion: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

