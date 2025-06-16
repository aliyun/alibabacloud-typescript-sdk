// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpnAttachmentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned by the current operation. **200** indicates that the operation is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The timestamp generated when the IPsec-VPN connection was established. Unit: milliseconds.
   * 
   * This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1658201810000
   */
  createTime?: number;
  /**
   * @remarks
   * The information returned by the current operation.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The name of the IPsec-VPN connection.
   * 
   * @example
   * nametest
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 88187252-0E26-3C4D-9D1D-32A04454EBBA
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the current operation is successful.
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the IPsec-VPN connection.
   * 
   * @example
   * vco-p0wb09rama8qwwgfn****
   */
  vpnConnectionId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      createTime: 'CreateTime',
      message: 'Message',
      name: 'Name',
      requestId: 'RequestId',
      success: 'Success',
      vpnConnectionId: 'VpnConnectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      createTime: 'number',
      message: 'string',
      name: 'string',
      requestId: 'string',
      success: 'boolean',
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

