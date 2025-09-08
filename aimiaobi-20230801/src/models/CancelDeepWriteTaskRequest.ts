// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelDeepWriteTaskRequest extends $dara.Model {
  /**
   * @example
   * xbabac91-fdad-44d6-95ce-******
   */
  taskId?: string;
  /**
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

