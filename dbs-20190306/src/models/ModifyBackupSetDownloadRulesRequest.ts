// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBackupSetDownloadRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup gateway that is used to download the backup set.
   * 
   * @example
   * 2331****
   */
  backupGatewayId?: number;
  /**
   * @remarks
   * The ID of the backup schedule.
   * 
   * This parameter is required.
   * 
   * @example
   * dbstooi01****
   */
  backupPlanId?: string;
  /**
   * @remarks
   * The server directory to which the backup set is downloaded.
   * 
   * @example
   * test
   */
  backupSetDownloadDir?: string;
  /**
   * @remarks
   * The type of the destination server to which the backup set is downloaded.
   * 
   * > Set the value to agent, which indicates a server on which a backup gateway is installed.
   * 
   * @example
   * agent
   */
  backupSetDownloadTargetType?: string;
  /**
   * @remarks
   * The type of the destination directory to which the backup set is downloaded. This parameter is required if the automatic download feature is enabled. Valid values:
   * 
   * *   local
   * *   nas
   * *   ftp
   * *   minio
   * 
   * > Default value: local.
   * 
   * @example
   * local
   */
  backupSetDownloadTargetTypeLocation?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzx****
   */
  clientToken?: string;
  /**
   * @remarks
   * The format in which the full backup set is downloaded. Valid values:
   * 
   * *   Native
   * *   SQL
   * *   CSV
   * *   JSON
   * 
   * > Default value: CSV.
   * 
   * @example
   * CSV
   */
  fullDataFormat?: string;
  /**
   * @remarks
   * The format in which the incremental backup set is downloaded. Valid values:
   * 
   * *   Native
   * *   SQL
   * *   CSV
   * *   JSON
   * 
   * > Default value: Native.
   * 
   * @example
   * Native
   */
  incrementDataFormat?: string;
  /**
   * @remarks
   * Specifies whether to enable the automatic download feature. Default value: false.
   * 
   * @example
   * false
   */
  openAutoDownload?: boolean;
  ownerId?: string;
  static names(): { [key: string]: string } {
    return {
      backupGatewayId: 'BackupGatewayId',
      backupPlanId: 'BackupPlanId',
      backupSetDownloadDir: 'BackupSetDownloadDir',
      backupSetDownloadTargetType: 'BackupSetDownloadTargetType',
      backupSetDownloadTargetTypeLocation: 'BackupSetDownloadTargetTypeLocation',
      clientToken: 'ClientToken',
      fullDataFormat: 'FullDataFormat',
      incrementDataFormat: 'IncrementDataFormat',
      openAutoDownload: 'OpenAutoDownload',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupGatewayId: 'number',
      backupPlanId: 'string',
      backupSetDownloadDir: 'string',
      backupSetDownloadTargetType: 'string',
      backupSetDownloadTargetTypeLocation: 'string',
      clientToken: 'string',
      fullDataFormat: 'string',
      incrementDataFormat: 'string',
      openAutoDownload: 'boolean',
      ownerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

