// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpnConnectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The timestamp when the IPsec-VPN connection was created. Unit: milliseconds.
   * 
   * The timestamp is in the UNIX timestamp format, which represents the total number of milliseconds that have elapsed since January 1, 1970, 00:00:00 (UTC) to the time when the IPsec-VPN connection was created.
   * 
   * @example
   * 1544666102000
   */
  createTime?: number;
  /**
   * @remarks
   * The name of the IPsec-VPN connection.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 082AD562-B8DB-4BB2-861F-DA1FCA01FD76
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the IPsec-VPN connection.
   * 
   * @example
   * vco-bp15oes1py4i6****
   */
  vpnConnectionId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      name: 'Name',
      requestId: 'RequestId',
      vpnConnectionId: 'VpnConnectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      name: 'string',
      requestId: 'string',
      vpnConnectionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

