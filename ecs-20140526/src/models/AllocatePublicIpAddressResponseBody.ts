// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocatePublicIpAddressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * ``112.124.**.**``
   */
  ipAddress?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ipAddress: 'IpAddress',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipAddress: 'string',
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

