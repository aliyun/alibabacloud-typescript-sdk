// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTransitMetaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The temporary download URL. If Network is not specified, null is returned. If the file is not yet available, the URL may be unavailable. Do not write this URL to logs, store it for a long time, or forward it to unrelated users.
   * 
   * @example
   * https://download.example.invalid/code-review.zip?signature=<REDACTED>
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The expiration time of the transit record. The value is a UTC UNIX timestamp in milliseconds, which indicates the number of milliseconds that have elapsed since 00:00:00 UTC on January 1, 1970. You can directly compare it with the current UNIX timestamp in milliseconds without adding or subtracting 8 hours. Do not continue to use the record after this time.
   * 
   * @example
   * 1787734800000
   */
  expireAt?: number;
  /**
   * @remarks
   * The opaque object path corresponding to the file. Callers must not parse or construct this value.
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
   * The file size in bytes. If no available file is detected, null may be returned.
   * 
   * @example
   * 4096
   */
  size?: number;
  /**
   * @remarks
   * The status of the transit file. A value of PENDING indicates that the file is not yet available and the caller can query again later. A value of SUCCESS indicates that the file is available.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The transit ID.
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

