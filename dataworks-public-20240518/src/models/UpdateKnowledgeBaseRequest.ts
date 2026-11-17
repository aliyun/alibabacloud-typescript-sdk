// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKnowledgeBaseRequest extends $dara.Model {
  /**
   * @remarks
   * The new description.
   * 
   * @example
   * Sales metrics and policy documents
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
   * The new name.
   * 
   * @example
   * Sales Knowledge
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      knowledgeBaseId: 'KnowledgeBaseId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      knowledgeBaseId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

