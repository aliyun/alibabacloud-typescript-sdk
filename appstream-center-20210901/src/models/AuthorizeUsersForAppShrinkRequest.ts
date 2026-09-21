// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthorizeUsersForAppShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. The application must be deployed in the image used by the delivery group. You can obtain the ID from the Apps list returned by the [GetAppInstanceGroup](https://help.aliyun.com/document_detail/600836.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * ca-i87mycyn419nu****
   */
  appId?: string;
  /**
   * @remarks
   * The delivery group ID. You can call the [ListAppInstanceGroup](https://help.aliyun.com/document_detail/428506.html) operation to obtain the ID.
   * 
   * The application specified by AppId must be deployed in the image used by this delivery group.
   * 
   * This parameter is required.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The list of usernames to add authorization for the application. A maximum of 100 usernames can be specified in a single request.
   * 
   * At least one of AuthorizeUserIds and UnAuthorizeUserIds must be specified. You can also specify both. Adding authorization is subject to the authorized user quota for the application.
   */
  authorizeUserIds?: string[];
  /**
   * @remarks
   * The product type. Application-level authorization applies to WUYING Cloud Application delivery groups.
   * 
   * Valid values:
   * 
   * - CloudApp: WUYING Cloud Application.
   * 
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @remarks
   * The list of usernames to be unauthorized for the application. A maximum of 100 usernames can be specified in a single request.
   * 
   * At least one of AuthorizeUserIds and UnAuthorizeUserIds must be specified. You can also specify both. Removing authorizations is not subject to quota limits.
   */
  unAuthorizeUserIds?: string[];
  /**
   * @remarks
   * The account information of the authorized user, which specifies the account type corresponding to the username.
   * 
   * - If the workspace to which the delivery group belongs is an AD workspace, **this parameter is required**: set Type to ad and set AdDomain to the AD domain bound to the workspace.
   * - If this parameter is not specified, the WUYING convenience account (simple) is used by default.
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

