// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecoveryFileRequestCustomScripts extends $dara.Model {
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
   * script/recover.sh
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

export class RecoveryFileRequest extends $dara.Model {
  /**
   * @remarks
   * The list of instance IDs.
   * 
   * This parameter is required.
   */
  androidInstanceIdList?: string[];
  /**
   * @remarks
   * Specifies whether it is a full-device backup.
   * 
   * @example
   * false
   */
  backupAll?: boolean;
  /**
   * @remarks
   * The ID of the backup file.
   * 
   * @example
   * bf-azhps4rdyi2th****
   */
  backupFileId?: string;
  /**
   * @remarks
   * The OSS address to which the backup file is uploaded.
   * <notice>Call the describeBuckets operation to obtain the bucketName, and select ossObjectList to obtain the key. The key is the path of the backup file. Concatenate them into "oss://${bucketName}/${key}".</notice>
   */
  backupFilePath?: string;
  /**
   * @example
   * [{"OssBucket":"my-bucket","OssObjectKey":"script/recover.sh","OssEndpoint":"oss-cn-hangzhou-internal.aliyuncs.com","OssRegion":"cn-hangzhou"}]
   */
  customScripts?: RecoveryFileRequestCustomScripts[];
  /**
   * @remarks
   * The list of excluded app package names for full-device restore. Matched apps are not uninstalled, and their APKs are not installed (compatible with legacy backups that contain APKs). Only user data is replaced. The empty shell must be installed by the customer using pm install. If this parameter is not specified, no apps are excluded.
   */
  excludeAppList?: string[];
  /**
   * @remarks
   * The domain name of the backup address.
   * <notice>Call the DescribeBuckets operation to obtain the bucket. If the cloud phone and the bucket are in the same region, obtain the IntranetEndpoint field. If they are in different regions, obtain the ExtranetEndpoint field.</notice>
   * 
   * @example
   * oss-cn-hangzhou-internal.aliyuncs.com
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
      backupFileId: 'BackupFileId',
      backupFilePath: 'BackupFilePath',
      customScripts: 'CustomScripts',
      excludeAppList: 'ExcludeAppList',
      uploadEndpoint: 'UploadEndpoint',
      uploadType: 'UploadType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceIdList: { 'type': 'array', 'itemType': 'string' },
      backupAll: 'boolean',
      backupFileId: 'string',
      backupFilePath: 'string',
      customScripts: { 'type': 'array', 'itemType': RecoveryFileRequestCustomScripts },
      excludeAppList: { 'type': 'array', 'itemType': 'string' },
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

