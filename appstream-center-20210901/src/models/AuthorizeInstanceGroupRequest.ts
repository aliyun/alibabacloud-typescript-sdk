// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AuthorizeInstanceGroupRequestUserMeta extends $dara.Model {
  /**
   * @remarks
   * The AD domain name.
   * 
   * @example
   * example.com
   */
  adDomain?: string;
  /**
   * @remarks
   * The user type.
   * 
   * @example
   * simple
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      adDomain: 'AdDomain',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adDomain: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeInstanceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The delivery group ID. You can call the [ListAppInstanceGroup](https://help.aliyun.com/document_detail/428506.html) operation to obtain the ID.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The delivery group set ID. You must specify either AppInstanceGroupSetId or AppInstanceGroupId, but not both.
   * 
   * @example
   * set-3jm9d0abc00example
   */
  appInstanceGroupSetId?: string;
  /**
   * @remarks
   * The persistent session ID.
   * 
   * > Metric description
   * > - This parameter is required when the authorization mode of the delivery group is Session. You can call the ListPersistentAppInstances operation to obtain a valid ID.
   * > - This parameter is required when ProductType is set to WuyingServer. You can call the ListPersistentAppInstances operation to obtain a valid ID.
   * 
   * @example
   * p-0cc7s3mw2fg4j****
   */
  appInstancePersistentId?: string;
  /**
   * @remarks
   * The list of authorized user group IDs to grant authorization.
   * 
   * **if can be null:**
   * true
   */
  authorizeUserGroupIds?: string[];
  /**
   * @remarks
   * The list of usernames to add to the delivery group authorization. You can specify 1 to 100 usernames.
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
   * The list of authorized user group IDs to revoke authorization.
   * 
   * **if can be null:**
   * true
   */
  unAuthorizeUserGroupIds?: string[];
  /**
   * @remarks
   * The list of usernames to remove from the delivery group authorization. You can specify 1 to 100 usernames.
   */
  unAuthorizeUserIds?: string[];
  /**
   * @remarks
   * The user information.
   */
  userMeta?: AuthorizeInstanceGroupRequestUserMeta;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceGroupSetId: 'AppInstanceGroupSetId',
      appInstancePersistentId: 'AppInstancePersistentId',
      authorizeUserGroupIds: 'AuthorizeUserGroupIds',
      authorizeUserIds: 'AuthorizeUserIds',
      avatarId: 'AvatarId',
      productType: 'ProductType',
      unAuthorizeUserGroupIds: 'UnAuthorizeUserGroupIds',
      unAuthorizeUserIds: 'UnAuthorizeUserIds',
      userMeta: 'UserMeta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      appInstanceGroupSetId: 'string',
      appInstancePersistentId: 'string',
      authorizeUserGroupIds: { 'type': 'array', 'itemType': 'string' },
      authorizeUserIds: { 'type': 'array', 'itemType': 'string' },
      avatarId: 'string',
      productType: 'string',
      unAuthorizeUserGroupIds: { 'type': 'array', 'itemType': 'string' },
      unAuthorizeUserIds: { 'type': 'array', 'itemType': 'string' },
      userMeta: AuthorizeInstanceGroupRequestUserMeta,
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
    if(this.userMeta && typeof (this.userMeta as any).validate === 'function') {
      (this.userMeta as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

