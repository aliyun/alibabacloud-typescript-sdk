// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMqttTraceMessageSubscribeResponseBodyMessageTraceLists extends $dara.Model {
  /**
   * @remarks
   * The action on the message. Valid values:
   * 
   * - **sub**: The ApsaraMQ for MQTT client subscribes to the message.
   * 
   * - **push_offline**: The ApsaraMQ for MQTT broker pushes the offline message to the ApsaraMQ for MQTT client.
   * 
   * @example
   * sub
   */
  action?: string;
  /**
   * @remarks
   * The code returned for the action on the message. Valid values:
   * 
   * - **mqtt.trace.action.msg.sub**: The value that is returned if the value of Action is **sub**.
   * 
   * - **mqtt.trace.action.msg.push.offline**: The value that is returned if the value of Action is **push_offline**.
   * 
   * @example
   * mqtt.trace.action.msg.sub
   */
  actionCode?: string;
  /**
   * @remarks
   * The returned information for the action on the message. Valid values:
   * 
   * - **Push To Mqtt Client**: The value that is returned if the value of Action is **sub**.
   * 
   * - **Push Offline Msg To Mqtt Client**: The value that is returned if the value of Action is **push_offline**.
   * 
   * @example
   * Push To Mqtt Client
   */
  actionInfo?: string;
  /**
   * @remarks
   * The ID of the client that subscribes to the message.
   * 
   * @example
   * GID_test@@@consumer
   */
  clientId?: string;
  /**
   * @remarks
   * The message ID.
   * 
   * @example
   * AC1EC1B33D5978308DB17F3245E4****
   */
  msgId?: string;
  /**
   * @remarks
   * The time when the message was delivered.
   * 
   * @example
   * 2021-05-25 16:46:41.274
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

export class QueryMqttTraceMessageSubscribeResponseBody extends $dara.Model {
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
   * The delivery trace of the queried message.
   */
  messageTraceLists?: QueryMqttTraceMessageSubscribeResponseBodyMessageTraceLists[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * The unique ID that the system generates for the request. You can use the ID to troubleshoot issues. This parameter is a common parameter.
   * 
   * @example
   * 4E685844-ADAF-4D85-9EAC-F9471E8C****
   */
  requestId?: string;
  /**
   * @remarks
   * The returned delivery traces.
   * 
   * @example
   * 2
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      messageTraceLists: 'MessageTraceLists',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      messageTraceLists: { 'type': 'array', 'itemType': QueryMqttTraceMessageSubscribeResponseBodyMessageTraceLists },
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
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

