// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendAIAgentSpeechRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the broadcast can interrupt the ongoing speech. Default value: true
   * 
   * @example
   * true
   */
  enableInterrupt?: boolean;
  /**
   * @remarks
   * Agent instance ID.
   * 
   * > The InstanceId is the unique ID returned after successfully starting an agent instance. For details about starting an agent instance, see [StartAIAgentInstance](https://help.aliyun.com/document_detail/2846201.html) and [GenerateAIAgentCall](https://help.aliyun.com/document_detail/2846209.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 39f8e0bc005e4f309379701645f4****
   */
  instanceId?: string;
  /**
   * @remarks
   * The text content to be played back. The supported input format varies based on the Type parameter. The length cannot exceed 1024 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * Hello, welcome to our service.
   */
  text?: string;
  /**
   * @remarks
   * Input type. Valid values:
   * 
   * - Text: Input is plain text.
   * 
   * - AudioUrl: Input is an audio URL.
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

