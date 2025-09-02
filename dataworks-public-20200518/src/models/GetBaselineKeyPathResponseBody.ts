// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBaselineKeyPathResponseBodyDataRuns extends $dara.Model {
  /**
   * @remarks
   * The timestamp obtained by adding the predicted time when the instance started to run to the historical average running duration of the instance.
   * 
   * @example
   * 1553531402000
   */
  absTime?: number;
  /**
   * @remarks
   * The timestamp of the predicted time when the instance started to run.
   * 
   * @example
   * 1553531686000
   */
  beginCast?: number;
  /**
   * @remarks
   * The timestamp of the actual time when the instance started to run.
   * 
   * @example
   * 1553531401000
   */
  beginRunningTime?: number;
  /**
   * @remarks
   * The timestamp when the instance started to wait for resources.
   * 
   * @example
   * 1553531401000
   */
  beginWaitResTime?: number;
  /**
   * @remarks
   * The timestamp when the instance started to wait for the scheduling time.
   * 
   * @example
   * 1553531400000
   */
  beginWaitTimeTime?: number;
  /**
   * @remarks
   * The timestamp of the predicted time when the instance finished running.
   * 
   * @example
   * 1553531687000
   */
  endCast?: number;
  /**
   * @remarks
   * The timestamp of the actual time when the instance finished running.
   * 
   * @example
   * 1553531401000
   */
  finishTime?: number;
  /**
   * @remarks
   * The status of the instance. Valid values: NOT_RUN, WAIT_TIME, WAIT_RESOURCE, RUNNING, CHECKING, CHECKING_CONDITION, FAILURE, and SUCCESS. The value NOT_RUN indicates that the instance is not run. The value WAIT_TIME indicates that the instance is waiting to be run. The value WAIT_RESOURCE indicates that the instance is waiting for resources. The value RUNNING indicates that the instance is running. The value CHECKING indicates that data quality is being checked for the instance. The value CHECKING_CONDITION indicates that branch conditions are being checked for the instance. The value FAILURE indicates that the instance fails to run. The value SUCCESS indicates that the instance is run.
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
   * The timestamp when the event was found.
   * 
   * @example
   * 1553531401000
   */
  addTime?: number;
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
   * The event ID.
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
   * The data timestamp of the instance.
   * 
   * @example
   * 1553443200000
   */
  bizdate?: number;
  /**
   * @remarks
   * The ID of the scheduling cycle of the instance. Valid values: 1 to 288.
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
   * 12345
   */
  instanceId?: number;
  /**
   * @remarks
   * The node ID.
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
   * The ID of the Alibaba Cloud account used by the node owner.
   * 
   * @example
   * 9527952****
   */
  owner?: string;
  /**
   * @remarks
   * The type of the node. Valid values: 23, 10, 6, and 99. The value 23 indicates that the node is a Data Integration node. The value 10 indicates that the node is a MaxCompute SQL node. The value 6 indicates that the node is a Shell node. The value 99 indicates that the node is a zero load node.
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
   * The running records of the instance.
   */
  runs?: GetBaselineKeyPathResponseBodyDataRuns[];
  /**
   * @remarks
   * The information about the events that are associated with the instance.
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
   * The information about the key path.
   */
  data?: GetBaselineKeyPathResponseBodyData[];
  /**
   * @remarks
   * Error code
   * 
   * @example
   * 1031203110005
   */
  errorCode?: string;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * The specified parameters are invalid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The timestamp when the event was found.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The unique ID of the call. After an error occurs, you can troubleshoot the problem based on the ID.
   * 
   * @example
   * 0000-ABCD-EFG****
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the call is successful.
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

