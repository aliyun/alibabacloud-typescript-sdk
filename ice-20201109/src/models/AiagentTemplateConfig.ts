// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AIAgentTemplateConfigAvatarChat3DLlmHistory extends $dara.Model {
  /**
   * @remarks
   * The actual text of the conversation content, which records the specific expression or response of the role in the conversation.
   * 
   * @example
   * hello
   */
  content?: string;
  /**
   * @remarks
   * The role of the conversation participant. Valid values:
   * 
   * - user: User
   * 
   * - assistant: Assistant
   * 
   * - system: System
   * 
   * - function: Function
   * 
   * - plugin: Plug-in
   * 
   * - tool: Tool
   * 
   * @example
   * user
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentTemplateConfigAvatarChat3D extends $dara.Model {
  /**
   * @remarks
   * The list of hotwords for ASR. The hotword list supports a maximum of 128 words.
   */
  asrHotWords?: string[];
  /**
   * @remarks
   * The language ID for automatic speech recognition (ASR). Valid values:
   * - zh_mandarin: Chinese
   * - en: English
   * - zh_en: Chinese and English mixed
   * - es: Spanish
   * - jp: Japanese
   * 
   * @example
   * zh_mandarin
   */
  asrLanguageId?: string;
  /**
   * @remarks
   * The threshold for speech segmentation detection. Silence exceeding this threshold is treated as a sentence break. Valid values: 200 to 1200. Unit: milliseconds. Default value: 400.
   * 
   * @example
   * 400
   */
  asrMaxSilence?: number;
  /**
   * @remarks
   * The ID of the digital human model.
   * 
   * @example
   * 1231
   */
  avatarId?: string;
  /**
   * @remarks
   * The parameters for Alibaba Cloud Model Studio Application Center. For the parameter format, refer to [Alibaba Cloud Model Studio Application Center parameters](https://help.aliyun.com/document_detail/2858132.html).
   * 
   * @example
   * {}
   */
  bailianAppParams?: string;
  charBreak?: boolean;
  /**
   * @remarks
   * Specifies whether to enable intelligent segmentation. After this feature is enabled, sentence breaks in user speech are intelligently merged into a single sentence. Default value: true.
   * 
   * @example
   * true
   */
  enableIntelligentSegment?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the push-to-talk mode. Default value: false.
   * 
   * @example
   * false
   */
  enablePushToTalk?: boolean;
  /**
   * @remarks
   * Specifies whether to support voice interruption. Default value: true.
   * 
   * @example
   * true
   */
  enableVoiceInterrupt?: boolean;
  /**
   * @remarks
   * Specifies whether to enable graceful shutdown. Default value: false.
   * 
   * - Graceful shutdown: When the agent is stopped, it finishes broadcasting the current speech before stopping, with a maximum broadcast duration of 10 seconds.
   * 
   * @example
   * false
   */
  gracefulShutdown?: boolean;
  /**
   * @remarks
   * The greeting message, which takes effect when joining the session. If not specified, the greeting configured in the agent template is used. Maximum length: 128 characters.
   * 
   * @example
   * Good morning, my friend!
   */
  greeting?: string;
  /**
   * @remarks
   * The list of specific words or phrases that trigger conversation interruption.
   */
  interruptWords?: string[];
  /**
   * @remarks
   * The maximum number of retained turns for the LLM or MLLM historical conversation context. Default value: 10.
   */
  llmHistory?: AIAgentTemplateConfigAvatarChat3DLlmHistory[];
  /**
   * @remarks
   * The maximum number of retained turns for the LLM or MLLM historical conversation context. Default value: 10.
   * 
   * @example
   * 10
   */
  llmHistoryLimit?: number;
  /**
   * @remarks
   * The system prompt for the LLM after the call starts.
   * 
   * @example
   * You are a friendly and helpful assistant, focused on providing users with accurate information and advice.
   */
  llmSystemPrompt?: string;
  /**
   * @remarks
   * The maximum waiting time without interaction with the agent. The agent goes offline upon timeout. Unit: seconds. Default value: 600.
   * 
   * @example
   * 600
   */
  maxIdleTime?: number;
  /**
   * @remarks
   * Specifies whether to enable voiceprint recognition. Default value: false.
   * 
   * @example
   * false
   */
  useVoiceprint?: boolean;
  /**
   * @remarks
   * The timeout period for the agent to close the task after the user leaves the session. Unit: seconds. Default value: 5.
   * 
   * @example
   * 5
   */
  userOfflineTimeout?: number;
  /**
   * @remarks
   * The timeout period for the agent to close the task if the user does not join the session. Unit: seconds. Default value: 60.
   * 
   * @example
   * 60
   */
  userOnlineTimeout?: number;
  /**
   * @remarks
   * The interruption threshold parameter. Valid values: 0 to 11. Default value: 11.
   * 
   * - 0: Disables the voice activity detection (VAD) feature.
   * - 1 to 10: A higher value indicates that it is more difficult to interrupt.
   * - 11: Significantly different from previous values, with lower pre-processing speech damage and stronger anti-interference.
   * 
   * @example
   * 0
   */
  vadLevel?: number;
  /**
   * @remarks
   * The ID of the voice, which takes effect in the next sentence. If not specified, the voice ID configured in the agent template is used. This parameter applies only to preset text-to-speech (TTS). Maximum length: 64 characters. For valid values, refer to [Intelligent speech effect examples](https://help.aliyun.com/document_detail/449563.html).
   * 
   * @example
   * zhixiaoxia
   */
  voiceId?: string;
  /**
   * @remarks
   * The list of available voices.
   */
  voiceIdList?: string[];
  /**
   * @remarks
   * The unique identity ID for voiceprint recognition. Default value: none.
   * 
   * @example
   * uniqueId
   */
  voiceprintId?: string;
  /**
   * @remarks
   * The volume of the agent\\"s speech.
   * 
   * - If not specified: The adaptive volume mode recommended by Alibaba Cloud is used by default.
   * 
   * - If specified: Valid values are 0 to 400. Output volume = Speech output volume in the workflow × volume / 100. Examples:
   * 
   * 1. If volume is set to 0, the output volume is 0.
   *  
   * 2. If volume is set to 100, the volume is the original volume.
   * 
   * 3. If volume is set to 200, the volume is twice the original volume.
   * 
   * @example
   * 100
   */
  volume?: number;
  /**
   * @remarks
   * The user\\"s instruction before the call starts, which is used for the agent to respond immediately after the call starts.
   * 
   * @example
   * How’s the weather today?
   */
  wakeUpQuery?: string;
  /**
   * @remarks
   * The override parameters for the workflow. Default value: none.
   * 
   * @example
   * {}
   */
  workflowOverrideParams?: string;
  static names(): { [key: string]: string } {
    return {
      asrHotWords: 'AsrHotWords',
      asrLanguageId: 'AsrLanguageId',
      asrMaxSilence: 'AsrMaxSilence',
      avatarId: 'AvatarId',
      bailianAppParams: 'BailianAppParams',
      charBreak: 'CharBreak',
      enableIntelligentSegment: 'EnableIntelligentSegment',
      enablePushToTalk: 'EnablePushToTalk',
      enableVoiceInterrupt: 'EnableVoiceInterrupt',
      gracefulShutdown: 'GracefulShutdown',
      greeting: 'Greeting',
      interruptWords: 'InterruptWords',
      llmHistory: 'LlmHistory',
      llmHistoryLimit: 'LlmHistoryLimit',
      llmSystemPrompt: 'LlmSystemPrompt',
      maxIdleTime: 'MaxIdleTime',
      useVoiceprint: 'UseVoiceprint',
      userOfflineTimeout: 'UserOfflineTimeout',
      userOnlineTimeout: 'UserOnlineTimeout',
      vadLevel: 'VadLevel',
      voiceId: 'VoiceId',
      voiceIdList: 'VoiceIdList',
      voiceprintId: 'VoiceprintId',
      volume: 'Volume',
      wakeUpQuery: 'WakeUpQuery',
      workflowOverrideParams: 'WorkflowOverrideParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrHotWords: { 'type': 'array', 'itemType': 'string' },
      asrLanguageId: 'string',
      asrMaxSilence: 'number',
      avatarId: 'string',
      bailianAppParams: 'string',
      charBreak: 'boolean',
      enableIntelligentSegment: 'boolean',
      enablePushToTalk: 'boolean',
      enableVoiceInterrupt: 'boolean',
      gracefulShutdown: 'boolean',
      greeting: 'string',
      interruptWords: { 'type': 'array', 'itemType': 'string' },
      llmHistory: { 'type': 'array', 'itemType': AIAgentTemplateConfigAvatarChat3DLlmHistory },
      llmHistoryLimit: 'number',
      llmSystemPrompt: 'string',
      maxIdleTime: 'number',
      useVoiceprint: 'boolean',
      userOfflineTimeout: 'number',
      userOnlineTimeout: 'number',
      vadLevel: 'number',
      voiceId: 'string',
      voiceIdList: { 'type': 'array', 'itemType': 'string' },
      voiceprintId: 'string',
      volume: 'number',
      wakeUpQuery: 'string',
      workflowOverrideParams: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.asrHotWords)) {
      $dara.Model.validateArray(this.asrHotWords);
    }
    if(Array.isArray(this.interruptWords)) {
      $dara.Model.validateArray(this.interruptWords);
    }
    if(Array.isArray(this.llmHistory)) {
      $dara.Model.validateArray(this.llmHistory);
    }
    if(Array.isArray(this.voiceIdList)) {
      $dara.Model.validateArray(this.voiceIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentTemplateConfigVisionChatLlmHistory extends $dara.Model {
  /**
   * @remarks
   * The actual text of the conversation content, which records the specific expression or response of the role in the conversation.
   * 
   * @example
   * hello
   */
  content?: string;
  /**
   * @remarks
   * The role of the conversation participant. Valid values:
   * 
   * - user: User
   * 
   * - assistant: Assistant
   * 
   * - system: System
   * 
   * - function: Function
   * 
   * - plugin: Plug-in
   * 
   * - tool: Tool
   * 
   * @example
   * user
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentTemplateConfigVisionChat extends $dara.Model {
  /**
   * @remarks
   * The list of hotwords for ASR. The hotword list supports a maximum of 128 words.
   */
  asrHotWords?: string[];
  /**
   * @remarks
   * The language ID for automatic speech recognition (ASR). Valid values:
   * - zh_mandarin: Chinese
   * - en: English
   * - zh_en: Chinese and English mixed
   * - es: Spanish
   * - jp: Japanese
   * 
   * @example
   * zh_mandarin
   */
  asrLanguageId?: string;
  /**
   * @remarks
   * The threshold for speech segmentation detection. Silence exceeding this threshold is treated as a sentence break. Valid values: 200 to 1200. Unit: milliseconds. Default value: 400.
   * 
   * @example
   * 400
   */
  asrMaxSilence?: number;
  /**
   * @remarks
   * The parameters for Alibaba Cloud Model Studio Application Center. For the parameter format, refer to [Alibaba Cloud Model Studio Application Center parameters](https://help.aliyun.com/document_detail/2858132.html).
   * 
   * @example
   * {}
   */
  bailianAppParams?: string;
  charBreak?: boolean;
  /**
   * @remarks
   * Specifies whether to enable intelligent segmentation. After this feature is enabled, sentence breaks in user speech are intelligently merged into a single sentence. Default value: true.
   * 
   * @example
   * true
   */
  enableIntelligentSegment?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the push-to-talk mode. Default value: false.
   * 
   * @example
   * false
   */
  enablePushToTalk?: boolean;
  /**
   * @remarks
   * Specifies whether to support voice interruption. Default value: true.
   * 
   * @example
   * true
   */
  enableVoiceInterrupt?: boolean;
  /**
   * @remarks
   * Specifies whether to enable graceful shutdown. Default value: false.
   * 
   * Graceful shutdown: When the agent is stopped, it finishes broadcasting the current speech before stopping, with a maximum broadcast duration of 10 seconds.
   * 
   * @example
   * false
   */
  gracefulShutdown?: boolean;
  /**
   * @remarks
   * The greeting message, which takes effect when joining the session. If not specified, the greeting configured in the agent template is used. Maximum length: 128 characters.
   * 
   * @example
   * Good morning, my friend!
   */
  greeting?: string;
  /**
   * @remarks
   * The list of specific words or phrases that trigger conversation interruption.
   */
  interruptWords?: string[];
  /**
   * @remarks
   * The maximum number of retained turns for the LLM or MLLM historical conversation context. Default value: 10.
   */
  llmHistory?: AIAgentTemplateConfigVisionChatLlmHistory[];
  /**
   * @remarks
   * The maximum number of retained turns for the LLM or MLLM historical conversation context. Default value: 10.
   * 
   * @example
   * 10
   */
  llmHistoryLimit?: number;
  /**
   * @remarks
   * The system prompt for the LLM after the call starts.
   * 
   * @example
   * You are a friendly and helpful assistant, focused on providing users with accurate information and advice.
   */
  llmSystemPrompt?: string;
  /**
   * @remarks
   * The maximum waiting time without interaction with the agent. The agent goes offline upon timeout. Unit: seconds. Default value: 600.
   * 
   * @example
   * 600
   */
  maxIdleTime?: number;
  /**
   * @remarks
   * Specifies whether to enable voiceprint recognition. Default value: false.
   * 
   * @example
   * false
   */
  useVoiceprint?: boolean;
  /**
   * @remarks
   * The timeout period for the agent to close the task after the user leaves the session. Unit: seconds. Default value: 5.
   * 
   * @example
   * 5
   */
  userOfflineTimeout?: number;
  /**
   * @remarks
   * The timeout period for the agent to close the task if the user does not join the session. Unit: seconds. Default value: 60.
   * 
   * @example
   * 60
   */
  userOnlineTimeout?: number;
  /**
   * @remarks
   * The interruption threshold parameter. Valid values: 0 to 11. Default value: 11.
   * 
   * - 0: Disables the voice activity detection (VAD) feature.
   * - 1 to 10: A higher value indicates that it is more difficult to interrupt.
   * - 11: Significantly different from previous values, with lower pre-processing speech damage and stronger anti-interference.
   * 
   * @example
   * 0
   */
  vadLevel?: number;
  /**
   * @remarks
   * The ID of the voice, which takes effect in the next sentence. If not specified, the voice ID configured in the agent template is used. This parameter applies only to preset text-to-speech (TTS). Maximum length: 64 characters. For valid values, refer to [Intelligent speech effect examples](https://help.aliyun.com/document_detail/449563.html).
   * 
   * @example
   * zhixiaoxia
   */
  voiceId?: string;
  /**
   * @remarks
   * The list of available voices.
   */
  voiceIdList?: string[];
  /**
   * @remarks
   * The unique identity ID for voiceprint recognition. Default value: none.
   * 
   * @example
   * uniqueId
   */
  voiceprintId?: string;
  /**
   * @remarks
   * The volume of the agent\\"s speech.
   * 
   * If not specified: The adaptive volume mode recommended by Alibaba Cloud is used by default.
   * 
   * If specified: Valid values are 0 to 400. Output volume = Speech output volume in the workflow × volume / 100. Examples:
   * 
   * If volume is set to 0, the output volume is 0.
   * 
   * If volume is set to 100, the volume is the original volume.
   * 
   * If volume is set to 200, the volume is twice the original volume.
   * 
   * @example
   * 100
   */
  volume?: number;
  /**
   * @remarks
   * The user\\"s instruction before the call starts, which is used for the agent to respond immediately after the call starts.
   * 
   * @example
   * How’s the weather today?
   */
  wakeUpQuery?: string;
  /**
   * @remarks
   * The override parameters for the workflow. Default value: none.
   * 
   * @example
   * {}
   */
  workflowOverrideParams?: string;
  static names(): { [key: string]: string } {
    return {
      asrHotWords: 'AsrHotWords',
      asrLanguageId: 'AsrLanguageId',
      asrMaxSilence: 'AsrMaxSilence',
      bailianAppParams: 'BailianAppParams',
      charBreak: 'CharBreak',
      enableIntelligentSegment: 'EnableIntelligentSegment',
      enablePushToTalk: 'EnablePushToTalk',
      enableVoiceInterrupt: 'EnableVoiceInterrupt',
      gracefulShutdown: 'GracefulShutdown',
      greeting: 'Greeting',
      interruptWords: 'InterruptWords',
      llmHistory: 'LlmHistory',
      llmHistoryLimit: 'LlmHistoryLimit',
      llmSystemPrompt: 'LlmSystemPrompt',
      maxIdleTime: 'MaxIdleTime',
      useVoiceprint: 'UseVoiceprint',
      userOfflineTimeout: 'UserOfflineTimeout',
      userOnlineTimeout: 'UserOnlineTimeout',
      vadLevel: 'VadLevel',
      voiceId: 'VoiceId',
      voiceIdList: 'VoiceIdList',
      voiceprintId: 'VoiceprintId',
      volume: 'Volume',
      wakeUpQuery: 'WakeUpQuery',
      workflowOverrideParams: 'WorkflowOverrideParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrHotWords: { 'type': 'array', 'itemType': 'string' },
      asrLanguageId: 'string',
      asrMaxSilence: 'number',
      bailianAppParams: 'string',
      charBreak: 'boolean',
      enableIntelligentSegment: 'boolean',
      enablePushToTalk: 'boolean',
      enableVoiceInterrupt: 'boolean',
      gracefulShutdown: 'boolean',
      greeting: 'string',
      interruptWords: { 'type': 'array', 'itemType': 'string' },
      llmHistory: { 'type': 'array', 'itemType': AIAgentTemplateConfigVisionChatLlmHistory },
      llmHistoryLimit: 'number',
      llmSystemPrompt: 'string',
      maxIdleTime: 'number',
      useVoiceprint: 'boolean',
      userOfflineTimeout: 'number',
      userOnlineTimeout: 'number',
      vadLevel: 'number',
      voiceId: 'string',
      voiceIdList: { 'type': 'array', 'itemType': 'string' },
      voiceprintId: 'string',
      volume: 'number',
      wakeUpQuery: 'string',
      workflowOverrideParams: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.asrHotWords)) {
      $dara.Model.validateArray(this.asrHotWords);
    }
    if(Array.isArray(this.interruptWords)) {
      $dara.Model.validateArray(this.interruptWords);
    }
    if(Array.isArray(this.llmHistory)) {
      $dara.Model.validateArray(this.llmHistory);
    }
    if(Array.isArray(this.voiceIdList)) {
      $dara.Model.validateArray(this.voiceIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentTemplateConfigVoiceChatLlmHistory extends $dara.Model {
  /**
   * @remarks
   * The actual text of the conversation content, which records the specific expression or response of the role in the conversation.
   * 
   * @example
   * hello
   */
  content?: string;
  /**
   * @remarks
   * The role of the conversation participant. Valid values:
   * 
   * - user: user
   * 
   * - assistant: assistant
   * 
   * - system: system
   * - function: function
   * 
   * - plugin: plug-in
   * 
   * - tool: tool
   * 
   * @example
   * user
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentTemplateConfigVoiceChat extends $dara.Model {
  /**
   * @remarks
   * The list of hotwords for ASR. The hotword list supports a maximum of 128 words.
   */
  asrHotWords?: string[];
  /**
   * @remarks
   * The language ID for automatic speech recognition (ASR). Valid values:
   * - zh_mandarin: Chinese
   * - en: English
   * - zh_en: Chinese and English mixed
   * - es: Spanish
   * - jp: Japanese
   * 
   * @example
   * zh_mandarin
   */
  asrLanguageId?: string;
  /**
   * @remarks
   * The threshold for speech segmentation detection. Silence exceeding this threshold is treated as a sentence break. Valid values: 200 to 1200. Unit: milliseconds. Default value: 400.
   * 
   * @example
   * 400
   */
  asrMaxSilence?: number;
  /**
   * @remarks
   * The URL of the agent avatar for voice calls. Default value: none.
   * 
   * @example
   * http://example.com/a.jpg
   */
  avatarUrl?: string;
  /**
   * @remarks
   * The type of the agent avatar URL. Default value: none.
   * 
   * @example
   * USER
   */
  avatarUrlType?: string;
  /**
   * @remarks
   * The parameters for Alibaba Cloud Model Studio Application Center. For the parameter format, refer to [Alibaba Cloud Model Studio Application Center parameters](https://help.aliyun.com/document_detail/2858132.html).
   * 
   * @example
   * {}
   */
  bailianAppParams?: string;
  charBreak?: boolean;
  /**
   * @remarks
   * Specifies whether to enable intelligent segmentation. After this feature is enabled, sentence breaks in user speech are intelligently merged into a single sentence. Default value: true.
   * 
   * @example
   * true
   */
  enableIntelligentSegment?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the push-to-talk mode. Default value: false.
   * 
   * @example
   * false
   */
  enablePushToTalk?: boolean;
  /**
   * @remarks
   * Specifies whether to support voice interruption. Default value: true.
   * 
   * @example
   * true
   */
  enableVoiceInterrupt?: boolean;
  /**
   * @remarks
   * Specifies whether to enable graceful shutdown. Default value: false.
   * 
   * - Graceful shutdown: When the agent is stopped, it finishes broadcasting the current speech before stopping, with a maximum broadcast duration of 10 seconds.
   * 
   * @example
   * false
   */
  gracefulShutdown?: boolean;
  /**
   * @remarks
   * The greeting message, which takes effect when joining the session. If not specified, the greeting configured in the agent template is used. Maximum length: 128 characters.
   * 
   * @example
   * Good morning, my friend
   */
  greeting?: string;
  /**
   * @remarks
   * The list of specific words or phrases that trigger conversation interruption.
   */
  interruptWords?: string[];
  /**
   * @remarks
   * The historical conversation context of the LLM or MLLM.
   */
  llmHistory?: AIAgentTemplateConfigVoiceChatLlmHistory[];
  /**
   * @remarks
   * The maximum number of retained turns for the LLM or MLLM historical conversation context. Default value: 10.
   * 
   * @example
   * 10
   */
  llmHistoryLimit?: number;
  /**
   * @remarks
   * The system prompt for the LLM after the call starts.
   * 
   * @example
   * You are a friendly and helpful assistant, focused on providing users with accurate information and advice.
   */
  llmSystemPrompt?: string;
  /**
   * @remarks
   * The maximum waiting time without interaction with the agent. The agent goes offline upon timeout. Unit: seconds. Default value: 600.
   * 
   * @example
   * 600
   */
  maxIdleTime?: number;
  /**
   * @remarks
   * Specifies whether to enable voiceprint recognition. Default value: false.
   * 
   * @example
   * false
   */
  useVoiceprint?: boolean;
  /**
   * @remarks
   * The timeout period for the agent to close the task after the user leaves the session. Unit: seconds. Default value: 5.
   * 
   * @example
   * 5
   */
  userOfflineTimeout?: number;
  /**
   * @remarks
   * The timeout period for the agent to close the task if the user does not join the session. Unit: seconds. Default value: 60.
   * 
   * @example
   * 60
   */
  userOnlineTimeout?: number;
  /**
   * @remarks
   * The interruption threshold parameter. Valid values: 0 to 11. Default value: 11.
   * 
   * - 0: Disables the voice activity detection (VAD) feature.
   * - 1 to 10: A higher value indicates that it is more difficult to interrupt.
   * - 11: Significantly different from previous values, with lower pre-processing speech damage and stronger anti-interference.
   * 
   * @example
   * 11
   */
  vadLevel?: number;
  /**
   * @remarks
   * The ID of the voice, which takes effect in the next sentence. If not specified, the voice ID configured in the agent template is used. This parameter applies only to preset text-to-speech (TTS). Maximum length: 64 characters. For valid values, refer to [Intelligent speech effect examples](https://help.aliyun.com/document_detail/449563.html).
   * 
   * @example
   * zhixiaoxia
   */
  voiceId?: string;
  /**
   * @remarks
   * The list of available voices.
   */
  voiceIdList?: string[];
  /**
   * @remarks
   * The unique identity ID for voiceprint recognition. Default value: none.
   * 
   * @example
   * uniqueId
   */
  voiceprintId?: string;
  /**
   * @remarks
   * The volume of the agent\\"s speech.
   * 
   * - If not specified: The adaptive volume mode recommended by Alibaba Cloud is used by default.
   * 
   * - If specified: Valid values are 0 to 400. Output volume = Speech output volume in the workflow × volume / 100. Examples:
   * 
   * 1. If volume is set to 0, the output volume is 0.
   *  
   * 2. If volume is set to 100, the volume is the original volume.
   * 
   * 3. If volume is set to 200, the volume is twice the original volume.
   * 
   * @example
   * 100
   */
  volume?: number;
  /**
   * @remarks
   * The user\\"s instruction before the call starts, which is used for the agent to respond immediately after the call starts.
   * 
   * @example
   * How’s the weather today?
   */
  wakeUpQuery?: string;
  /**
   * @remarks
   * The override parameters for the workflow. Default value: none.
   * 
   * @example
   * {}
   */
  workflowOverrideParams?: string;
  static names(): { [key: string]: string } {
    return {
      asrHotWords: 'AsrHotWords',
      asrLanguageId: 'AsrLanguageId',
      asrMaxSilence: 'AsrMaxSilence',
      avatarUrl: 'AvatarUrl',
      avatarUrlType: 'AvatarUrlType',
      bailianAppParams: 'BailianAppParams',
      charBreak: 'CharBreak',
      enableIntelligentSegment: 'EnableIntelligentSegment',
      enablePushToTalk: 'EnablePushToTalk',
      enableVoiceInterrupt: 'EnableVoiceInterrupt',
      gracefulShutdown: 'GracefulShutdown',
      greeting: 'Greeting',
      interruptWords: 'InterruptWords',
      llmHistory: 'LlmHistory',
      llmHistoryLimit: 'LlmHistoryLimit',
      llmSystemPrompt: 'LlmSystemPrompt',
      maxIdleTime: 'MaxIdleTime',
      useVoiceprint: 'UseVoiceprint',
      userOfflineTimeout: 'UserOfflineTimeout',
      userOnlineTimeout: 'UserOnlineTimeout',
      vadLevel: 'VadLevel',
      voiceId: 'VoiceId',
      voiceIdList: 'VoiceIdList',
      voiceprintId: 'VoiceprintId',
      volume: 'Volume',
      wakeUpQuery: 'WakeUpQuery',
      workflowOverrideParams: 'WorkflowOverrideParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrHotWords: { 'type': 'array', 'itemType': 'string' },
      asrLanguageId: 'string',
      asrMaxSilence: 'number',
      avatarUrl: 'string',
      avatarUrlType: 'string',
      bailianAppParams: 'string',
      charBreak: 'boolean',
      enableIntelligentSegment: 'boolean',
      enablePushToTalk: 'boolean',
      enableVoiceInterrupt: 'boolean',
      gracefulShutdown: 'boolean',
      greeting: 'string',
      interruptWords: { 'type': 'array', 'itemType': 'string' },
      llmHistory: { 'type': 'array', 'itemType': AIAgentTemplateConfigVoiceChatLlmHistory },
      llmHistoryLimit: 'number',
      llmSystemPrompt: 'string',
      maxIdleTime: 'number',
      useVoiceprint: 'boolean',
      userOfflineTimeout: 'number',
      userOnlineTimeout: 'number',
      vadLevel: 'number',
      voiceId: 'string',
      voiceIdList: { 'type': 'array', 'itemType': 'string' },
      voiceprintId: 'string',
      volume: 'number',
      wakeUpQuery: 'string',
      workflowOverrideParams: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.asrHotWords)) {
      $dara.Model.validateArray(this.asrHotWords);
    }
    if(Array.isArray(this.interruptWords)) {
      $dara.Model.validateArray(this.interruptWords);
    }
    if(Array.isArray(this.llmHistory)) {
      $dara.Model.validateArray(this.llmHistory);
    }
    if(Array.isArray(this.voiceIdList)) {
      $dara.Model.validateArray(this.voiceIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentTemplateConfig extends $dara.Model {
  /**
   * @remarks
   * The 3D digital human parameters.
   */
  avatarChat3D?: AIAgentTemplateConfigAvatarChat3D;
  /**
   * @remarks
   * The visual agent parameters.
   */
  visionChat?: AIAgentTemplateConfigVisionChat;
  /**
   * @remarks
   * The voice call parameters.
   */
  voiceChat?: AIAgentTemplateConfigVoiceChat;
  static names(): { [key: string]: string } {
    return {
      avatarChat3D: 'AvatarChat3D',
      visionChat: 'VisionChat',
      voiceChat: 'VoiceChat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarChat3D: AIAgentTemplateConfigAvatarChat3D,
      visionChat: AIAgentTemplateConfigVisionChat,
      voiceChat: AIAgentTemplateConfigVoiceChat,
    };
  }

  validate() {
    if(this.avatarChat3D && typeof (this.avatarChat3D as any).validate === 'function') {
      (this.avatarChat3D as any).validate();
    }
    if(this.visionChat && typeof (this.visionChat as any).validate === 'function') {
      (this.visionChat as any).validate();
    }
    if(this.voiceChat && typeof (this.voiceChat as any).validate === 'function') {
      (this.voiceChat as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

