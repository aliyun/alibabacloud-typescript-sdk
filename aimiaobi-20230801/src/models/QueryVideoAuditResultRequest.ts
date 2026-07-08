// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryVideoAuditResultRequest extends $dara.Model {
  /**
   * @remarks
   * Task ID
   * 
   * This parameter is required.
   * 
   * @example
   * xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  taskId?: string;
  /**
   * @remarks
   * Workspace ID
   * 
   * This parameter is required.
   * 
   * @example
   * llm-xxxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

