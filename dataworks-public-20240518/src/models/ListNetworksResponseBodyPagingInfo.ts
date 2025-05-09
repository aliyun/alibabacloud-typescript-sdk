// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListNetworksResponseBodyPagingInfoNetworkList } from "./ListNetworksResponseBodyPagingInfoNetworkList";


export class ListNetworksResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The network resources of the serverless resource group.
   */
  networkList?: ListNetworksResponseBodyPagingInfoNetworkList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      networkList: 'NetworkList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkList: { 'type': 'array', 'itemType': ListNetworksResponseBodyPagingInfoNetworkList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.networkList)) {
      $dara.Model.validateArray(this.networkList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

