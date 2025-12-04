// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVpdsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the VPN attachment.
   * 
   * You cannot specify an empty string as a tag key. It can be up to 64 characters in length and cannot start with aliyun or acs:. It cannot contain http:// or https://.
   * 
   * You can specify at most 20 tag keys in each call.
   * 
   * @example
   * tag-vpd-region
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the VPN connection.
   * 
   * The tag value can be empty or a string of up to 128 characters. It cannot start with aliyun or acs:, and cannot contain http:// or https://.
   * 
   * Each key-value pair must be unique. You can specify values for at most 20 tag keys in each call.
   * 
   * @example
   * wulanchabu
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

export class ListVpdsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable paged query.
   * 
   * @example
   * false
   */
  enablePage?: boolean;
  /**
   * @remarks
   * Queries the network segments of Lingjun that are not bound to a specified Lingjun HUB.
   * 
   * @example
   * er-kkopgtne
   */
  filterErId?: string;
  /**
   * @remarks
   * If you select a drop-down list, only the basic information (including the instance ID and instance name) is returned. Possible values:
   * 
   * *   **true**: Select Query Use from the drop-down list.
   * *   **false**: Normal queries are used.
   * 
   * @example
   * true
   */
  forSelect?: boolean;
  /**
   * @remarks
   * The page number of the page to return. Start value: 1 Default value: 1.
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
   * The resource group ID.
   * 
   * For more information about resource groups, see [Resource groups](https://help.aliyun.com/document_detail/94475.htm?spm=a2c4g.11186623.0.0.29e15d7akXhpuu).
   * 
   * @example
   * rg-aeky5f3qx6ceapq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the CLB instance. Valid values:
   * 
   * *   **Available**: Normal.
   * *   **Not Available**: Not available.
   * *   **Executing**: The task is being executed.
   * *   **Deleting**: The account is being deleted
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The tag information.
   * 
   * You can specify up to 20 tags.
   */
  tag?: ListVpdsRequestTag[];
  /**
   * @remarks
   * The ID of the VPD instance.
   * 
   * @example
   * vpd-fuliephf
   */
  vpdId?: string;
  /**
   * @remarks
   * The name of the VPD instance.
   * 
   * @example
   * vpd-1
   */
  vpdName?: string;
  /**
   * @remarks
   * Specifies whether to include the dependent resource information. We recommend that you do not query the dependent resource information when you query by page. You can query the dependent resource information separately when you delete it. Possible values:
   * 
   * *   **true**: with dependency information.
   * *   **false**: does not include dependency information.
   * 
   * @example
   * false
   */
  withDependence?: boolean;
  /**
   * @remarks
   * Queries the information about a Lingjun CIDR block that is not bound to a Lingjun connection. Possible values:
   * 
   * *   **true**: filters out VPDs that have been bound to VCC
   * *   **false**: does not filter VPD that has been bound to VCC
   * 
   * @example
   * true
   */
  withoutVcc?: boolean;
  static names(): { [key: string]: string } {
    return {
      enablePage: 'EnablePage',
      filterErId: 'FilterErId',
      forSelect: 'ForSelect',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tag: 'Tag',
      vpdId: 'VpdId',
      vpdName: 'VpdName',
      withDependence: 'WithDependence',
      withoutVcc: 'WithoutVcc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enablePage: 'boolean',
      filterErId: 'string',
      forSelect: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tag: { 'type': 'array', 'itemType': ListVpdsRequestTag },
      vpdId: 'string',
      vpdName: 'string',
      withDependence: 'boolean',
      withoutVcc: 'boolean',
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

