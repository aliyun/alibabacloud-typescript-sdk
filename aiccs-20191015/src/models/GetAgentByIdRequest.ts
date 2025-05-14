// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentByIdRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  agentId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'number',
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

