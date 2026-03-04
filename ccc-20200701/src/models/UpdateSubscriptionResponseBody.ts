// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSubscriptionResponseBodyDataEventList extends $dara.Model {
  /**
   * @example
   * true
   */
  disabled?: boolean;
  /**
   * @example
   * Dialing
   */
  name?: string;
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
   * @example
   * rmq-cn-****.cn-shanghai.rmq.aliyuncs.com:8080
   */
  accessPoint?: string;
  eventList?: UpdateSubscriptionResponseBodyDataEventList[];
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * rmq-cn-****
   */
  mqInstanceId?: string;
  /**
   * @example
   * rocketmq5
   */
  mqType?: string;
  /**
   * @example
   * GID_xxx
   */
  producerId?: string;
  /**
   * @example
   * ccc-event
   */
  topic?: string;
  /**
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
   * @example
   * OK
   */
  code?: string;
  data?: UpdateSubscriptionResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  params?: string[];
  /**
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

