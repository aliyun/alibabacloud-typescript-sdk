// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTopicsResponseBodyDataTopics extends $dara.Model {
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
   * The timestamp when the event was recovered.
   * 
   * @example
   * 1553508465000
   */
  fixTime?: number;
  /**
   * @remarks
   * The timestamp when the event occurred. There is a time difference between when the event occurs and when it is discovered.
   * 
   * @example
   * 1553508465000
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
   * The ID of the node associated with the event.
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
   * 1234 error
   */
  topicName?: string;
  /**
   * @remarks
   * The status of the event. Valid values: IGNORE (ignored), NEW (newly discovered), FIXING (being processed), and RECOVER (recovered).
   * 
   * @example
   * NEW
   */
  topicStatus?: string;
  /**
   * @remarks
   * The type of the event. Valid values: SLOW (slow) and ERROR (error).
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
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of events.
   */
  topics?: ListTopicsResponseBodyDataTopics[];
  /**
   * @remarks
   * The total number of events.
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
   * The returned event list.
   */
  data?: ListTopicsResponseBodyData;
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

