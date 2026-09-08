// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransitRoutersRequestFeatureFilter extends $dara.Model {
  /**
   * @remarks
   * The key of the feature filter for transit routers. Currently supported fields:
   * - **Multicast**: the multicast feature.
   * 
   * @example
   * Multicast
   */
  key?: string;
  /**
   * @remarks
   * The list of values for the feature filter of transit routers. When the key is **Multicast**, only one value is supported. Valid values:
   * - **Enabled**: multicast is supported.
   * - **Disabled**: multicast is not supported.
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRoutersRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource.
   * 
   * The tag key cannot be an empty string. The tag key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * You can specify up to 20 tag keys at a time.
   * 
   * @example
   * TagKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource.
   * 
   * The tag value can be an empty string or up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * Each tag key corresponds to one tag value. You can specify up to 20 tag values at a time.
   * 
   * @example
   * TagValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRoutersRequest extends $dara.Model {
  /**
   * @remarks
   * The CEN instance ID.
   * 
   * @example
   * cen-j3jzhw1zpau2km****
   */
  cenId?: string;
  /**
   * @remarks
   * The feature filter for transit routers.
   */
  featureFilter?: ListTransitRoutersRequestFeatureFilter[];
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paged query. Valid values: **1** to **50**. Default value: **10**. For more information about paging, see the related parameter descriptions.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the transit router instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The status of the transit router instance. Valid values:
   * 
   * - **Creating**: being created.
   * - **Active**: active.
   * - **Modifying**: being modified.
   * - **Deleting**: being deleted.
   * - **Upgrading**: being upgraded.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The tag information.
   * 
   * You can specify up to 20 tags at a time.
   */
  tag?: ListTransitRoutersRequestTag[];
  /**
   * @remarks
   * The transit router instance ID.
   * 
   * @example
   * tr-uf654ttymmljlvh2x****
   */
  transitRouterId?: string;
  /**
   * @remarks
   * The name of the transit router instance.
   * 
   * The name must be 1 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * testname
   */
  transitRouterName?: string;
  /**
   * @remarks
   * The type of the transit router instance. Valid values:
   * 
   * - **Enterprise**: Enterprise Edition transit router.
   * - **Basic**: Basic Edition transit router.
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

