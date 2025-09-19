// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTaskErrorLogRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the task.
   * 
   * >  You can call the DescribeImageFixTask operation to query the IDs of tasks.
   * 
   * This parameter is required.
   * 
   * @example
   * ivf-6e520160-205d-4801-b8e9-9e7e****
   */
  buildTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      buildTaskId: 'BuildTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildTaskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

