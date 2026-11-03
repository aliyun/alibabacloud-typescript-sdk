// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFirewallTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the child instance. You must specify at least one of ChildInstanceId and TaskId. If both are empty, the MissingParameter.TaskId (-360448) error is returned.
   * 
   * @example
   * vfw-tr-cd6000c588214403****
   */
  childInstanceId?: string;
  /**
   * @remarks
   * The language type. Valid values:
   * 
   * - **zh** (default): Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the task. You must specify at least one of TaskId and ChildInstanceId. If both are empty, the MissingParameter.TaskId (-360448, At least one of TaskId or ChildInstanceId is required.) error is returned.
   * 
   * @example
   * 199431783
   */
  taskId?: string;
  /**
   * @remarks
   * The type of the task. Valid values:
   * 
   * - **NAT**: NAT firewall task
   * 
   * - **VPC**: VPC firewall task
   * 
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

