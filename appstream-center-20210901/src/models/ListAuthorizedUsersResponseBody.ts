// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthorizedUsersResponseBodyUsers extends $dara.Model {
  /**
   * @remarks
   * The user account type.
   * 
   * - `simple`: convenience account.
   * - `ad`: Active Directory (AD) domain account.
   * 
   * @example
   * simple
   */
  accountType?: string;
  /**
   * @remarks
   * The application ID specified in this query. This field is not returned if no application filter condition is specified.
   * 
   * @example
   * app-3jm9d0abc00example
   */
  appId?: string;
  /**
   * @remarks
   * The delivery group ID to which the authorization relationship belongs. When querying cloud browsers, this is the browser group ID. When querying by set, this field is the primary delivery group ID of the set.
   * 
   * @example
   * big-3jm9d0abc00example
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The delivery group set ID of this query. This field is returned when querying by set.
   * 
   * @example
   * set-3jm9d0abc00example
   */
  appInstanceGroupSetId?: string;
  /**
   * @remarks
   * The list of persistent session IDs authorized to the user. This field is returned when the authorization mode is `Session`.
   */
  appInstancePersistentIds?: string[];
  /**
   * @remarks
   * The authorization mode of the delivery group. Valid values:
   * 
   * - `App`: Authorization by application.
   * - `Session`: Authorization by persistent session.
   * - `AppInstanceGroup`: Authorization by delivery group.
   * 
   * @example
   * AppInstanceGroup
   */
  authMode?: string;
  /**
   * @remarks
   * The email address of the user. This field may not be returned if the email address is not available.
   * 
   * @example
   * alice@example.com
   */
  email?: string;
  /**
   * @remarks
   * The authorized username.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * Indicates whether the query is not restricted to a specific application. Valid values:
   * 
   * - `true`: No application filter condition is specified.
   * - `false`: An application filter condition is specified.
   * 
   * This field is determined by the query conditions and cannot be used alone to determine whether the user is authorized for all applications.
   * 
   * @example
   * true
   */
  isAuthAllApps?: string;
  /**
   * @remarks
   * The phone number of the user. This field may not be returned if the phone number is not available.
   * 
   * @example
   * 138****0000
   */
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      appId: 'AppId',
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceGroupSetId: 'AppInstanceGroupSetId',
      appInstancePersistentIds: 'AppInstancePersistentIds',
      authMode: 'AuthMode',
      email: 'Email',
      endUserId: 'EndUserId',
      isAuthAllApps: 'IsAuthAllApps',
      phone: 'Phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      appId: 'string',
      appInstanceGroupId: 'string',
      appInstanceGroupSetId: 'string',
      appInstancePersistentIds: { 'type': 'array', 'itemType': 'string' },
      authMode: 'string',
      email: 'string',
      endUserId: 'string',
      isAuthAllApps: 'string',
      phone: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.appInstancePersistentIds)) {
      $dara.Model.validateArray(this.appInstancePersistentIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizedUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records per page in this request.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID, which is used to locate this call.
   * 
   * @example
   * 5C1A4F2D-713A-5C98-8AF6-1B5D0868****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of authorization records that match the query conditions.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of authorized users on the current page. An empty list is returned if no authorization records are matched.
   */
  users?: ListAuthorizedUsersResponseBodyUsers[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      users: { 'type': 'array', 'itemType': ListAuthorizedUsersResponseBodyUsers },
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

