// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAsyncTaskRequest extends $dara.Model {
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
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

