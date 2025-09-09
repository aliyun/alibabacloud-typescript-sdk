// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceAccountRequestDbPrivilege extends $dara.Model {
  /**
   * @remarks
   * The name of the database that you want to manage by using the account to create.
   * 
   * @example
   * test123
   */
  dbName?: string;
  /**
   * @remarks
   * The permissions that you want to grant to the account to manage the database.
   * 
   * @example
   * DDL
   */
  privilege?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      privilege: 'Privilege',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      privilege: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The username of the account you want to create.
   * 
   * This parameter is required.
   * 
   * @example
   * drds_sample_account
   */
  accountName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dbPrivilege?: CreateInstanceAccountRequestDbPrivilege[];
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance for which you want to create the account.
   * 
   * This parameter is required.
   * 
   * @example
   * drdsjiii1b49****
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The password of the account you want to create.
   * 
   * This parameter is required.
   * 
   * @example
   * drds_sample_password
   */
  password?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      dbPrivilege: 'DbPrivilege',
      drdsInstanceId: 'DrdsInstanceId',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      dbPrivilege: { 'type': 'array', 'itemType': CreateInstanceAccountRequestDbPrivilege },
      drdsInstanceId: 'string',
      password: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dbPrivilege)) {
      $dara.Model.validateArray(this.dbPrivilege);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

