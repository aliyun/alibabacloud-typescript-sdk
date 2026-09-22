// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthorizedUsersResponseBodyUsers extends $dara.Model {
  /**
   * @remarks
   * The account type of the user. Valid values:
   * 
   * - simple: Convenience account.
   * - ad: Active Directory (AD) domain account, which originates from an enterprise AD domain.
   * 
   * @example
   * simple
   */
  accountType?: string;
  /**
   * @remarks
   * The application ID. Returned only when AppId is specified in the request. The value is the same as the request parameter. Not returned if AppId is not specified or when querying by delivery group set.
   * 
   * @example
   * ca-i87mycyn419nu****
   */
  appId?: string;
  /**
   * @remarks
   * The delivery group ID associated with the user\\"s authorization relationship. When querying by delivery group, this value is the same as the request parameter. When querying by delivery group set, this value is the primary delivery group ID of the set.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The delivery group set ID. Returned only when querying by delivery group set. The value is the same as the AppInstanceGroupSetId request parameter.
   * 
   * @example
   * set-3jm9d0abc00example
   */
  appInstanceGroupSetId?: string;
  /**
   * @remarks
   * The list of persistent session IDs granted to the user. Returned only when the delivery group authorization mode (AuthMode) is `Session`. This list is not affected by the AppInstancePersistentId request parameter and always includes all persistent sessions granted to the user.
   */
  appInstancePersistentIds?: string[];
  /**
   * @remarks
   * The authorization mode of the delivery group, which determines the scope of results returned by this operation. Valid values:
   * 
   * - App: Application-level authorization. Applications within the delivery group are authorized to users without restricting which sessions the users can use.
   * - Session: Session-level authorization. Persistent sessions within the delivery group are authorized to users without restricting which applications the users can use. In this case, AppInstancePersistentIds returns the persistent sessions granted to the user.
   * - AppInstanceGroup: Delivery group-level authorization. The entire delivery group is authorized to users, allowing them to open any application using any session within the delivery group.
   * 
   * When querying by delivery group set, the authorization mode of the primary delivery group in the set is returned.
   * 
   * @example
   * AppInstanceGroup
   */
  authMode?: string;
  /**
   * @remarks
   * The email address of the user. Returned only when the account information of the user can be retrieved.
   * 
   * @example
   * alice@example.com
   */
  email?: string;
  /**
   * @remarks
   * The username. To remove authorization, pass this value to the UnAuthorizeUserIds parameter of the [AuthorizeInstanceGroup](~~AuthorizeInstanceGroup~~) or [AuthorizeUsersForApp](~~AuthorizeUsersForApp~~) operation.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * Indicates whether the query is not restricted to a specific application. Valid values:
   * 
   * - true: AppId is not specified in the request. All authorized users under the delivery group are returned.
   * - false: AppId is specified in the request. Only users authorized for that specific application are returned.
   * 
   * > This field is determined by whether the AppId request parameter is specified. It does not reflect the actual scope of applications authorized to the user and cannot be used to determine whether the user is authorized for all applications.
   * 
   * @example
   * true
   */
  isAuthAllApps?: string;
  /**
   * @remarks
   * The phone number of the user. Returned only when the account information of the user can be retrieved.
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
   * The current page number, which is the same as the PageNumber request parameter.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records per page, which is the same as the PageSize request parameter.
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
   * 5C1A4F2D-713A-5C98-8AF6-1B5D0868****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records that match the query conditions. Use this value to determine whether to continue paging.
   * 
   * - When the authorization mode is `App` or `AppInstanceGroup`, this is the number of authorization records. If the same user has multiple authorization records, the user is counted multiple times. Therefore, this value may be greater than the actual number of users.
   * - When the authorization mode is `Session`, this is the deduplicated user count.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of authorized users on the current page. Multiple authorization records for the same user are merged into a single entry. An empty list is returned if no authorized users match the conditions.
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

