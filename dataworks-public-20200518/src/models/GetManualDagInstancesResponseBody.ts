// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetManualDagInstancesResponseBodyInstances extends $dara.Model {
  /**
   * @remarks
   * The time when the instance started to run.
   * 
   * @example
   * 1605178414676
   */
  beginRunningTime?: number;
  /**
   * @remarks
   * The time when the instance started to wait for resources.
   * 
   * @example
   * 1605178414676
   */
  beginWaitResTime?: number;
  /**
   * @remarks
   * The time when the instance started to wait to be scheduled.
   * 
   * @example
   * 1605178414676
   */
  beginWaitTimeTime?: number;
  /**
   * @remarks
   * The data timestamp of the instance. In most cases, the value is one day before the time when the instance was run.
   * 
   * @example
   * 1605178414676
   */
  bizDate?: number;
  /**
   * @remarks
   * The time when the instance was generated.
   * 
   * @example
   * 1605178414676
   */
  createTime?: number;
  /**
   * @remarks
   * The user who performed the operation.
   * 
   * @example
   * xxx
   */
  createUser?: string;
  /**
   * @remarks
   * The time when the instance was scheduled to run.
   * 
   * @example
   * 1605178414676
   */
  cycTime?: number;
  /**
   * @remarks
   * The ID of the DAG for the manually triggered workflow.
   * 
   * @example
   * 350850491
   */
  dagId?: number;
  /**
   * @remarks
   * The type of the manually triggered workflow.
   * 
   * @example
   * 5
   */
  dagType?: string;
  /**
   * @remarks
   * The time when the instance finished running.
   * 
   * @example
   * 1605178414676
   */
  finishTime?: number;
  /**
   * @remarks
   * The ID of the instance in the manually triggered workflow.
   * 
   * @example
   * 11726873619
   */
  instanceId?: number;
  /**
   * @remarks
   * The time when the instance was last modified.
   * 
   * @example
   * 1605178414676
   */
  modifyTime?: number;
  /**
   * @remarks
   * The ID of the node in the manually triggered workflow.
   * 
   * @example
   * 37851
   */
  nodeId?: number;
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * test2
   */
  nodeName?: string;
  /**
   * @remarks
   * The parameters related to the instance.
   * 
   * @example
   * xxx
   */
  paramValues?: string;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * *   NOT_RUN: The instance is not run.
   * *   WAIT_TIME: The instance is waiting for its scheduling time to arrive.
   * *   WAIT_RESOURCE: The instance is waiting for resources.
   * *   RUNNING: The instance is running.
   * *   CHECKING: Data quality is being checked for the instance.
   * *   CHECKING_CONDITION: Branch conditions are being checked for the instance.
   * *   FAILURE: The instance fails to be run.
   * *   SUCCESS: The instance is successfully run.
   * 
   * @example
   * WAIT_TIME
   */
  status?: string;
  /**
   * @remarks
   * The scheduling type of the node that generates the instance. Valid values:
   * 
   * *   NORMAL(0): The node is an auto triggered node. The scheduling system regularly runs the node.
   * *   MANUAL(1): The node is a manually triggered node. The scheduling system does not regularly run the node.
   * *   PAUSE(2): The node is a paused node. The scheduling system regularly runs the node but sets the status of the node to failed when the scheduling system starts to run the node.
   * *   SKIP(3): The node is a dry-run node. The scheduling system regularly runs the node but sets the status of the node to successful when the scheduling system starts to run the node.
   * *   SKIP_UNCHOOSE(4): The node is an unselected node in a temporary workflow. This type of node exists only in temporary workflows. The scheduling system sets the status of the node to successful when the scheduling system starts to run the node.
   * *   SKIP_CYCLE(5): The node is a node that is scheduled by week or month and is waiting for the scheduling time to arrive. The scheduling system regularly runs the node but sets the status of the node to successful when the scheduling system starts to run the node.
   * *   CONDITION_UNCHOOSE(6): The node is not selected by its ancestor branch node and is run as a dry-run node.
   * *   REALTIME_DEPRECATED(7): The node has instances that are generated in real time but deprecated. The scheduling system sets the status of the node to successful.
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
   * The instances in the manually triggered workflow.
   */
  instances?: GetManualDagInstancesResponseBodyInstances[];
  /**
   * @remarks
   * The request ID.
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

