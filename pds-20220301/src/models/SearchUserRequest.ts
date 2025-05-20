// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchUserRequest extends $dara.Model {
  /**
   * @remarks
   * The email address of the user.
   * 
   * @example
   * 123@pds.com
   */
  email?: string;
  /**
   * @remarks
   * The maximum number of results to return. Valid values: 1 to 100. Default value: 100.
   * 
   * @example
   * 100
   */
  limit?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of marker.\\
   * By default, this parameter is left empty.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  marker?: string;
  /**
   * @remarks
   * The nickname of the user. The nickname can be up to 128 characters in length.
   * 
   * @example
   * pdsuer
   */
  nickName?: string;
  /**
   * @remarks
   * The nickname used for fuzzy searches. The nickname can be up to 128 characters in length.
   * 
   * @example
   * la
   */
  nickNameForFuzzy?: string;
  /**
   * @remarks
   * The mobile number of the user.
   * 
   * @example
   * 13900001111
   */
  phone?: string;
  /**
   * @remarks
   * The role of the user. Valid values:
   * 
   * *   superadmin
   * *   admin
   * *   user
   * 
   * @example
   * user
   */
  role?: string;
  /**
   * @remarks
   * The state of the user. Valid values:
   * 
   * *   disabled: The user is prohibited from logon.
   * *   enabled: The user is in a normal state.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The name of the user. The name can be up to 128 characters in length.
   * 
   * @example
   * pds
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'email',
      limit: 'limit',
      marker: 'marker',
      nickName: 'nick_name',
      nickNameForFuzzy: 'nick_name_for_fuzzy',
      phone: 'phone',
      role: 'role',
      status: 'status',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      limit: 'number',
      marker: 'string',
      nickName: 'string',
      nickNameForFuzzy: 'string',
      phone: 'string',
      role: 'string',
      status: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

