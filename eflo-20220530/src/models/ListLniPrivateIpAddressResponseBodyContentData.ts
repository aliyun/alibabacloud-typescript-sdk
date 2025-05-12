// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLniPrivateIpAddressResponseBodyContentData extends $dara.Model {
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
   * The time when the data address was created.
   * 
   * @example
   * 1651734291000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * MAC address of the secondary private network
   * 
   * @example
   * 00-ff-84-15-ba-67
   */
  ipAddressMac?: string;
  /**
   * @remarks
   * IP unique identifier
   * 
   * @example
   * sip-1hq1ql7vz
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
   * Lingjun network interface controller ID
   * 
   * @example
   * lni-bp11hq1ql7vza3k4xz7q
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * Secondary private IP address of Lingjun network interface controller
   * 
   * @example
   * 10.42.5.92
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The status of the intervention entry. Valid value:
   * 
   * @example
   * Available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gmtCreate: 'GmtCreate',
      ipAddressMac: 'IpAddressMac',
      ipName: 'IpName',
      message: 'Message',
      networkInterfaceId: 'NetworkInterfaceId',
      privateIpAddress: 'PrivateIpAddress',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gmtCreate: 'string',
      ipAddressMac: 'string',
      ipName: 'string',
      message: 'string',
      networkInterfaceId: 'string',
      privateIpAddress: 'string',
      regionId: 'string',
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

