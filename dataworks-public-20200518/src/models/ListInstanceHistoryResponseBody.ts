// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceHistoryResponseBodyInstances extends $dara.Model {
  /**
   * @remarks
   * The time when the instance started running, in timestamp format.
   * 
   * @example
   * 1590416703313
   */
  beginRunningTime?: number;
  /**
   * @remarks
   * The time when the instance started waiting for resources.
   * 
   * The value is a 13-digit number, such as `1590416703313`.
   * 
   * @example
   * 1590416703313
   */
  beginWaitResTime?: number;
  /**
   * @remarks
   * The time when the instance started waiting for scheduling.
   * 
   * The value is a 13-digit number, such as `1590416703313`.
   * 
   * @example
   * 1590416703313
   */
  beginWaitTimeTime?: number;
  /**
   * @remarks
   * The business date on which the scheduled node was run. This value is typically one day before the run time of the node.
   * 
   * The value is a 13-digit number, such as `1590336000000`.
   * 
   * @example
   * 1590336000000
   */
  bizdate?: number;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * The value is a 13-digit number, such as `1590416703313`.
   * 
   * @example
   * 1590416703313
   */
  createTime?: number;
  /**
   * @remarks
   * The scheduled run time of the node, in timestamp format.
   * 
   * @example
   * 1590422400000
   */
  cycTime?: number;
  /**
   * @remarks
   * The ID of the workflow.
   * 
   * @example
   * 33845
   */
  dagId?: number;
  /**
   * @remarks
   * The Data Quality Check (DQC) type. Valid values:
   * 
   * - 0: associated with DQC.
   * - 1: not associated with DQC.
   * 
   * @example
   * 1
   */
  dagType?: string;
  /**
   * @remarks
   * **[Deprecated]** The error message returned when the instance failed to run. This field is deprecated. You can call the GetInstanceLog operation to obtain the error information of the node.
   * 
   * @example
   * error message
   */
  errorMessage?: string;
  /**
   * @remarks
   * The time when the scheduled node finished running, in timestamp format.
   * 
   * @example
   * 1590416703313
   */
  finishTime?: number;
  /**
   * @remarks
   * The history archive ID of the instance.
   * 
   * @example
   * 1
   */
  instanceHistoryId?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * 1234
   */
  instanceId?: number;
  /**
   * @remarks
   * The time when the scheduled node was last modified.
   * 
   * The value is a 13-digit number, such as `1590416703313`.
   * 
   * @example
   * 1590416703313
   */
  modifyTime?: number;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * 33115
   */
  nodeId?: number;
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * kzh
   */
  nodeName?: string;
  /**
   * @remarks
   * The status of the node. Valid values:
   * 
   * - NOT_RUN: The node is not run.
   * - WAIT_TIME: The node is waiting for the scheduled time (DueTime or CycTime) to arrive.
   * - WAIT_RESOURCE: The node is waiting for resources.
   * - RUNNING: The node is running.
   * - CHECKING: The node is sent to Data Quality for data verification.
   * - CHECKING_CONDITION: The node is undergoing branch condition verification.
   * - FAILURE: The node failed to run.
   * - SUCCESS: The node ran successfully.
   * 
   * @example
   * NOT_RUN
   */
  status?: string;
  /**
   * @remarks
   * The scheduling type of the node instance. Valid values:
   * 
   * - NORMAL(0): A normal scheduling node. The node is scheduled on a daily basis.
   * - MANUAL(1): A manual node. The node is not scheduled on a daily basis.
   * - PAUSE(2): A frozen node. The node is scheduled on a daily basis, but is set to failed when scheduling starts.
   * - SKIP(3): A dry-run node. The node is scheduled on a daily basis, but is set to successful when scheduling starts.
   * - SKIP_UNCHOOSE(4): A node that is not selected in a temporary workflow. This type of node exists only in temporary workflows and is set to successful when scheduling starts.
   * - SKIP_CYCLE(5): A weekly or monthly node that has not reached its run cycle. The node is scheduled on a daily basis, but is set to successful when scheduling starts.
   * - CONDITION_UNCHOOSE(6): A downstream node that is not selected by an upstream branch (IF) node. The node is directly set to dry-run.
   * - REALTIME_DEPRECATED(7): An expired periodic instance generated in real time. This type of node is directly set to successful.
   * 
   * @example
   * NORMAL(0)
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      beginRunningTime: 'BeginRunningTime',
      beginWaitResTime: 'BeginWaitResTime',
      beginWaitTimeTime: 'BeginWaitTimeTime',
      bizdate: 'Bizdate',
      createTime: 'CreateTime',
      cycTime: 'CycTime',
      dagId: 'DagId',
      dagType: 'DagType',
      errorMessage: 'ErrorMessage',
      finishTime: 'FinishTime',
      instanceHistoryId: 'InstanceHistoryId',
      instanceId: 'InstanceId',
      modifyTime: 'ModifyTime',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      status: 'Status',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginRunningTime: 'number',
      beginWaitResTime: 'number',
      beginWaitTimeTime: 'number',
      bizdate: 'number',
      createTime: 'number',
      cycTime: 'number',
      dagId: 'number',
      dagType: 'string',
      errorMessage: 'string',
      finishTime: 'number',
      instanceHistoryId: 'number',
      instanceId: 'number',
      modifyTime: 'number',
      nodeId: 'number',
      nodeName: 'string',
      status: 'string',
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

export class ListInstanceHistoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of instances.
   */
  instances?: ListInstanceHistoryResponseBodyInstances[];
  /**
   * @remarks
   * The request ID. Used to locate logs and troubleshoot issues.
   * 
   * @example
   * E6F0DBDD-5AD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - true: The call was successful.
   * - false: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': ListInstanceHistoryResponseBodyInstances },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

