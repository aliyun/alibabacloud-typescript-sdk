// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTopicsResponseBodyDataTopics extends $dara.Model {
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
   * The timestamp when the event was processed.
   * 
   * @example
   * 1553508465000
   */
  fixTime?: number;
  /**
   * @remarks
   * The timestamp when the event occurred. A time difference may exist between the time when the event occurred and the time when the event was found.
   * 
   * @example
   * 1553508465000
   */
  happenTime?: number;
  /**
   * @remarks
   * The ID of the node instance that triggers the event.
   * 
   * @example
   * 12345
   */
  instanceId?: number;
  /**
   * @remarks
   * The ID of the node that triggers the event.
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
   * Node Name
   */
  nodeName?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used by the node owner.
   * 
   * @example
   * 952795****
   */
  nodeOwner?: string;
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
   * 1234 Error
   */
  topicName?: string;
  /**
   * @remarks
   * The status of the event. Valid values: IGNORE, NEW, FIXING, and RECOVER. The value IGNORE indicates that the event is ignored. The value NEW indicates that the event is a new event. The value FIXING indicates that the event is being processed. The value RECOVER indicates that the event is processed.
   * 
   * @example
   * NEW
   */
  topicStatus?: string;
  /**
   * @remarks
   * The type of the event. Valid values: SLOW and ERROR. The value SLOW indicates that the running duration of the node in the current scheduling cycle is significantly longer than the average running duration of the node in previous scheduling cycles. The value ERROR indicates that the node fails to run.
   * 
   * @example
   * ERROR
   */
  topicType?: string;
  static names(): { [key: string]: string } {
    return {
      addTime: 'AddTime',
      fixTime: 'FixTime',
      happenTime: 'HappenTime',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      nodeOwner: 'NodeOwner',
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
      fixTime: 'number',
      happenTime: 'number',
      instanceId: 'number',
      nodeId: 'number',
      nodeName: 'string',
      nodeOwner: 'string',
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

export class ListTopicsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The events returned.
   */
  topics?: ListTopicsResponseBodyDataTopics[];
  /**
   * @remarks
   * The total number of the events returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      topics: 'Topics',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      topics: { 'type': 'array', 'itemType': ListTopicsResponseBodyDataTopics },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.topics)) {
      $dara.Model.validateArray(this.topics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTopicsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the events returned.
   */
  data?: ListTopicsResponseBodyData;
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
      data: ListTopicsResponseBodyData,
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

