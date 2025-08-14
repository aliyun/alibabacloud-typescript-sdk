// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AIAgentRuntimeConfigAvatarChat3D extends $dara.Model {
  agentUserId?: string;
  authToken?: string;
  channelId?: string;
  static names(): { [key: string]: string } {
    return {
      agentUserId: 'AgentUserId',
      authToken: 'AuthToken',
      channelId: 'ChannelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentUserId: 'string',
      authToken: 'string',
      channelId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentRuntimeConfigVisionChat extends $dara.Model {
  agentUserId?: string;
  authToken?: string;
  channelId?: string;
  static names(): { [key: string]: string } {
    return {
      agentUserId: 'AgentUserId',
      authToken: 'AuthToken',
      channelId: 'ChannelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentUserId: 'string',
      authToken: 'string',
      channelId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentRuntimeConfigVoiceChat extends $dara.Model {
  agentUserId?: string;
  authToken?: string;
  channelId?: string;
  static names(): { [key: string]: string } {
    return {
      agentUserId: 'AgentUserId',
      authToken: 'AuthToken',
      channelId: 'ChannelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentUserId: 'string',
      authToken: 'string',
      channelId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentRuntimeConfig extends $dara.Model {
  agentUserId?: string;
  authToken?: string;
  /**
   * @deprecated
   */
  avatarChat3D?: AIAgentRuntimeConfigAvatarChat3D;
  channelId?: string;
  /**
   * @deprecated
   */
  visionChat?: AIAgentRuntimeConfigVisionChat;
  /**
   * @deprecated
   */
  voiceChat?: AIAgentRuntimeConfigVoiceChat;
  static names(): { [key: string]: string } {
    return {
      agentUserId: 'AgentUserId',
      authToken: 'AuthToken',
      avatarChat3D: 'AvatarChat3D',
      channelId: 'ChannelId',
      visionChat: 'VisionChat',
      voiceChat: 'VoiceChat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentUserId: 'string',
      authToken: 'string',
      avatarChat3D: AIAgentRuntimeConfigAvatarChat3D,
      channelId: 'string',
      visionChat: AIAgentRuntimeConfigVisionChat,
      voiceChat: AIAgentRuntimeConfigVoiceChat,
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

