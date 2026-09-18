// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateCodeBundleResponseBodyUpload extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the credential in RFC 3339 format.
   * 
   * @example
   * 2026-09-03T05:58:47.88987539Z
   */
  expiresAt?: string;
  /**
   * @remarks
   * The HTTP method of the pre-signed URL. Valid values: PUT.
   * 
   * @example
   * PUT
   */
  method?: string;
  /**
   * @remarks
   * The pre-signed OSS PUT upload URL.
   * 
   * @example
   * https://codesec-beijing.oss-cn-beijing.aliyuncs.com/87766767%2F1001667%2F1004171.zip
   */
  putUrl?: string;
  /**
   * @remarks
   * The Content-Type header that the client must include when performing the PUT request. This field is returned when putUrl is present.
   * 
   * @example
   * application/octet-stream
   */
  requiredContentType?: string;
  static names(): { [key: string]: string } {
    return {
      expiresAt: 'expiresAt',
      method: 'method',
      putUrl: 'putUrl',
      requiredContentType: 'requiredContentType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiresAt: 'string',
      method: 'string',
      putUrl: 'string',
      requiredContentType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCodeBundleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The version identifier of the function code package.
   * 
   * @example
   * 1
   */
  bundleVersion?: string;
  /**
   * @remarks
   * The function code package ID.
   * 
   * @example
   * 111
   */
  codeBundleId?: number;
  /**
   * @remarks
   * The time when the function code package was created.
   * 
   * @example
   * 2026-08-27T00:53:46.774Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * test-cases.zip
   */
  filename?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 123
   */
  projectId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9A1F403F-0A85-5578-8B7C-55E3E9408659
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the function code package.
   * 
   * @example
   * pending
   */
  status?: string;
  /**
   * @remarks
   * The time when the function code package was last updated.
   * 
   * @example
   * 2026-08-27T00:53:46.774Z
   */
  updatedAt?: string;
  /**
   * @remarks
   * The upload credential. See the following fields for details.
   */
  upload?: CreateCodeBundleResponseBodyUpload;
  static names(): { [key: string]: string } {
    return {
      bundleVersion: 'bundleVersion',
      codeBundleId: 'codeBundleId',
      createdAt: 'createdAt',
      filename: 'filename',
      projectId: 'projectId',
      requestId: 'requestId',
      status: 'status',
      updatedAt: 'updatedAt',
      upload: 'upload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bundleVersion: 'string',
      codeBundleId: 'number',
      createdAt: 'string',
      filename: 'string',
      projectId: 'number',
      requestId: 'string',
      status: 'string',
      updatedAt: 'string',
      upload: CreateCodeBundleResponseBodyUpload,
    };
  }

  validate() {
    if(this.upload && typeof (this.upload as any).validate === 'function') {
      (this.upload as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

