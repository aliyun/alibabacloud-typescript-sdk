// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOssBucketScanTaskRequest extends $dara.Model {
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
   * 
   * This parameter is required.
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
   * The suffixes of the objects that you do not want to check.
   */
  excludeKeySuffixList?: string[];
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
   * The timestamp when the object was last modified. The time must be later than the timestamp that you specify. Unit: milliseconds.
   * 
   * @example
   * 1724301769834
   */
  lastModifiedStartTime?: number;
  /**
   * @remarks
   * The check mode. Valid values:
   * 
   * *   **1**: checks all objects in the bucket.
   * *   **2**: checks only new objects in the bucket.
   * 
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
      allKeyPrefix: 'boolean',
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

