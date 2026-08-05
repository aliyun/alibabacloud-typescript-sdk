// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateYikeLoginTokenRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  autoCreateProduction?: string;
  /**
   * @example
   * 300
   */
  expires?: string;
  /**
   * @example
   * testNickName
   */
  nickName?: string;
  /**
   * @example
   * common
   */
  productionAuth?: string;
  /**
   * @example
   * 1000
   */
  subUserCredit?: string;
  /**
   * @example
   * tenttest
   */
  tenant?: string;
  /**
   * @example
   * userxxx
   */
  userName?: string;
  /**
   * @example
   * ws_8022674***
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      autoCreateProduction: 'AutoCreateProduction',
      expires: 'Expires',
      nickName: 'NickName',
      productionAuth: 'ProductionAuth',
      subUserCredit: 'SubUserCredit',
      tenant: 'Tenant',
      userName: 'UserName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCreateProduction: 'string',
      expires: 'string',
      nickName: 'string',
      productionAuth: 'string',
      subUserCredit: 'string',
      tenant: 'string',
      userName: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

