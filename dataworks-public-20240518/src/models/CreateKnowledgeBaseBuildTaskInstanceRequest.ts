// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKnowledgeBaseBuildTaskInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotency key for this creation request. We recommend providing it for automatic retries. Reuse the same value when retrying the same operation.
   * 
   * @example
   * run-001
   */
  clientToken?: string;
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
   * The source task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10001
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      knowledgeBaseId: 'KnowledgeBaseId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      knowledgeBaseId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

