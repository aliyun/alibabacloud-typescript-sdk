// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTransitRoutersRequestFeatureFilter } from "./ListTransitRoutersRequestFeatureFilter";
import { ListTransitRoutersRequestTag } from "./ListTransitRoutersRequestTag";


export class ListTransitRoutersRequest extends $dara.Model {
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
   * The field that is used to enable or disable a feature of the transit router.
   */
  featureFilter?: ListTransitRoutersRequestFeatureFilter[];
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **1** to **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region where the transit router is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
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
   * The information about the tags.
   * 
   * You can specify at most 20 tags in each call.
   */
  tag?: ListTransitRoutersRequestTag[];
  /**
   * @remarks
   * The ID of the transit router.
   * 
   * @example
   * tr-uf654ttymmljlvh2x****
   */
  transitRouterId?: string;
  /**
   * @remarks
   * The name of the Enterprise Edition transit router.
   * 
   * The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter but cannot start with `http://` or `https://`.
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
      cenId: 'CenId',
      featureFilter: 'FeatureFilter',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
      tag: 'Tag',
      transitRouterId: 'TransitRouterId',
      transitRouterName: 'TransitRouterName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      featureFilter: { 'type': 'array', 'itemType': ListTransitRoutersRequestFeatureFilter },
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
      tag: { 'type': 'array', 'itemType': ListTransitRoutersRequestTag },
      transitRouterId: 'string',
      transitRouterName: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.featureFilter)) {
      $dara.Model.validateArray(this.featureFilter);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

