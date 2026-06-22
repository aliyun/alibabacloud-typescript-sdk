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
   * The list of bucket names.
   */
  bucketNameList?: string[];
  /**
   * @remarks
   * The maximum number of files to decompress. Minimum value: 1. Maximum value: 1000. If the maximum number of decompressed files is exceeded, the decompression operation stops. The detection of already decompressed files is not affected.
   * 
   * @example
   * 100
   */
  decompressMaxFileCount?: number;
  /**
   * @remarks
   * The maximum number of decompression layers for nested compressed files. Minimum value: 1. Maximum value: 5. If the maximum number of decompression layers is exceeded, the decompression operation stops. The detection of already decompressed files is not affected.
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
   * Specifies whether to enable the scan policy. Valid values:
   * - **1**: Enable.
   * - **0**: Disable.
   * 
   * @example
   * 0
   */
  enable?: number;
  /**
   * @remarks
   * The scan end time in the HH:mm:ss format.
   * 
   * @example
   * 00:00:01
   */
  endTime?: string;
  /**
   * @remarks
   * The scan policy ID.
   * 
   * @example
   * 1141****
   */
  id?: string;
  /**
   * @remarks
   * The prefix list of files.
   */
  keyPrefixList?: string[];
  /**
   * @remarks
   * The list of file suffixes.
   */
  keySuffixList?: string[];
  /**
   * @remarks
   * Scans files whose last modification time is after the specified timestamp. Unit: milliseconds.
   * 
   * @example
   * 1724301769834
   */
  lastModifiedStartTime?: number;
  /**
   * @remarks
   * The scan policy name.
   * 
   * @example
   * testStrategy
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether to enable real-time incremental detection. If this parameter is set to true, the ScanDayList, StartTime, and EndTime parameters do not take effect.
   * 
   * @example
   * true
   */
  realTimeIncr?: boolean;
  /**
   * @remarks
   * The scan days. The number indicates the day of the week.
   */
  scanDayList?: number[];
  /**
   * @remarks
   * The scan start time in the HH:mm:ss format.
   * 
   * @example
   * 00:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      allKeyPrefix: 'AllKeyPrefix',
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
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allKeyPrefix: 'boolean',
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

