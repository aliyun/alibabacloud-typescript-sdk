// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskInstanceRelationResponseBodyNodeListNode extends $dara.Model {
  /**
   * @remarks
   * The business time of the node.
   * 
   * @example
   * 2021-11-09 14:37:26
   */
  businessTime?: string;
  /**
   * @remarks
   * The time when the execution of the task flow was complete. The time is displayed in the yyyy-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2021-11-11 14:38:57
   */
  endTime?: string;
  /**
   * @remarks
   * The amount of time consumed for running the node. Unit: milliseconds.
   * 
   * @example
   * 170655
   */
  executeTime?: number;
  /**
   * @remarks
   * The ID of the execution record of the task flow.
   * 
   * @example
   * 14059
   */
  id?: number;
  /**
   * @remarks
   * The description of the task.
   * 
   * @example
   * test
   */
  message?: string;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * 14059
   */
  nodeId?: number;
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * Spark SQL-1
   */
  nodeName?: string;
  /**
   * @remarks
   * The type of the node. For more information about the valid values for this parameter, see [NodeType parameter](https://help.aliyun.com/document_detail/424705.html).
   * 
   * @example
   * 36
   */
  nodeType?: number;
  /**
   * @remarks
   * The status of the node. Valid values:
   * 
   * *   **0**: The node is waiting to be scheduled.
   * *   **1**: The node is running.
   * *   **2**: The node is suspended.
   * *   **3**: The node failed to run.
   * *   **4**: The node is run.
   * *   **5**: The node is complete.
   * 
   * @example
   * 4
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      businessTime: 'BusinessTime',
      endTime: 'EndTime',
      executeTime: 'ExecuteTime',
      id: 'Id',
      message: 'Message',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      nodeType: 'NodeType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessTime: 'string',
      endTime: 'string',
      executeTime: 'number',
      id: 'number',
      message: 'string',
      nodeId: 'number',
      nodeName: 'string',
      nodeType: 'number',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

