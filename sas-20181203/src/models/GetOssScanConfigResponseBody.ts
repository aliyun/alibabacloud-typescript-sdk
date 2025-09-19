// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOssScanConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the prefixes of all objects are matched.
   * 
   * @example
   * true
   */
  allKeyPrefix?: boolean;
  /**
   * @remarks
   * The number of buckets.
   * 
   * @example
   * 1
   */
  bucketCount?: number;
  /**
   * @remarks
   * The name of the bucket.
   * 
   * @example
   * hz-new01****
   */
  bucketName?: string;
  /**
   * @remarks
   * The names of the buckets.
   */
  bucketNameList?: string[];
  /**
   * @remarks
   * The maximum number of objects that can be extracted during decompression. Valid values: 1 to 1000. If the maximum number of objects that can be extracted is reached, the decompression operation immediately ends and the detection of extracted objects is not affected.
   * 
   * @example
   * 100
   */
  decompressMaxFileCount?: number;
  /**
   * @remarks
   * The maximum number of decompression levels when multi-level packages are decompressed. Valid values: 1 to 5. If the maximum number of decompression levels is reached, the decompression operation immediately ends and the detection of extracted objects is not affected.
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
   * Indicates whether the check policy is enabled. Valid values:
   * 
   * *   **1**: enabled.
   * *   **0**: disabled.
   * 
   * @example
   * 1
   */
  enable?: number;
  /**
   * @remarks
   * The end time of the check. The time is in the HH:mm:ss format.
   * 
   * @example
   * 00:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * 1274****
   */
  id?: string;
  /**
   * @remarks
   * The prefixes of the objects.
   */
  keyPrefixList?: string[];
  /**
   * @remarks
   * The suffixes of the objects that are checked.
   */
  keySuffixList?: string[];
  /**
   * @remarks
   * The timestamp when the object was last modified. The time must be later than the timestamp that you specify. Unit: milliseconds.
   * 
   * @example
   * 1724301769834
   */
  lastModifiedStartTime?: number;
  /**
   * @remarks
   * The timestamp when the configuration was last modified.
   * 
   * @example
   * 1702025633079
   */
  lastUpdateTime?: number;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * test0104
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
   * The days when the check is performed. The value indicates the days of the week.
   */
  scanDayList?: number[];
  /**
   * @remarks
   * The start time of the check. The time is in the HH:mm:ss format.
   * 
   * @example
   * 00:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      allKeyPrefix: 'AllKeyPrefix',
      bucketCount: 'BucketCount',
      bucketName: 'BucketName',
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
      lastUpdateTime: 'LastUpdateTime',
      name: 'Name',
      realTimeIncr: 'RealTimeIncr',
      scanDayList: 'ScanDayList',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allKeyPrefix: 'boolean',
      bucketCount: 'number',
      bucketName: 'string',
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
      lastUpdateTime: 'number',
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

export class GetOssScanConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: GetOssScanConfigResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E10BAF1C-A6C5-51E2-866C-76D5922E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetOssScanConfigResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

