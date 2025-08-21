// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBotSessionDataRequest extends $dara.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20240605
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * chatbot-cn-7QuUfaqMQe
   */
  robotInstanceId?: string;
  /**
   * @remarks
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

