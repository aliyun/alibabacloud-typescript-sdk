// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDhcpOptionsSetResponseBodyDhcpOptions extends $dara.Model {
  /**
   * @remarks
   * The suffix of the hostname.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The IP address of the DNS server.
   * 
   * @example
   * 192.XX.XX.123
   */
  domainNameServers?: string;
  /**
   * @remarks
   * The lease time of the IPv6 addresses for the DHCP options set.
   * 
   * *   If you use hours as the unit, Valid values are **24h to 1176h** and **87600h to 175200h**. Default value: **87600h**.
   * *   If you use days as the unit, Valid values are **1d to 49d** and **3650d to 7300d**. Default value: **3650d**.
   * 
   * @example
   * 3650d
   */
  ipv6LeaseTime?: string;
  /**
   * @remarks
   * The lease time of the IPv4 addresses for the DHCP options set.
   * 
   * *   If you use hours as the unit, valid values are **24h to 1176h** and **87600h to 175200h**. Default value: **87600h**.
   * *   If you use days as the unit, valid values are **1d to 49d** and **3650d to 7300d**. Default value: **3650d**.
   * 
   * @example
   * 3650d
   */
  leaseTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      domainNameServers: 'DomainNameServers',
      ipv6LeaseTime: 'Ipv6LeaseTime',
      leaseTime: 'LeaseTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      domainNameServers: 'string',
      ipv6LeaseTime: 'string',
      leaseTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

