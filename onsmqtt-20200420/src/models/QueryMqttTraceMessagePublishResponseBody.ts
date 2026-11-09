// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMqttTraceMessagePublishResponseBodyMessageTraceLists extends $dara.Model {
  /**
   * @remarks
   * The action on the message. Valid values:
   * 
   * *   **pub_mqtt**: indicates that the message was sent by an ApsaraMQ for MQTT client.
   * *   **pub_mq**: indicates that the message was sent by an ApsaraMQ for RocketMQ client.
   * 
   * @example
   * pub_mqtt
   */
  action?: string;
  /**
   * @remarks
   * The returned code for the action on the message. Valid values:
   * 
   * *   **mqtt.trace.action.msg.pub.mqtt**: This value is returned if the value of Action is **pub_mqtt**.
   * *   **mqtt.trace.action.msg.pub.mq**: This value is returned if the value of Action is **pub_mq**.
   * 
   * @example
   * mqtt.trace.action.msg.pub.mqtt
   */
  actionCode?: string;
  /**
   * @remarks
   * The returned information for the action on the message. Valid values:
   * 
   * *   **Pub From Mqtt Client**: This value is returned if the value of Action is **pub_mqtt**.
   * *   **Pub From MQ**: This value is returned if the value of Action is **pub_mq**.
   * 
   * @example
   * Pub From Mqtt Client
   */
  actionInfo?: string;
  /**
   * @remarks
   * The ID of the client that sends the message.
   * 
   * @example
   * GID_test@@@producer
   */
  clientId?: string;
  /**
   * @remarks
   * The message ID.
   * 
   * @example
   * AC1EC0030EAB78308DB16A3EC773BD95
   */
  msgId?: string;
  /**
   * @remarks
   * The time when the message was sent.
   * 
   * @example
   * 2021-05-21 15:08:19.210
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      actionCode: 'ActionCode',
      actionInfo: 'ActionInfo',
      clientId: 'ClientId',
      msgId: 'MsgId',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      actionCode: 'string',
      actionInfo: 'string',
      clientId: 'string',
      msgId: 'string',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMqttTraceMessagePublishResponseBody extends $dara.Model {
  /**
   * @remarks
   * The message traces.
   */
  messageTraceLists?: QueryMqttTraceMessagePublishResponseBodyMessageTraceLists[];
  /**
   * @remarks
   * The request ID. You can use the ID to troubleshoot issues. This parameter is a common parameter.
   * 
   * @example
   * 69AD5550-BF22-438A-9202-A6E89185****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      messageTraceLists: 'MessageTraceLists',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageTraceLists: { 'type': 'array', 'itemType': QueryMqttTraceMessagePublishResponseBodyMessageTraceLists },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.messageTraceLists)) {
      $dara.Model.validateArray(this.messageTraceLists);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

