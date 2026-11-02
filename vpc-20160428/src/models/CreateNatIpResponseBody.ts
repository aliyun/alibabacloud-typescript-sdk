// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNatIpResponseBodyNatIps extends $dara.Model {
  /**
   * @remarks
   * The IPv4 prefix in the list of created NAT IP addresses when an IPv4 prefix is created.
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
   * The NAT IP address in the list of created NAT IP addresses when an IPv4 prefix is created.
   * 
   * @example
   * 192.168.2.128
   */
  natIp?: string;
  /**
   * @remarks
   * The ID of the NAT IP address in the list of created NAT IP addresses when an IPv4 prefix is created.
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
   * **[Deprecated]** The Ipv4Prefix parameter returned by the legacy operation. This parameter is deprecated.
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
   * The NatIp parameter returned after a NAT IP address is created. If you use an IPv4 prefix to create NAT IP addresses, all NAT IP address information is returned. We recommend that you use this parameter to obtain NAT IP address information even when you create a single NAT IP address.
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

