// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOssBucketScanTaskRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  allKeyPrefix?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  bucketNameList?: string[];
  /**
   * @example
   * 100
   */
  decompressMaxFileCount?: number;
  /**
   * @example
   * 1
   */
  decompressMaxLayer?: number;
  decryptionList?: string[];
  excludeKeySuffixList?: string[];
  keyPrefixList?: string[];
  keySuffixList?: string[];
  /**
   * @example
   * 1724301769834
   */
  lastModifiedStartTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  scanMode?: number;
  static names(): { [key: string]: string } {
    return {
      allKeyPrefix: 'AllKeyPrefix',
      bucketNameList: 'BucketNameList',
      decompressMaxFileCount: 'DecompressMaxFileCount',
      decompressMaxLayer: 'DecompressMaxLayer',
      decryptionList: 'DecryptionList',
      excludeKeySuffixList: 'ExcludeKeySuffixList',
      keyPrefixList: 'KeyPrefixList',
      keySuffixList: 'KeySuffixList',
      lastModifiedStartTime: 'LastModifiedStartTime',
      scanMode: 'ScanMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allKeyPrefix: 'string',
      bucketNameList: { 'type': 'array', 'itemType': 'string' },
      decompressMaxFileCount: 'number',
      decompressMaxLayer: 'number',
      decryptionList: { 'type': 'array', 'itemType': 'string' },
      excludeKeySuffixList: { 'type': 'array', 'itemType': 'string' },
      keyPrefixList: { 'type': 'array', 'itemType': 'string' },
      keySuffixList: { 'type': 'array', 'itemType': 'string' },
      lastModifiedStartTime: 'number',
      scanMode: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.bucketNameList)) {
      $dara.Model.validateArray(this.bucketNameList);
    }
    if(Array.isArray(this.decryptionList)) {
      $dara.Model.validateArray(this.decryptionList);
    }
    if(Array.isArray(this.excludeKeySuffixList)) {
      $dara.Model.validateArray(this.excludeKeySuffixList);
    }
    if(Array.isArray(this.keyPrefixList)) {
      $dara.Model.validateArray(this.keyPrefixList);
    }
    if(Array.isArray(this.keySuffixList)) {
      $dara.Model.validateArray(this.keySuffixList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

