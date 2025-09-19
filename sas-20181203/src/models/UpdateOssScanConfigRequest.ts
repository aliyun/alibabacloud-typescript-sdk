// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOssScanConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to match the prefixes of all objects.
   * 
   * @example
   * true
   */
  allKeyPrefix?: boolean;
  /**
   * @remarks
   * The names of the buckets.
   */
  bucketNameList?: string[];
  /**
   * @remarks
   * The maximum number of objects that can be extracted from a package. Valid values: 1 to 1000. If the value is reached, the decompression operation immediately finishes. The detection of extracted objects is not affected.
   * 
   * @example
   * 100
   */
  decompressMaxFileCount?: number;
  /**
   * @remarks
   * The maximum number of decompression levels when multi-level packages are decompressed. Valid values: 1 to 5. If the value is reached, the decompression operation immediately finishes. The detection of extracted objects is not affected.
   * 
   * @example
   * 1
   */
  decompressMaxLayer?: number;
  /**
   * @remarks
   * The decryption methods.
   */
  decryptionList?: string[];
  /**
   * @remarks
   * Specifies whether to enable the bucket check policy. Valid values:
   * 
   * *   **1**: enables the bucket check policy.
   * *   **0**: disables the bucket check policy.
   * 
   * @example
   * 0
   */
  enable?: number;
  /**
   * @remarks
   * The end time of the check. Specify the time in the HH:mm:ss format.
   * 
   * @example
   * 00:00:01
   */
  endTime?: string;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * 65778
   */
  id?: string;
  /**
   * @remarks
   * The prefixes of the objects.
   */
  keyPrefixList?: string[];
  /**
   * @remarks
   * The suffixes of the objects that you want to check.
   */
  keySuffixList?: string[];
  /**
   * @remarks
   * The timestamp. The objects whose last modification time is later than the specified value are detected. Unit: milliseconds.
   * 
   * @example
   * 1724301769834
   */
  lastModifiedStartTime?: number;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * nacos****
   */
  name?: string;
  /**
   * @remarks
   * Whether to enable real-time incremental detection. When this parameter is set to true, the parameters ScanDayList, StartTime, and EndTime are not effective.
   * 
   * @example
   * true
   */
  realTimeIncr?: boolean;
  /**
   * @remarks
   * The time when the check is performed. The value specifies the days of the week.
   */
  scanDayList?: number[];
  /**
   * @remarks
   * The start time of the check. Specify the time in the HH:mm:ss format.
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

