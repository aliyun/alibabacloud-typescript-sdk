// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSubscriptionResponseBodyDataEventList extends $dara.Model {
  /**
   * @example
   * false
   */
  disabled?: boolean;
  displayName?: string;
  /**
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
   * @example
   * 0
   */
  disabled?: boolean;
  /**
   * @example
   * rmq-cn-l4p89zajz67.cn-hangzhou.rmq.aliyuncs.com:8080
   */
  endpoint?: string;
  eventList?: GetSubscriptionResponseBodyDataEventList[];
  /**
   * @example
   * llm-3pptowd2olrctsvc
   */
  instanceId?: string;
  /**
   * @example
   * rmq-cn-l4p89zajz67.cn
   */
  mqInstanceId?: string;
  /**
   * @example
   * ROCKET_MQ_4
   */
  mqType?: string;
  /**
   * @example
   * pwd
   */
  password?: string;
  /**
   * @example
   * PID_Webhook
   */
  producerId?: string;
  /**
   * @example
   * test
   */
  topic?: string;
  /**
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
   * @example
   * OK
   */
  code?: string;
  data?: GetSubscriptionResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * Instance llm-zzu528i29ecnprcl does not exist.
   */
  message?: string;
  params?: string[];
  /**
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

