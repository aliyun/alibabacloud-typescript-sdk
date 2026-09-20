// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTopicResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The timestamp when the event was discovered.
   * 
   * @example
   * 1553524393000
   */
  addTime?: number;
  /**
   * @remarks
   * The timestamp of the first alert.
   * 
   * @example
   * 1553524393000
   */
  alertTime?: number;
  /**
   * @remarks
   * The Alibaba Cloud UID of the assigner.
   * 
   * @example
   * 952795****
   */
  assigner?: string;
  /**
   * @remarks
   * The buffer of the worst baseline instance, in seconds.
   * 
   * @example
   * 3600
   */
  baselineBuffer?: number;
  /**
   * @remarks
   * The baseline ID of the worst baseline instance.
   * 
   * @example
   * 1234
   */
  baselineId?: number;
  /**
   * @remarks
   * The cycle number of the worst baseline instance.
   * 
   * @example
   * 1
   */
  baselineInGroupId?: number;
  /**
   * @remarks
   * The baseline name of the worst baseline instance.
   * 
   * @example
   * Baseline name
   */
  baselineName?: string;
  /**
   * @remarks
   * The status of the baseline. Valid values: ERROR, SAFE, DANGROUS (warning), and OVER (exceeded).
   * 
   * @example
   * SAFE
   */
  baselineStatus?: string;
  /**
   * @remarks
   * The buffer of the event, in seconds.
   * 
   * @example
   * 1200
   */
  buffer?: number;
  /**
   * @remarks
   * The timestamp of the last handling.
   * 
   * @example
   * 1553524393000
   */
  dealTime?: number;
  /**
   * @remarks
   * The Alibaba Cloud UID of the last handler.
   * 
   * @example
   * 952795****
   */
  dealUser?: string;
  /**
   * @remarks
   * The timestamp when the event was resolved.
   * 
   * @example
   * 1553524393000
   */
  fixTime?: number;
  /**
   * @remarks
   * The timestamp when the event occurred. There may be a time difference between when the event occurred and when it was discovered.
   * 
   * @example
   * 1553524393000
   */
  happenTime?: number;
  /**
   * @remarks
   * The instance ID associated with the event.
   * 
   * @example
   * 12345
   */
  instanceId?: number;
  /**
   * @remarks
   * The timestamp of the next alert.
   * 
   * @example
   * 1553524393000
   */
  nextAlertTime?: number;
  /**
   * @remarks
   * The ID of the node associated with the event.
   * 
   * @example
   * 1234
   */
  nodeId?: number;
  /**
   * @remarks
   * The name of the node associated with the event.
   * 
   * @example
   * Node name
   */
  nodeName?: string;
  /**
   * @remarks
   * The Alibaba Cloud UID of the event owner.
   * 
   * @example
   * 952795****
   */
  owner?: string;
  /**
   * @remarks
   * The ID of the workspace to which the node associated with the event belongs.
   * 
   * @example
   * 123456
   */
  projectId?: number;
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
   * 1234 error
   */
  topicName?: string;
  /**
   * @remarks
   * The status of the event. Valid values: IGNORE (ignored), NEW (newly discovered), FIXING (being handled), and RECOVER (recovered).
   * 
   * @example
   * FIXING
   */
  topicStatus?: string;
  /**
   * @remarks
   * The type of the event. Valid values: SLOW and ERROR.
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
   * The unique ID of the request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 0000-ABCD-EFGH-IJKLMNOPQ
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

