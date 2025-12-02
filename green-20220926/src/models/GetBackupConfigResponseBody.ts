// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBackupConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * Backup scope.
   * 
   * @example
   * 0
   */
  backupMode?: number;
  /**
   * @remarks
   * File server OSS Bucket.
   * 
   * @example
   * buckect_test
   */
  bucket?: string;
  /**
   * @remarks
   * Whether it is enabled. Values:
   * - **true**: Enabled
   * - **false**: Disabled
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * Whether to enable backup.
   * 
   * @example
   * True
   */
  enableBackup?: boolean;
  /**
   * @remarks
   * Whether to enable audio backup.
   * 
   * @example
   * True
   */
  enableBackupVoice?: boolean;
  /**
   * @remarks
   * Expiration time in seconds.
   * 
   * @example
   * 300
   */
  expireSeconds?: number;
  /**
   * @remarks
   * Modification time.
   * 
   * @example
   * 2023-01-17 12:29:56
   */
  gmtModified?: string;
  /**
   * @remarks
   * Path.
   * 
   * @example
   * aliyun/template/
   */
  path?: string;
  /**
   * @remarks
   * Audio backup path.
   * 
   * @example
   * /back
   */
  pathVoice?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * ID assigned by the backend, used to uniquely identify a request. Can be used for troubleshooting.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * Resource type.
   * 
   * @example
   * image
   */
  resourceType?: string;
  /**
   * @remarks
   * Service code.
   * 
   * @example
   * baselineCheck
   */
  serviceCode?: string;
  /**
   * @remarks
   * UID.
   * 
   * @example
   * 1772612608370735
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      backupMode: 'BackupMode',
      bucket: 'Bucket',
      enable: 'Enable',
      enableBackup: 'EnableBackup',
      enableBackupVoice: 'EnableBackupVoice',
      expireSeconds: 'ExpireSeconds',
      gmtModified: 'GmtModified',
      path: 'Path',
      pathVoice: 'PathVoice',
      region: 'Region',
      requestId: 'RequestId',
      resourceType: 'ResourceType',
      serviceCode: 'ServiceCode',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupMode: 'number',
      bucket: 'string',
      enable: 'boolean',
      enableBackup: 'boolean',
      enableBackupVoice: 'boolean',
      expireSeconds: 'number',
      gmtModified: 'string',
      path: 'string',
      pathVoice: 'string',
      region: 'string',
      requestId: 'string',
      resourceType: 'string',
      serviceCode: 'string',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

