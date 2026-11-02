// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAIAgentInstanceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The agent configuration to be updated. This configuration is merged with the configuration used when the instance was started. For more information, see the AIAgentConfig definition. The following parameters in AIAgentTemplateConfig can be updated:
   * 
   * - VoiceId
   * 
   * - EnableVoiceInterrupt
   * - Greeting
   * 
   * - Volume
   * 
   * - EnablePushToTalk
   * - UseVoiceprint
   * 
   * - BailianAppParams
   */
  agentConfigShrink?: string;
  /**
   * @remarks
   * The agent instance ID.
   * 
   * > The InstanceId is the unique ID returned after the agent instance is successfully started. For more information about the API operations used to start an agent, see [StartAIAgentInstance](https://help.aliyun.com/document_detail/2846201.html) and [GenerateAIAgentCall](https://help.aliyun.com/document_detail/2846209.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 39f8e0bc005e4f309379701645f4****
   */
  instanceId?: string;
  /**
   * @remarks
   * > The agent template configuration. **[Deprecated]** Use the AgentConfig parameter instead.
   * 
   * The agent configuration to be updated. This configuration is merged with the configuration used when the instance was started. For more information, see the [AIAgentTemplateConfig](https://help.aliyun.com/document_detail/2846193.html) definition.
   * The following parameters in AIAgentTemplateConfig can be updated:
   * 
   * - VoiceId (voice ID)
   * 
   * - EnableVoiceInterrupt (enable voice interruption)
   * 
   * - Greeting (greeting)
   * 
   * - Volume (volume)
   * 
   * - EnablePushToTalk (enable push-to-talk)
   * 
   * - UseVoiceprint (use voiceprint)
   * 
   * - AsrMaxSilence (maximum ASR silence duration)
   * 
   * @deprecated
   */
  templateConfigShrink?: string;
  /**
   * @remarks
   * The custom user data.
   * 
   * @example
   * {"VoiceId":"xiaoxia"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      agentConfigShrink: 'AgentConfig',
      instanceId: 'InstanceId',
      templateConfigShrink: 'TemplateConfig',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentConfigShrink: 'string',
      instanceId: 'string',
      templateConfigShrink: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

