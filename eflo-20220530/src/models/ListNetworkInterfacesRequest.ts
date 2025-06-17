// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListNetworkInterfacesRequestTag } from "./ListNetworkInterfacesRequestTag";


export class ListNetworkInterfacesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether pagination is required.
   * 
   * @example
   * false
   */
  enablePage?: boolean;
  /**
   * @remarks
   * network interface controller the IP address.
   * 
   * @example
   * 203.107.46.227
   */
  ip?: string;
  /**
   * @remarks
   * Lingjun network interface controller ID.
   * 
   * @example
   * lni-bp18exxqa2rvfn45e5pz
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The ID of the machine to which the instance belongs.
   * 
   * @example
   * r-2ze121o4uhr4np3r5t-db-5
   */
  nodeId?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The current number of pages.
   * 
   * @example
   * 10
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
  /**
   * @remarks
   * The ID of the instance to which the Lingjun subnet belongs.
   * 
   * @example
   * subnet-anhtskts
   */
  subnetId?: string;
  /**
   * @remarks
   * The list of tags
   */
  tag?: ListNetworkInterfacesRequestTag[];
  /**
   * @remarks
   * The ID of the VPD.
   * 
   * @example
   * vpd-iv2zm1qf
   */
  vpdId?: string;
  static names(): { [key: string]: string } {
    return {
      enablePage: 'EnablePage',
      ip: 'Ip',
      networkInterfaceId: 'NetworkInterfaceId',
      nodeId: 'NodeId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      subnetId: 'SubnetId',
      tag: 'Tag',
      vpdId: 'VpdId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enablePage: 'boolean',
      ip: 'string',
      networkInterfaceId: 'string',
      nodeId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      subnetId: 'string',
      tag: { 'type': 'array', 'itemType': ListNetworkInterfacesRequestTag },
      vpdId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

