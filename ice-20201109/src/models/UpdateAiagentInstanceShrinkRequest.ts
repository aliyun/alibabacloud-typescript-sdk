// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAIAgentInstanceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The AI agent configuration to update. This configuration is merged with the existing configuration of the instance. For more information, see the AIAgentConfig definition. The following parameters in AIAgentConfig can be updated:
   * 
   * - VoiceId
   * 
   * - EnableVoiceInterrupt
   * 
   * - Greeting
   * 
   * - Volume
   * 
   * - EnablePushToTalk
   * 
   * - UseVoiceprint
   * 
   * - BailianAppParams
   */
  agentConfigShrink?: string;
  /**
   * @remarks
   * The ID of the AI agent instance.
   * 
   * > This unique ID is returned after the AI agent instance starts successfully. For more information about starting an agent, see [StartAIAgentInstance](https://help.aliyun.com/document_detail/2846201.html) and [GenerateAIAgentCall](https://help.aliyun.com/document_detail/2846209.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 39f8e0bc005e4f309379701645f4****
   */
  instanceId?: string;
  /**
   * @remarks
   * > The AI agent template configuration. This parameter is deprecated. Use the AgentConfig parameter instead.
   * 
   * The AI agent configuration to update. This configuration is merged with the existing configuration of the instance. For more information, see the [AIAgentTemplateConfig](https://help.aliyun.com/document_detail/2846193.html) definition.
   * The following parameters in AIAgentTemplateConfig can be updated:
   * 
   * - VoiceId (Voice ID)
   * 
   * - EnableVoiceInterrupt (Enable voice interruption)
   * 
   * - Greeting (Greeting)
   * 
   * - Volume (Volume)
   * 
   * - EnablePushToTalk (Enable push-to-talk)
   * 
   * - UseVoiceprint (Use voiceprint)
   * 
   * - AsrMaxSilence (ASR maximum silence duration)
   * 
   * @deprecated
   */
  templateConfigShrink?: string;
  /**
   * @remarks
   * Custom user data.
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

