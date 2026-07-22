// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFirewallTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The VPC-connected instance ID. You must specify at least one of TaskId and ChildInstanceId. If neither is specified, the API returns ErrorParameters(400).
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
   * The task ID. You must specify at least one of TaskId and ChildInstanceId. If neither is specified, the API returns ErrorParameters(400).
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

