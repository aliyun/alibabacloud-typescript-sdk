// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCollaborationGroupOutputItemPreviewResponseBody extends $dara.Model {
  /**
   * @remarks
   * The common business status code.
   * 
   * @example
   * ERR.Robject.Auth.TenantAccessDenied
   */
  code?: string;
  /**
   * @remarks
   * The text content or preview prompt. This field can be empty.
   * 
   * @example
   * # Technical solution
   */
  content?: string;
  /**
   * @remarks
   * Indicates whether the preview is downgraded to a download preview.
   * 
   * @example
   * false
   */
  degraded?: boolean;
  /**
   * @remarks
   * The short-term signed download URL. This field can be empty. If the URL expires, call this operation again.
   * 
   * @example
   * https://example.com/download/document.md
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The file name extension. This field can be empty.
   * 
   * @example
   * md
   */
  fileExt?: string;
  /**
   * @remarks
   * The file name. This field can be empty.
   * 
   * @example
   * codex-r2-a-baseline.md
   */
  fileName?: string;
  /**
   * @remarks
   * The output detail ID.
   * 
   * @example
   * 51469466
   */
  itemId?: string;
  /**
   * @remarks
   * The common error description.
   * 
   * @example
   * Access denied to tenant 2147483647 because the user does not belong to the tenant
   */
  message?: string;
  /**
   * @remarks
   * The preview type.
   * 
   * @example
   * CONTENT
   */
  previewType?: string;
  /**
   * @remarks
   * The short-term preview URL. This field can be empty.
   * 
   * @example
   * https://example.com/preview/document
   */
  previewUrl?: string;
  /**
   * @remarks
   * The request tracking ID.
   * 
   * @example
   * c9cf6cb3-3f5c-4994-a8a1-c93379a6f5cf
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      content: 'content',
      degraded: 'degraded',
      downloadUrl: 'downloadUrl',
      fileExt: 'fileExt',
      fileName: 'fileName',
      itemId: 'itemId',
      message: 'message',
      previewType: 'previewType',
      previewUrl: 'previewUrl',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      content: 'string',
      degraded: 'boolean',
      downloadUrl: 'string',
      fileExt: 'string',
      fileName: 'string',
      itemId: 'string',
      message: 'string',
      previewType: 'string',
      previewUrl: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

