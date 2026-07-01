// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateAIAgentCallResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the agent in the Alibaba Real-time Communication (ARTC) channel.
   * 
   * @example
   * 877ae632caae49b1afc81c2e8194ffb4
   */
  AIAgentUserId?: string;
  /**
   * @remarks
   * The user ID of the avatar in the channel.
   * 
   * @example
   * avatar_39f8e0bc005e4f309379701645f4****
   */
  avatarUserId?: string;
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
   * The ID of the generated agent instance.
   * 
   * @example
   * 39f8e0bc005e4f309379701645f4****
   */
  instanceId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7B117AF5-2A16-412C-B127-FA6175ED1AD0
   */
  requestId?: string;
  /**
   * @remarks
   * The client-side ARTC token.
   * 
   * @example
   * eyJhcHBpZCI6ICIxMjM0MTIzNxxxxx
   */
  token?: string;
  /**
   * @remarks
   * The username in the ARTC channel.
   * 
   * @example
   * user123
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      AIAgentUserId: 'AIAgentUserId',
      avatarUserId: 'AvatarUserId',
      channelId: 'ChannelId',
      instanceId: 'InstanceId',
      requestId: 'RequestId',
      token: 'Token',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIAgentUserId: 'string',
      avatarUserId: 'string',
      channelId: 'string',
      instanceId: 'string',
      requestId: 'string',
      token: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

