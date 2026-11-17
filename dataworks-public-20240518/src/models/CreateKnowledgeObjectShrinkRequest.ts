// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKnowledgeObjectShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotency token for the creation request. Keep the original request unchanged when retrying.
   * 
   * @example
   * create-document-001
   */
  clientToken?: string;
  /**
   * @remarks
   * Only Content.Document is supported. It includes Text and ContentFormat (MARKDOWN or TEXT).
   */
  contentShrink?: string;
  /**
   * @remarks
   * The document description.
   * 
   * @example
   * Sales metrics and policy document
   */
  description?: string;
  /**
   * @remarks
   * The ID of the target knowledge base.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345678-1234-4234-8234-123456789abc
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * The document name. Existing objects are not overwritten based on the name.
   * 
   * This parameter is required.
   * 
   * @example
   * Business description
   */
  name?: string;
  /**
   * @remarks
   * The type of the object. For this operation, the value is fixed to DOCUMENT.
   * 
   * This parameter is required.
   * 
   * @example
   * DOCUMENT
   */
  type?: string;
  /**
   * @remarks
   * The ID of the completed PUT upload session for this knowledge base. This parameter is mutually exclusive with Content.
   * 
   * @example
   * 12345678-1234-4234-8234-123456789abd
   */
  uploadId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      contentShrink: 'Content',
      description: 'Description',
      knowledgeBaseId: 'KnowledgeBaseId',
      name: 'Name',
      type: 'Type',
      uploadId: 'UploadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      contentShrink: 'string',
      description: 'string',
      knowledgeBaseId: 'string',
      name: 'string',
      type: 'string',
      uploadId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

