// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AIAgentTemplateConfigAvatarChat3DLlmHistory extends $dara.Model {
  /**
   * @remarks
   * The text content of the message.
   * 
   * @example
   * 你好
   */
  content?: string;
  /**
   * @remarks
   * The role of the conversation participant. Valid values:
   * 
   * - `user`: The user.
   * 
   * - `assistant`: The AI assistant.
   * 
   * - `system`: The system.
   * 
   * - `function`: A function call.
   * 
   * - `plugin`: A plugin.
   * 
   * - `tool`: A tool.
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
   * A list of hot words to improve ASR accuracy. A maximum of 128 words is supported.
   */
  asrHotWords?: string[];
  /**
   * @remarks
   * The language ID for Automatic Speech Recognition (ASR). Possible values:
   * 
   * - `zh_mandarin`: Chinese
   * 
   * - `en`: English
   * 
   * - `zh_en`: Chinese-English
   * 
   * - `es`: Spanish
   * 
   * - `jp`: Japanese
   * 
   * @example
   * zh_mandarin
   */
  asrLanguageId?: string;
  /**
   * @remarks
   * The maximum duration of silence in milliseconds before a sentence break is detected. Range: 200 to 1,200. Default: 400.
   * 
   * @example
   * 400
   */
  asrMaxSilence?: number;
  /**
   * @remarks
   * The ID of the avatar model.
   * 
   * @example
   * 1231
   */
  avatarId?: string;
  /**
   * @remarks
   * Parameters for Alibaba Cloud Bailian. For details, see [Bailian App Params](https://help.aliyun.com/document_detail/2858132.html).
   * 
   * @example
   * {}
   */
  bailianAppParams?: string;
  charBreak?: boolean;
  /**
   * @remarks
   * Specifies whether to enable intelligent segmentation. If enabled, this feature intelligently merges pauses in a user\\"s speech into a single, complete sentence. Default: `true`.
   * 
   * @example
   * true
   */
  enableIntelligentSegment?: boolean;
  /**
   * @remarks
   * Specifies whether to enable Push-to-Talk mode. Default: `false`.
   * 
   * @example
   * false
   */
  enablePushToTalk?: boolean;
  /**
   * @remarks
   * Specifies whether to enable voice interruption. Default: `true`.
   * 
   * @example
   * true
   */
  enableVoiceInterrupt?: boolean;
  /**
   * @remarks
   * Specifies whether to enable graceful shutdown. Default: `false`.
   * 
   * - If enabled, the agent finishes its current speech (up to 10 seconds) before stopping.
   * 
   * @example
   * false
   */
  gracefulShutdown?: boolean;
  /**
   * @remarks
   * The greeting message delivered when a user joins the session. If this parameter is omitted, the greeting configured in the agent template is used. Maximum length: 128 characters.
   * 
   * @example
   * 早上好，我的朋友！
   */
  greeting?: string;
  /**
   * @remarks
   * A list of specific words or phrases that trigger a conversation interruption.
   */
  interruptWords?: string[];
  /**
   * @remarks
   * The LLM/MLLM conversation history.
   */
  llmHistory?: AIAgentTemplateConfigAvatarChat3DLlmHistory[];
  /**
   * @remarks
   * The maximum number of conversation turns to retain in the LLM/MLLM history. Default: 10.
   * 
   * @example
   * 10
   */
  llmHistoryLimit?: number;
  /**
   * @remarks
   * The system prompt for the LLM, applied when the call starts.
   * 
   * @example
   * 你是一位友好且乐于助人的助手，专注于为用户提供准确的信息和建议。
   */
  llmSystemPrompt?: string;
  /**
   * @remarks
   * The maximum idle time in seconds with no interaction before the agent goes offline. Default: 600.
   * 
   * @example
   * 600
   */
  maxIdleTime?: number;
  /**
   * @remarks
   * Specifies whether to use voiceprint recognition. Default: `false`.
   * 
   * @example
   * false
   */
  useVoiceprint?: boolean;
  /**
   * @remarks
   * The time in seconds that the agent waits after a user leaves before closing the task. Default: 5.
   * 
   * @example
   * 5
   */
  userOfflineTimeout?: number;
  /**
   * @remarks
   * The time in seconds that the agent waits for a user to join before closing the task. Default: 60.
   * 
   * @example
   * 60
   */
  userOnlineTimeout?: number;
  /**
   * @remarks
   * The interruption sensitivity threshold. A higher value makes it more difficult to interrupt the agent. Range: 0 to 11. Default: 11.
   * 
   * - `0`: Disables VAD.
   * 
   * - `1` to `10`: A higher value makes it more difficult to interrupt the agent.
   * 
   * - `11`: Offers lower audio distortion and stronger resistance to interference.
   * 
   * @example
   * 0
   */
  vadLevel?: number;
  /**
   * @remarks
   * The ID of the Text-to-Speech (TTS) voice. Changes take effect on the next utterance. If omitted, the default voice from the agent template is used. This parameter applies only to preset TTS voices. Maximum length: 64 characters. For available values, see [Intelligent voice effect samples](https://help.aliyun.com/document_detail/449563.html).
   * 
   * @example
   * zhixiaoxia
   */
  voiceId?: string;
  /**
   * @remarks
   * A list of available voices.
   */
  voiceIdList?: string[];
  /**
   * @remarks
   * The unique ID for voiceprint recognition. Default: not specified.
   * 
   * @example
   * uniqueId
   */
  voiceprintId?: string;
  /**
   * @remarks
   * The speaking volume of the agent.
   * 
   * - If omitted, the system uses adaptive volume mode.
   * 
   * - If specified, the valid range is 0 to 400. The output volume is calculated as: `Output Volume in Workflow` \\* (`volume`/100). For example:
   * 
   * 1. If `volume` is `0`, the output is silent.
   * 
   * 2. If `volume` is `100`, the output volume is the original volume.
   * 
   * 3. If `volume` is `200`, the output volume is twice the original volume.
   * 
   * @example
   * 100
   */
  volume?: number;
  /**
   * @remarks
   * An initial user query that the agent addresses immediately when the call starts.
   * 
   * @example
   * 今天天气怎么样？
   */
  wakeUpQuery?: string;
  /**
   * @remarks
   * Workflow override parameters. Default: empty.
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
   * The text content of the message.
   * 
   * @example
   * 你好
   */
  content?: string;
  /**
   * @remarks
   * The role of the conversation participant. Valid values:
   * 
   * - `user`: The user.
   * 
   * - `assistant`: The AI assistant.
   * 
   * - `system`: The system.
   * 
   * - `function`: A function call.
   * 
   * - `plugin`: A plugin.
   * 
   * - `tool`: A tool.
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
   * A list of hot words to improve ASR accuracy. A maximum of 128 words is supported.
   */
  asrHotWords?: string[];
  /**
   * @remarks
   * The language ID for Automatic Speech Recognition (ASR). Possible values:
   * 
   * - `zh_mandarin`: Chinese
   * 
   * - `en`: English
   * 
   * - `zh_en`: Chinese-English
   * 
   * - `es`: Spanish
   * 
   * - `jp`: Japanese
   * 
   * @example
   * zh_mandarin
   */
  asrLanguageId?: string;
  /**
   * @remarks
   * The maximum duration of silence in milliseconds before a sentence break is detected. Range: 200 to 1,200. Default: 400.
   * 
   * @example
   * 400
   */
  asrMaxSilence?: number;
  /**
   * @remarks
   * Parameters for Alibaba Cloud Bailian. For details, see [Bailian App Params](https://help.aliyun.com/document_detail/2858132.html).
   * 
   * @example
   * {}
   */
  bailianAppParams?: string;
  charBreak?: boolean;
  /**
   * @remarks
   * Specifies whether to enable intelligent segmentation. If enabled, this feature intelligently merges pauses in a user\\"s speech into a single, complete sentence. Default: `true`.
   * 
   * @example
   * true
   */
  enableIntelligentSegment?: boolean;
  /**
   * @remarks
   * Specifies whether to enable Push-to-Talk mode. Default: `false`.
   * 
   * @example
   * false
   */
  enablePushToTalk?: boolean;
  /**
   * @remarks
   * Specifies whether to enable voice interruption. Default: `true`.
   * 
   * @example
   * true
   */
  enableVoiceInterrupt?: boolean;
  /**
   * @remarks
   * Specifies whether to enable graceful shutdown. Default: `false`.
   * 
   * - If enabled, the agent finishes its current speech (up to 10 seconds) before stopping.
   * 
   * @example
   * false
   */
  gracefulShutdown?: boolean;
  /**
   * @remarks
   * The greeting message delivered when a user joins the session. If this parameter is omitted, the greeting configured in the agent template is used. Maximum length: 128 characters.
   * 
   * @example
   * 早上好，我的朋友！
   */
  greeting?: string;
  /**
   * @remarks
   * A list of specific words or phrases that trigger a conversation interruption.
   */
  interruptWords?: string[];
  /**
   * @remarks
   * The LLM/MLLM conversation history.
   */
  llmHistory?: AIAgentTemplateConfigVisionChatLlmHistory[];
  /**
   * @remarks
   * The maximum number of conversation turns to retain in the LLM/MLLM history. Default: 10.
   * 
   * @example
   * 10
   */
  llmHistoryLimit?: number;
  /**
   * @remarks
   * The system prompt for the LLM, applied when the call starts.
   * 
   * @example
   * 你是一位友好且乐于助人的助手，专注于为用户提供准确的信息和建议。
   */
  llmSystemPrompt?: string;
  /**
   * @remarks
   * The maximum idle time in seconds with no interaction before the agent goes offline. Default: 600.
   * 
   * @example
   * 600
   */
  maxIdleTime?: number;
  /**
   * @remarks
   * Specifies whether to use voiceprint recognition. Default: `false`.
   * 
   * @example
   * false
   */
  useVoiceprint?: boolean;
  /**
   * @remarks
   * The time in seconds that the agent waits after a user leaves before closing the task. Default: 5.
   * 
   * @example
   * 5
   */
  userOfflineTimeout?: number;
  /**
   * @remarks
   * The time in seconds that the agent waits for a user to join before closing the task. Default: 60.
   * 
   * @example
   * 60
   */
  userOnlineTimeout?: number;
  /**
   * @remarks
   * The interruption sensitivity threshold. A higher value makes it more difficult to interrupt the agent. Range: 0 to 11. Default: 11.
   * 
   * - `0`: Disables VAD.
   * 
   * - `1` to `10`: A higher value makes it more difficult to interrupt the agent.
   * 
   * - `11`: Offers lower audio distortion and stronger resistance to interference.
   * 
   * @example
   * 0
   */
  vadLevel?: number;
  /**
   * @remarks
   * The ID of the Text-to-Speech (TTS) voice. Changes take effect on the next utterance. If omitted, the default voice from the agent template is used. This parameter applies only to preset TTS voices. Maximum length: 64 characters. For available values, see [Intelligent voice effect samples](https://help.aliyun.com/document_detail/449563.html).
   * 
   * @example
   * zhixiaoxia
   */
  voiceId?: string;
  /**
   * @remarks
   * A list of available voices.
   */
  voiceIdList?: string[];
  /**
   * @remarks
   * The unique ID for voiceprint recognition. Default: not specified.
   * 
   * @example
   * uniqueId
   */
  voiceprintId?: string;
  /**
   * @remarks
   * The speaking volume of the agent.
   * 
   * - If omitted, the system uses adaptive volume mode.
   * 
   * - If specified, the valid range is 0 to 400. The output volume is calculated as: `Output Volume in Workflow` \\* (`volume`/100). For example:
   * 
   * 1. If `volume` is `0`, the output is silent.
   * 
   * 2. If `volume` is `100`, the output volume is the original volume.
   * 
   * 3. If `volume` is `200`, the output volume is twice the original volume.
   * 
   * @example
   * 100
   */
  volume?: number;
  /**
   * @remarks
   * An initial user query that the agent addresses immediately when the call starts.
   * 
   * @example
   * 今天天气怎么样？
   */
  wakeUpQuery?: string;
  /**
   * @remarks
   * Workflow override parameters. Default: empty.
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
   * The text content of the message.
   * 
   * @example
   * 你好
   */
  content?: string;
  /**
   * @remarks
   * The role of the conversation participant. Valid values:
   * 
   * - `user`: The user.
   * 
   * - `assistant`: The AI assistant.
   * 
   * - `system`: The system.
   * 
   * - `function`: A function call.
   * 
   * - `plugin`: A plugin.
   * 
   * - `tool`: A tool.
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
   * A list of hot words to improve ASR accuracy. A maximum of 128 words is supported.
   */
  asrHotWords?: string[];
  /**
   * @remarks
   * The language ID for Automatic Speech Recognition (ASR).
   * Possible values:
   * 
   * - `zh_mandarin`: Chinese
   * 
   * - `en`: English
   * 
   * - `zh_en`: Chinese-English
   * 
   * - `es`: Spanish
   * 
   * - `jp`: Japanese
   * 
   * @example
   * zh_mandarin
   */
  asrLanguageId?: string;
  /**
   * @remarks
   * The maximum duration of silence in milliseconds before a sentence break is detected. Range: 200 to 1,200. Default: 400.
   * 
   * @example
   * 400
   */
  asrMaxSilence?: number;
  /**
   * @remarks
   * The URL of the agent\\"s avatar for voice chat. Default: none.
   * 
   * @example
   * http://example.com/a.jpg
   */
  avatarUrl?: string;
  /**
   * @remarks
   * The type of the agent\\"s avatar URL. Default: none.
   * 
   * @example
   * USER
   */
  avatarUrlType?: string;
  /**
   * @remarks
   * Parameters for Alibaba Cloud Bailian. For details, see [Bailian App Params](https://help.aliyun.com/document_detail/2858132.html).
   * 
   * @example
   * {}
   */
  bailianAppParams?: string;
  charBreak?: boolean;
  /**
   * @remarks
   * Specifies whether to enable intelligent segmentation. If enabled, this feature intelligently merges pauses in a user\\"s speech into a single, complete sentence. Default: `true`.
   * 
   * @example
   * true
   */
  enableIntelligentSegment?: boolean;
  /**
   * @remarks
   * Specifies whether to enable Push-to-Talk mode. Default: `false`.
   * 
   * @example
   * false
   */
  enablePushToTalk?: boolean;
  /**
   * @remarks
   * Specifies whether to enable voice interruption. Default: `true`.
   * 
   * @example
   * true
   */
  enableVoiceInterrupt?: boolean;
  /**
   * @remarks
   * Specifies whether to enable graceful shutdown. Default: `false`.
   * 
   * - If enabled, the agent finishes its current speech (up to 10 seconds) before stopping.
   * 
   * @example
   * false
   */
  gracefulShutdown?: boolean;
  /**
   * @remarks
   * The greeting message delivered when a user joins the session. If this parameter is omitted, the greeting configured in the agent template is used. Maximum length: 128 characters.
   * 
   * @example
   * 早上好，我的朋友
   */
  greeting?: string;
  /**
   * @remarks
   * A list of specific words or phrases that trigger a conversation interruption.
   */
  interruptWords?: string[];
  /**
   * @remarks
   * The LLM/MLLM conversation history.
   */
  llmHistory?: AIAgentTemplateConfigVoiceChatLlmHistory[];
  /**
   * @remarks
   * The maximum number of conversation turns to retain in the LLM/MLLM history. Default: 10.
   * 
   * @example
   * 10
   */
  llmHistoryLimit?: number;
  /**
   * @remarks
   * The system prompt for the LLM, applied when the call starts.
   * 
   * @example
   * 你是一位友好且乐于助人的助手，专注于为用户提供准确的信息和建议。
   */
  llmSystemPrompt?: string;
  /**
   * @remarks
   * The maximum idle time in seconds with no interaction before the agent goes offline. Default: 600.
   * 
   * @example
   * 600
   */
  maxIdleTime?: number;
  /**
   * @remarks
   * Specifies whether to use voiceprint recognition. Default: `false`.
   * 
   * @example
   * false
   */
  useVoiceprint?: boolean;
  /**
   * @remarks
   * The time in seconds that the agent waits after a user leaves before closing the task. Default: 5.
   * 
   * @example
   * 5
   */
  userOfflineTimeout?: number;
  /**
   * @remarks
   * The time in seconds that the agent waits for a user to join before closing the task. Default: 60.
   * 
   * @example
   * 60
   */
  userOnlineTimeout?: number;
  /**
   * @remarks
   * The interruption sensitivity threshold. A higher value makes it more difficult to interrupt the agent. Range: 0 to 11. Default: 11.
   * 
   * - `0`: Disables Voice Activity Detection (VAD).
   * 
   * - `1` to `10`: A higher value makes it more difficult to interrupt the agent.
   * 
   * - `11`: Offers lower audio distortion and stronger resistance to interference.
   * 
   * @example
   * 11
   */
  vadLevel?: number;
  /**
   * @remarks
   * The ID of the Text-to-Speech (TTS) voice. Changes take effect on the next utterance. If omitted, the default voice from the agent template is used. This parameter applies only to preset TTS voices. Maximum length: 64 characters. For available values, see [Intelligent voice effect samples](https://help.aliyun.com/document_detail/449563.html).
   * 
   * @example
   * zhixiaoxia
   */
  voiceId?: string;
  /**
   * @remarks
   * A list of available voices.
   */
  voiceIdList?: string[];
  /**
   * @remarks
   * The unique ID for voiceprint recognition. Default: not specified.
   * 
   * @example
   * uniqueId
   */
  voiceprintId?: string;
  /**
   * @remarks
   * The speaking volume of the agent.
   * 
   * - If omitted, the system uses adaptive volume mode.
   * 
   * - If specified, the valid range is 0 to 400. The output volume is calculated as: `Output Volume in Workflow` \\* (`volume`/100). For example:
   * 
   * 1. If `volume` is `0`, the output is silent.
   * 
   * 2. If `volume` is `100`, the output volume is the original volume.
   * 
   * 3. If `volume` is `200`, the output volume is twice the original volume.
   * 
   * @example
   * 100
   */
  volume?: number;
  /**
   * @remarks
   * An initial user query that the agent addresses immediately when the call starts.
   * 
   * @example
   * 今天天气怎么样？
   */
  wakeUpQuery?: string;
  /**
   * @remarks
   * Workflow override parameters. Default: empty.
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
   * 3D avatar parameters.
   */
  avatarChat3D?: AIAgentTemplateConfigAvatarChat3D;
  /**
   * @remarks
   * Vision agent parameters.
   */
  visionChat?: AIAgentTemplateConfigVisionChat;
  /**
   * @remarks
   * Voice chat parameters.
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

