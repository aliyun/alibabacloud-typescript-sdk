// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNotebookTaskStatusRequest extends $dara.Model {
  /**
   * @example
   * 8141456676986429894916354
   */
  sessionId?: string;
  /**
   * @example
   * c2b4cb5a-7420-49a8-aa7c-528becd6e1bf
   */
  taskId?: string;
  /**
   * @example
   * 8630242382****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      sessionId: 'SessionId',
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionId: 'string',
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

