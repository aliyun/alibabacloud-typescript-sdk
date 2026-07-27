// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateArtifactUploadTokenResponseBody extends $dara.Model {
  /**
   * @example
   * LTAI******
   */
  accessId?: string;
  /**
   * @example
   * upload/2026-05-25/
   */
  artifactPath?: string;
  /**
   * @example
   * agents/123/sample-agent/home/starops/upload/2026-05-25/
   */
  dir?: string;
  /**
   * @example
   * 1770000000
   */
  expire?: number;
  /**
   * @example
   * https://example-bucket.oss-cn-shanghai.aliyuncs.com
   */
  host?: string;
  /**
   * @example
   * 104857600
   */
  maxSize?: number;
  /**
   * @example
   * eyJleHBpcmF0aW9uIjoiMjAyNi0wNS0yMVQwODowMDowMFoifQ==
   */
  policy?: string;
  /**
   * @example
   * 0A1B2C3D-4E5F-6789-ABCD-1234567890AB
   */
  requestId?: string;
  /**
   * @example
   * abc123signature
   */
  signature?: string;
  /**
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

