// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBaselineStatusResponseBodyDataBlockInstance extends $dara.Model {
  /**
   * @remarks
   * The estimated completion timestamp of the instance.
   * 
   * @example
   * 1553443200000
   */
  endCast?: number;
  /**
   * @remarks
   * The actual completion timestamp of the instance.
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
   * NodeName
   */
  nodeName?: string;
  /**
   * @remarks
   * The Alibaba Cloud UID of the node owner.
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
   * The status of the instance. Valid values: NOT_RUN, WAIT_TIME, WAIT_RESOURCE, RUNNING, CHECKING, CHECKING_CONDITION, FAILURE, and SUCCESS.
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
   * The estimated completion timestamp of the instance.
   * 
   * @example
   * 1553443200000
   */
  endCast?: number;
  /**
   * @remarks
   * The actual completion timestamp of the instance.
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
   * The Alibaba Cloud UID of the node owner.
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
   * The status of the instance. Valid values: NOT_RUN, WAIT_TIME, WAIT_RESOURCE, RUNNING, CHECKING, CHECKING_CONDITION, FAILURE, and SUCCESS.
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
   * The business date timestamp.
   * 
   * @example
   * 1553443200000
   */
  bizdate?: number;
  /**
   * @remarks
   * The information about the critical instance.
   */
  blockInstance?: GetBaselineStatusResponseBodyDataBlockInstance;
  /**
   * @remarks
   * The buffer time of the baseline instance, in seconds.
   * 
   * @example
   * 1200
   */
  buffer?: number;
  /**
   * @remarks
   * The estimated completion timestamp of the baseline instance.
   * 
   * @example
   * 1553443200000
   */
  endCast?: number;
  /**
   * @remarks
   * The warning timestamp of the baseline instance.
   * 
   * @example
   * 1553443200000
   */
  expTime?: number;
  /**
   * @remarks
   * Indicates whether the baseline instance is completed. Valid values: UNFINISH and FINISH.
   * 
   * @example
   * UNFINISH
   */
  finishStatus?: string;
  /**
   * @remarks
   * The completion timestamp of the baseline instance. This parameter is returned only when FinishStatus is FINISH.
   * 
   * @example
   * 1553443200000
   */
  finishTime?: number;
  /**
   * @remarks
   * The cycle number of the baseline instance. The value is 1 for daily baselines. The value ranges from [1,24\\] for hourly baselines.
   * 
   * @example
   * 1
   */
  inGroupId?: number;
  /**
   * @remarks
   * The information about the latest instance.
   */
  lastInstance?: GetBaselineStatusResponseBodyDataLastInstance;
  /**
   * @remarks
   * The Alibaba Cloud UID of the baseline owner. Multiple owners are separated by commas (,).
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
   * The committed completion timestamp of the baseline instance.
   * 
   * @example
   * 1553443200000
   */
  slaTime?: number;
  /**
   * @remarks
   * The status of the baseline. Valid values: ERROR, SAFE, DANGROUS (warning), and OVER (exceeded).
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
   * Indicates whether the call was successful.
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

