// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveAgentFromSkillGroupShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of agent IDs.
   * 
   * This parameter is required.
   */
  agentIdsShrink?: string;
  /**
   * @remarks
   * The AICCS instance ID.
   * You can obtain the ID from the <b>Instances</b> page in the left-side navigation pane of the [Artificial Intelligence Cloud Call Service console](https://aiccs.console.aliyun.com/overview).
   * 
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-78v1gnp97002
   */
  instanceId?: string;
  /**
   * @remarks
   * The skill group ID.
   * 
   * You can call the [QuerySkillGroups](https://www.alibabacloud.com/help/en/aiccs/developer-reference/api-aiccs-2019-10-15-queryskillgroups) operation and view the **SkillGroupId** parameter in the response to obtain the skill group ID.
   * 
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

