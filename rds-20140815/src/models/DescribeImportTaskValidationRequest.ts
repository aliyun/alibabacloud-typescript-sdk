// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImportTaskValidationRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to obtain this ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-xjkljj****
   */
  dbInstanceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The task ID. This ID is returned when you call the **ValidateImportTask** operation to create a precheck for the import task.
   * 
   * This parameter is required.
   * 
   * @example
   * 41698****
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      dbInstanceId: 'DbInstanceId',
      ownerId: 'OwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstanceId: 'string',
      ownerId: 'number',
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

