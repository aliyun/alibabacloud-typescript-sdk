// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAppAgentTemplateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The agent silence configuration.
   */
  agentSilenceConfigShrink?: string;
  /**
   * @remarks
   * The agent ambient environment configuration. If this parameter is not specified, the ambient environment configuration is not used.
   */
  ambientSoundConfigShrink?: string;
  /**
   * @remarks
   * The application ID. You can create and query the ID in the console. Only a single ID is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  /**
   * @remarks
   * The speech-to-text settings.
   */
  asrConfigShrink?: string;
  /**
   * @remarks
   * The agent backchannel configuration.
   */
  backChannelConfigShrink?: string;
  /**
   * @remarks
   * The conversation mode. Valid values:
   * - 1: Natural conversation mode (default).
   * - 2: Walkie-talkie mode.
   * 
   * @example
   * 2
   */
  chatMode?: number;
  /**
   * @remarks
   * If enabled, the LLM must support multimodal data.
   */
  enableVideoUnderstanding?: boolean;
  /**
   * @remarks
   * The greeting message. The maximum length is 500 characters.
   * 
   * @example
   * Good morning, my friend
   */
  greeting?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1231231312312131231
   */
  id?: string;
  /**
   * @remarks
   * The agent interruption configuration.
   */
  interruptConfigShrink?: string;
  /**
   * @remarks
   * The interruption mode. Valid values:
   * - 1: Interruption supported (default).
   * - 2: Interruption disabled.
   * 
   * @example
   * 2
   */
  interruptMode?: number;
  /**
   * @remarks
   * The large language model settings.
   */
  llmConfigShrink?: string;
  /**
   * @remarks
   * The template name.
   * 
   * This parameter is required.
   * 
   * @example
   * Agent template
   */
  name?: string;
  /**
   * @remarks
   * The preferred video stream for the agent to understand after visual understanding is enabled. The agent can understand only one video stream. When both the camera stream and the screen sharing stream are pushed:
   * 
   * 1 - The agent prioritizes understanding the camera stream.
   * 
   * 2 - The agent prioritizes understanding the screen sharing stream.
   * 
   * By default, the agent prioritizes understanding the camera stream.
   * 
   * @example
   * 2
   */
  preferVideo?: number;
  /**
   * @remarks
   * The text-to-speech settings.
   */
  ttsConfigShrink?: string;
  /**
   * @remarks
   * The agent type. Valid values:
   * - 1: Voice call (default).
   * 
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      agentSilenceConfigShrink: 'AgentSilenceConfig',
      ambientSoundConfigShrink: 'AmbientSoundConfig',
      appId: 'AppId',
      asrConfigShrink: 'AsrConfig',
      backChannelConfigShrink: 'BackChannelConfig',
      chatMode: 'ChatMode',
      enableVideoUnderstanding: 'EnableVideoUnderstanding',
      greeting: 'Greeting',
      id: 'Id',
      interruptConfigShrink: 'InterruptConfig',
      interruptMode: 'InterruptMode',
      llmConfigShrink: 'LlmConfig',
      name: 'Name',
      preferVideo: 'PreferVideo',
      ttsConfigShrink: 'TtsConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSilenceConfigShrink: 'string',
      ambientSoundConfigShrink: 'string',
      appId: 'string',
      asrConfigShrink: 'string',
      backChannelConfigShrink: 'string',
      chatMode: 'number',
      enableVideoUnderstanding: 'boolean',
      greeting: 'string',
      id: 'string',
      interruptConfigShrink: 'string',
      interruptMode: 'number',
      llmConfigShrink: 'string',
      name: 'string',
      preferVideo: 'number',
      ttsConfigShrink: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

