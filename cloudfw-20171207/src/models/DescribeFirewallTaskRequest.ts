// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFirewallTaskRequest extends $dara.Model {
  /**
   * @example
   * vfw-tr-cd6000c588214403****
   */
  childInstanceId?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * 199431783
   */
  taskId?: string;
  /**
   * @example
   * VPC
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      childInstanceId: 'ChildInstanceId',
      lang: 'Lang',
      taskId: 'TaskId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childInstanceId: 'string',
      lang: 'string',
      taskId: 'string',
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

