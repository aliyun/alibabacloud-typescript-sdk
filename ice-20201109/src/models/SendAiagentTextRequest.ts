// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendAIAgentTextRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AI agent instance.
   * 
   * > InstanceId is a unique identifier that is returned when the AI agent is started. To start an AI agent, call [StartAIAgentInstance ](https://help.aliyun.com/document_detail/2846201.html) or [GenerateAIAgentCall](https://help.aliyun.com/document_detail/2846209.html).
   * 
   * This parameter is required.
   * 
   * @example
   * f27f9b9be28642a88e18****
   */
  instanceId?: string;
  /**
   * @remarks
   * The input to the LLM.
   * 
   * This parameter is required.
   * 
   * @example
   * Hello
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

