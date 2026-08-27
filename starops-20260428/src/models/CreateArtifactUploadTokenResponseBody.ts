// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateArtifactUploadTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID used for OSS uploads.
   * 
   * @example
   * LTAI******
   */
  accessId?: string;
  /**
   * @remarks
   * The normalized logical upload directory on the server side, relative to the digital human artifact root directory.
   * 
   * @example
   * upload/2026-05-25/
   */
  artifactPath?: string;
  /**
   * @remarks
   * The allowed OSS object prefix for uploads.
   * 
   * @example
   * agents/123/sample-agent/home/starops/upload/2026-05-25/
   */
  dir?: string;
  /**
   * @remarks
   * The expiration time of the upload credential. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1770000000
   */
  expire?: number;
  /**
   * @remarks
   * The OSS form upload URL.
   * 
   * @example
   * https://example-bucket.oss-cn-shanghai.aliyuncs.com
   */
  host?: string;
  /**
   * @remarks
   * The maximum size of a single file upload, in bytes.
   * 
   * @example
   * 104857600
   */
  maxSize?: number;
  /**
   * @remarks
   * The Base64-encoded OSS Post Policy.
   * 
   * @example
   * eyJleHBpcmF0aW9uIjoiMjAyNi0wNS0yMVQwODowMDowMFoifQ==
   */
  policy?: string;
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
   * The OSS Post Policy signature.
   * 
   * @example
   * abc123signature
   */
  signature?: string;
  /**
   * @remarks
   * The status code returned upon a successful OSS upload.
   * 
   * @example
   * 200
   */
  successActionStatus?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'accessId',
      artifactPath: 'artifactPath',
      dir: 'dir',
      expire: 'expire',
      host: 'host',
      maxSize: 'maxSize',
      policy: 'policy',
      requestId: 'requestId',
      signature: 'signature',
      successActionStatus: 'successActionStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      artifactPath: 'string',
      dir: 'string',
      expire: 'number',
      host: 'string',
      maxSize: 'number',
      policy: 'string',
      requestId: 'string',
      signature: 'string',
      successActionStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

