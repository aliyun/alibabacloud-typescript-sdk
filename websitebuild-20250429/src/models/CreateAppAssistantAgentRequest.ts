// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppAssistantAgentRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the agent.
   * 
   * @example
   * 测试业务空间
   */
  agentName?: string;
  /**
   * @remarks
   * The business ID.
   * 
   * @example
   * WS20250731233102000001
   */
  bizId?: string;
  /**
   * @remarks
   * The platform type.
   * 
   * @example
   * LINUX64
   */
  platformType?: string;
  static names(): { [key: string]: string } {
    return {
      agentName: 'AgentName',
      bizId: 'BizId',
      platformType: 'PlatformType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      bizId: 'string',
      platformType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

