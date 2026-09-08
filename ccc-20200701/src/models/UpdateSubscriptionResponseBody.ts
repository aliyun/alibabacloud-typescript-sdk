// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSubscriptionResponseBodyDataEventList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the push is disabled.
   * 
   * @example
   * true
   */
  disabled?: boolean;
  /**
   * @remarks
   * The event name.
   * 
   * @example
   * Dialing
   */
  name?: string;
  /**
   * @remarks
   * The event topic.
   * 
   * @example
   * 无
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      disabled: 'Disabled',
      name: 'Name',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disabled: 'boolean',
      name: 'string',
      topic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSubscriptionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The endpoint for MQ. The service endpoint for webhook.
   * 
   * @example
   * rmq-cn-****.cn-shanghai.rmq.aliyuncs.com:8080
   */
  accessPoint?: string;
  /**
   * @remarks
   * The event checklist.
   */
  eventList?: UpdateSubscriptionResponseBodyDataEventList[];
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * The MQ instance ID. Specify this only when MqType is rocketmq4 or rocketmq5.
   * 
   * @example
   * rmq-cn-****
   */
  mqInstanceId?: string;
  /**
   * @remarks
   * The message push type.
   * 
   * - rocketmq4
   * 
   * - rocketmq5
   * 
   * - webhook
   * 
   * @example
   * rocketmq5
   */
  mqType?: string;
  /**
   * @remarks
   * For MQ, enter the Group ID. For webhook, enter PID_Webhook.
   * 
   * @example
   * GID_xxx
   */
  producerId?: string;
  /**
   * @remarks
   * For MQ, enter the topic name. For webhook, enter Topic_Webhook.
   * 
   * @example
   * ccc-event
   */
  topic?: string;
  /**
   * @remarks
   * The MQ username. Specify this only when MqType is rocketmq5.
   * 
   * @example
   * username
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      accessPoint: 'AccessPoint',
      eventList: 'EventList',
      instanceId: 'InstanceId',
      mqInstanceId: 'MqInstanceId',
      mqType: 'MqType',
      producerId: 'ProducerId',
      topic: 'Topic',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPoint: 'string',
      eventList: { 'type': 'array', 'itemType': UpdateSubscriptionResponseBodyDataEventList },
      instanceId: 'string',
      mqInstanceId: 'string',
      mqType: 'string',
      producerId: 'string',
      topic: 'string',
      username: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.eventList)) {
      $dara.Model.validateArray(this.eventList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSubscriptionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Data.
   */
  data?: UpdateSubscriptionResponseBodyData;
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
   * The response message.
   * 
   * @example
   * 无
   */
  message?: string;
  /**
   * @remarks
   * The list of invalid parameters.
   */
  params?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 03C67DAD-EB26-41D8-949D-9B0C470FB716
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpdateSubscriptionResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

