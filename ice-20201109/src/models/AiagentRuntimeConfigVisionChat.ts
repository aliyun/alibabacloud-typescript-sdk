// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

