// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigureBackupSetInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Physical
   */
  backupMethod?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Automated
   */
  backupMode?: string;
  /**
   * @example
   * ee-d84wwm3c****
   */
  backupSetId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  backupSetName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FullBackup
   */
  backupType?: string;
  /**
   * @example
   * ****
   */
  checkSum?: string;
  /**
   * @example
   * dbs
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ds-7iz7uw****
   */
  dataSourceId?: string;
  extraMeta?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionCode?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * WaitingUpload
   */
  uploadStatus?: string;
  static names(): { [key: string]: string } {
    return {
      backupMethod: 'BackupMethod',
      backupMode: 'BackupMode',
      backupSetId: 'BackupSetId',
      backupSetName: 'BackupSetName',
      backupType: 'BackupType',
      checkSum: 'CheckSum',
      clientToken: 'ClientToken',
      dataSourceId: 'DataSourceId',
      extraMeta: 'ExtraMeta',
      regionCode: 'RegionCode',
      regionId: 'RegionId',
      uploadStatus: 'UploadStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupMethod: 'string',
      backupMode: 'string',
      backupSetId: 'string',
      backupSetName: 'string',
      backupType: 'string',
      checkSum: 'string',
      clientToken: 'string',
      dataSourceId: 'string',
      extraMeta: 'string',
      regionCode: 'string',
      regionId: 'string',
      uploadStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

