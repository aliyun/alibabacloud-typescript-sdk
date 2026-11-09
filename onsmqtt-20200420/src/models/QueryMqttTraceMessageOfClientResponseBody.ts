// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMqttTraceMessageOfClientResponseBodyMessageOfClientList extends $dara.Model {
  /**
   * @remarks
   * The action on the message. Valid values:
   * 
   * *   **pub_mqtt**: The ApsaraMQ for MQTT client sends the message.
   * *   **sub**: The ApsaraMQ for MQTT client subscribes to the message.
   * *   **push_offline**: The ApsaraMQ for MQTT broker pushes the offline message to the ApsaraMQ for MQTT client.
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
   * *   **mqtt.trace.action.msg.sub**: This value is returned if the value of Action is **sub**.
   * *   **mqtt.trace.action.msg.push.offline**: This value is returned if the value of Action is **push_offline**.
   * 
   * @example
   * mqtt.trace.action.msg.pub.mqtt
   */
  actionCode?: string;
  /**
   * @remarks
   * The information returned for the action on the message. Valid values:
   * 
   * *   **Pub From Mqtt Client**: This value is returned if the value of Action is **pub_mqtt**.
   * *   **Push To Mqtt Client**: This value is returned if the value of Action is **sub**.
   * *   **Push Offline Msg To Mqtt Client**: This value is returned if the value of Action is **push_offline**.
   * 
   * @example
   * Pub From Mqtt Client
   */
  actionInfo?: string;
  /**
   * @remarks
   * The client ID of the device.
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
   * AC1EC0030EAB78308DB16A3EC773****
   */
  msgId?: string;
  /**
   * @remarks
   * The time when the message was sent or received.
   * 
   * @example
   * 2021-05-21 15:08:19.234
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

export class QueryMqttTraceMessageOfClientResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The returned messages.
   */
  messageOfClientList?: QueryMqttTraceMessageOfClientResponseBodyMessageOfClientList[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID. You can use the ID to troubleshoot issues. This parameter is a common parameter.
   * 
   * @example
   * B096B9D6-62F3-4567-BB59-58D1362E****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of messages returned.
   * 
   * @example
   * 5
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      messageOfClientList: 'MessageOfClientList',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      messageOfClientList: { 'type': 'array', 'itemType': QueryMqttTraceMessageOfClientResponseBodyMessageOfClientList },
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.messageOfClientList)) {
      $dara.Model.validateArray(this.messageOfClientList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

