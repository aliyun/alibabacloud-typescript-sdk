// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociatePocTaskRequest extends $dara.Model {
  /**
   * @remarks
   * Project ID
   * 
   * @example
   * 01
   */
  projectId?: number;
  /**
   * @remarks
   * Retrospective task ID.
   * 
   * @example
   * 01
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

