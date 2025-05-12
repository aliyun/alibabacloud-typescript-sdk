// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNetworkInterfaceResponseBodyContentPrivateIpAddressMacGroup extends $dara.Model {
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
   * Secondary private MAC address
   * 
   * @example
   * 01-00-5e-00-00-16
   */
  ipAddressMac?: string;
  /**
   * @remarks
   * IP unique identifier
   * 
   * @example
   * sip-xxxx
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
   * Secondary private IP address
   * 
   * @example
   * 172.23.161.57
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The state of the rule.
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

