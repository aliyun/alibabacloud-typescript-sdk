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
  autoAdd?: number;
  autoAddConfigName?: string;
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
   * The maximum number of files to decompress. The minimum value is 1 and the maximum value is 1000. When the maximum number of decompressed files is exceeded, the decompression operation ends immediately. The scanning of files that have already been decompressed is not affected.
   * 
   * @example
   * 100
   */
  decompressMaxFileCount?: number;
  /**
   * @remarks
   * The maximum number of decompression layers when nested compressed files exist. The minimum value is 1 and the maximum value is 5. When the maximum decompression layer is exceeded, the decompression operation ends immediately. The scanning of files that have already been decompressed is not affected.
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
   * - **1**: Enabled.
   * - **0**: Disabled.
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
   * Scans files whose last modification time is after the specified timestamp, in milliseconds.
   * 
   * @example
   * 1724301769834
   */
  lastModifiedStartTime?: number;
  /**
   * @remarks
   * The last update timestamp.
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
   * Specifies whether to enable real-time incremental scanning. When this parameter is set to true, the parameters ScanDayList, StartTime, and EndTime do not take effect.
   * 
   * @example
   * true
   */
  realTimeIncr?: boolean;
  /**
   * @remarks
   * The scan days. The numbers represent the day of the week.
   */
  scanDayList?: number[];
  /**
   * @remarks
   * The business source. Valid values:
   * - **OSS**: OSS
   * - **NAS**: NAS
   * 
   * @example
   * OSS
   */
  source?: string;
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
      autoAdd: 'AutoAdd',
      autoAddConfigName: 'AutoAddConfigName',
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
      source: 'Source',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allKeyPrefix: 'boolean',
      autoAdd: 'number',
      autoAddConfigName: 'string',
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

export class GetOssScanConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data details.
   */
  data?: GetOssScanConfigResponseBodyData;
  /**
   * @remarks
   * The request ID. It is a unique identifier generated by Alibaba Cloud for this request and can be used to troubleshoot issues.
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

