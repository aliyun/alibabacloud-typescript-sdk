// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrantKnowledgeBaseRetrievalRequest extends $dara.Model {
  /**
   * @remarks
   * The knowledge base ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345678-1234-4234-8234-123456789abc
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * The DataWorks user ID of the target user. This is not the RAM UID or the caller identity.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000000000000000
   */
  principalId?: string;
  /**
   * @remarks
   * The type of the principal that receives the share. This parameter is optional and defaults to USER. Currently, only USER is supported.
   * 
   * @example
   * USER
   */
  principalType?: string;
  static names(): { [key: string]: string } {
    return {
      knowledgeBaseId: 'KnowledgeBaseId',
      principalId: 'PrincipalId',
      principalType: 'PrincipalType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeBaseId: 'string',
      principalId: 'string',
      principalType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

