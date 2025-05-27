// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmsAuthorizationLetterRequest extends $dara.Model {
  /**
   * @remarks
   * 委托授权书id列表
   */
  authorizationLetterIdList?: number[];
  /**
   * @remarks
   * 授权方社会统一信用代码
   * 
   * @example
   * 9****************A
   */
  organizationCode?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 签名名称（支持命中签名范围查询）
   * 
   * @example
   * 示例值示例值
   */
  signName?: string;
  /**
   * @remarks
   * 授权书审核状态，INT:审核中，PASSED:审核通过
   * 
   * @example
   * PASSED
   */
  state?: string;
  /**
   * @remarks
   * 授权书可用状态，VALID可用，INVALID不可用
   * 
   * @example
   * VALID
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationLetterIdList: 'AuthorizationLetterIdList',
      organizationCode: 'OrganizationCode',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signName: 'SignName',
      state: 'State',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationLetterIdList: { 'type': 'array', 'itemType': 'number' },
      organizationCode: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      signName: 'string',
      state: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.authorizationLetterIdList)) {
      $dara.Model.validateArray(this.authorizationLetterIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

