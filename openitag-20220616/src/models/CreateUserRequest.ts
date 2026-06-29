// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserRequest extends $dara.Model {
  /**
   * @remarks
   * UID of the RAM user (sub-account) under the current Alibaba Cloud account (primary account). For information about how to obtain the UID, see [GetUser](https://help.aliyun.com/document_detail/2330970.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 166***980757310
   */
  accountNo?: string;
  /**
   * @remarks
   * Account type. Only ALIYUN is currently supported.
   * 
   * This parameter is required.
   * 
   * @example
   * ALIYUN
   */
  accountType?: string;
  /**
   * @remarks
   * Role. Valid values:  
   * - OPERATOR: Annotator.  
   * - ADMIN: Administrator.  
   * - LEADER: Annotation team leader.
   * 
   * This parameter is required.
   * 
   * @example
   * ADMIN
   */
  role?: string;
  /**
   * @remarks
   * Username.
   * 
   * @example
   * user1
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      accountNo: 'AccountNo',
      accountType: 'AccountType',
      role: 'Role',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNo: 'string',
      accountType: 'string',
      role: 'string',
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

