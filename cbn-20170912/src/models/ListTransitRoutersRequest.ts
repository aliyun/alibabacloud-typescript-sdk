// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransitRoutersRequestFeatureFilter extends $dara.Model {
  /**
   * @remarks
   * The value of the field that is used to enable or disable a feature of the transit router. Supported fields:
   * 
   * *   **Multicast**: the multicast feature.
   * 
   * @example
   * Multicast
   */
  key?: string;
  /**
   * @remarks
   * The fields that are used to enable or disable the features of the transit router. The **Multicast** field supports only one value. Valid values:
   * 
   * *   **Enabled**: enables multicast.
   * *   **Disabled**: disables multicast.
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
   * The tag key.
   * 
   * The tag key cannot be an empty string. The tag key can be up to 64 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.
   * 
   * You can specify at most 20 tag keys.
   * 
   * @example
   * TagKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * The tag value can be 0 to 128 characters in length, and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * Each tag key must have a unique tag value. You can specify at most 20 tag values in each call.
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

