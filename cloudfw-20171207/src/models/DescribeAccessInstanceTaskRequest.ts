// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccessInstanceTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the synchronization node. You must specify at least one of AccessInstanceId and TaskId. If both are left empty, the MissingParameter.TaskIdOrAccessInstanceId (-200550) error is returned.
   * 
   * @example
   * pdi-3bc2f91695ee48bd9377
   */
  accessInstanceId?: string;
  /**
   * @remarks
   * The type of the synchronization node.
   * 
   * @example
   * AckClusterConnector
   */
  accessInstanceType?: string;
  /**
   * @remarks
   * The language in which messages are received.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionNo?: string;
  /**
   * @remarks
   * The task ID. You must specify at least one of TaskId and AccessInstanceId. If both are left empty, the MissingParameter.TaskIdOrAccessInstanceId (-200550, TaskId and AccessInstanceId cannot be empty at the same time. Provide at least one.) error is returned.
   * 
   * @example
   * task-c92d4544ef7b6a42
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      accessInstanceId: 'AccessInstanceId',
      accessInstanceType: 'AccessInstanceType',
      lang: 'Lang',
      regionNo: 'RegionNo',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessInstanceId: 'string',
      accessInstanceType: 'string',
      lang: 'string',
      regionNo: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

