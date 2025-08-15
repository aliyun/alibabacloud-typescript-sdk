// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOssBucketScanInfoResponseBodyData extends $dara.Model {
  /**
   * @example
   * testBucket******
   */
  bucketName?: string;
  /**
   * @example
   * 1
   */
  configStatus?: number;
  /**
   * @example
   * 1
   */
  decompressStatus?: number;
  /**
   * @example
   * 0
   */
  highRisk?: number;
  /**
   * @example
   * 1698388233884
   */
  lastScanEndTime?: number;
  /**
   * @example
   * 1698388233883
   */
  lastScanTime?: number;
  /**
   * @example
   * 1
   */
  lowRisk?: number;
  /**
   * @example
   * 0
   */
  mediumRisk?: number;
  /**
   * @example
   * Unsupported Region。
   */
  message?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * 1
   */
  scanObject?: number;
  /**
   * @example
   * true
   */
  scanned?: boolean;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * IA
   */
  storageClass?: string;
  /**
   * @example
   * true
   */
  support?: boolean;
  /**
   * @example
   * 2
   */
  totalObject?: number;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      configStatus: 'ConfigStatus',
      decompressStatus: 'DecompressStatus',
      highRisk: 'HighRisk',
      lastScanEndTime: 'LastScanEndTime',
      lastScanTime: 'LastScanTime',
      lowRisk: 'LowRisk',
      mediumRisk: 'MediumRisk',
      message: 'Message',
      regionId: 'RegionId',
      scanObject: 'ScanObject',
      scanned: 'Scanned',
      status: 'Status',
      storageClass: 'StorageClass',
      support: 'Support',
      totalObject: 'TotalObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      configStatus: 'number',
      decompressStatus: 'number',
      highRisk: 'number',
      lastScanEndTime: 'number',
      lastScanTime: 'number',
      lowRisk: 'number',
      mediumRisk: 'number',
      message: 'string',
      regionId: 'string',
      scanObject: 'number',
      scanned: 'boolean',
      status: 'number',
      storageClass: 'string',
      support: 'boolean',
      totalObject: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOssBucketScanInfoResponseBodyPageInfo extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 55
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

export class ListOssBucketScanInfoResponseBody extends $dara.Model {
  data?: ListOssBucketScanInfoResponseBodyData[];
  pageInfo?: ListOssBucketScanInfoResponseBodyPageInfo;
  /**
   * @example
   * 2220FE66-76EF-5D9D-A0EE-3221CC******
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
      data: { 'type': 'array', 'itemType': ListOssBucketScanInfoResponseBodyData },
      pageInfo: ListOssBucketScanInfoResponseBodyPageInfo,
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

