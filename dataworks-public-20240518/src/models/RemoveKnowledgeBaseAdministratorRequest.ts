// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveKnowledgeBaseAdministratorRequest extends $dara.Model {
  /**
   * @remarks
   * The DataWorks user ID of the administrator to be removed. This is not the identity of the caller.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000000000000000
   */
  administratorUserId?: string;
  /**
   * @remarks
   * The ID of the knowledge base.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345678-1234-4234-8234-123456789abc
   */
  knowledgeBaseId?: string;
  static names(): { [key: string]: string } {
    return {
      administratorUserId: 'AdministratorUserId',
      knowledgeBaseId: 'KnowledgeBaseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      administratorUserId: 'string',
      knowledgeBaseId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

