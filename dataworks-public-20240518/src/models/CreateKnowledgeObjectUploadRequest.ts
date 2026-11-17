// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKnowledgeObjectUploadRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotency key for the upload request.
   * 
   * @example
   * upload-001
   */
  clientToken?: string;
  /**
   * @remarks
   * The Base64-encoded MD5 hash value of the original file.
   * 
   * This parameter is required.
   * 
   * @example
   * yaNM/IXZgmmMasifdgcavQ==
   */
  contentMd5?: string;
  /**
   * @remarks
   * The SHA-256 checksum of the original file.
   * 
   * @example
   * ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad
   */
  contentSha256?: string;
  /**
   * @remarks
   * The HTTP media type for the upload.
   * 
   * This parameter is required.
   * 
   * @example
   * text/markdown
   */
  contentType?: string;
  /**
   * @remarks
   * The original file name, which is not used as the object ID.
   * 
   * This parameter is required.
   * 
   * @example
   * policy.md
   */
  fileName?: string;
  /**
   * @remarks
   * The target knowledge base.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345678-1234-4234-8234-123456789abc
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * The size of the original file in bytes. This parameter reuses the existing maximum size limit for single-file uploads, which defaults to 100 MiB. If the size exceeds the limit, the InputTooLarge error is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * 1024
   */
  sizeBytes?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      contentMd5: 'ContentMd5',
      contentSha256: 'ContentSha256',
      contentType: 'ContentType',
      fileName: 'FileName',
      knowledgeBaseId: 'KnowledgeBaseId',
      sizeBytes: 'SizeBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      contentMd5: 'string',
      contentSha256: 'string',
      contentType: 'string',
      fileName: 'string',
      knowledgeBaseId: 'string',
      sizeBytes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

