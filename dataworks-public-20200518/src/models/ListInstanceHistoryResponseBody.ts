// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceHistoryResponseBodyInstances extends $dara.Model {
  /**
   * @remarks
   * The time when the instance started to be run. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1590416703313
   */
  beginRunningTime?: number;
  /**
   * @remarks
   * The time when the instance started to wait for resources.
   * 
   * @example
   * 1590416703313
   */
  beginWaitResTime?: number;
  /**
   * @remarks
   * The time when the instance started to wait to be scheduled.
   * 
   * @example
   * 1590416703313
   */
  beginWaitTimeTime?: number;
  /**
   * @remarks
   * The data timestamp of the instance. In most cases, the value is one day before the time when the instance was run.
   * 
   * @example
   * 1590336000000
   */
  bizdate?: number;
  /**
   * @remarks
   * The time when the instance was generated.
   * 
   * @example
   * 1590416703313
   */
  createTime?: number;
  /**
   * @remarks
   * The time when the node started to be run. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1590422400000
   */
  cycTime?: number;
  /**
   * @remarks
   * The workflow ID.
   * 
   * @example
   * 33845
   */
  dagId?: number;
  /**
   * @remarks
   * Indicates whether the instance is associated with a monitoring rule in Data Quality. Valid values:
   * 
   * *   0: The instance is associated with a monitoring rule in Data Quality.
   * *   1: The instance is not associated with a monitoring rule in Data Quality.
   * 
   * @example
   * 1
   */
  dagType?: string;
  /**
   * @remarks
   * The error message. This parameter is deprecated. You can call the GetInstanceLog operation to query the error information related to the node.
   * 
   * @example
   * error message
   */
  errorMessage?: string;
  /**
   * @remarks
   * The time when the running of the node was complete. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1590416703313
   */
  finishTime?: number;
  /**
   * @remarks
   * The historical record number of the instance.
   * 
   * @example
   * 1
   */
  instanceHistoryId?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 1234
   */
  instanceId?: number;
  /**
   * @remarks
   * The time when the node was last modified.
   * 
   * @example
   * 1590416703313
   */
  modifyTime?: number;
  /**
   * @remarks
   * The node ID.
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
   * The status of the node that generates the instance. Valid values:
   * 
   * *   NOT_RUN: The node is not run.
   * *   WAIT_TIME: The node is waiting for the scheduling time to arrive.
   * *   WAIT_RESOURCE: The node is waiting for resources.
   * *   RUNNING: The node is running.
   * *   CHECKING: Data quality is being checked for the node.
   * *   CHECKING_CONDITION: Branch conditions are being checked for the node.
   * *   FAILURE: The node fails to be run.
   * *   SUCCESS: The node is successfully run.
   * 
   * @example
   * NOT_RUN
   */
  status?: string;
  /**
   * @remarks
   * The scheduling type of the node. Valid values:
   * 
   * *   NORMAL(0): The node is an auto triggered node. The scheduling system regularly runs the node.
   * *   MANUAL(1): The node is a manually triggered node. The scheduling system does not regularly run the node.
   * *   PAUSE(2): The node is a frozen node. The scheduling system regularly runs the node but sets the status of the node to failed when the scheduling system starts to run the node.
   * *   SKIP(3): The node is a dry-run node. The scheduling system regularly runs the node but sets the status of the node to successful when the scheduling system starts to run the node.
   * *   SKIP_UNCHOOSE(4): The node is an unselected node in a temporary workflow. This type of node exists only in temporary workflows. The scheduling system sets the status of the node to successful when the scheduling system starts to run the node.
   * *   SKIP_CYCLE(5): The node is a node that is scheduled by the week or month and is waiting for the scheduling time to arrive. The scheduling system regularly runs the node but sets the status of the node to successful when the scheduling system starts to run the node.
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
   * The instances.
   */
  instances?: ListInstanceHistoryResponseBodyInstances[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E6F0DBDD-5AD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
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

