// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkflowInstanceResponseBodyDataWfInstanceDagEdges extends $dara.Model {
  /**
   * @remarks
   * The upstream job instance of the current job instance. A value of 0 indicates that the upstream job instance is the root node.
   * 
   * @example
   * 24058798
   */
  source?: number;
  /**
   * @remarks
   * The downstream job instance of the current job instance.
   * 
   * @example
   * 24058796
   */
  target?: number;
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'number',
      target: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowInstanceResponseBodyDataWfInstanceDagNodes extends $dara.Model {
  /**
   * @remarks
   * The number of retries when the job failed.
   * 
   * @example
   * 0
   */
  attempt?: number;
  /**
   * @remarks
   * The data timestamp of the job.
   * 
   * @example
   * 2023-01-03 18:00:00
   */
  dataTime?: string;
  /**
   * @remarks
   * The time when the job stopped running.
   * 
   * @example
   * 2023-01-03 18:00:21
   */
  endTime?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 1472
   */
  jobId?: number;
  /**
   * @remarks
   * The ID of the job instance.
   * 
   * @example
   * 24058796
   */
  jobInstanceId?: number;
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * TestJob
   */
  jobName?: string;
  /**
   * @remarks
   * The execution result of the job.
   * 
   * @example
   * code=200
   */
  result?: string;
  /**
   * @remarks
   * The time when the job was scheduled.
   * 
   * @example
   * 2023-01-03 18:00:03
   */
  scheduleTime?: string;
  /**
   * @remarks
   * The time when the job started to run.
   * 
   * @example
   * 2023-01-03 18:00:03
   */
  startTime?: string;
  /**
   * @remarks
   * The state of the job instance. Valid values: 1: The job instance is waiting for execution. 3: The job instance is running. 4: The job instance is run. 5: The job instance failed to run. 9: The job instance is rejected. Enumeration class: com.alibaba.schedulerx.common.domain.InstanceStatus.
   * 
   * @example
   * 4
   */
  status?: number;
  /**
   * @remarks
   * The worker on which the job instance run.
   * 
   * @example
   * 10.163.0.101:34027
   */
  workAddr?: string;
  static names(): { [key: string]: string } {
    return {
      attempt: 'Attempt',
      dataTime: 'DataTime',
      endTime: 'EndTime',
      jobId: 'JobId',
      jobInstanceId: 'JobInstanceId',
      jobName: 'JobName',
      result: 'Result',
      scheduleTime: 'ScheduleTime',
      startTime: 'StartTime',
      status: 'Status',
      workAddr: 'WorkAddr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attempt: 'number',
      dataTime: 'string',
      endTime: 'string',
      jobId: 'number',
      jobInstanceId: 'number',
      jobName: 'string',
      result: 'string',
      scheduleTime: 'string',
      startTime: 'string',
      status: 'number',
      workAddr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowInstanceResponseBodyDataWfInstanceDag extends $dara.Model {
  /**
   * @remarks
   * The dependencies between job instances.
   */
  edges?: GetWorkflowInstanceResponseBodyDataWfInstanceDagEdges[];
  /**
   * @remarks
   * The job instances.
   */
  nodes?: GetWorkflowInstanceResponseBodyDataWfInstanceDagNodes[];
  static names(): { [key: string]: string } {
    return {
      edges: 'Edges',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edges: { 'type': 'array', 'itemType': GetWorkflowInstanceResponseBodyDataWfInstanceDagEdges },
      nodes: { 'type': 'array', 'itemType': GetWorkflowInstanceResponseBodyDataWfInstanceDagNodes },
    };
  }

  validate() {
    if(Array.isArray(this.edges)) {
      $dara.Model.validateArray(this.edges);
    }
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowInstanceResponseBodyDataWfInstanceInfo extends $dara.Model {
  /**
   * @remarks
   * The data timestamp of the workflow instance.
   * 
   * @example
   * 2023-01-03 18:00:00
   */
  dataTime?: string;
  /**
   * @remarks
   * The time when the workflow instance stopped running.
   * 
   * @example
   * 2023-01-03 18:00:21
   */
  endTime?: string;
  /**
   * @remarks
   * The time when the workflow instance was scheduled to run.
   * 
   * @example
   * 2023-01-03 18:00:00
   */
  scheduleTime?: string;
  /**
   * @remarks
   * The time when the workflow instance started to run.
   * 
   * @example
   * 2023-01-03 18:00:01
   */
  startTime?: string;
  /**
   * @remarks
   * The state of the workflow instance. Valid values:
   * 
   * *   1: pending
   * *   2: preparing
   * *   3: running
   * *   4: successful
   * *   5: failed
   * 
   * @example
   * 5
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      dataTime: 'DataTime',
      endTime: 'EndTime',
      scheduleTime: 'ScheduleTime',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataTime: 'string',
      endTime: 'string',
      scheduleTime: 'string',
      startTime: 'string',
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

export class GetWorkflowInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The directed acyclic graph (DAG) of the workflow instance, including nodes and dependencies.
   */
  wfInstanceDag?: GetWorkflowInstanceResponseBodyDataWfInstanceDag;
  /**
   * @remarks
   * The details of the workflow instance, including the state of the workflow instance, the time when the workflow instance started to run, the time when the workflow instance stopped running, the state of each job instance, and the dependencies between job instances.
   */
  wfInstanceInfo?: GetWorkflowInstanceResponseBodyDataWfInstanceInfo;
  static names(): { [key: string]: string } {
    return {
      wfInstanceDag: 'WfInstanceDag',
      wfInstanceInfo: 'WfInstanceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      wfInstanceDag: GetWorkflowInstanceResponseBodyDataWfInstanceDag,
      wfInstanceInfo: GetWorkflowInstanceResponseBodyDataWfInstanceInfo,
    };
  }

  validate() {
    if(this.wfInstanceDag && typeof (this.wfInstanceDag as any).validate === 'function') {
      (this.wfInstanceDag as any).validate();
    }
    if(this.wfInstanceInfo && typeof (this.wfInstanceInfo as any).validate === 'function') {
      (this.wfInstanceInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The details of the workflow instance.
   */
  data?: GetWorkflowInstanceResponseBodyData;
  /**
   * @remarks
   * The returned error message.
   * 
   * @example
   * workflowId=xxx is not existed
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 39090022-1F3B-4797-8518-6B61095F1AF0
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
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetWorkflowInstanceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

