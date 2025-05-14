// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTaskInfoResponseBodyTaskResult extends $dara.Model {
  /**
   * @remarks
   * The resources that are managed by the task. For a scale-out task, the value of this parameter is the ID of the instance that is added by the task.
   * 
   * @example
   * i-xxx
   */
  data?: string;
  /**
   * @remarks
   * The status of the scale-out task. Valid values:
   * 
   * *   `success`: The scale-out task is successful.
   * *   `success`: The scale-out task failed.
   * *   `initial`: The scale-out task is being initialized.
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

