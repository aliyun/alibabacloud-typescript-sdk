// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendAIAgentDataChannelMessageRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the agent that is currently in a call.
   * 
   * > InstanceId is the unique ID returned after the agent instance is successfully started. For more information about the API operations used to start an agent, see [StartAIAgentInstance](https://help.aliyun.com/document_detail/2846201.html) and [GenerateAIAgentCall](https://help.aliyun.com/document_detail/2846209.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 39f8e0bc005e4f309379701645f4****
   */
  instanceId?: string;
  /**
   * @remarks
   * The DataChannel message to send. The value must be a JSON string with a maximum length of 8,192 characters.
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

