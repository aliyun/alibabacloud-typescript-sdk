// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKnowledgeObjectShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token. This parameter is supported only for DOCUMENT. Model updates do not guarantee exactly-once remote save notifications.
   * 
   * @example
   * edit-document-text-001
   */
  clientToken?: string;
  /**
   * @remarks
   * The typed content update. Object properties are submitted as needed. Arrays are replaced in their entirety when submitted. Unspecified properties are retained.
   */
  contentShrink?: string;
  /**
   * @remarks
   * The new description. An empty string clears the description. If this parameter is not specified, the original value is retained.
   * 
   * @example
   * Actual paid amount
   */
  description?: string;
  /**
   * @remarks
   * The expected modification time. This parameter is supported only for DOCUMENT. It is required when modifying the body text and optional when modifying metadata.
   * 
   * @example
   * 1790200800000
   */
  expectedModifyTime?: number;
  /**
   * @remarks
   * The ID of the knowledge base to which the object belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345678-1234-4234-8234-123456789abc
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * The stable knowledge object ID returned by the Get or List operation.
   * 
   * This parameter is required.
   * 
   * @example
   * obj-model-001
   */
  knowledgeObjectId?: string;
  /**
   * @remarks
   * The new name. This parameter cannot be empty. If this parameter is not specified, the original value is retained.
   * 
   * @example
   * orders
   */
  name?: string;
  /**
   * @remarks
   * The upload ID. This parameter is supported only for SEMANTIC_MODEL. It replaces the public model content with a complete YAML file and is mutually exclusive with Content.
   * 
   * @example
   * 12345678-1234-4234-8234-123456789abd
   */
  uploadId?: string;
  /**
   * @remarks
   * The version number. This parameter is required when updating Content or UploadId for SEMANTIC_MODEL. Use the VersionNo returned by the Get operation. This is not an optimistic lock.
   * 
   * @example
   * 1
   */
  versionNo?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      contentShrink: 'Content',
      description: 'Description',
      expectedModifyTime: 'ExpectedModifyTime',
      knowledgeBaseId: 'KnowledgeBaseId',
      knowledgeObjectId: 'KnowledgeObjectId',
      name: 'Name',
      uploadId: 'UploadId',
      versionNo: 'VersionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      contentShrink: 'string',
      description: 'string',
      expectedModifyTime: 'number',
      knowledgeBaseId: 'string',
      knowledgeObjectId: 'string',
      name: 'string',
      uploadId: 'string',
      versionNo: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

