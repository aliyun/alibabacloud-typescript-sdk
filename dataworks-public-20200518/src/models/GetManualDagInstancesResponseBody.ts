// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetManualDagInstancesResponseBodyInstances extends $dara.Model {
  /**
   * @remarks
   * The time when the instance node started to run.
   * 
   * The value is a 13-digit number, for example, `1605178414676`.
   * 
   * @example
   * 1605178414676
   */
  beginRunningTime?: number;
  /**
   * @remarks
   * The time when the instance node started to wait for resources.
   * 
   * The value is a 13-digit number, for example, `1605178414676`.
   * 
   * @example
   * 1605178414676
   */
  beginWaitResTime?: number;
  /**
   * @remarks
   * The time when the instance node started to wait for scheduling.
   * 
   * The value is a 13-digit number, for example, `1605178414676`.
   * 
   * @example
   * 1605178414676
   */
  beginWaitTimeTime?: number;
  /**
   * @remarks
   * The business date. This is typically the day before the node runs.
   * 
   * The value is a 13-digit number, for example, `1605178414676`.
   * 
   * @example
   * 1605178414676
   */
  bizDate?: number;
  /**
   * @remarks
   * The time when the instance node was created.
   * 
   * The value is a 13-digit number, for example, `1605178414676`.
   * 
   * @example
   * 1605178414676
   */
  createTime?: number;
  /**
   * @remarks
   * The operator.
   * 
   * @example
   * xxx
   */
  createUser?: string;
  /**
   * @remarks
   * The scheduled time of the instance node.
   * 
   * The value is a 13-digit number, for example, `1605178414676`.
   * 
   * @example
   * 1605178414676
   */
  cycTime?: number;
  /**
   * @remarks
   * The DAG ID of the manual workflow instance.
   * 
   * @example
   * 350850491
   */
  dagId?: number;
  /**
   * @remarks
   * The type of the manual workflow.
   * 
   * @example
   * 5
   */
  dagType?: string;
  /**
   * @remarks
   * The time when the instance node finished running.
   * 
   * The value is a 13-digit number, for example, `1605178414676`.
   * 
   * @example
   * 1605178414676
   */
  finishTime?: number;
  /**
   * @remarks
   * The internal instance ID.
   * 
   * @example
   * 11726873619
   */
  instanceId?: number;
  /**
   * @remarks
   * The most recent modification time of the instance node.
   * 
   * The value is a 13-digit number, for example, `1605178414676`.
   * 
   * @example
   * 1605178414676
   */
  modifyTime?: number;
  /**
   * @remarks
   * The internal node ID of the workflow.
   * 
   * @example
   * 37851
   */
  nodeId?: number;
  /**
   * @remarks
   * The node name.
   * 
   * @example
   * test2
   */
  nodeName?: string;
  /**
   * @remarks
   * The parameter information of the instance.
   * 
   * @example
   * xxx
   */
  paramValues?: string;
  /**
   * @remarks
   * The status of the instance node. Valid values:
   * - NOT_RUN: The instance is not run.
   * - WAIT_TIME: The instance is waiting for the scheduled dueTime or cycleTime.
   * - WAIT_RESOURCE: The instance is waiting for resources.
   * - RUNNING: The instance is running.
   * - CHECKING: The instance is submitted to Data Quality for data verification.
   * - CHECKING_CONDITION: The instance is performing branch condition verification.
   * - FAILURE: The instance failed to run.
   * - SUCCESS: The instance is run successfully.
   * 
   * @example
   * WAIT_TIME
   */
  status?: string;
  /**
   * @remarks
   * The scheduling type of the instance node. Valid values:
   * - NORMAL(0): a normal scheduling node. The node is scheduled on a daily basis.
   * - MANUAL(1): a manual node. The node is not scheduled on a daily basis.
   * - PAUSE(2): a paused node. The node is scheduled on a daily basis, but is set to failed when scheduling starts.
   * - SKIP(3): a dry-run node. The node is scheduled on a daily basis, but is set to successful when scheduling starts.
   * - SKIP_UNCHOOSE(4): a node that is not selected in a temporary workflow. This type of node exists only in temporary workflows and is set to successful when scheduling starts.
   * - SKIP_CYCLE(5): a weekly or monthly node that has not reached its run cycle. The node is scheduled on a daily basis, but is set to successful when scheduling starts.
   * - CONDITION_UNCHOOSE(6): a downstream node that is not selected by an upstream branch (IF) node. The node is directly set to dry-run.
   * - REALTIME_DEPRECATED(7): an expired periodic instance generated in real time. This type of node is directly set to successful.
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
      bizDate: 'BizDate',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      cycTime: 'CycTime',
      dagId: 'DagId',
      dagType: 'DagType',
      finishTime: 'FinishTime',
      instanceId: 'InstanceId',
      modifyTime: 'ModifyTime',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      paramValues: 'ParamValues',
      status: 'Status',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginRunningTime: 'number',
      beginWaitResTime: 'number',
      beginWaitTimeTime: 'number',
      bizDate: 'number',
      createTime: 'number',
      createUser: 'string',
      cycTime: 'number',
      dagId: 'number',
      dagType: 'string',
      finishTime: 'number',
      instanceId: 'number',
      modifyTime: 'number',
      nodeId: 'number',
      nodeName: 'string',
      paramValues: 'string',
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

export class GetManualDagInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of internal instances of the manual workflow.
   */
  instances?: GetManualDagInstancesResponseBodyInstances[];
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * SDFSDFSDF-SDFSDF-SDFDSF-SDFSDF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': GetManualDagInstancesResponseBodyInstances },
      requestId: 'string',
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

