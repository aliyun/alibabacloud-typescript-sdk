// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CompleteCodeBundleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The code bundle version identifier.
   * 
   * @example
   * 1
   */
  bundleVersion?: string;
  /**
   * @remarks
   * The object size.
   * 
   * @example
   * 111
   */
  byteSize?: number;
  /**
   * @remarks
   * The code bundle ID.
   * 
   * @example
   * 111
   */
  codeBundleId?: number;
  /**
   * @remarks
   * The MIME type of the stored code bundle. This is typically application/octet-stream for pre-signed PUT operations.
   * 
   * @example
   * application/octet-stream
   */
  contentType?: string;
  /**
   * @remarks
   * The time when the record was created, in RFC 3339 format.
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
   * 76851f2b5bf0187fbc29e8bca4
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
   * The code bundle status.
   * 
   * @example
   * ready
   */
  status?: string;
  /**
   * @remarks
   * The time when the record was last updated.
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

