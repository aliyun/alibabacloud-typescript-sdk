// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBackupSetDownloadRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup gateway used to download the backup set.
   * 
   * @example
   * 23312323
   */
  backupGatewayId?: number;
  /**
   * @remarks
   * The ID of the backup plan. You can call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dbstooi01xxxx
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
   * The target type for downloading the backup set.
   * > Default value: agent. A backup gateway is installed. This is the only supported value.
   * 
   * @example
   * agent
   */
  backupSetDownloadTargetType?: string;
  /**
   * @remarks
   * The target directory type for downloading the backup set. This parameter is required if automatic download is enabled. Valid values:
   * - local
   * - nas
   * - ftp
   * - minio
   * 
   * > Default value: local.
   * 
   * @example
   * local
   */
  backupSetDownloadTargetTypeLocation?: string;
  /**
   * @remarks
   * The client token used to ensure the idempotence of the request and prevent duplicate request submissions.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzxxxxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The format of the full data downloaded from the backup set. Valid values:
   * - Native
   * - SQL
   * - CSV
   * - JSON
   * 
   * > Default value: CSV.
   * 
   * @example
   * CSV
   */
  fullDataFormat?: string;
  /**
   * @remarks
   * The format of the incremental data downloaded from the backup set. Valid values:
   * - Native
   * - SQL
   * - CSV
   * - JSON
   * 
   * > Default value: Native.
   * 
   * @example
   * Native
   */
  incrementDataFormat?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic download. Default value: false.
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

