// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AIAgentRuntimeConfigAvatarChat3D extends $dara.Model {
  /**
   * @remarks
   * Required. The name of the agent in the ARTC channel.
   * 
   * @example
   * 877ae632caae49b1afc81c2e8194ffb4
   */
  agentUserId?: string;
  /**
   * @remarks
   * Required. The authentication token for the agent to join the channel. This must be generated using your AppKey.
   * 
   * @example
   * eyJhcHBpZCI6ICIxMjM0MTIzNxxxxx
   */
  authToken?: string;
  /**
   * @remarks
   * Required. The ID of the ARTC channel.
   * 
   * @example
   * 70f22d5784194938a7e387052f2b3208
   */
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
  /**
   * @remarks
   * Required. The name of the agent in the ARTC channel.
   * 
   * @example
   * 877ae632caae49b1afc81c2e8194ffb4
   */
  agentUserId?: string;
  /**
   * @remarks
   * Required. The authentication token for the agent to join the channel. This must be generated using your AppKey.
   * 
   * @example
   * eyJhcHBpZCI6ICIxMjM0MTIzNxxxxx
   */
  authToken?: string;
  /**
   * @remarks
   * Required. The ID of the ARTC channel.
   * 
   * @example
   * 70f22d5784194938a7e387052f2b3208
   */
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
  /**
   * @remarks
   * Required. The name of the agent in the ARTC channel.
   * 
   * @example
   * 877ae632caae49b1afc81c2e8194ffb4
   */
  agentUserId?: string;
  /**
   * @remarks
   * Required. The authentication token for the agent to join the channel. This must be generated using your AppKey.
   * 
   * @example
   * eyJhcHBpZCI6ICIxMjM0MTIzNxxxxx
   */
  authToken?: string;
  /**
   * @remarks
   * Required. The ID of the ARTC channel.
   * 
   * @example
   * 70f22d5784194938a7e387052f2b3208
   */
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
  /**
   * @remarks
   * The name of the agent in the ARTC channel.
   * 
   * @example
   * 877ae632caae49b1afc81c2e8194ffb4
   */
  agentUserId?: string;
  /**
   * @remarks
   * The authentication token for the agent to join the channel. This must be generated using your AppKey.
   * 
   * @example
   * eyJhcHBpZCI6ICIxMjM0MTIzNxxxxx
   */
  authToken?: string;
  /**
   * @remarks
   * The runtime parameters of the avatar call.
   * 
   * @deprecated
   */
  avatarChat3D?: AIAgentRuntimeConfigAvatarChat3D;
  /**
   * @remarks
   * The ID of the ARTC channel.
   * 
   * @example
   * 70f22d5784194938a7e387052f2b3208
   */
  channelId?: string;
  /**
   * @remarks
   * The runtime parameters of the vision call.
   * 
   * @deprecated
   */
  visionChat?: AIAgentRuntimeConfigVisionChat;
  /**
   * @remarks
   * The runtime parameters of the voice call.
   * 
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

