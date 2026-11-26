// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCollaborationGroupMembersResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The display name. This field is empty if not set.
   * 
   * @example
   * TEST001
   */
  displayName?: string;
  /**
   * @remarks
   * The enabling status of the tenant account. Only active members are returned, so this value is always true. It does not represent the employment status.
   * 
   * @example
   * true
   */
  isActive?: boolean;
  /**
   * @remarks
   * The role of the workspace member.
   * 
   * @example
   * ADMIN
   */
  role?: string;
  /**
   * @remarks
   * The platform user ID.
   * 
   * @example
   * 5
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'displayName',
      isActive: 'isActive',
      role: 'role',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      isActive: 'boolean',
      role: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCollaborationGroupMembersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The common business status code.
   * 
   * @example
   * ERR.Robject.Auth.TenantAccessDenied
   */
  code?: string;
  /**
   * @remarks
   * The list of entries on the current page.
   * 
   * @example
   * [{"userId":"5","displayName":"Zhang San","role":"OWNER","isActive":true}]
   */
  items?: ListCollaborationGroupMembersResponseBodyItems[];
  /**
   * @remarks
   * The common error description.
   * 
   * @example
   * No permission to access tenant 2147483647. The user does not belong to this tenant
   */
  message?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request tracking ID.
   * 
   * @example
   * c9cf6cb3-3f5c-4994-a8a1-c93379a6f5cf
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records after filtering.
   * 
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      items: 'items',
      message: 'message',
      page: 'page',
      pageSize: 'pageSize',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      items: { 'type': 'array', 'itemType': ListCollaborationGroupMembersResponseBodyItems },
      message: 'string',
      page: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

