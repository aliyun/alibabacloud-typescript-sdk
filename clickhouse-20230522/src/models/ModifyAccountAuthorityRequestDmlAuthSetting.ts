// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAccountAuthorityRequestDmlAuthSetting extends $dara.Model {
  /**
   * @remarks
   * The databases on which you want to grant permissions. Separate multiple databases with commas (,).
   */
  allowDatabases?: string[];
  /**
   * @remarks
   * The dictionaries on which you want to grant permissions. Separate multiple dictionaries with commas (,).
   */
  allowDictionaries?: string[];
  /**
   * @remarks
   * Specifies whether to grant the DDL permissions to the database account. Valid values:
   * 
   * *   **true**: The account has the permissions to execute DDL statements.
   * *   **false**: The account does not have the permissions to execute DDL statements.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  ddlAuthority?: boolean;
  /**
   * @remarks
   * Specifies whether to grant the DML permissions to the database account. Valid values:
   * 
   * *   **0**: The account has the permissions to read data from the database, write data to the database, and modify the settings of the database.
   * *   **1**: The account only has the permissions to read data from the database.
   * *   **2**: The account only has the permissions to read data from the database and modify the settings of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  dmlAuthority?: number;
  static names(): { [key: string]: string } {
    return {
      allowDatabases: 'AllowDatabases',
      allowDictionaries: 'AllowDictionaries',
      ddlAuthority: 'DdlAuthority',
      dmlAuthority: 'DmlAuthority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowDatabases: { 'type': 'array', 'itemType': 'string' },
      allowDictionaries: { 'type': 'array', 'itemType': 'string' },
      ddlAuthority: 'boolean',
      dmlAuthority: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.allowDatabases)) {
      $dara.Model.validateArray(this.allowDatabases);
    }
    if(Array.isArray(this.allowDictionaries)) {
      $dara.Model.validateArray(this.allowDictionaries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

