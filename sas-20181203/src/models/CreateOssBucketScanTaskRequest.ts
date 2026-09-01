// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOssBucketScanTaskRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to match all prefixes. If this parameter is set to true, the KeyPrefixList parameter does not take effect.
   * 
   * @example
   * true
   */
  allKeyPrefix?: boolean;
  /**
   * @remarks
   * The list of bucket names.
   * 
   * This parameter is required.
   */
  bucketNameList?: string[];
  /**
   * @remarks
   * The maximum number of files to decompress. The minimum value is 1 and the maximum value is 1000. When the maximum number of decompressed files is exceeded, the decompression operation ends immediately. The detection of files that have already been decompressed is not affected.
   * 
   * @example
   * 100
   */
  decompressMaxFileCount?: number;
  /**
   * @remarks
   * The maximum number of decompression layers when multiple levels of compressed packages are nested. The minimum value is 1 and the maximum value is 5. When the maximum number of decompression layers is exceeded, the decompression operation ends immediately. The detection of files that have already been decompressed is not affected.
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
   * The list of file suffixes to exclude from detection.
   */
  excludeKeySuffixList?: string[];
  /**
   * @remarks
   * The prefix list of files.
   */
  keyPrefixList?: string[];
  /**
   * @remarks
   * The list of file suffixes.
   */
  keySuffixList?: string[];
  /**
   * @remarks
   * Specifies that only files whose last modification time is after the specified timestamp are detected. Unit: milliseconds.
   * 
   * @example
   * 1724301769834
   */
  lastModifiedStartTime?: number;
  /**
   * @remarks
   * The detection mode. Valid values:
   * 
   * - **1**: Full file detection.
   * 
   * - **2**: Incremental file detection.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  scanMode?: number;
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
      source: 'Source',
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
      source: 'string',
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

