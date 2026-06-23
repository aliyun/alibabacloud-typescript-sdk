// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNatIpResponseBodyNatIps extends $dara.Model {
  /**
   * @remarks
   * The IPv4 prefix in the list of NAT IP addresses created by using an IPv4 prefix.
   * 
   * @example
   * 192.168.1.128/28
   * 
   * **if can be null:**
   * true
   */
  ipv4Prefix?: string;
  /**
   * @remarks
   * The NAT IP address in the list of NAT IP addresses created by using an IPv4 prefix.
   * 
   * @example
   * 192.168.2.128
   */
  natIp?: string;
  /**
   * @remarks
   * The NAT IP address ID in the list of NAT IP addresses created by using an IPv4 prefix.
   * 
   * @example
   * vpcnatip-xxxxxxxx
   */
  natIpId?: string;
  static names(): { [key: string]: string } {
    return {
      ipv4Prefix: 'Ipv4Prefix',
      natIp: 'NatIp',
      natIpId: 'NatIpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv4Prefix: 'string',
      natIp: 'string',
      natIpId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNatIpResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IPv4 prefix returned by the legacy operation. This parameter is deprecated.
   * 
   * @example
   * ""
   */
  ipv4Prefix?: string;
  /**
   * @remarks
   * The created NAT IP address.
   * 
   * @example
   * 192.168.0.34
   */
  natIp?: string;
  /**
   * @remarks
   * The instance ID of the created NAT IP address.
   * 
   * @example
   * vpcnatip-gw8y7q3cpk3fggs8****
   */
  natIpId?: string;
  /**
   * @remarks
   * The NAT IP address information returned after the NAT IP address is created. When you create a NAT IP address by using an IPv4 prefix, all NAT IP address information is returned. When you create a single NAT IP address, we recommend that you use this parameter to obtain the NAT IP address information.
   */
  natIps?: CreateNatIpResponseBodyNatIps[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E9AD97A0-5338-43F8-8A80-5E274CCBA11B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ipv4Prefix: 'Ipv4Prefix',
      natIp: 'NatIp',
      natIpId: 'NatIpId',
      natIps: 'NatIps',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv4Prefix: 'string',
      natIp: 'string',
      natIpId: 'string',
      natIps: { 'type': 'array', 'itemType': CreateNatIpResponseBodyNatIps },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.natIps)) {
      $dara.Model.validateArray(this.natIps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

