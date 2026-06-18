// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveAgentFromSkillGroupRequest extends $dara.Model {
  /**
   * @remarks
   * A list of agent IDs.
   * 
   * This parameter is required.
   */
  agentIds?: number[];
  /**
   * @remarks
   * The Artificial Intelligence Cloud Call Service (AICCS) instance ID.  
   * You can obtain it from **Instance Management** in the left-side navigation pane of the [Artificial Intelligence Cloud Call Service console](https://aiccs.console.aliyun.com/overview).
   * 
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-78v1gnp97002
   */
  instanceId?: string;
  /**
   * @remarks
   * Skill group ID.  
   * 
   * You can invoke the [QuerySkillGroups](https://help.aliyun.com/zh/aiccs/developer-reference/api-aiccs-2019-10-15-queryskillgroups) API and view the **SkillGroupId** in the response parameters to obtain the skill group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1146****
   */
  skillGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      agentIds: 'AgentIds',
      instanceId: 'InstanceId',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIds: { 'type': 'array', 'itemType': 'number' },
      instanceId: 'string',
      skillGroupId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.agentIds)) {
      $dara.Model.validateArray(this.agentIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

