// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImportTaskValidationRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID. You can obtain it by calling DescribeDBInstances.
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
   * Job ID. This is the job ID returned when you invoke the **ValidateImportTask** API to create a precheck for an import job.
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

