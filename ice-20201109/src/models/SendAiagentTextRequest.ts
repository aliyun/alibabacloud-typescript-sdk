// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendAIAgentTextRequest extends $dara.Model {
  /**
   * @remarks
   * The agent instance ID.
   * 
   * > InstanceId is the unique ID returned after the agent instance is started successfully. To start an agent instance, refer to [StartAIAgentInstance](https://help.aliyun.com/document_detail/2846201.html) or [GenerateAIAgentCall](https://help.aliyun.com/document_detail/2846209.html).
   * 
   * This parameter is required.
   * 
   * @example
   * f27f9b9be28642a88e18****
   */
  instanceId?: string;
  /**
   * @remarks
   * The text passed to the LLM.
   * 
   * This parameter is required.
   * 
   * @example
   * Hello.
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

