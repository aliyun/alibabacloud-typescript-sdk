// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDownloadTaskTypeResponseBodyTaskTypeArray extends $dara.Model {
  /**
   * @remarks
   * The name of the task type.
   * 
   * @example
   * Internet Boundary Firewall Assets
   */
  taskName?: string;
  /**
   * @remarks
   * The type of the task.
   * 
   * @example
   * InternetFirewallAsset
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      taskName: 'TaskName',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskName: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

