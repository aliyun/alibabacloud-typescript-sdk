// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNatIpResponseBody extends $dara.Model {
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
   * The request ID.
   * 
   * @example
   * E9AD97A0-5338-43F8-8A80-5E274CCBA11B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      natIp: 'NatIp',
      natIpId: 'NatIpId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      natIp: 'string',
      natIpId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

