// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConsumeTimespanResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1570761026400
   */
  consumeTimestamp?: number;
  /**
   * @example
   * CID-TEST
   */
  consumerGroupId?: string;
  /**
   * @example
   * rmq-cn-7e22ody****
   */
  instanceId?: string;
  /**
   * @example
   * 1570761026833
   */
  maxTimestamp?: number;
  /**
   * @example
   * 1570761026222
   */
  minTimestamp?: number;
  /**
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
   * @example
   * MissingInstanceId
   */
  code?: string;
  data?: GetConsumeTimespanResponseBodyData;
  /**
   * @example
   * xxx
   */
  dynamicCode?: string;
  /**
   * @example
   * xxx
   */
  dynamicMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * Parameter instanceId is mandatory for this action .
   */
  message?: string;
  /**
   * @example
   * C115601B-8736-5BBF-AC99-7FEAE1245A80
   */
  requestId?: string;
  /**
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

