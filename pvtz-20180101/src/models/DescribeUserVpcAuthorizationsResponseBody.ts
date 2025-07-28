// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserVpcAuthorizationsResponseBodyUsers extends $dara.Model {
  /**
   * @remarks
   * The authorization scope. Valid values:
   * 
   * *   NORMAL: general authorization
   * *   CLOUD_PRODUCT: cloud service-related authorization
   * 
   * @example
   * NORMAL
   */
  authType?: string;
  /**
   * @remarks
   * The name of the Alibaba Cloud account to which the permissions on the resources are granted.
   * 
   * @example
   * alidn****@test.com
   */
  authorizedAliyunId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the permissions on the resources are granted.
   * 
   * @example
   * 141339776561****
   */
  authorizedUserId?: number;
  /**
   * @remarks
   * The time when the authorization was performed. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-05-08T02:31Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the authorization was performed. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1672740294000
   */
  createTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      authType: 'AuthType',
      authorizedAliyunId: 'AuthorizedAliyunId',
      authorizedUserId: 'AuthorizedUserId',
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      authorizedAliyunId: 'string',
      authorizedUserId: 'number',
      createTime: 'string',
      createTimestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserVpcAuthorizationsResponseBody extends $dara.Model {
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
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 46973D4C-E3E4-4ABA-9190-9A9DE406C7E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalItems?: number;
  /**
   * @remarks
   * The total number of returned pages.
   * 
   * @example
   * 5
   */
  totalPages?: number;
  /**
   * @remarks
   * The Alibaba Cloud accounts to which the permissions on the resources are granted.
   */
  users?: DescribeUserVpcAuthorizationsResponseBodyUsers[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
      users: { 'type': 'array', 'itemType': DescribeUserVpcAuthorizationsResponseBodyUsers },
    };
  }

  validate() {
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

