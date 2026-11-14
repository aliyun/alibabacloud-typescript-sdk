// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthorizedUsersResponseBodyUsers extends $dara.Model {
  /**
   * @remarks
   * The account type of the user. Valid values:
   * 
   * - simple: convenience account
   * - ad: AD domain account from an enterprise AD domain
   * 
   * @example
   * simple
   */
  accountType?: string;
  /**
   * @remarks
   * The application ID. This parameter is returned only when AppId is specified in the request, and the value is the same as the request parameter. This parameter is not returned if AppId is not specified or when querying by app instance group set.
   * 
   * @example
   * ca-i87mycyn419nu****
   */
  appId?: string;
  /**
   * @remarks
   * The app instance group ID of the authorization relationship to which the user belongs. When querying by app instance group, this value is the same as the request parameter. When querying by app instance group set, this value is the primary app instance group ID of the set.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The app instance group set ID. This parameter is returned only when querying by app instance group set, and the value is the same as the AppInstanceGroupSetId request parameter.
   * 
   * @example
   * set-3jm9d0abc00example
   */
  appInstanceGroupSetId?: string;
  /**
   * @remarks
   * The list of persistent session IDs granted to the user. This parameter is returned only when the authorization mode (AuthMode) of the app instance group is `Session`. This parameter is not affected by the filtering of the AppInstancePersistentId request parameter and always lists all persistent sessions granted to the user.
   */
  appInstancePersistentIds?: string[];
  /**
   * @remarks
   * The authorization mode of the app instance group, which determines the return scope of this operation. Valid values:
   * 
   * - App: Application authorization. This mode authorizes the applications under the app instance group to the user and does not restrict which sessions the user can use.
   * - Session: Session authorization. This mode authorizes the persistent sessions under the app instance group to the user and does not restrict which applications the user can use. In this case, AppInstancePersistentIds returns the persistent sessions granted to the user.
   * - AppInstanceGroup: App instance group authorization. This mode authorizes the entire app instance group to the user, allowing the user to use any session under the app instance group to open any application.
   * 
   * When querying by app instance group set, the authorization mode of the primary app instance group of the set is returned.
   * 
   * @example
   * AppInstanceGroup
   */
  authMode?: string;
  /**
   * @remarks
   * The email address of the user. This parameter is returned only when the account information of the user can be obtained.
   * 
   * @example
   * alice@example.com
   */
  email?: string;
  /**
   * @remarks
   * The username. To remove authorization, you can pass this value to the UnAuthorizeUserIds parameter of the [AuthorizeInstanceGroup](~~AuthorizeInstanceGroup~~) or [AuthorizeUsersForApp](~~AuthorizeUsersForApp~~) operation.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * Specifies whether the current query is not restricted to a specific application. Valid values:
   * 
   * - true: AppId is not specified in the request, and all authorized users under the app instance group are returned.
   * - false: AppId is specified in the request, and only the users specifically authorized for this application are returned.
   * 
   * > This field is determined by whether the AppId request parameter is specified, and is independent of the actual scope of applications the user is authorized for. You cannot use this field to determine whether the user is authorized for all applications.
   * 
   * @example
   * true
   */
  isAuthAllApps?: string;
  /**
   * @remarks
   * The phone number of the user. This parameter is returned only when the account information of the user can be obtained.
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
   * The total number of records that meet the query conditions. This parameter is used to determine whether to continue pagination.
   * 
   * - When the authorization mode is `App` or `AppInstanceGroup`, this value is the number of authorization records. If the same user has multiple authorization records, the user is counted multiple times. Therefore, this value may be greater than the actual number of users.
   * - When the authorization mode is `Session`, this value is the number of deduplicated users.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of authorized users on the current page. Multiple authorization records for the same user are merged into one item in the response. If no authorized users meet the conditions, an empty list is returned.
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

