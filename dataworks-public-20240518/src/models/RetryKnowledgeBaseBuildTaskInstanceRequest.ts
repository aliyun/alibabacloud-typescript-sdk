// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetryKnowledgeBaseBuildTaskInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotency key for the retry operation. Keep the original value when you resend the same request, and use a new token when you initiate another retry.
   * 
   * @example
   * retry-001
   */
  clientToken?: string;
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
  /**
   * @remarks
   * The ID of the instance to be retried.
   * 
   * This parameter is required.
   * 
   * @example
   * 20001
   */
  taskInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      knowledgeBaseId: 'KnowledgeBaseId',
      taskInstanceId: 'TaskInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      knowledgeBaseId: 'string',
      taskInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

