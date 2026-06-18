// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSkillGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Unique ID of the customer request. Used for idempotency validation. You can generate it by using a UUID.
   * 
   * @example
   * 46c1341e-2648-447a-****-70b6a298d94d
   */
  clientToken?: string;
  /**
   * @remarks
   * Skill group description.  
   * > This parameter can be updated.
   * 
   * @example
   * 自动化测试
   */
  description?: string;
  /**
   * @remarks
   * Display name of the skill group.  
   * > This parameter can be updated.
   * 
   * @example
   * 自动化测试
   */
  displayName?: string;
  /**
   * @remarks
   * AICCS instance ID.  
   * You can obtain it from **Instance Management** in the left-side navigation pane of the [Artificial Intelligence Cloud Call Service console](https://aiccs.console.aliyun.com/overview).
   * 
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * Skill group ID.  
   * 
   * You can invoke the [QuerySkillGroups](https://help.aliyun.com/zh/aiccs/developer-reference/api-aiccs-2019-10-15-queryskillgroups) API and check the **SkillGroupId** field in the response to obtain the skill group ID.  
   * 
   * > This parameter cannot be updated.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  skillGroupId?: number;
  /**
   * @remarks
   * Skill group name.  
   * > This parameter cannot be updated.
   * 
   * @example
   * 自动化测试
   */
  skillGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      displayName: 'DisplayName',
      instanceId: 'InstanceId',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      displayName: 'string',
      instanceId: 'string',
      skillGroupId: 'number',
      skillGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

