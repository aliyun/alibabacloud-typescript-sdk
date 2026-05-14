// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPptInfoRequest extends $dara.Model {
  /**
   * @example
   * 1f178f22-ec52-467d-8489-eef4468x0240
   */
  taskId?: string;
  /**
   * @example
   * llm-2setzb9xb8mx6vss
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

