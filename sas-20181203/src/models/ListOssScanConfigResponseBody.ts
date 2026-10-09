// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOssScanConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Specifies whether all prefixes are matched.
   * 
   * @example
   * true
   */
  allKeyPrefix?: boolean;
  /**
   * @remarks
   * Specifies whether to automatically add new buckets to the scan policy. Valid values: 0 (disabled) and 1 (enabled).
   * 
   * @example
   * 0
   */
  autoAdd?: number;
  /**
   * @remarks
   * The configuration name used when automatically adding buckets.
   */
  autoAddConfigName?: string;
  /**
   * @remarks
   * The number of buckets.
   * 
   * @example
   * 10
   */
  bucketCount?: number;
  /**
   * @remarks
   * The list of bucket names.
   */
  bucketNameList?: string[];
  /**
   * @remarks
   * The maximum number of files to extract. The minimum value is 1 and the maximum value is 1000. If the maximum number of files is exceeded, the decompression operation stops immediately. Files that have already been extracted are still scanned.
   * 
   * @example
   * 100
   */
  decompressMaxFileCount?: number;
  /**
   * @remarks
   * The maximum number of decompression layers for nested compressed archives. The minimum value is 1 and the maximum value is 5. If the maximum number of layers is exceeded, the decompression operation stops immediately. Files that have already been extracted are still scanned.
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
   * Specifies whether the configuration is enabled. Valid values:
   * - **1**: Enabled.
   * - **0**: Disabled.
   * 
   * @example
   * 1
   */
  enable?: number;
  /**
   * @remarks
   * The detection end time in HH:mm:ss format.
   * 
   * @example
   * 06:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * 443496
   */
  id?: number;
  /**
   * @remarks
   * The list of file directories to scan.
   */
  keyPrefixList?: string[];
  /**
   * @remarks
   * The list of file suffixes to scan.
   */
  keySuffixList?: string[];
  /**
   * @remarks
   * The timestamp in milliseconds. Only files whose last modification time is after this timestamp are scanned.
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
   * 1698388233883
   */
  lastUpdateTime?: number;
  /**
   * @remarks
   * The configuration name.
   * 
   * @example
   * test****
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether real-time incremental detection is enabled. If this parameter is set to true, the ScanDayList, StartTime, and EndTime parameters do not take effect.
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
   * The detection start time in HH:mm:ss format.
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
      bucketNameList: { 'type': 'array', 'itemType': 'string' },
      decompressMaxFileCount: 'number',
      decompressMaxLayer: 'number',
      decryptionList: { 'type': 'array', 'itemType': 'string' },
      enable: 'number',
      endTime: 'string',
      id: 'number',
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

export class ListOssScanConfigResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The current page number for paged queries.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries displayed per page for paged queries.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 50
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOssScanConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListOssScanConfigResponseBodyData[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListOssScanConfigResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID. It is a unique identifier generated by Alibaba Cloud for the request and can be used to troubleshoot and locate issues.
   * 
   * @example
   * E10BAF1C-A6C5-51E2-866C-76D5922E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListOssScanConfigResponseBodyData },
      pageInfo: ListOssScanConfigResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

