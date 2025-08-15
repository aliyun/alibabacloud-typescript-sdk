// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOssScanConfigRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  allKeyPrefix?: string;
  /**
   * @example
   * testBucket******
   */
  bucketName?: string;
  /**
   * @example
   * 1000
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
   * 00:10:00
   */
  endTime?: string;
  /**
   * @example
   * 100******
   */
  id?: string;
  keyPrefixList?: string[];
  keySuffixList?: string[];
  /**
   * @example
   * 1724301769834
   */
  lastModifiedStartTime?: number;
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
      name: 'Name',
      realTimeIncr: 'RealTimeIncr',
      scanDayList: 'ScanDayList',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allKeyPrefix: 'string',
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

