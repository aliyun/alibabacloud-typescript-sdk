// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthorizeInstanceGroupShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * 持久会话ID。
   * 
   * @example
   * p-0cc7s3mw2fg4j****
   */
  appInstancePersistentId?: string;
  /**
   * **if can be null:**
   * true
   */
  authorizeUserGroupIds?: string[];
  /**
   * @remarks
   * The IDs of the users that you want to add to the authorization list of the delivery group. You can specify 1 to 100 user IDs.
   */
  authorizeUserIds?: string[];
  /**
   * @example
   * default
   */
  avatarId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * **if can be null:**
   * true
   */
  unAuthorizeUserGroupIds?: string[];
  /**
   * @remarks
   * The IDs of the users that you want to remove from the authorization list of the delivery group. You can specify 1 to 100 user IDs.
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

