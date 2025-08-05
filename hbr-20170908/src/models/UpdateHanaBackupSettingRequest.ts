// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateHanaBackupSettingRequest extends $dara.Model {
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
   * Specifies whether to use Backint to back up catalogs. Valid values:
   * 
   * *   true: Backint is used to back up catalogs.
   * *   false: Backint is not used to back up catalogs.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  catalogBackupUsingBackint?: boolean;
  /**
   * @remarks
   * The ID of the SAP HANA instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cl-000ezvg******8znz
   */
  clusterId?: string;
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
   * This parameter is required.
   * 
   * @example
   * SYSTEMDB
   */
  databaseName?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic log backup. Valid values:
   * 
   * *   **true**: enables automatic log backup.
   * *   **false**: disables automatic log backup.
   * 
   * This parameter is required.
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
   * Specifies whether to use Backint to back up logs. Valid values:
   * 
   * *   true: Backint is used to back up logs.
   * *   false: Backint is not used to back up logs.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  logBackupUsingBackint?: boolean;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * @example
   * v-0005n******rluw5
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      catalogBackupParameterFile: 'CatalogBackupParameterFile',
      catalogBackupUsingBackint: 'CatalogBackupUsingBackint',
      clusterId: 'ClusterId',
      dataBackupParameterFile: 'DataBackupParameterFile',
      databaseName: 'DatabaseName',
      enableAutoLogBackup: 'EnableAutoLogBackup',
      logBackupParameterFile: 'LogBackupParameterFile',
      logBackupTimeout: 'LogBackupTimeout',
      logBackupUsingBackint: 'LogBackupUsingBackint',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogBackupParameterFile: 'string',
      catalogBackupUsingBackint: 'boolean',
      clusterId: 'string',
      dataBackupParameterFile: 'string',
      databaseName: 'string',
      enableAutoLogBackup: 'boolean',
      logBackupParameterFile: 'string',
      logBackupTimeout: 'number',
      logBackupUsingBackint: 'boolean',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

