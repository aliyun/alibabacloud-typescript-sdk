// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBaselineKeyPathResponseBodyDataRuns extends $dara.Model {
  /**
   * @remarks
   * The timestamp calculated by adding the historical average run duration to the estimated start time of the instance.
   * 
   * @example
   * 1553531402000
   */
  absTime?: number;
  /**
   * @remarks
   * The estimated start time of the instance.
   * 
   * @example
   * 1553531686000
   */
  beginCast?: number;
  /**
   * @remarks
   * The timestamp when the instance actually started running.
   * 
   * @example
   * 1553531401000
   */
  beginRunningTime?: number;
  /**
   * @remarks
   * The timestamp when the instance entered the waiting-for-resources state.
   * 
   * @example
   * 1553531401000
   */
  beginWaitResTime?: number;
  /**
   * @remarks
   * The timestamp when the instance entered the waiting-for-time state.
   * 
   * @example
   * 1553531400000
   */
  beginWaitTimeTime?: number;
  /**
   * @remarks
   * The estimated end time of the instance.
   * 
   * @example
   * 1553531687000
   */
  endCast?: number;
  /**
   * @remarks
   * The timestamp when the instance actually finished running.
   * 
   * @example
   * 1553531401000
   */
  finishTime?: number;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * - NOT_RUN: not run.
   * - WAIT_TIME: waiting for the scheduled time.
   * - WAIT_RESOURCE: waiting for resources.
   * - RUNNING: running.
   * - CHECKING: checking.
   * - CHECKING_CONDITION: checking conditions.
   * - FAILURE: failed.
   * - SUCCESS: succeeded.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      absTime: 'AbsTime',
      beginCast: 'BeginCast',
      beginRunningTime: 'BeginRunningTime',
      beginWaitResTime: 'BeginWaitResTime',
      beginWaitTimeTime: 'BeginWaitTimeTime',
      endCast: 'EndCast',
      finishTime: 'FinishTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      absTime: 'number',
      beginCast: 'number',
      beginRunningTime: 'number',
      beginWaitResTime: 'number',
      beginWaitTimeTime: 'number',
      endCast: 'number',
      finishTime: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaselineKeyPathResponseBodyDataTopics extends $dara.Model {
  /**
   * @remarks
   * The timestamp when the event was detected.
   * 
   * @example
   * 1553531401000
   */
  addTime?: number;
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
   * The ID of the event.
   * 
   * @example
   * 1234
   */
  topicId?: number;
  /**
   * @remarks
   * The name of the event.
   * 
   * @example
   * 1234
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      addTime: 'AddTime',
      instanceId: 'InstanceId',
      topicId: 'TopicId',
      topicName: 'TopicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addTime: 'number',
      instanceId: 'number',
      topicId: 'number',
      topicName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaselineKeyPathResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The timestamp of the business date of the instance.
   * 
   * @example
   * 1553443200000
   */
  bizdate?: number;
  /**
   * @remarks
   * The cycle number of the instance. Valid values: [1,288\\].
   * 
   * @example
   * 1
   */
  inGroupId?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * 123456
   */
  instanceId?: number;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * 1234
   */
  nodeId?: number;
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * Node name
   */
  nodeName?: string;
  /**
   * @remarks
   * The Alibaba Cloud UID of the node owner.
   * 
   * @example
   * 9527952****
   */
  owner?: string;
  /**
   * @remarks
   * The node type. Common node types include Data Integration (23), MaxCompute SQL (10), Shell (6), and virtual node (99).
   * 
   * @example
   * 10
   */
  prgType?: number;
  /**
   * @remarks
   * The ID of the workspace to which the node belongs.
   * 
   * @example
   * 1234
   */
  projectId?: number;
  /**
   * @remarks
   * The run records of the instance.
   */
  runs?: GetBaselineKeyPathResponseBodyDataRuns[];
  /**
   * @remarks
   * The event information associated with the instance.
   */
  topics?: GetBaselineKeyPathResponseBodyDataTopics[];
  static names(): { [key: string]: string } {
    return {
      bizdate: 'Bizdate',
      inGroupId: 'InGroupId',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      owner: 'Owner',
      prgType: 'PrgType',
      projectId: 'ProjectId',
      runs: 'Runs',
      topics: 'Topics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizdate: 'number',
      inGroupId: 'number',
      instanceId: 'number',
      nodeId: 'number',
      nodeName: 'string',
      owner: 'string',
      prgType: 'number',
      projectId: 'number',
      runs: { 'type': 'array', 'itemType': GetBaselineKeyPathResponseBodyDataRuns },
      topics: { 'type': 'array', 'itemType': GetBaselineKeyPathResponseBodyDataTopics },
    };
  }

  validate() {
    if(Array.isArray(this.runs)) {
      $dara.Model.validateArray(this.runs);
    }
    if(Array.isArray(this.topics)) {
      $dara.Model.validateArray(this.topics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaselineKeyPathResponseBody extends $dara.Model {
  /**
   * @remarks
   * The critical path information.
   */
  data?: GetBaselineKeyPathResponseBodyData[];
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 1031203110005
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The specified parameters are invalid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The unique ID of the request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 0000-ABCD-EFG****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetBaselineKeyPathResponseBodyData },
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

