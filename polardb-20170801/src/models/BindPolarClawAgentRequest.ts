// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindPolarClawAgentRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the agent to associate.
   * 
   * This parameter is required.
   * 
   * @example
   * work
   */
  agentId?: string;
  /**
   * @remarks
   * The application ID. You can call the DescribeApplications operation to obtain the application ID from the returned Items list.
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
   * The channel account ID. If you do not specify this parameter, the default value is default.
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

