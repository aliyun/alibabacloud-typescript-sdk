// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSubscriptionResponseBodyDataEventList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the event is pushed.
   * 
   * @example
   * false
   */
  disabled?: boolean;
  /**
   * @remarks
   * The display name of the subscription content.
   * 
   * @example
   * Call Ended
   */
  displayName?: string;
  /**
   * @remarks
   * The subscription content.
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
   * Indicates whether the subscription is disabled. Valid values:
   * 
   * - 0: enabled.
   * - 1: disabled.
   * 
   * @example
   * 0
   */
  disabled?: boolean;
  /**
   * @remarks
   * The endpoint. This parameter is required when MqType is set to ROCKET_MQ_4 or ROCKET_MQ_5.
   * 
   * @example
   * rmq-cn-l4p89zajz67.cn-hangzhou.rmq.aliyuncs.com:8080
   */
  endpoint?: string;
  /**
   * @remarks
   * The list of subscription events.
   */
  eventList?: GetSubscriptionResponseBodyDataEventList[];
  /**
   * @remarks
   * The Bailian business workspace ID.
   * 
   * @example
   * llm-3pptowd2olrctsvc
   */
  instanceId?: string;
  /**
   * @remarks
   * The MQ instance ID. This parameter is required when MqType is set to ROCKET_MQ_5.
   * 
   * @example
   * rmq-cn-l4p89zajz67.cn
   */
  mqInstanceId?: string;
  /**
   * @remarks
   * The message push type.
   * 
   * @example
   * ROCKET_MQ_4
   */
  mqType?: string;
  /**
   * @remarks
   * The password. This parameter is required when MqType is set to ROCKET_MQ_5.
   * 
   * @example
   * pwd
   */
  password?: string;
  /**
   * @remarks
   * The producer ID. This parameter is required when MqType is set to ROCKET_MQ_4.
   * 
   * @example
   * PID_Webhook
   */
  producerId?: string;
  /**
   * @remarks
   * The queue topic. This parameter is required when MqType is set to ROCKET_MQ_4 or ROCKET_MQ_5.
   * 
   * @example
   * test
   */
  topic?: string;
  /**
   * @remarks
   * The username. This parameter is required when MqType is set to ROCKET_MQ_5.
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
   * The API status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The subscription information.
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
   * Instance llm-zzu528i29ecnprcl does not exist.
   */
  message?: string;
  /**
   * @remarks
   * The list of dynamic error parameters.
   */
  params?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D771A1B6-3D5F-174A-BEE1-98CE1000D337
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

