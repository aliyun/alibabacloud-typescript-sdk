// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopKnowledgeBaseBuildTaskInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The knowledge base.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345678-1234-4234-8234-123456789abc
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * The execution ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 20001
   */
  taskInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      knowledgeBaseId: 'KnowledgeBaseId',
      taskInstanceId: 'TaskInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

