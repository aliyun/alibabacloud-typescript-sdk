// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthorizeUsersForAppShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. The application must be deployed in the image used by the app instance group. You can obtain the application ID from the Apps list returned by the [GetAppInstanceGroup](https://help.aliyun.com/document_detail/600836.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * ca-i87mycyn419nu****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the app instance group. You can call the [ListAppInstanceGroup](https://help.aliyun.com/document_detail/428506.html) operation to query the ID.
   * 
   * The application specified by AppId must be deployed in the image used by the app instance group.
   * 
   * This parameter is required.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The list of usernames of the users to be authorized for the application. You can specify up to 100 usernames in a single call.
   * 
   * You must specify at least one of AuthorizeUserIds and UnAuthorizeUserIds, or specify both. Adding authorization is subject to the authorized user quota limit of the application.
   */
  authorizeUserIds?: string[];
  /**
   * @remarks
   * The product type. Application-level authorization applies to WUYING Cloud App app instance groups.
   * 
   * Valid values:
   * 
   * - CloudApp: WUYING Cloud App.
   * 
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @remarks
   * The list of usernames of the users whose authorization for the application is to be removed. You can specify up to 100 usernames in a single call.
   * 
   * You must specify at least one of AuthorizeUserIds and UnAuthorizeUserIds, or specify both. Removing authorization is not subject to quota limits.
   */
  unAuthorizeUserIds?: string[];
  /**
   * @remarks
   * The account information of the authorized user, which is used to specify the account type corresponding to the username.
   * 
   * - **Required** if the workspace to which the app instance group belongs is an AD workspace: Set Type to ad, and set AdDomain to the AD domain bound to the workspace.
   * - If this parameter is not specified, the default account type is WUYING convenience account (simple).
   */
  userMetaShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appInstanceGroupId: 'AppInstanceGroupId',
      authorizeUserIds: 'AuthorizeUserIds',
      productType: 'ProductType',
      unAuthorizeUserIds: 'UnAuthorizeUserIds',
      userMetaShrink: 'UserMeta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appInstanceGroupId: 'string',
      authorizeUserIds: { 'type': 'array', 'itemType': 'string' },
      productType: 'string',
      unAuthorizeUserIds: { 'type': 'array', 'itemType': 'string' },
      userMetaShrink: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.authorizeUserIds)) {
      $dara.Model.validateArray(this.authorizeUserIds);
    }
    if(Array.isArray(this.unAuthorizeUserIds)) {
      $dara.Model.validateArray(this.unAuthorizeUserIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

