// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitiatePptCreationRequest extends $dara.Model {
  outline?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 95c2fbe6-5a20-4fc2-8a93-376ed05fbe13
   */
  taskId?: string;
  /**
   * @example
   * llm-3fy94b2rtadt01qa
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      outline: 'Outline',
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outline: 'string',
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

