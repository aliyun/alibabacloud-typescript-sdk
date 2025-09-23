// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceSharesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * >  The tag key can be 128 characters in length and cannot start with `acs:` or `aliyun`. The tag key cannot contain `http://` or `https://`.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * >  The tag value can be 128 characters in length and cannot start with `acs:`. The tag value cannot contain `http://` or `https://`.
   * 
   * @example
   * v1
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

export class ListResourceSharesRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return for a single request.
   * 
   * Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The `token` that is used to initiate the next request if the response of the current request is truncated. You can use the token to initiate another request and obtain the remaining records.
   * 
   * @example
   * TGlzdFJlc291cm****
   */
  nextToken?: string;
  /**
   * @remarks
   * The information about the permissions. For more information, see [Permission library](https://help.aliyun.com/document_detail/465474.html).
   * 
   * @example
   * AliyunRSDefaultPermissionVSwitch
   */
  permissionName?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekz5nlvlak****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The owner of the resource shares. Valid values:
   * 
   * *   Self: the current account
   * *   OtherAccounts: an account other than the current account
   * 
   * This parameter is required.
   * 
   * @example
   * Self
   */
  resourceOwner?: string;
  /**
   * @remarks
   * The IDs of the resource shares.
   * 
   * Valid values of N: 1 to 5. This indicates that a maximum of five resource shares can be specified at a time.
   * 
   * @example
   * rs-PqysnzIj****
   */
  resourceShareIds?: string[];
  /**
   * @remarks
   * The name of the resource share.
   * 
   * @example
   * test
   */
  resourceShareName?: string;
  /**
   * @remarks
   * The status of the resource shares. Valid values:
   * 
   * *   Active
   * *   Pending
   * *   Deleting
   * *   Deleted
   * 
   * >  The system automatically deletes the records of resource shares in the Deleted state within 48 hours to 96 hours after you delete the resource shares.
   * 
   * @example
   * Active
   */
  resourceShareStatus?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: ListResourceSharesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      permissionName: 'PermissionName',
      resourceGroupId: 'ResourceGroupId',
      resourceOwner: 'ResourceOwner',
      resourceShareIds: 'ResourceShareIds',
      resourceShareName: 'ResourceShareName',
      resourceShareStatus: 'ResourceShareStatus',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      permissionName: 'string',
      resourceGroupId: 'string',
      resourceOwner: 'string',
      resourceShareIds: { 'type': 'array', 'itemType': 'string' },
      resourceShareName: 'string',
      resourceShareStatus: 'string',
      tag: { 'type': 'array', 'itemType': ListResourceSharesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceShareIds)) {
      $dara.Model.validateArray(this.resourceShareIds);
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

