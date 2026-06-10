// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBotSessionDataRequest extends $dara.Model {
  /**
   * @remarks
   * The key for the workspace. If you omit this parameter, the operation uses the default workspace. You can find the key on the business management page of your main account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The end time for the query. The format must be `yyyyMMdd`. For example: `20240605`.
   * 
   * This parameter is required.
   * 
   * @example
   * 20240605
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the bot instance.
   * 
   * This parameter is required.
   * 
   * @example
   * chatbot-cn-7QuUfaqMQe
   */
  robotInstanceId?: string;
  /**
   * @remarks
   * The start time for the query. The format must be `yyyyMMdd`. For example: `20240505`.
   * 
   * This parameter is required.
   * 
   * @example
   * 20240505
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      endTime: 'EndTime',
      robotInstanceId: 'RobotInstanceId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      endTime: 'string',
      robotInstanceId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

