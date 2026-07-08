// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLongTextTranslateTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the long-text translation task.
   * 
   * @example
   * a8f25f25-0b36-4349-857f-e19a43f69e51
   */
  taskId?: string;
  /**
   * @remarks
   * The ID of the Model Studio workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * llm-ep8ba0dr6seiddri
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

