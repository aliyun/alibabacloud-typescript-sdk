// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindPolarClawAgentRequest extends $dara.Model {
  /**
   * @remarks
   * The agent ID to unbind.
   * 
   * This parameter is required.
   * 
   * @example
   * work
   */
  agentId?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The channel plugin ID.
   * 
   * This parameter is required.
   * 
   * @example
   * feishu
   */
  channel?: string;
  /**
   * @remarks
   * The channel account ID. Omit this parameter to remove all bindings for the specified agent ID and channel plugin ID.
   * 
   * @example
   * default
   */
  channelAccountId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      applicationId: 'ApplicationId',
      channel: 'Channel',
      channelAccountId: 'ChannelAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      applicationId: 'string',
      channel: 'string',
      channelAccountId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

