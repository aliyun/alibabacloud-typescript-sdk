// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDocTranslateTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The document translation task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * d3a2397bc2c14ab4a2e40a4f5b46241b
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

