// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeepWriteTaskRequest extends $dara.Model {
  /**
   * @example
   * 6d3c0bc9-7561-41a4-be4c-d906abdb40a9
   */
  taskId?: string;
  /**
   * @example
   * llm-odl2p61i4vfbph4g
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

