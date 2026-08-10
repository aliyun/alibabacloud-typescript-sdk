// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateYikeLoginTokenRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether automatic creation of a project is enabled. Default value: false.
   * 
   * @example
   * false
   */
  autoCreateProduction?: string;
  /**
   * @remarks
   * The token expiration time, in seconds. Default value: 30 days.
   * 
   * @example
   * 0
   */
  expires?: string;
  /**
   * @remarks
   * The nickname.
   * 
   * - Format check: The maximum length is 50 characters.
   * - Special format validation: Chinese characters, English characters, digits, _ \\ / () ] [
   * 
   * @example
   * 冯凯
   */
  nickName?: string;
  /**
   * @remarks
   * The role of the user in the project.
   * 
   * @example
   * common
   */
  productionAuth?: string;
  /**
   * @remarks
   * The default credits granted to the user.
   * 
   * @example
   * 1000
   */
  subUserCredit?: string;
  /**
   * @remarks
   * The tenant identifier.
   * 
   * @example
   * wanyou
   */
  tenant?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * userxxx
   */
  userName?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 581236
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

