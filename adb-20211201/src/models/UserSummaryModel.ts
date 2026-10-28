// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AccessTokenModel } from "./AccessTokenModel";


export class UserSummaryModel extends $dara.Model {
  /**
   * @remarks
   * The list of access tokens for the user.
   */
  accessTokens?: AccessTokenModel[];
  host?: string;
  /**
   * @remarks
   * The ID of the associated Alibaba Cloud RAM user.
   * 
   * @example
   * 1444832459****
   */
  ramUser?: string;
  /**
   * @remarks
   * The user status.
   */
  status?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * test_user
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      accessTokens: 'AccessTokens',
      host: 'Host',
      ramUser: 'RamUser',
      status: 'Status',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTokens: { 'type': 'array', 'itemType': AccessTokenModel },
      host: 'string',
      ramUser: 'string',
      status: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accessTokens)) {
      $dara.Model.validateArray(this.accessTokens);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

