// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotfixTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * This parameter is required.
   * 
   * @example
   * hotfix-da3dcc0b-5019-4b59-b12f-2e500da9083c
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

