// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSubscriptionRequest extends $dara.Model {
  /**
   * @example
   * llm-c11iig67g863rih8
   */
  businessUnitId?: string;
  /**
   * @example
   * rmq-cn-l4p89zajz67.cn-hangzhou.rmq.aliyuncs.com:8080
   */
  endpoint?: string;
  eventSubscriptions?: string[];
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
   * user1
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
      businessUnitId: 'BusinessUnitId',
      endpoint: 'Endpoint',
      eventSubscriptions: 'EventSubscriptions',
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
      businessUnitId: 'string',
      endpoint: 'string',
      eventSubscriptions: { 'type': 'array', 'itemType': 'string' },
      mqInstanceId: 'string',
      mqType: 'string',
      password: 'string',
      producerId: 'string',
      topic: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.eventSubscriptions)) {
      $dara.Model.validateArray(this.eventSubscriptions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

