// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpnAttachmentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned for the current task. **200** indicates that the task is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The timestamp when the IPsec-VPN connection was created. Unit: milliseconds.
   * 
   * The timestamp follows the UNIX time format. It is the number of milliseconds that have elapsed since 00:00:00 UTC on January 1, 1970.
   * 
   * @example
   * 1658201810000
   */
  createTime?: number;
  /**
   * @remarks
   * The message returned for the current task.
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
   * Indicates whether the current task is successfully executed.
   * 
   * - **true**: The task is successfully executed.
   * - **false**: The task fails to be executed.
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

