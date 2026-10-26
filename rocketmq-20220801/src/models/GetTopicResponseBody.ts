// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTopicResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the topic was created, in YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2022-08-01 20:05:50
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the instance to which the topic belongs.
   * 
   * @example
   * rmq-cn-7e22ody****
   */
  instanceId?: string;
  /**
   * @remarks
   * The expiration time of the lite topic, in minutes.
   * 
   * @example
   * 60
   */
  liteTopicExpiration?: number;
  /**
   * @remarks
   * The maximum TPS for sending messages.
   * 
   * @example
   * 1000
   */
  maxSendTps?: number;
  /**
   * @remarks
   * The message type of the topic. Valid values:
   * - TRANSACTION: transactional message
   * - FIFO: ordered message
   * - DELAY: scheduled message or delayed message
   * - LITE: lightweight topic message
   * - NORMAL: normal message
   * 
   * @example
   * NORMAL
   */
  messageType?: string;
  /**
   * @remarks
   * The maximum message priority allowed for the topic. Valid values: 0 to 9. A higher value indicates a higher priority.
   * 
   * @example
   * 9
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the region to which the instance belongs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The remarks for the topic.
   * 
   * @example
   * This is the remark for test.
   */
  remark?: string;
  /**
   * @remarks
   * The status of the topic. Valid values:
   * - RUNNING: running
   * - CREATING: creating
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The topic name.
   * 
   * @example
   * topic_test
   */
  topicName?: string;
  /**
   * @remarks
   * The last time the topic was modified, in YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2022-08-01 20:05:50
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      instanceId: 'instanceId',
      liteTopicExpiration: 'liteTopicExpiration',
      maxSendTps: 'maxSendTps',
      messageType: 'messageType',
      priority: 'priority',
      regionId: 'regionId',
      remark: 'remark',
      status: 'status',
      topicName: 'topicName',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      instanceId: 'string',
      liteTopicExpiration: 'number',
      maxSendTps: 'number',
      messageType: 'string',
      priority: 'number',
      regionId: 'string',
      remark: 'string',
      status: 'string',
      topicName: 'string',
      updateTime: 'string',
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
   * The error code.
   * 
   * @example
   * Topic.NotFound
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: GetTopicResponseBodyData;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * TopicName
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * @example
   * topicName
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The topic cannot be found.
   */
  message?: string;
  /**
   * @remarks
   * The request ID. Each request has a unique ID that you can use to troubleshoot and locate issues.
   * 
   * @example
   * AF9A8B10-C426-530F-A0DD-96320B39****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      dynamicCode: 'dynamicCode',
      dynamicMessage: 'dynamicMessage',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetTopicResponseBodyData,
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
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

