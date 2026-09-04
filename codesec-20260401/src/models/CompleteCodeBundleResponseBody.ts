// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CompleteCodeBundleResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  bundleVersion?: string;
  /**
   * @example
   * 111
   */
  byteSize?: number;
  /**
   * @example
   * 111
   */
  codeBundleId?: number;
  /**
   * @example
   * application/octet-stream
   */
  contentType?: string;
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
   * 76851f2b5bf0187fbc29e8bca4
   */
  projectId?: number;
  /**
   * @example
   * 9A1F403F-0A85-5578-8B7C-55E3E9408659
   */
  requestId?: string;
  /**
   * @example
   * ready
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
  static names(): { [key: string]: string } {
    return {
      bundleVersion: 'bundleVersion',
      byteSize: 'byteSize',
      codeBundleId: 'codeBundleId',
      contentType: 'contentType',
      createdAt: 'createdAt',
      filename: 'filename',
      projectId: 'projectId',
      requestId: 'requestId',
      status: 'status',
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bundleVersion: 'string',
      byteSize: 'number',
      codeBundleId: 'number',
      contentType: 'string',
      createdAt: 'string',
      filename: 'string',
      projectId: 'number',
      requestId: 'string',
      status: 'string',
      updatedAt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

