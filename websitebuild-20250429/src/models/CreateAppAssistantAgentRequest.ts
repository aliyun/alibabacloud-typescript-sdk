// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppAssistantAgentRequest extends $dara.Model {
  /**
   * @remarks
   * Agent name
   * 
   * @example
   * 测试业务空间
   */
  agentName?: string;
  /**
   * @remarks
   * Business ID
   * 
   * @example
   * WS20250731233102000001
   */
  bizId?: string;
  /**
   * @remarks
   * Platform type
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

