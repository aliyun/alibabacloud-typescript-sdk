// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOssScanConfigRequest extends $dara.Model {
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
   * Specifies whether OSS buckets are automatically added to this policy. Valid values:
   * - **true**: Enabled.
   * - **false**: Disabled.
   * 
   * @example
   * 0
   */
  autoAdd?: number;
  /**
   * @remarks
   * The list of bucket names.
   */
  bucketNameList?: string[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The maximum number of files to decompress. Minimum value: 1. Maximum value: 1000. When the maximum number of decompressed files is exceeded, the decompression operation stops. The detection of files that have already been decompressed is not affected.
   * 
   * @example
   * 100
   */
  decompressMaxFileCount?: number;
  /**
   * @remarks
   * The maximum number of decompression layers when multiple levels of nested compressed files exist. Minimum value: 1. Maximum value: 5. When the maximum number of decompression layers is exceeded, the decompression operation stops. The detection of files that have already been decompressed is not affected.
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
   * Specifies whether to enable the policy. Valid values:
   * - **1**: Enabled.
   * - **0**: Disabled.
   * 
   * @example
   * 1
   */
  enable?: number;
  /**
   * @remarks
   * The scan stop time, in the HH:mm:ss format.
   * 
   * @example
   * 01:01:00
   */
  endTime?: string;
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
   * Specifies that only files whose last modification time is after the specified timestamp are scanned. Unit: milliseconds.
   * 
   * @example
   * 1724301769834
   */
  lastModifiedStartTime?: number;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * testName
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether to enable real-time incremental detection. If this parameter is set to true, the ScanDayList, StartTime, and EndTime parameters do not take effect.
   * 
   * @example
   * true
   */
  realTimeIncr?: boolean;
  /**
   * @remarks
   * The scan schedule. The number represents the day of the week.
   */
  scanDayList?: number[];
  /**
   * @remarks
   * The business source. Valid values:
   * - **OSS**: OSS.
   * - **NAS**: NAS.
   * 
   * @example
   * OSS
   */
  source?: string;
  /**
   * @remarks
   * The scan start time, in the HH:mm:ss format.
   * 
   * @example
   * 00:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      allKeyPrefix: 'AllKeyPrefix',
      autoAdd: 'AutoAdd',
      bucketNameList: 'BucketNameList',
      clientToken: 'ClientToken',
      decompressMaxFileCount: 'DecompressMaxFileCount',
      decompressMaxLayer: 'DecompressMaxLayer',
      decryptionList: 'DecryptionList',
      enable: 'Enable',
      endTime: 'EndTime',
      keyPrefixList: 'KeyPrefixList',
      keySuffixList: 'KeySuffixList',
      lastModifiedStartTime: 'LastModifiedStartTime',
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
      bucketNameList: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      decompressMaxFileCount: 'number',
      decompressMaxLayer: 'number',
      decryptionList: { 'type': 'array', 'itemType': 'string' },
      enable: 'number',
      endTime: 'string',
      keyPrefixList: { 'type': 'array', 'itemType': 'string' },
      keySuffixList: { 'type': 'array', 'itemType': 'string' },
      lastModifiedStartTime: 'number',
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

