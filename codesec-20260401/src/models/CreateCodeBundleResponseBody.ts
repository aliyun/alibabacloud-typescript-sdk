// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateCodeBundleResponseBodyUpload extends $dara.Model {
  /**
   * @remarks
   * 凭证过期时间（RFC3339）
   * 
   * @example
   * 2026-09-03T05:58:47.88987539Z
   */
  expiresAt?: string;
  /**
   * @remarks
   * HTTP method for the presigned URL.
   * 
   * @example
   * PUT
   */
  method?: string;
  /**
   * @remarks
   * Presigned OSS PUT URL.
   * 
   * @example
   * https://codesec-beijing.oss-cn-beijing.aliyuncs.com/87766767%2F1001667%2F1004171.zip
   */
  putUrl?: string;
  /**
   * @remarks
   * Clients MUST send this **`Content-Type`** on PUT when **`put_url`** is set.
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
   * @example
   * 1
   */
  bundleVersion?: string;
  /**
   * @example
   * 111
   */
  codeBundleId?: number;
  /**
   * @remarks
   * 代码包创建时间（RFC3339）
   * 
   * @example
   * 2026-08-27T00:53:46.774Z
   */
  createdAt?: string;
  /**
   * @example
   * test-cases.zip
   */
  filename?: string;
  /**
   * @example
   * 123
   */
  projectId?: number;
  /**
   * @example
   * 9A1F403F-0A85-5578-8B7C-55E3E9408659
   */
  requestId?: string;
  /**
   * @example
   * pending
   */
  status?: string;
  /**
   * @remarks
   * 代码包更新时间（RFC3339）
   * 
   * @example
   * 2026-08-27T00:53:46.774Z
   */
  updatedAt?: string;
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

