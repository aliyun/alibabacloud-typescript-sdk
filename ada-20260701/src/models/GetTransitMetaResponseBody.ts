// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTransitMetaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The temporary download URL. If `Network` is not specified, `null` is returned. If the file is not yet available, the URL may not be accessible. Do not write this URL to logs, persist it for long-term use, or share it with unauthorized users.
   * 
   * @example
   * https://download.example.invalid/code-review.zip?signature=<REDACTED>
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The expiration time of the Transit record, expressed as a UTC UNIX timestamp in milliseconds (the number of milliseconds elapsed since 1970-01-01 00:00:00 UTC). You can compare this value directly with the current UNIX timestamp in milliseconds without adding or subtracting 8 hours. Do not use the record after this time.
   * 
   * @example
   * 1787734800000
   */
  expireAt?: number;
  /**
   * @remarks
   * The opaque object path of the file. Do not parse or manually construct this value.
   * 
   * @example
   * skill-bundle/tenant-demo/user-demo/20260904120000_code-review.zip
   */
  filePath?: string;
  /**
   * @remarks
   * The request ID, which is used for Tracing Analysis and troubleshooting.
   * 
   * @example
   * 0A1B2C3D-4E5F-6789-ABCD-EF0123456789
   */
  requestId?: string;
  /**
   * @remarks
   * The file size in bytes. `null` may be returned if no available file has been detected.
   * 
   * @example
   * 4096
   */
  size?: number;
  /**
   * @remarks
   * The Transit file status. Valid values:
   * - PENDING: The file is not yet available. You can query again later.
   * - SUCCESS: The file is available.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * Transit ID。
   * 
   * @example
   * transit_0123456789abcdef0123456789abcdef
   */
  transitId?: string;
  static names(): { [key: string]: string } {
    return {
      downloadUrl: 'DownloadUrl',
      expireAt: 'ExpireAt',
      filePath: 'FilePath',
      requestId: 'RequestId',
      size: 'Size',
      status: 'Status',
      transitId: 'TransitId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadUrl: 'string',
      expireAt: 'number',
      filePath: 'string',
      requestId: 'string',
      size: 'number',
      status: 'string',
      transitId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

