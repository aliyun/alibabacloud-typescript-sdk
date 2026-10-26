// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConsumeTimespanResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The last time the consumer group consumed a message from this topic.
   * 
   * @example
   * 1570761026400
   */
  consumeTimestamp?: number;
  /**
   * @remarks
   * The ID of the consumer group.
   * 
   * @example
   * CID-TEST
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * rmq-cn-7e22ody****
   */
  instanceId?: string;
  /**
   * @remarks
   * The production time of the latest message in the topic.
   * 
   * @example
   * 1570761026833
   */
  maxTimestamp?: number;
  /**
   * @remarks
   * The production time of the earliest message in the topic.
   * 
   * @example
   * 1570761026222
   */
  minTimestamp?: number;
  /**
   * @remarks
   * The topic to which the consumer group subscribes.
   * 
   * @example
   * topic_test
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      consumeTimestamp: 'consumeTimestamp',
      consumerGroupId: 'consumerGroupId',
      instanceId: 'instanceId',
      maxTimestamp: 'maxTimestamp',
      minTimestamp: 'minTimestamp',
      topicName: 'topicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumeTimestamp: 'number',
      consumerGroupId: 'string',
      instanceId: 'string',
      maxTimestamp: 'number',
      minTimestamp: 'number',
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

export class GetConsumeTimespanResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * MissingInstanceId
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: GetConsumeTimespanResponseBodyData;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * xxx
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * @example
   * xxx
   */
  dynamicMessage?: string;
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
   * The error message.
   * 
   * @example
   * Parameter instanceId is mandatory for this action .
   */
  message?: string;
  /**
   * @remarks
   * The unique ID of the request. Use this ID to troubleshoot issues.
   * 
   * @example
   * C115601B-8736-5BBF-AC99-7FEAE1245A80
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
      data: GetConsumeTimespanResponseBodyData,
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

