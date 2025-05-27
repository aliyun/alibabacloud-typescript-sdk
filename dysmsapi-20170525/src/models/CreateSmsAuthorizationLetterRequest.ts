// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSmsAuthorizationLetterRequest extends $dara.Model {
  /**
   * @remarks
   * 授权方，授权方命名长度不超过1000个字符，暂不支持包含除中点（·）、空格、中文括号【】、英文括号()外的任何符号或纯数字输入
   * 
   * This parameter is required.
   * 
   * @example
   * 阿里云有限公司
   */
  authorization?: string;
  /**
   * @remarks
   * 委托授权书有效期
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-01-01~2026-01-01
   */
  authorizationLetterExpDate?: string;
  /**
   * @remarks
   * 委托授权书命名非空，不超过100个字符，支持中文、英文或与数字组合进行命名，暂不支持任何符号或纯数字输入
   * 
   * This parameter is required.
   * 
   * @example
   * xxx公司授权书
   */
  authorizationLetterName?: string;
  /**
   * @remarks
   * 上传oss的委托授权书图片标识
   * 
   * This parameter is required.
   */
  authorizationLetterPic?: string;
  /**
   * @remarks
   * 授权方社会统一信用代码，长度不超过150个字符
   * 
   * This parameter is required.
   * 
   * @example
   * 9****************A
   */
  organizationCode?: string;
  ownerId?: number;
  /**
   * @remarks
   * 被授权方，被授权方命名长度不超过1000个字符，暂不支持包含除中点（·）、空格、中文括号【】、英文括号()外的任何符号或纯数字输入
   * 
   * This parameter is required.
   * 
   * @example
   * xxx公司
   */
  proxyAuthorization?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 委托授权签名列表，签名数量限制100个以内
   * 
   * This parameter is required.
   */
  signList?: string[];
  static names(): { [key: string]: string } {
    return {
      authorization: 'Authorization',
      authorizationLetterExpDate: 'AuthorizationLetterExpDate',
      authorizationLetterName: 'AuthorizationLetterName',
      authorizationLetterPic: 'AuthorizationLetterPic',
      organizationCode: 'OrganizationCode',
      ownerId: 'OwnerId',
      proxyAuthorization: 'ProxyAuthorization',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signList: 'SignList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorization: 'string',
      authorizationLetterExpDate: 'string',
      authorizationLetterName: 'string',
      authorizationLetterPic: 'string',
      organizationCode: 'string',
      ownerId: 'number',
      proxyAuthorization: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      signList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.signList)) {
      $dara.Model.validateArray(this.signList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

