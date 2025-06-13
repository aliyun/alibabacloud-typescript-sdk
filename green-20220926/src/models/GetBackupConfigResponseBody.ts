// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBackupConfigResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  backupMode?: number;
  /**
   * @example
   * buckect_test
   */
  bucket?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  enableBackup?: boolean;
  enableBackupVoice?: boolean;
  /**
   * @example
   * 300
   */
  expireSeconds?: number;
  /**
   * @example
   * 2023-01-17 12:29:56
   */
  gmtModified?: string;
  /**
   * @example
   * aliyun/template/
   */
  path?: string;
  pathVoice?: string;
  /**
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * image
   */
  resourceType?: string;
  /**
   * @example
   * baselineCheck
   */
  serviceCode?: string;
  /**
   * @remarks
   * UID。
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

