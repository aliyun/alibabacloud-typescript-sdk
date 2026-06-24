// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthorizeInstanceGroupShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The delivery group ID. You can call the [ListAppInstanceGroup](https://help.aliyun.com/document_detail/428506.html) operation to obtain the value.
   * 
   * This parameter is required.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The persistent session ID.
   * 
   * @example
   * p-0cc7s3mw2fg4j****
   */
  appInstancePersistentId?: string;
  /**
   * @remarks
   * The list of user group IDs to be authorized.
   * 
   * **if can be null:**
   * true
   */
  authorizeUserGroupIds?: string[];
  /**
   * @remarks
   * The list of usernames to be authorized for the delivery group. You can specify 1 to 100 usernames.
   */
  authorizeUserIds?: string[];
  /**
   * @remarks
   * The user avatar ID.
   * 
   * > This parameter is not available for public use.
   * 
   * @example
   * default
   */
  avatarId?: string;
  /**
   * @remarks
   * The product type.
   * 
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @remarks
   * The list of user group IDs to be deauthorized.
   * 
   * **if can be null:**
   * true
   */
  unAuthorizeUserGroupIds?: string[];
  /**
   * @remarks
   * The list of usernames to be deauthorized from the delivery group. You can specify 1 to 100 usernames.
   */
  unAuthorizeUserIds?: string[];
  /**
   * @remarks
   * The user information.
   */
  userMetaShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstancePersistentId: 'AppInstancePersistentId',
      authorizeUserGroupIds: 'AuthorizeUserGroupIds',
      authorizeUserIds: 'AuthorizeUserIds',
      avatarId: 'AvatarId',
      productType: 'ProductType',
      unAuthorizeUserGroupIds: 'UnAuthorizeUserGroupIds',
      unAuthorizeUserIds: 'UnAuthorizeUserIds',
      userMetaShrink: 'UserMeta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      appInstancePersistentId: 'string',
      authorizeUserGroupIds: { 'type': 'array', 'itemType': 'string' },
      authorizeUserIds: { 'type': 'array', 'itemType': 'string' },
      avatarId: 'string',
      productType: 'string',
      unAuthorizeUserGroupIds: { 'type': 'array', 'itemType': 'string' },
      unAuthorizeUserIds: { 'type': 'array', 'itemType': 'string' },
      userMetaShrink: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.authorizeUserGroupIds)) {
      $dara.Model.validateArray(this.authorizeUserGroupIds);
    }
    if(Array.isArray(this.authorizeUserIds)) {
      $dara.Model.validateArray(this.authorizeUserIds);
    }
    if(Array.isArray(this.unAuthorizeUserGroupIds)) {
      $dara.Model.validateArray(this.unAuthorizeUserGroupIds);
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

