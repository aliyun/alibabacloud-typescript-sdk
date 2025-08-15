// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOssScanConfigResponseBodyData extends $dara.Model {
  /**
   * @example
   * true
   */
  allKeyPrefix?: boolean;
  /**
   * @example
   * 10
   */
  bucketCount?: number;
  /**
   * @example
   * testBucket******
   */
  bucketName?: string;
  /**
   * @example
   * 1
   */
  decompressMaxFileCount?: number;
  /**
   * @example
   * 1
   */
  decompressMaxLayer?: number;
  decryptionList?: string[];
  /**
   * @example
   * 0
   */
  enable?: number;
  /**
   * @example
   * 01:00:00
   */
  endTime?: string;
  /**
   * @example
   * 13******
   */
  id?: string;
  keyPrefixList?: string[];
  keySuffixList?: string[];
  /**
   * @example
   * 1702025633079
   */
  lastModifiedStartTime?: number;
  /**
   * @example
   * 1702025633079
   */
  lastUpdateTime?: number;
  /**
   * @example
   * testPolicy******
   */
  name?: string;
  realTimeIncr?: boolean;
  scanDayList?: number[];
  /**
   * @example
   * 00:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      allKeyPrefix: 'AllKeyPrefix',
      bucketCount: 'BucketCount',
      bucketName: 'BucketName',
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
  data?: GetOssScanConfigResponseBodyData;
  /**
   * @example
   * E14CECBF-8CAC-520C-ACC3-9503D5******
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

