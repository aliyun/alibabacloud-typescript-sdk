// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentProfileTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * ID of the agent profile template.
   * 
   * This parameter is required.
   * 
   * @example
   * default-survey
   */
  agentProfileTemplateId?: string;
  /**
   * @remarks
   * IP address of the application. This is a system field and is optional.
   * 
   * @example
   * 127.0.0.1
   */
  appIp?: string;
  static names(): { [key: string]: string } {
    return {
      agentProfileTemplateId: 'AgentProfileTemplateId',
      appIp: 'AppIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentProfileTemplateId: 'string',
      appIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

