// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetArtifactDownloadUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the download URL. This value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1770000000
   */
  expire?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0A1B2C3D-4E5F-6789-ABCD-1234567890AB
   */
  requestId?: string;
  /**
   * @remarks
   * The temporary download URL.
   * 
   * @example
   * https://example-bucket.oss-cn-shanghai.aliyuncs.com/agents/123/sample-agent/home/starops/reports/summary.pdf?response-content-disposition=attachment&Expires=1770000000&OSSAccessKeyId=LTAI******&Signature=******
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      expire: 'expire',
      requestId: 'requestId',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expire: 'number',
      requestId: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

