// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTransitRoutersResponseBodyTransitRoutersTags } from "./ListTransitRoutersResponseBodyTransitRoutersTags";
import { ListTransitRoutersResponseBodyTransitRoutersTransitRouterCidrList } from "./ListTransitRoutersResponseBodyTransitRoutersTransitRouterCidrList";


export class ListTransitRoutersResponseBodyTransitRouters extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the CEN instance belongs.
   * 
   * @example
   * 1210123456123456
   */
  aliUid?: number;
  /**
   * @remarks
   * The ID of the CEN instance.
   * 
   * @example
   * cen-j3jzhw1zpau2km****
   */
  cenId?: string;
  /**
   * @remarks
   * The time when the transit router was created.
   * 
   * The time follows the ISO8601 standard in the `YYYY-MM-DDThh:mmZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2021-03-15T09:39Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The ID of the region where the transit router is deployed.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The status of the transit router. Valid values:
   * 
   * *   **Creating**: The transit router is being created.
   * *   **Active**: The transit router is available.
   * *   **Modifying**: The transit router is being modified
   * *   **Deleting**: The transit router is being deleted.
   * *   **Upgrading**: The transit router is being upgraded.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether multicast is enabled for the transit router. Valid values:
   * 
   * *   **true**: enabled
   * *   **false**: disabled
   * 
   * @example
   * false
   */
  supportMulticast?: boolean;
  /**
   * @remarks
   * A list of tags.
   */
  tags?: ListTransitRoutersResponseBodyTransitRoutersTags[];
  /**
   * @remarks
   * The CIDR blocks of the transit router.
   */
  transitRouterCidrList?: ListTransitRoutersResponseBodyTransitRoutersTransitRouterCidrList[];
  /**
   * @remarks
   * The description of the transit router.
   * 
   * @example
   * testdesc
   */
  transitRouterDescription?: string;
  /**
   * @remarks
   * The ID of the transit router.
   * 
   * @example
   * tr-bp1su1ytdxtataupl****
   */
  transitRouterId?: string;
  /**
   * @remarks
   * The name of the transit router.
   * 
   * @example
   * testname
   */
  transitRouterName?: string;
  /**
   * @remarks
   * The edition of the transit router. Valid values:
   * 
   * *   **Enterprise**: Enhance Edition
   * *   **Basic**: Basic Edition
   * 
   * @example
   * Enterprise
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      cenId: 'CenId',
      creationTime: 'CreationTime',
      regionId: 'RegionId',
      status: 'Status',
      supportMulticast: 'SupportMulticast',
      tags: 'Tags',
      transitRouterCidrList: 'TransitRouterCidrList',
      transitRouterDescription: 'TransitRouterDescription',
      transitRouterId: 'TransitRouterId',
      transitRouterName: 'TransitRouterName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      cenId: 'string',
      creationTime: 'string',
      regionId: 'string',
      status: 'string',
      supportMulticast: 'boolean',
      tags: { 'type': 'array', 'itemType': ListTransitRoutersResponseBodyTransitRoutersTags },
      transitRouterCidrList: { 'type': 'array', 'itemType': ListTransitRoutersResponseBodyTransitRoutersTransitRouterCidrList },
      transitRouterDescription: 'string',
      transitRouterId: 'string',
      transitRouterName: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.transitRouterCidrList)) {
      $dara.Model.validateArray(this.transitRouterCidrList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

