// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AuthorizeInstanceGroupRequestUserMeta extends $dara.Model {
  /**
   * @remarks
   * AD 網域名稱。
   * 
   * @example
   * example.com
   */
  adDomain?: string;
  /**
   * @remarks
   * 使用者類型。
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
   * 交付群組 ID。可呼叫 [ListAppInstanceGroup](https://help.aliyun.com/document_detail/428506.html) 介面取得。
   * 
   * This parameter is required.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * 持續性工作階段 ID。
   * 
   * @example
   * p-0cc7s3mw2fg4j****
   */
  appInstancePersistentId?: string;
  /**
   * @remarks
   * 授權使用者群組 ID 清單。
   * 
   * **if can be null:**
   * true
   */
  authorizeUserGroupIds?: string[];
  /**
   * @remarks
   * 要新增交付群組授權的使用者名稱清單。可設定 1\\~100 個。
   */
  authorizeUserIds?: string[];
  /**
   * @remarks
   * 使用者分身 ID。
   * 
   * > 此參數未開放使用。
   * 
   * @example
   * default
   */
  avatarId?: string;
  /**
   * @remarks
   * 產品類型。
   * 
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @remarks
   * 取消授權使用者群組 ID 清單。
   * 
   * **if can be null:**
   * true
   */
  unAuthorizeUserGroupIds?: string[];
  /**
   * @remarks
   * 要移除交付群組授權的使用者名稱清單。可設定 1\\~100 個。
   */
  unAuthorizeUserIds?: string[];
  /**
   * @remarks
   * 使用者資訊。
   */
  userMeta?: AuthorizeInstanceGroupRequestUserMeta;
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
      userMeta: 'UserMeta',
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

