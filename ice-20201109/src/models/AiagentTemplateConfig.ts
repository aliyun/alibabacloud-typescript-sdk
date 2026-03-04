// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AIAgentTemplateConfigAvatarChat3DLlmHistory extends $dara.Model {
  content?: string;
  /**
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
  asrHotWords?: string[];
  asrLanguageId?: string;
  /**
   * @remarks
   * The threshold used to determine the end of a sentence. If the duration of silence exceeds this threshold, the system determines that a sentence ends. Unit: milliseconds. Default value: 400. Valid values: 200 to 1200.
   * 
   * @example
   * 400
   */
  asrMaxSilence?: number;
  /**
   * @remarks
   * The ID of the avatar.
   * 
   * @example
   * 1231
   */
  avatarId?: string;
  /**
   * @remarks
   * The parameters of the application center of Alibaba Cloud Model Studio. For more information about the parameter format, see [Parameters of the application center of Alibaba Cloud Model Studio](https://help.aliyun.com/document_detail/2858132.html).
   * 
   * @example
   * {}
   */
  bailianAppParams?: string;
  charBreak?: boolean;
  /**
   * @example
   * true
   */
  enableIntelligentSegment?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the intercom mode. Default value: false.
   * 
   * @example
   * false
   */
  enablePushToTalk?: boolean;
  /**
   * @remarks
   * Specifies whether the intelligent agent can be interrupted by voice. Default value: true.
   * 
   * @example
   * true
   */
  enableVoiceInterrupt?: boolean;
  /**
   * @remarks
   * Specifies whether the intelligent agent supports graceful shutdown. Default value: false.
   * 
   * *   Graceful shutdown: When the intelligent agent is stopped, it completes its current sentence before stopping. However, the intelligent agent can speak for 10 seconds at most.
   * 
   * @example
   * true
   */
  gracefulShutdown?: boolean;
  /**
   * @remarks
   * The greetings spoken by the intelligent agent when it joins the meeting. If you do not specify this parameter, the system uses the default greetings specified in the template of the intelligent agent. The greetings can be up to 128 characters in length.
   */
  greeting?: string;
  interruptWords?: string[];
  llmHistory?: AIAgentTemplateConfigAvatarChat3DLlmHistory[];
  /**
   * @example
   * 10
   */
  llmHistoryLimit?: number;
  llmSystemPrompt?: string;
  /**
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
   * The timeout period after the user leaves the meeting. Unit: seconds. Default value: 5.
   * 
   * @example
   * 5
   */
  userOfflineTimeout?: number;
  /**
   * @remarks
   * The timeout period before the user joins the meeting. Unit: seconds. Default value: 60.
   * 
   * @example
   * 60
   */
  userOnlineTimeout?: number;
  vadLevel?: number;
  /**
   * @remarks
   * The voice ID of the intelligent agent. The modification takes effect in the next sentence. If you do not specify this parameter, the system uses the default voice ID specified in the template of the intelligent agent. This parameter takes effect only for the preset TTS model. The ID can be up to 64 characters in length. For more information about the available voices, visit [https://help.aliyun.com/zh/ims/developer-reference/smart-voice-effect-example](url).
   * 
   * @example
   * zhixiaoxia
   */
  voiceId?: string;
  voiceIdList?: string[];
  /**
   * @remarks
   * The unique ID of the voiceprint. This parameter is empty by default.
   * 
   * @example
   * uniqueId
   */
  voiceprintId?: string;
  /**
   * @remarks
   * The speech volume of the intelligent agent.
   * 
   * *   If this parameter is not specified, the adaptive volume mode recommended by Alibaba Cloud is used by default.
   * *   To specify this parameter, enter a value between 0 and 400. The output volume is calculated by using the following formula: Output volume = Voice output volume specified in the workflow × Volume/100. Example:
   * 
   * 1.  If Volume is set to 0, the output volume is 0.
   * 2.  If Volume is set to 100, the output volume is the voice output volume specified in the workflow.
   * 3.  If Volume is set to 200, the output volume is twice the voice output volume specified in the workflow.
   * 
   * @example
   * 100
   */
  volume?: number;
  wakeUpQuery?: string;
  /**
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
  content?: string;
  /**
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
  asrHotWords?: string[];
  asrLanguageId?: string;
  /**
   * @remarks
   * The threshold used to determine the end of a sentence. If the duration of silence exceeds this threshold, the system determines that a sentence ends. Unit: milliseconds. Default value: 400. Valid values: 200 to 1200.
   * 
   * @example
   * 400
   */
  asrMaxSilence?: number;
  /**
   * @remarks
   * The parameters of the application center of Alibaba Cloud Model Studio. For more information about the parameter format, see [Parameters of the application center of Alibaba Cloud Model Studio](https://help.aliyun.com/document_detail/2858132.html).
   * 
   * @example
   * {}
   */
  bailianAppParams?: string;
  charBreak?: boolean;
  /**
   * @remarks
   * Specifies whether to enable intelligent sentence segmentation. This feature intelligently combines the segments of a speech into a single sentence if brief pauses occur when users are speaking. Default value: true.
   * 
   * @example
   * true
   */
  enableIntelligentSegment?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the intercom mode. Default value: false.
   * 
   * @example
   * false
   */
  enablePushToTalk?: boolean;
  /**
   * @remarks
   * Specifies whether the intelligent agent can be interrupted by voice. Default value: true.
   * 
   * @example
   * true
   */
  enableVoiceInterrupt?: boolean;
  /**
   * @remarks
   * Specifies whether the intelligent agent supports graceful shutdown. Default value: false.
   * 
   * Graceful shutdown: When the intelligent agent is stopped, it completes its current sentence before stopping. However, the intelligent agent can speak for 10 seconds at most.
   * 
   * @example
   * false
   */
  gracefulShutdown?: boolean;
  /**
   * @remarks
   * The greetings spoken by the intelligent agent when it joins the meeting. If you do not specify this parameter, the system uses the default greetings specified in the template of the intelligent agent. The value can be up to 128 characters in length.
   * 
   * @example
   * Good morning, my friend!
   */
  greeting?: string;
  interruptWords?: string[];
  llmHistory?: AIAgentTemplateConfigVisionChatLlmHistory[];
  /**
   * @example
   * 10
   */
  llmHistoryLimit?: number;
  llmSystemPrompt?: string;
  /**
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
   * The timeout period after the user leaves the meeting. Unit: seconds. Default value: 5.
   * 
   * @example
   * 5
   */
  userOfflineTimeout?: number;
  /**
   * @remarks
   * The timeout period before the user joins the meeting. Unit: seconds. Default value: 60.
   * 
   * @example
   * 60
   */
  userOnlineTimeout?: number;
  vadLevel?: number;
  /**
   * @remarks
   * The voice ID of the intelligent agent. The modification takes effect in the next sentence. If you do not specify this parameter, the system uses the default voice ID specified in the template of the intelligent agent. This parameter takes effect only for the preset TTS model. The ID can be up to 64 characters in length. For more information about the available voices, visit [https://help.aliyun.com/zh/ims/developer-reference/smart-voice-effect-example](url).
   * 
   * @example
   * zhixiaoxia
   */
  voiceId?: string;
  voiceIdList?: string[];
  /**
   * @remarks
   * The unique ID of the voiceprint. This parameter is empty by default.
   * 
   * @example
   * uniqueId
   */
  voiceprintId?: string;
  /**
   * @remarks
   * The speech volume of the intelligent agent.
   * 
   * If this parameter is not specified, the adaptive volume mode recommended by Alibaba Cloud is used by default.
   * 
   * To specify this parameter, enter a value between 0 and 400. The output volume is calculated by using the following formula: Output volume = Voice output volume specified in the workflow × Volume/100. Example:
   * 
   * If Volume is set to 0, the output volume is 0.
   * 
   * If Volume is set to 100, the output volume is the voice output volume specified in the workflow.
   * 
   * If Volume is set to 200, the output volume is twice the voice output volume specified in the workflow.
   * 
   * @example
   * 100
   */
  volume?: number;
  wakeUpQuery?: string;
  /**
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
  content?: string;
  /**
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
  asrHotWords?: string[];
  asrLanguageId?: string;
  /**
   * @remarks
   * The threshold used to determine the end of a sentence. If the duration of silence exceeds this threshold, the system determines that a sentence ends. Unit: milliseconds. Default value: 400. Valid values: 200 to 1200.
   * 
   * @example
   * 400
   */
  asrMaxSilence?: number;
  /**
   * @example
   * http://example.com/a.jpg
   */
  avatarUrl?: string;
  /**
   * @example
   * USER
   */
  avatarUrlType?: string;
  /**
   * @remarks
   * The parameters of the application center of Alibaba Cloud Model Studio. For more information about the parameter format, see [Parameters of the application center of Alibaba Cloud Model Studio](https://help.aliyun.com/document_detail/2858132.html).
   * 
   * @example
   * {}
   */
  bailianAppParams?: string;
  charBreak?: boolean;
  /**
   * @example
   * true
   */
  enableIntelligentSegment?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the intercom mode. Default value: false.
   * 
   * @example
   * false
   */
  enablePushToTalk?: boolean;
  /**
   * @remarks
   * Specifies whether the intelligent agent can be interrupted by voice. Default value: true.
   * 
   * @example
   * true
   */
  enableVoiceInterrupt?: boolean;
  /**
   * @remarks
   * Specifies whether the intelligent agent supports graceful shutdown. Default value: false.
   * 
   * *   Graceful shutdown: When the intelligent agent is stopped, it completes its current sentence before stopping. However, the intelligent agent can speak for 10 seconds at most.
   * 
   * @example
   * true
   */
  gracefulShutdown?: boolean;
  /**
   * @remarks
   * The greetings spoken by the intelligent agent when it joins the meeting. If you do not specify this parameter, the system uses the default greetings specified in the template of the intelligent agent. The value can be up to 128 characters in length.
   */
  greeting?: string;
  interruptWords?: string[];
  llmHistory?: AIAgentTemplateConfigVoiceChatLlmHistory[];
  /**
   * @example
   * 10
   */
  llmHistoryLimit?: number;
  llmSystemPrompt?: string;
  /**
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
   * The timeout period after the user leaves the meeting. Unit: seconds. Default value: 5.
   * 
   * @example
   * 5
   */
  userOfflineTimeout?: number;
  /**
   * @remarks
   * The timeout period before the user joins the meeting. Unit: seconds. Default value: 60.
   * 
   * @example
   * 60
   */
  userOnlineTimeout?: number;
  vadLevel?: number;
  /**
   * @remarks
   * The voice ID of the intelligent agent. The modification takes effect in the next sentence. If you do not specify this parameter, the system uses the default voice ID specified in the template of the intelligent agent. This parameter takes effect only for the preset TTS model. The ID can be up to 64 characters in length. For more information about the available voices, visit [https://help.aliyun.com/zh/ims/developer-reference/smart-voice-effect-example](url).
   * 
   * @example
   * zhixiaoxia
   */
  voiceId?: string;
  voiceIdList?: string[];
  /**
   * @remarks
   * The unique ID of the voiceprint. This parameter is empty by default.
   * 
   * @example
   * uniqueId
   */
  voiceprintId?: string;
  /**
   * @remarks
   * The speech volume of the intelligent agent.
   * 
   * *   If this parameter is not specified, the adaptive volume mode recommended by Alibaba Cloud is used by default.
   * *   To specify this parameter, enter a value between 0 and 400. The output volume is calculated by using the following formula: Output volume = Voice output volume specified in the workflow × Volume/100. Example:
   * 
   * 1.  If Volume is set to 0, the output volume is 0.
   * 2.  If Volume is set to 100, the output volume is the voice output volume specified in the workflow.
   * 3.  If Volume is set to 200, the output volume is twice the voice output volume specified in the workflow.
   * 
   * @example
   * 100
   */
  volume?: number;
  wakeUpQuery?: string;
  /**
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
   * The parameters of the 3D avatar.
   */
  avatarChat3D?: AIAgentTemplateConfigAvatarChat3D;
  /**
   * @remarks
   * The parameters of the visual intelligent agent.
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

