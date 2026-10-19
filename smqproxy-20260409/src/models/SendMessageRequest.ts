// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UserPropertiesValue } from "./UserPropertiesValue";


export class SendMessageRequest extends $dara.Model {
  /**
   * @remarks
   * The delay period after which the message can be consumed. Unit: seconds. Maximum value: 7 days.
   * 
   * @example
   * 0
   */
  delaySeconds?: number;
  /**
   * @remarks
   * The message body. We recommend that you Base64-encode the message body in advance to avoid issues with special characters.
   * 
   * @example
   * "Hello MNS"
   */
  messageBody?: string;
  /**
   * @remarks
   * The message group ID. Messages within the same group are delivered in order. This parameter is valid only for FIFO queues.
   * 
   * @example
   * group-123
   */
  messageGroupId?: string;
  /**
   * @remarks
   * The message priority. A smaller value indicates a higher priority. The value 1 indicates the highest priority.
   * 
   * @example
   * 2
   */
  priority?: number;
  /**
   * @remarks
   * The user-defined properties.
   * 
   * @example
   * {"key1":"value1", "key2":"value2"}
   */
  userProperties?: { [key: string]: UserPropertiesValue };
  static names(): { [key: string]: string } {
    return {
      delaySeconds: 'DelaySeconds',
      messageBody: 'MessageBody',
      messageGroupId: 'MessageGroupId',
      priority: 'Priority',
      userProperties: 'UserProperties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delaySeconds: 'number',
      messageBody: 'string',
      messageGroupId: 'string',
      priority: 'number',
      userProperties: { 'type': 'map', 'keyType': 'string', 'valueType': UserPropertiesValue },
    };
  }

  validate() {
    if(this.userProperties) {
      $dara.Model.validateMap(this.userProperties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

