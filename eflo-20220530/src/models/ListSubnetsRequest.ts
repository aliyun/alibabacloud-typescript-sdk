// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSubnetsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the VPN attachment.
   * 
   * You cannot specify an empty string as a tag key. It can be up to 64 characters in length and cannot start with aliyun or acs:. It cannot contain http:// or https://.
   * 
   * You can specify at most 20 tag keys in each call.
   * 
   * @example
   * rg-subnet
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
   * subnet-group-1
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

export class ListSubnetsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to query by page. Optional values:
   * 
   * *   **true**: Enable pagination query
   * *   **false**: Pagination query is disabled
   * 
   * @example
   * false
   */
  enablePage?: boolean;
  /**
   * @remarks
   * The number of the page to return. The value must be greater than 0. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the disk.
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
   * *   **Available**: Normal
   * *   **Not Available**: Unavailable
   * *   **Executing**: Executing
   * *   **Deleting**: The node is being deleted.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * Lingjun subnet instance ID
   * 
   * @example
   * subnet-anhtskts
   */
  subnetId?: string;
  /**
   * @remarks
   * Lingjun subnet instance name
   * 
   * @example
   * subnet-1
   */
  subnetName?: string;
  /**
   * @remarks
   * The tag information.
   * 
   * You can specify up to 20 tags.
   */
  tag?: ListSubnetsRequestTag[];
  /**
   * @remarks
   * Lingjun Subnet Usage Type; optional; optional. Valid values:
   * 
   * *   **If you do not set this field for a common type**
   * *   **OOB** :OOB type
   * *   **LB**: LB type
   * 
   * @example
   * Null
   */
  type?: string;
  /**
   * @remarks
   * The ID of the Lingjun CIDR block.
   * 
   * @example
   * vpd-fuliephf
   */
  vpdId?: string;
  /**
   * @remarks
   * The zone ID of the disk.
   * 
   * @example
   * cn-wulanchabu-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      enablePage: 'EnablePage',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      subnetId: 'SubnetId',
      subnetName: 'SubnetName',
      tag: 'Tag',
      type: 'Type',
      vpdId: 'VpdId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enablePage: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      subnetId: 'string',
      subnetName: 'string',
      tag: { 'type': 'array', 'itemType': ListSubnetsRequestTag },
      type: 'string',
      vpdId: 'string',
      zoneId: 'string',
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

