// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLongTextTranslateTaskRequest extends $dara.Model {
  /**
   * @example
   * 2746f4be-cff2-465e-a2c6-12bff30ce0f9
   */
  taskId?: string;
  /**
   * @remarks
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

