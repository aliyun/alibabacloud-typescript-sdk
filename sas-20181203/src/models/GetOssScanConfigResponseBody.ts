// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOssScanConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether all prefixes are matched.
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
   * The bucket name.
   * 
   * @example
   * hz-new02****
   */
  bucketName?: string;
  /**
   * @remarks
   * The list of bucket names.
   */
  bucketNameList?: string[];
  /**
   * @remarks
   * The maximum number of files to decompress. Minimum value: 1. Maximum value: 1000. If the number of files exceeds this value, the decompression operation stops. Files that have already been decompressed are still scanned.
   * 
   * @example
   * 100
   */
  decompressMaxFileCount?: number;
  /**
   * @remarks
   * The maximum number of decompression layers for nested compressed files. Minimum value: 1. Maximum value: 5. If the number of layers exceeds this value, the decompression operation stops. Files that have already been decompressed are still scanned.
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
   * Indicates whether the policy is enabled. Valid values:
   * - **1**: enabled
   * - **0**: disabled.
   * 
   * @example
   * 1
   */
  enable?: number;
  /**
   * @remarks
   * The scan end time in the HH:mm:ss format.
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
   * 1
   */
  id?: string;
  /**
   * @remarks
   * The file prefix list.
   */
  keyPrefixList?: string[];
  /**
   * @remarks
   * The list of file suffixes to scan.
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
   * The timestamp of the last update.
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
   * testPolicy****
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
   * The scan days. Each number represents a day of the week.
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
   * The data details.
   */
  data?: GetOssScanConfigResponseBodyData;
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique ID for each request. You can use the ID to troubleshoot issues.
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

