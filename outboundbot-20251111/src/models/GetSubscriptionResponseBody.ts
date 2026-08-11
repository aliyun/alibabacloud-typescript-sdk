// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSubscriptionResponseBodyDataEventList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the event push is disabled. A value of true indicates disabled, and a value of false indicates enabled.
   * 
   * @example
   * true
   */
  disabled?: boolean;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * Ringing
   */
  displayName?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * Ringing
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
   * Indicates whether the event push is disabled. A value of true indicates disabled, and a value of false indicates enabled.
   * 
   * @example
   * true
   */
  disabled?: boolean;
  /**
   * @remarks
   * The endpoint.
   * 
   * @example
   * rmq-cn-h964u01wh12.cn-hangzhou.rmq.aliyuncs.com:8080
   */
  endpoint?: string;
  /**
   * @remarks
   * The list of push content.
   */
  eventList?: GetSubscriptionResponseBodyDataEventList[];
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b04
   */
  instanceId?: string;
  /**
   * @remarks
   * The MQ instance ID.
   * 
   * @example
   * rmq-cn-3g84vpf3712
   */
  mqInstanceId?: string;
  /**
   * @remarks
   * The MSMQ type.
   * 
   * @example
   * ROCKET_MQ_4
   */
  mqType?: string;
  /**
   * @remarks
   * The password.
   * 
   * @example
   * pa44w0rd
   */
  password?: string;
  /**
   * @remarks
   * The producer ID.
   * 
   * @example
   * GID_123456
   */
  producerId?: string;
  /**
   * @remarks
   * The topic.
   * 
   * @example
   * OUTBOUND_BOT_TOPIC
   */
  topic?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * admin
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
   * The return code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response data.
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
   * Instance does not exist. Instance=ob-1234567890
   */
  message?: string;
  /**
   * @remarks
   * The list of variable values in the error message.
   */
  params?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FDAC7-13C5-1B64-A853-999DF105B9EF
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
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
      success: 'Success',
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
      success: 'boolean',
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

