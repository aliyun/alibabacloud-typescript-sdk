// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendAIAgentSpeechRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether this proactive broadcast can interrupt the current voice playback. Default value: true.
   * 
   * @example
   * true
   */
  enableInterrupt?: boolean;
  /**
   * @remarks
   * The instance ID of the agent.
   * 
   * > InstanceId is the unique ID returned after an agent instance is successfully started. For the operations used to start an agent instance, see [StartAIAgentInstance](https://help.aliyun.com/document_detail/2846201.html) and [GenerateAIAgentCall](https://help.aliyun.com/document_detail/2846209.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 39f8e0bc005e4f309379701645f4****
   */
  instanceId?: string;
  /**
   * @remarks
   * The text content to be broadcast. Different input types are supported based on the Type parameter. The length cannot exceed 1,024 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * Hello, welcome to use our service
   */
  text?: string;
  /**
   * @remarks
   * The input type. Valid values:
   * 
   * - Text: text input.
   * 
   * - AudioUrl: audio URL input.
   * 
   * Default value: Text.
   * 
   * @example
   * Text
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      enableInterrupt: 'EnableInterrupt',
      instanceId: 'InstanceId',
      text: 'Text',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableInterrupt: 'boolean',
      instanceId: 'string',
      text: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

