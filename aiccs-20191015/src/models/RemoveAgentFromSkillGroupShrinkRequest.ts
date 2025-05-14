// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveAgentFromSkillGroupShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  agentIdsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * agent_***
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1146****
   */
  skillGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      agentIdsShrink: 'AgentIds',
      instanceId: 'InstanceId',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIdsShrink: 'string',
      instanceId: 'string',
      skillGroupId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

