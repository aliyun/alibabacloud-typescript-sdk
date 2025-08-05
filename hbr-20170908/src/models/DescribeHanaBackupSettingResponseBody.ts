// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHanaBackupSettingResponseBodyHanaBackupSetting extends $dara.Model {
  /**
   * @remarks
   * The configuration file for catalog backup.
   * 
   * @example
   * /usr/sap/SID/SYS/global/hdb/opt/hdbconfig/param
   */
  catalogBackupParameterFile?: string;
  /**
   * @remarks
   * Indicates whether Backint is used to back up catalogs. Valid values:
   * 
   * *   true: Backint is used to back up catalogs.
   * *   false: Backint is not used to back up catalogs.
   * 
   * @example
   * false
   */
  catalogBackupUsingBackint?: boolean;
  /**
   * @remarks
   * The configuration file for data backup.
   * 
   * @example
   * /usr/sap/SID/SYS/global/hdb/opt/hdbconfig/param
   */
  dataBackupParameterFile?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * SYSTEMDB
   */
  databaseName?: string;
  /**
   * @remarks
   * Indicates whether automatic log backup is enabled. Valid values:
   * 
   * *   **true**: Automatic log backup is enabled.
   * *   **false**: Automatic log backup is disabled.
   * 
   * @example
   * true
   */
  enableAutoLogBackup?: boolean;
  /**
   * @remarks
   * The configuration file for log backup.
   * 
   * @example
   * /usr/sap/SID/SYS/global/hdb/opt/hdbconfig/param
   */
  logBackupParameterFile?: string;
  /**
   * @remarks
   * The interval at which logs are backed up. Unit: seconds.
   * 
   * @example
   * 900
   */
  logBackupTimeout?: number;
  /**
   * @remarks
   * Indicates whether Backint is used to back up logs. Valid values:
   * 
   * *   true: Backint is used to back up logs.
   * *   false: Backint is not used to back up logs.
   * 
   * @example
   * true
   */
  logBackupUsingBackint?: boolean;
  static names(): { [key: string]: string } {
    return {
      catalogBackupParameterFile: 'CatalogBackupParameterFile',
      catalogBackupUsingBackint: 'CatalogBackupUsingBackint',
      dataBackupParameterFile: 'DataBackupParameterFile',
      databaseName: 'DatabaseName',
      enableAutoLogBackup: 'EnableAutoLogBackup',
      logBackupParameterFile: 'LogBackupParameterFile',
      logBackupTimeout: 'LogBackupTimeout',
      logBackupUsingBackint: 'LogBackupUsingBackint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogBackupParameterFile: 'string',
      catalogBackupUsingBackint: 'boolean',
      dataBackupParameterFile: 'string',
      databaseName: 'string',
      enableAutoLogBackup: 'boolean',
      logBackupParameterFile: 'string',
      logBackupTimeout: 'number',
      logBackupUsingBackint: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaBackupSettingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the call is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The backup settings.
   */
  hanaBackupSetting?: DescribeHanaBackupSettingResponseBodyHanaBackupSetting;
  /**
   * @remarks
   * The message that is returned. If the call is successful, "successful" is returned. If the call fails, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9D0DB5BC-5071-5ADF-BCD1-14EBB0C17C54
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * *   true: The call is successful.
   * *   false: The call fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hanaBackupSetting: 'HanaBackupSetting',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hanaBackupSetting: DescribeHanaBackupSettingResponseBodyHanaBackupSetting,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.hanaBackupSetting && typeof (this.hanaBackupSetting as any).validate === 'function') {
      (this.hanaBackupSetting as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

