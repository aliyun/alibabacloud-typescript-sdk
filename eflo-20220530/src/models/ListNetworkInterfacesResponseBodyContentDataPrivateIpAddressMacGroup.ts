// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNetworkInterfacesResponseBodyContentDataPrivateIpAddressMacGroup extends $dara.Model {
  /**
   * @remarks
   * The instance description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Secondary private MAC address.
   * 
   * @example
   * 00:25:9d:00:20:20
   */
  ipAddressMac?: string;
  /**
   * @remarks
   * The unique IP identifier.
   * 
   * @example
   * sip-1asjd3xg
   */
  ipName?: string;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The secondary private IP address.
   * 
   * @example
   * 10.0.0.14
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The status of the cache reserve instance.
   * 
   * @example
   * Available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      ipAddressMac: 'IpAddressMac',
      ipName: 'IpName',
      message: 'Message',
      privateIpAddress: 'PrivateIpAddress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      ipAddressMac: 'string',
      ipName: 'string',
      message: 'string',
      privateIpAddress: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

