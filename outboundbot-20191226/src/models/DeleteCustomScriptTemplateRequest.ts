// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCustomScriptTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the custom scenario template.
   * 
   * @example
   * d31794e2a51f47d2901b4094d88311d7
   */
  agentProfileId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 0ec0c897-b92c-40e4-9ad7-e6e4f5ce13bb
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentProfileId: 'AgentProfileId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentProfileId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

