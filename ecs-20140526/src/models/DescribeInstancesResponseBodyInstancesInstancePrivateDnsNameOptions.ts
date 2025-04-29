// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesResponseBodyInstancesInstancePrivateDnsNameOptions extends $dara.Model {
  /**
   * @remarks
   * Indicates whether DNS Resolution from the Instance ID-based Hostname to the Instance Primary Private IPv6 Address (AAAA Record) is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  enableInstanceIdDnsAAAARecord?: boolean;
  /**
   * @remarks
   * Indicates whether DNS Resolution from the Instance ID-based Hostname to the Instance Primary Private IPv4 Address (A Record) is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  enableInstanceIdDnsARecord?: boolean;
  /**
   * @remarks
   * Indicates whether DNS Resolution from the IP Address-based Hostname to the Instance Primary Private IPv4 Address (A Record) is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  enableIpDnsARecord?: boolean;
  /**
   * @remarks
   * Indicates whether Reverse DNS Resolution from the Instance Primary Private IPv4 Address to the IP Address-based Hostname (PTR Record) is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  enableIpDnsPtrRecord?: boolean;
  /**
   * @remarks
   * The type of hostname. Valid values:
   * 
   * *   Custom: custom hostname
   * *   IpBased: IP address-based hostname
   * *   InstanceIdBased: instance ID-based hostname
   * 
   * Default value: Custom.
   * 
   * @example
   * Custom
   */
  hostnameType?: string;
  static names(): { [key: string]: string } {
    return {
      enableInstanceIdDnsAAAARecord: 'EnableInstanceIdDnsAAAARecord',
      enableInstanceIdDnsARecord: 'EnableInstanceIdDnsARecord',
      enableIpDnsARecord: 'EnableIpDnsARecord',
      enableIpDnsPtrRecord: 'EnableIpDnsPtrRecord',
      hostnameType: 'HostnameType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableInstanceIdDnsAAAARecord: 'boolean',
      enableInstanceIdDnsARecord: 'boolean',
      enableIpDnsARecord: 'boolean',
      enableIpDnsPtrRecord: 'boolean',
      hostnameType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

