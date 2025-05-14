// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendAIAgentDataChannelMessageRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AI agent in the conversation.
   * 
   * This parameter is required.
   * 
   * @example
   * 39f8e0bc005e4f309379701645f4****
   */
  instanceId?: string;
  /**
   * @remarks
   * The DataChannel message you want to send. You must specify a JSON string. The value can be up to 8,192 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * {"key":"value"}
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

