// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteKnowledgeObjectRequest extends $dara.Model {
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
   * The stable ID of the object to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * obj-document-001
   */
  knowledgeObjectId?: string;
  static names(): { [key: string]: string } {
    return {
      knowledgeBaseId: 'KnowledgeBaseId',
      knowledgeObjectId: 'KnowledgeObjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeBaseId: 'string',
      knowledgeObjectId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

