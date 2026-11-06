// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BackupFileRequestCustomScripts extends $dara.Model {
  /**
   * @example
   * my-bucket
   */
  ossBucket?: string;
  /**
   * @example
   * oss-cn-hangzhou-internal.aliyuncs.com
   */
  ossEndpoint?: string;
  /**
   * @example
   * script/backup.sh
   */
  ossObjectKey?: string;
  /**
   * @example
   * cn-hangzhou
   */
  ossRegion?: string;
  /**
   * @example
   * ["acp-0n4k52uiyon472rq0"]
   */
  testInstanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
      ossObjectKey: 'OssObjectKey',
      ossRegion: 'OssRegion',
      testInstanceIds: 'TestInstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossBucket: 'string',
      ossEndpoint: 'string',
      ossObjectKey: 'string',
      ossRegion: 'string',
      testInstanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.testInstanceIds)) {
      $dara.Model.validateArray(this.testInstanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BackupFileRequest extends $dara.Model {
  /**
   * @remarks
   * The list of instance IDs.
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
   * The upload address of the backup file.
   * > If you upload the backup file to an OSS bucket, call the describeBuckets operation to obtain the bucketName, and select ossObjectList to obtain the key. The key is the folder path in the OSS bucket. Concatenate them into `oss://${bucketName}/${key}`.
   * 
   * This parameter is required.
   */
  backupFilePath?: string;
  /**
   * @example
   * [{"OssBucket":"my-bucket","OssObjectKey":"script/backup.sh","OssEndpoint":"oss-cn-hangzhou-internal.aliyuncs.com","OssRegion":"cn-hangzhou"}]
   */
  customScripts?: BackupFileRequestCustomScripts[];
  /**
   * @remarks
   * The description of the backup file.
   * 
   * @example
   * This is a request to back up /data
   */
  description?: string;
  /**
   * @remarks
   * The list of application package names excluded from full instance backup. Matched applications only skip APK collection, and user data is backed up as usual. If this parameter is not specified, no applications are excluded.
   */
  excludeAppList?: string[];
  /**
   * @remarks
   * The list of file paths in the Android container to exclude from the backup.
   */
  excludeSourceFilePathList?: string[];
  /**
   * @remarks
   * The list of package names of the applications to back up.
   */
  sourceAppList?: string[];
  /**
   * @remarks
   * The list of file paths to back up.
   */
  sourceFilePathList?: string[];
  /**
   * @remarks
   * The domain name of the backup address.
   * 
   * > If you upload the backup file to an OSS bucket, call the describeBuckets operation to obtain the bucket. If the Cloud Phone instance and the bucket are in the same region, obtain the intranetEndpoint field. If they are in different regions, obtain the extranetEndpoint field.
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
      customScripts: 'CustomScripts',
      description: 'Description',
      excludeAppList: 'ExcludeAppList',
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
      customScripts: { 'type': 'array', 'itemType': BackupFileRequestCustomScripts },
      description: 'string',
      excludeAppList: { 'type': 'array', 'itemType': 'string' },
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
    if(Array.isArray(this.customScripts)) {
      $dara.Model.validateArray(this.customScripts);
    }
    if(Array.isArray(this.excludeAppList)) {
      $dara.Model.validateArray(this.excludeAppList);
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

