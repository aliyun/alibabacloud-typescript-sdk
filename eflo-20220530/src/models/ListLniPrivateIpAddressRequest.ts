// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLniPrivateIpAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the variable.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Whether pagination is required
   * 
   * @example
   * false
   */
  enablePage?: boolean;
  /**
   * @remarks
   * network interface controller IP address
   * 
   * @example
   * 10.0.98.10
   */
  ip?: string;
  /**
   * @remarks
   * IP unique identifier
   * 
   * @example
   * sip-tynhdh2s
   */
  ipName?: string;
  /**
   * @remarks
   * Lingjun network interface controller ID
   * 
   * @example
   * lni-2ze4uww7n6hsfzrwq77y
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Obtain the index number of the current mouse click for an animation
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group instance ID
   * 
   * @example
   * rg-acfmzzka6bnjvbi
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      enablePage: 'EnablePage',
      ip: 'Ip',
      ipName: 'IpName',
      networkInterfaceId: 'NetworkInterfaceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      enablePage: 'boolean',
      ip: 'string',
      ipName: 'string',
      networkInterfaceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

