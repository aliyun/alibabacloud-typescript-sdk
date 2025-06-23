// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAsyncTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs in Resource Management. This parameter is empty by default, which indicates that the instance belongs to the default resource group.
   * 
   * @example
   * default
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the task that you want to delete.
   * 
   * >  You can call the [DescribeAsyncTasks](~~DescribeAsyncTasks~~) operation to query the IDs of all asynchronous export tasks.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
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

