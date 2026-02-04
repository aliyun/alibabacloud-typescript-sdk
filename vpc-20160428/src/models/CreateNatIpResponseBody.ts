// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNatIpResponseBodyNatIps extends $dara.Model {
  /**
   * @remarks
   * The Ipv4Prefix of the created NatIpList list is returned when Ipv4Preix is created.
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
   * Returns the NatIp address of the created NatIpList list when Ipv4Preix is created.
   * 
   * @example
   * 192.168.2.128
   */
  natIp?: string;
  /**
   * @remarks
   * Returns the NatIpId of the created NatIpList list when Ipv4Preix is created.
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
   * The IPv4Prefix returned by the previous API is obsolete.
   * 
   * @example
   * ""
   */
  ipv4Prefix?: string;
  /**
   * @remarks
   * The NAT IP address.
   * 
   * @example
   * 192.168.0.34
   */
  natIp?: string;
  /**
   * @remarks
   * The ID of the NAT IP address.
   * 
   * @example
   * vpcnatip-gw8y7q3cpk3fggs8****
   */
  natIpId?: string;
  /**
   * @remarks
   * The NatIp parameter that is returned after you create a NatIp. If you use IPv4Prefix to create a NatIp, the information about all NatIp is returned. We recommend that you use this parameter to obtain the information about a NatIp when you create a NatIp.
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

