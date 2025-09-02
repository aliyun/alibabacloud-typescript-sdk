// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTopicResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The timestamp when the event was found.
   * 
   * @example
   * 1553524393000
   */
  addTime?: number;
  /**
   * @remarks
   * The timestamp when the first alert was reported.
   * 
   * @example
   * 1553524393000
   */
  alertTime?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used by the alert recipient.
   * 
   * @example
   * 952795****
   */
  assigner?: string;
  /**
   * @remarks
   * The margin of the worst baseline instance. Unit: seconds.
   * 
   * @example
   * 3600
   */
  baselineBuffer?: number;
  /**
   * @remarks
   * The ID of the baseline to which the worst baseline instance belongs.
   * 
   * @example
   * 1234
   */
  baselineId?: number;
  /**
   * @remarks
   * The ID of the cycle of the worst baseline instance.
   * 
   * @example
   * 1
   */
  baselineInGroupId?: number;
  /**
   * @remarks
   * The name of the baseline to which the worst baseline instance belongs.
   * 
   * @example
   * Baseline name
   */
  baselineName?: string;
  /**
   * @remarks
   * The status of the baseline. Valid values: ERROR, SAFE, DANGROUS, and OVER. The value ERROR indicates that no nodes are associated with the baseline, or all nodes associated with the baseline are suspended. The value SAFE indicates that nodes are run before the alert duration begins. The value DANGROUS indicates that nodes are still running after the alert duration ends but the committed completion time does not arrive. The value OVER indicates that nodes are still running after the committed completion time.
   * 
   * @example
   * SAFE
   */
  baselineStatus?: string;
  /**
   * @remarks
   * The margin of the event. Unit: seconds.
   * 
   * @example
   * 1200
   */
  buffer?: number;
  /**
   * @remarks
   * The timestamp when the event was last processed.
   * 
   * @example
   * 1553524393000
   */
  dealTime?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used by the user who last processed the event.
   * 
   * @example
   * 952795****
   */
  dealUser?: string;
  /**
   * @remarks
   * The timestamp when the event was processed.
   * 
   * @example
   * 1553524393000
   */
  fixTime?: number;
  /**
   * @remarks
   * The timestamp when the event occurred. A time difference may exist between the time when the event occurred and the time when the event was found.
   * 
   * @example
   * 1553524393000
   */
  happenTime?: number;
  /**
   * @remarks
   * The ID of the instance that triggered the event.
   * 
   * @example
   * 12345
   */
  instanceId?: number;
  /**
   * @remarks
   * The timestamp when the system reports the next alert.
   * 
   * @example
   * 1553524393000
   */
  nextAlertTime?: number;
  /**
   * @remarks
   * The ID of the node that triggered the event.
   * 
   * @example
   * 1234
   */
  nodeId?: number;
  /**
   * @remarks
   * The name of the node that triggered the event.
   * 
   * @example
   * Node name
   */
  nodeName?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used by the event owner.
   * 
   * @example
   * 952795****
   */
  owner?: string;
  /**
   * @remarks
   * The ID of the workspace to which the node that triggered the event belongs.
   * 
   * @example
   * 1234
   */
  projectId?: number;
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
   * 1234 error
   */
  topicName?: string;
  /**
   * @remarks
   * The status of the event. Valid values: IGNORE, NEW, FIXING, and RECOVER.
   * 
   * @example
   * FIXING
   */
  topicStatus?: string;
  /**
   * @remarks
   * The type of the event. Valid values: SLOW and ERROR. The value SLOW indicates that the duration of the task is significantly longer than the average duration of the task in previous cycles. The value ERROR indicates that the task fails to run.
   * 
   * @example
   * ERROR
   */
  topicType?: string;
  static names(): { [key: string]: string } {
    return {
      addTime: 'AddTime',
      alertTime: 'AlertTime',
      assigner: 'Assigner',
      baselineBuffer: 'BaselineBuffer',
      baselineId: 'BaselineId',
      baselineInGroupId: 'BaselineInGroupId',
      baselineName: 'BaselineName',
      baselineStatus: 'BaselineStatus',
      buffer: 'Buffer',
      dealTime: 'DealTime',
      dealUser: 'DealUser',
      fixTime: 'FixTime',
      happenTime: 'HappenTime',
      instanceId: 'InstanceId',
      nextAlertTime: 'NextAlertTime',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      owner: 'Owner',
      projectId: 'ProjectId',
      topicId: 'TopicId',
      topicName: 'TopicName',
      topicStatus: 'TopicStatus',
      topicType: 'TopicType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addTime: 'number',
      alertTime: 'number',
      assigner: 'string',
      baselineBuffer: 'number',
      baselineId: 'number',
      baselineInGroupId: 'number',
      baselineName: 'string',
      baselineStatus: 'string',
      buffer: 'number',
      dealTime: 'number',
      dealUser: 'string',
      fixTime: 'number',
      happenTime: 'number',
      instanceId: 'number',
      nextAlertTime: 'number',
      nodeId: 'number',
      nodeName: 'string',
      owner: 'string',
      projectId: 'number',
      topicId: 'number',
      topicName: 'string',
      topicStatus: 'string',
      topicType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the event.
   */
  data?: GetTopicResponseBodyData;
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
   * The request ID.
   * 
   * @example
   * 0000-ABCD-EFGH-IJKLMNOPQ
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
      data: GetTopicResponseBodyData,
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

