// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BackupFileRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the instances.
   * 
   * This parameter is required.
   */
  androidInstanceIdList?: string[];
  /**
   * @remarks
   * Specifies whether to back up the whole instance.
   * 
   * @example
   * true
   */
  backupAll?: boolean;
  /**
   * @remarks
   * The name of the backup file.
   * 
   * @example
   * defaultBackupFile
   */
  backupFileName?: string;
  /**
   * @remarks
   * The OSS path of the backup file.
   * 
   * >  To upload a backup file to an OSS bucket, you must obtain the name of the bucket. When calling the describeBuckets operation to retrieve a bucket name, you must also call the ossObjectList operation to obtain the object key. Combine these to form the full path: oss://${bucketName}/${key}.
   * 
   * This parameter is required.
   */
  backupFilePath?: string;
  /**
   * @remarks
   * The description of the backup file.
   * 
   * @example
   * This is a backup file description.
   */
  description?: string;
  excludeSourceFilePathList?: string[];
  /**
   * @remarks
   * The names of the application packages that you want to back up.
   */
  sourceAppList?: string[];
  /**
   * @remarks
   * The paths to the source files.
   */
  sourceFilePathList?: string[];
  /**
   * @remarks
   * The endpoint of the OSS bucket to which you want to upload the backup file.
   * 
   * > : When calling the DescribeBuckets operation to query buckets, retrieve the IntranetEndpoint value if the cloud phone and the OSS bucket are in the same region. If they are in different regions, retrieve the ExtranetEndpoint value instead.
   * 
   * @example
   * oss-cn-shanghai-internal.aliyuncs.com
   */
  uploadEndpoint?: string;
  /**
   * @remarks
   * The type of the backup.
   * 
   * Valid values:
   * 
   * *   OSS: uploads the backup file to an OSS bucket.
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

