// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBaselineStatusResponseBodyDataBlockInstance extends $dara.Model {
  /**
   * @remarks
   * The timestamp of the predicted time when the instance finished running.
   * 
   * @example
   * 1553443200000
   */
  endCast?: number;
  /**
   * @remarks
   * The timestamp of the actual time when the instance finished running.
   * 
   * @example
   * 1553443200000
   */
  finishTime?: number;
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
   * The ID of the Alibaba Cloud account used by the node owner.
   * 
   * @example
   * 9527952795****
   */
  owner?: string;
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
   * The status of the instance. Valid values: NOT_RUN, WAIT_TIME, WAIT_RESOURCE, RUNNING, CHECKING, CHECKING_CONDITION, FAILURE, and SUCCESS. The value NOT_RUN indicates that the instance is not run. The value WAIT_TIME indicates that the instance is waiting to be run. The value WAIT_RESOURCE indicates that the instance is waiting for resources. The value RUNNING indicates that the instance is running. The value CHECKING indicates that data quality is being checked for the instance. The value CHECKING_CONDITION indicates that branch conditions are being checked for the instance. The value FAILURE indicates that the instance fails to run. The value SUCCESS indicates that the instance is run.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endCast: 'EndCast',
      finishTime: 'FinishTime',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      owner: 'Owner',
      projectId: 'ProjectId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endCast: 'number',
      finishTime: 'number',
      instanceId: 'number',
      nodeId: 'number',
      nodeName: 'string',
      owner: 'string',
      projectId: 'number',
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

export class GetBaselineStatusResponseBodyDataLastInstance extends $dara.Model {
  /**
   * @remarks
   * The timestamp of the predicted time when the instance finished running.
   * 
   * @example
   * 1553443200000
   */
  endCast?: number;
  /**
   * @remarks
   * The timestamp of the actual time when the instance finished running.
   * 
   * @example
   * 1553443200000
   */
  finishTime?: number;
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
   * The ID of the Alibaba Cloud account used by the node owner.
   * 
   * @example
   * 9527952795****
   */
  owner?: string;
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
   * The status of the instance. Valid values: NOT_RUN, WAIT_TIME, WAIT_RESOURCE, RUNNING, CHECKING, CHECKING_CONDITION, FAILURE, and SUCCESS. The value NOT_RUN indicates that the instance is not run. The value WAIT_TIME indicates that the instance is waiting to be run. The value WAIT_RESOURCE indicates that the instance is waiting for resources. The value RUNNING indicates that the instance is running. The value CHECKING indicates that data quality is being checked for the instance. The value CHECKING_CONDITION indicates that branch conditions are being checked for the instance. The value FAILURE indicates that the instance fails to run. The value SUCCESS indicates that the instance is run.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endCast: 'EndCast',
      finishTime: 'FinishTime',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      owner: 'Owner',
      projectId: 'ProjectId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endCast: 'number',
      finishTime: 'number',
      instanceId: 'number',
      nodeId: 'number',
      nodeName: 'string',
      owner: 'string',
      projectId: 'number',
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

export class GetBaselineStatusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the baseline.
   * 
   * @example
   * 1234
   */
  baselineId?: number;
  /**
   * @remarks
   * The name of the baseline.
   * 
   * @example
   * Baseline name
   */
  baselineName?: string;
  /**
   * @remarks
   * The data timestamp of the baseline instance.
   * 
   * @example
   * 1553443200000
   */
  bizdate?: number;
  /**
   * @remarks
   * The information about the key instance.
   */
  blockInstance?: GetBaselineStatusResponseBodyDataBlockInstance;
  /**
   * @remarks
   * The margin of the baseline instance. Unit: seconds.
   * 
   * @example
   * 1200
   */
  buffer?: number;
  /**
   * @remarks
   * The timestamp of the predicted time when the baseline instance finished running.
   * 
   * @example
   * 1553443200000
   */
  endCast?: number;
  /**
   * @remarks
   * The timestamp of the alerting time of the baseline instance.
   * 
   * @example
   * 1553443200000
   */
  expTime?: number;
  /**
   * @remarks
   * The status of the baseline instance. Valid values: UNFINISH and FINISH. The value UNFINISH indicates that the baseline instance is still running. The value FINISH indicates that the baseline instance finishes running.
   * 
   * @example
   * UNFINISH
   */
  finishStatus?: string;
  /**
   * @remarks
   * The timestamp of the actual time when the baseline instance finished running. This parameter is returned if the value of the FinishStatus parameter is FINISH.
   * 
   * @example
   * 1553443200000
   */
  finishTime?: number;
  /**
   * @remarks
   * The ID of the scheduling cycle of the baseline instance. For a baseline instance that is scheduled by day, the value of this parameter is 1. For a baseline instance that is scheduled by hour, the value of this parameter ranges from 1 to 24.
   * 
   * @example
   * 1
   */
  inGroupId?: number;
  /**
   * @remarks
   * The information about the last generated instance.
   */
  lastInstance?: GetBaselineStatusResponseBodyDataLastInstance;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used by the baseline owner. Multiple IDs are separated by commas (,).
   * 
   * @example
   * 9527952795****
   */
  owner?: string;
  /**
   * @remarks
   * The priority of the baseline. Valid values: 1, 2, 5, 7, and 8.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the workspace to which the baseline belongs.
   * 
   * @example
   * 1234
   */
  projectId?: number;
  /**
   * @remarks
   * The timestamp of the committed completion time of the baseline instance.
   * 
   * @example
   * 1553443200000
   */
  slaTime?: number;
  /**
   * @remarks
   * The status of the baseline. Valid values: ERROR, SAFE, DANGEROUS, and OVER. The value ERROR indicates that no nodes are associated with the baseline, or all nodes associated with the baseline are suspended. The value SAFE indicates that nodes finish running before the alerting time. The value DANGEROUS indicates that nodes are still running after the alerting time but before the committed completion time. The value OVER indicates that nodes are still running after the committed completion time.
   * 
   * @example
   * SAFE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      baselineName: 'BaselineName',
      bizdate: 'Bizdate',
      blockInstance: 'BlockInstance',
      buffer: 'Buffer',
      endCast: 'EndCast',
      expTime: 'ExpTime',
      finishStatus: 'FinishStatus',
      finishTime: 'FinishTime',
      inGroupId: 'InGroupId',
      lastInstance: 'LastInstance',
      owner: 'Owner',
      priority: 'Priority',
      projectId: 'ProjectId',
      slaTime: 'SlaTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'number',
      baselineName: 'string',
      bizdate: 'number',
      blockInstance: GetBaselineStatusResponseBodyDataBlockInstance,
      buffer: 'number',
      endCast: 'number',
      expTime: 'number',
      finishStatus: 'string',
      finishTime: 'number',
      inGroupId: 'number',
      lastInstance: GetBaselineStatusResponseBodyDataLastInstance,
      owner: 'string',
      priority: 'number',
      projectId: 'number',
      slaTime: 'number',
      status: 'string',
    };
  }

  validate() {
    if(this.blockInstance && typeof (this.blockInstance as any).validate === 'function') {
      (this.blockInstance as any).validate();
    }
    if(this.lastInstance && typeof (this.lastInstance as any).validate === 'function') {
      (this.lastInstance as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaselineStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the baseline instance.
   */
  data?: GetBaselineStatusResponseBodyData;
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * 1031203110005
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * The specified parameters are invalid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The ID of the request. You can use the ID to troubleshoot issues.
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
      data: GetBaselineStatusResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
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

