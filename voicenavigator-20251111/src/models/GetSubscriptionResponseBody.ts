// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSubscriptionResponseBodyDataEventList extends $dara.Model {
  /**
   * @remarks
   * Specifies whether pushes for this event are disabled.
   * 
   * @example
   * false
   */
  disabled?: boolean;
  /**
   * @remarks
   * The event\\"s display name.
   * 
   * @example
   * 通话结束
   */
  displayName?: string;
  /**
   * @remarks
   * The event name.
   * 
   * @example
   * Released
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      disabled: 'Disabled',
      displayName: 'DisplayName',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disabled: 'boolean',
      displayName: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubscriptionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the subscription is disabled.
   * 
   * @example
   * 0
   */
  disabled?: boolean;
  /**
   * @remarks
   * The message queue endpoint. This parameter is required if `MqType` is set to `ROCKET_MQ_4` or `ROCKET_MQ_5`. The example endpoint is for the China (Hangzhou) region.
   * 
   * @example
   * rmq-cn-l4p89zajz67.cn-hangzhou.rmq.aliyuncs.com:8080
   */
  endpoint?: string;
  /**
   * @remarks
   * A list of subscribed events.
   */
  eventList?: GetSubscriptionResponseBodyDataEventList[];
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  instanceId?: string;
  /**
   * @remarks
   * The RocketMQ instance ID. This parameter is required if `MqType` is set to `ROCKET_MQ_5`.
   * 
   * @example
   * rmq-cn-l4p89zajz67.cn
   */
  mqInstanceId?: string;
  /**
   * @remarks
   * The message queue type.
   * 
   * @example
   * ROCKET_MQ_4
   */
  mqType?: string;
  /**
   * @remarks
   * The password for authentication. This parameter is required if `MqType` is set to `ROCKET_MQ_5`.
   * 
   * @example
   * pwd
   */
  password?: string;
  /**
   * @remarks
   * The producer ID. This parameter is required if `MqType` is set to `ROCKET_MQ_4`.
   * 
   * @example
   * user1
   */
  producerId?: string;
  /**
   * @remarks
   * The message queue topic. This parameter is required if `MqType` is set to `ROCKET_MQ_4` or `ROCKET_MQ_5`.
   * 
   * @example
   * test
   */
  topic?: string;
  /**
   * @remarks
   * The username for authentication. This parameter is required if `MqType` is set to `ROCKET_MQ_5`.
   * 
   * @example
   * username
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      disabled: 'Disabled',
      endpoint: 'Endpoint',
      eventList: 'EventList',
      instanceId: 'InstanceId',
      mqInstanceId: 'MqInstanceId',
      mqType: 'MqType',
      password: 'Password',
      producerId: 'ProducerId',
      topic: 'Topic',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disabled: 'boolean',
      endpoint: 'string',
      eventList: { 'type': 'array', 'itemType': GetSubscriptionResponseBodyDataEventList },
      instanceId: 'string',
      mqInstanceId: 'string',
      mqType: 'string',
      password: 'string',
      producerId: 'string',
      topic: 'string',
      userName: 'string',
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

export class GetSubscriptionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request status. `OK` indicates that the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The subscription details.
   */
  data?: GetSubscriptionResponseBodyData;
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
   * Instance af81a389-91f0-4157-8d82-720edd02b66a
   *  does not exist.
   */
  message?: string;
  /**
   * @remarks
   * Dynamic parameters used in the error message.
   */
  params?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7401D698-0AAC-5909-B68E-88C68805FFB8
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
      data: GetSubscriptionResponseBodyData,
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

