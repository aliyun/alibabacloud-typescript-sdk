// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOssScanConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to match all file prefixes.
   * 
   * @example
   * true
   */
  allKeyPrefix?: boolean;
  /**
   * @remarks
   * Specifies whether to automatically add new buckets to the scan policy. Valid values:
   * - **0**: Disabled.
   * - **1**: Enabled.
   * 
   * @example
   * 0
   */
  autoAdd?: number;
  /**
   * @remarks
   * The list of bucket names.
   */
  bucketNameList?: string[];
  /**
   * @remarks
   * The maximum number of files to decompress. Valid values: 1 to 1000. If the number of files exceeds the maximum value, the decompression stops. The scan of the decompressed files is not affected.
   * 
   * @example
   * 100
   */
  decompressMaxFileCount?: number;
  /**
   * @remarks
   * The maximum number of decompression layers for nested compressed files. Valid values: 1 to 5. If the number of layers exceeds the maximum value, the decompression stops. The scan of the decompressed files is not affected.
   * 
   * @example
   * 1
   */
  decompressMaxLayer?: number;
  /**
   * @remarks
   * The list of decryption types.
   */
  decryptionList?: string[];
  /**
   * @remarks
   * Specifies whether to enable the feature. Valid values:
   * - **1**: Enabled.
   * - **0**: Disabled.
   * 
   * @example
   * 0
   */
  enable?: number;
  /**
   * @remarks
   * The end time of the scan. Format: HH:mm:ss.
   * 
   * @example
   * 00:00:01
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the scan policy.
   * 
   * @example
   * 1141****
   */
  id?: string;
  /**
   * @remarks
   * The file prefix list.
   */
  keyPrefixList?: string[];
  /**
   * @remarks
   * The list of file name extensions.
   */
  keySuffixList?: string[];
  /**
   * @remarks
   * The start timestamp for the last modification time of the files to be scanned. Unit: milliseconds.
   * 
   * @example
   * 1724301769834
   */
  lastModifiedStartTime?: number;
  /**
   * @remarks
   * The configuration policy name.
   * 
   * @example
   * testStrategy
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether to enable real-time incremental scanning. If this parameter is set to true, the ScanDayList, StartTime, and EndTime parameters do not take effect.
   * 
   * @example
   * true
   */
  realTimeIncr?: boolean;
  /**
   * @remarks
   * The days of the week when scans are performed. A number represents a day of the week.
   */
  scanDayList?: number[];
  /**
   * @remarks
   * The service source. Valid values:
   * - **OSS**: OSS.
   * - **NAS**: NAS.
   * 
   * @example
   * OSS
   */
  source?: string;
  /**
   * @remarks
   * The start time of the scan. Format: HH:mm:ss.
   * 
   * @example
   * 00:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      allKeyPrefix: 'AllKeyPrefix',
      autoAdd: 'AutoAdd',
      bucketNameList: 'BucketNameList',
      decompressMaxFileCount: 'DecompressMaxFileCount',
      decompressMaxLayer: 'DecompressMaxLayer',
      decryptionList: 'DecryptionList',
      enable: 'Enable',
      endTime: 'EndTime',
      id: 'Id',
      keyPrefixList: 'KeyPrefixList',
      keySuffixList: 'KeySuffixList',
      lastModifiedStartTime: 'LastModifiedStartTime',
      name: 'Name',
      realTimeIncr: 'RealTimeIncr',
      scanDayList: 'ScanDayList',
      source: 'Source',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allKeyPrefix: 'boolean',
      autoAdd: 'number',
      bucketNameList: { 'type': 'array', 'itemType': 'string' },
      decompressMaxFileCount: 'number',
      decompressMaxLayer: 'number',
      decryptionList: { 'type': 'array', 'itemType': 'string' },
      enable: 'number',
      endTime: 'string',
      id: 'string',
      keyPrefixList: { 'type': 'array', 'itemType': 'string' },
      keySuffixList: { 'type': 'array', 'itemType': 'string' },
      lastModifiedStartTime: 'number',
      name: 'string',
      realTimeIncr: 'boolean',
      scanDayList: { 'type': 'array', 'itemType': 'number' },
      source: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bucketNameList)) {
      $dara.Model.validateArray(this.bucketNameList);
    }
    if(Array.isArray(this.decryptionList)) {
      $dara.Model.validateArray(this.decryptionList);
    }
    if(Array.isArray(this.keyPrefixList)) {
      $dara.Model.validateArray(this.keyPrefixList);
    }
    if(Array.isArray(this.keySuffixList)) {
      $dara.Model.validateArray(this.keySuffixList);
    }
    if(Array.isArray(this.scanDayList)) {
      $dara.Model.validateArray(this.scanDayList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

