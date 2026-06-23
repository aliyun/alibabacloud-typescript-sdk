// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendMessageRequest extends $dara.Model {
  /**
   * @example
   * 0
   */
  delaySeconds?: number;
  /**
   * @example
   * "Hello MNS"
   */
  messageBody?: string;
  /**
   * @example
   * group-123
   */
  messageGroupId?: string;
  /**
   * @example
   * 2
   */
  priority?: number;
  /**
   * @example
   * {"key1":"value1", "key2":"value2"}
   */
  userProperties?: string;
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
      userProperties: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

