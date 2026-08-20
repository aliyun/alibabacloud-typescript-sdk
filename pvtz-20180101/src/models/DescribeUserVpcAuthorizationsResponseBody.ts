// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserVpcAuthorizationsResponseBodyUsers extends $dara.Model {
  /**
   * @remarks
   * The authorization type. Valid values:
   * 
   * - NORMAL: A regular authorization.
   * 
   * - CLOUD_PRODUCT: An authorization for an Alibaba Cloud service.
   * 
   * @example
   * NORMAL
   */
  authType?: string;
  /**
   * @remarks
   * The name of the Alibaba Cloud account that owns the authorized resources.
   * 
   * @example
   * alidn****@test.com
   */
  authorizedAliyunId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the authorized resources.
   * 
   * @example
   * 141339776561****
   */
  authorizedUserId?: number;
  /**
   * @remarks
   * The time when the authorization was created.
   * 
   * @example
   * 2023-05-08T02:31Z
   */
  createTime?: string;
  /**
   * @remarks
   * The timestamp that indicates when the authorization was created.
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
   * The page number of the returned data.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * 46973D4C-E3E4-4ABA-9190-9A9DE406C7E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of authorizations.
   * 
   * @example
   * 100
   */
  totalItems?: number;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 5
   */
  totalPages?: number;
  /**
   * @remarks
   * The information about the Alibaba Cloud accounts that own the authorized resources.
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

