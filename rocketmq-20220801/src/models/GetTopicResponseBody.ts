// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTopicResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Creation time of the topic.
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
   * @example
   * 20
   */
  liteTopicExpiration?: number;
  /**
   * @remarks
   * The maximum TPS for message sending.
   * 
   * @example
   * 1000
   */
  maxSendTps?: number;
  /**
   * @remarks
   * The type of messages in the topic.
   * 
   * Valid values:
   * 
   * *   TRANSACTION: transactional messages
   * *   FIFO: ordered messages
   * *   DELAY: scheduled or delayed messages
   * *   NORMAL: normal messages
   * 
   * Valid values:
   * 
   * *   TRANSACTION: transactional messages
   * *   FIFO: ordered messages
   * *   DELAY: scheduled or delayed messages
   * *   NORMAL: normal messages
   * 
   * @example
   * NORMAL
   */
  messageType?: string;
  /**
   * @remarks
   * The region ID to which the instance belongs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Remark information of the topic.
   * 
   * @example
   * This is the remark for test.
   */
  remark?: string;
  /**
   * @remarks
   * The topic status.
   * 
   * Valid values:
   * 
   * *   RUNNING
   * *   CREATING
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * Topic name.
   * 
   * @example
   * topic_test
   */
  topicName?: string;
  /**
   * @remarks
   * Last modification time of the topic.
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
   * Error code.
   * 
   * @example
   * Topic.NotFound
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetTopicResponseBodyData;
  /**
   * @remarks
   * Dynamic error code.
   * 
   * @example
   * TopicName
   */
  dynamicCode?: string;
  /**
   * @remarks
   * Dynamic error message.
   * 
   * @example
   * topicName
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * The topic cannot be found.
   */
  message?: string;
  /**
   * @remarks
   * Request ID, each request\\"s ID is unique and can be used for troubleshooting and problem localization.
   * 
   * @example
   * AF9A8B10-C426-530F-A0DD-96320B39****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the execution was successful.
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

