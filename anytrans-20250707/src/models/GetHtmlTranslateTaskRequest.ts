// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHtmlTranslateTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the HTML translation task.
   * 
   * @example
   * 868c2fdd-96c2-4546-96d2-a259b8f35252
   */
  taskId?: string;
  /**
   * @remarks
   * The ID of the Model Studio workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * llm-kqtrcpdee4xm29xx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'taskId',
      workspaceId: 'workspaceId',
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

