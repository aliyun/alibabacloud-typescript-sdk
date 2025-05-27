// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmsAuthorizationLetterResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 委托授权方
   * 
   * @example
   * 示例值示例值
   */
  authorization?: string;
  /**
   * @remarks
   * 委托授权书有效期
   * 
   * @example
   * 2023-01-01~2026-01-01
   */
  authorizationLetterExpDate?: string;
  /**
   * @remarks
   * 委托授权书id
   * 
   * @example
   * 10000******
   */
  authorizationLetterId?: number;
  /**
   * @remarks
   * 委托授权书命名
   * 
   * @example
   * 示例值示例值
   */
  authorizationLetterName?: string;
  /**
   * @remarks
   * 委托授权书图片地址
   */
  authorizationLetterPic?: string;
  /**
   * @remarks
   * 授权方统一社会信用代码
   * 
   * @example
   * 9****************A
   */
  organizationCode?: string;
  /**
   * @remarks
   * 被委托授权方
   * 
   * @example
   * 示例值示例值示例值
   */
  proxyAuthorization?: string;
  /**
   * @remarks
   * 委托授权签名范围
   * 
   * @example
   * 示例值
   */
  signScope?: string;
  /**
   * @remarks
   * 委托授权书审核状态（初始化INT/审核通过PASSED）
   * 
   * @example
   * PASSED
   */
  state?: string;
  /**
   * @remarks
   * 委托授权书可用状态（可用VALID/不可用INVALID）
   * 
   * @example
   * VALID
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      authorization: 'Authorization',
      authorizationLetterExpDate: 'AuthorizationLetterExpDate',
      authorizationLetterId: 'AuthorizationLetterId',
      authorizationLetterName: 'AuthorizationLetterName',
      authorizationLetterPic: 'AuthorizationLetterPic',
      organizationCode: 'OrganizationCode',
      proxyAuthorization: 'ProxyAuthorization',
      signScope: 'SignScope',
      state: 'State',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorization: 'string',
      authorizationLetterExpDate: 'string',
      authorizationLetterId: 'number',
      authorizationLetterName: 'string',
      authorizationLetterPic: 'string',
      organizationCode: 'string',
      proxyAuthorization: 'string',
      signScope: 'string',
      state: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

