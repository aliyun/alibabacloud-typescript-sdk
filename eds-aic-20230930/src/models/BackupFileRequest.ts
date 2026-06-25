// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BackupFileRequest extends $dara.Model {
  /**
   * @remarks
   * A list of instance IDs.
   * 
   * This parameter is required.
   */
  androidInstanceIdList?: string[];
  /**
   * @remarks
   * Specifies whether to back up the entire instance.
   * 
   * @example
   * false
   */
  backupAll?: boolean;
  /**
   * @remarks
   * The name of the backup file.
   * 
   * @example
   * MyBackup
   */
  backupFileName?: string;
  /**
   * @remarks
   * The upload URL for the backup file.
   * 
   * > If you upload the file to an OSS bucket, call the DescribeBuckets operation to get the bucketName. Then, select a key from ossObjectList. The key represents the folder path in the OSS bucket. Combine these values into the format `oss://${bucketName}/${key}`.
   * 
   * This parameter is required.
   */
  backupFilePath?: string;
  /**
   * @remarks
   * The description of the backup file.
   * 
   * @example
   * This is a backup/data request.
   */
  description?: string;
  excludeSourceFilePathList?: string[];
  /**
   * @remarks
   * A list of application package names to back up.
   */
  sourceAppList?: string[];
  /**
   * @remarks
   * A list of file paths to back up.
   */
  sourceFilePathList?: string[];
  /**
   * @remarks
   * The domain name of the upload URL.
   * 
   * > If you upload the file to an OSS bucket, call the DescribeBuckets operation to obtain the bucket information. If the cloud phone and the bucket are in the same region, use the value of the intranetEndpoint field. If they are in different regions, use the value of the extranetEndpoint field.
   * 
   * @example
   * oss-cn-shanghai-internal.aliyuncs.com
   */
  uploadEndpoint?: string;
  /**
   * @remarks
   * The backup type.
   * 
   * @example
   * OSS
   */
  uploadType?: string;
  static names(): { [key: string]: string } {
    return {
      androidInstanceIdList: 'AndroidInstanceIdList',
      backupAll: 'BackupAll',
      backupFileName: 'BackupFileName',
      backupFilePath: 'BackupFilePath',
      description: 'Description',
      excludeSourceFilePathList: 'ExcludeSourceFilePathList',
      sourceAppList: 'SourceAppList',
      sourceFilePathList: 'SourceFilePathList',
      uploadEndpoint: 'UploadEndpoint',
      uploadType: 'UploadType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceIdList: { 'type': 'array', 'itemType': 'string' },
      backupAll: 'boolean',
      backupFileName: 'string',
      backupFilePath: 'string',
      description: 'string',
      excludeSourceFilePathList: { 'type': 'array', 'itemType': 'string' },
      sourceAppList: { 'type': 'array', 'itemType': 'string' },
      sourceFilePathList: { 'type': 'array', 'itemType': 'string' },
      uploadEndpoint: 'string',
      uploadType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.androidInstanceIdList)) {
      $dara.Model.validateArray(this.androidInstanceIdList);
    }
    if(Array.isArray(this.excludeSourceFilePathList)) {
      $dara.Model.validateArray(this.excludeSourceFilePathList);
    }
    if(Array.isArray(this.sourceAppList)) {
      $dara.Model.validateArray(this.sourceAppList);
    }
    if(Array.isArray(this.sourceFilePathList)) {
      $dara.Model.validateArray(this.sourceFilePathList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

