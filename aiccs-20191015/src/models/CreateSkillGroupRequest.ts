// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSkillGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Channel type of the skill group. Valid values:
   * 
   * - **1**: Hotline.
   * - **2**: Online.
   * - **3**: Ticket.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  channelType?: number;
  /**
   * @remarks
   * Unique ID of the customer request. Used for idempotency validation. You can generate it using UUID.
   * 
   * @example
   * 46c1341e-2648-447a-****-70b6a298d94d
   */
  clientToken?: string;
  /**
   * @remarks
   * Department ID.
   * 
   * @example
   * 123
   */
  departmentId?: number;
  /**
   * @remarks
   * Skill group description.
   * 
   * @example
   * 在线自动化技能组
   */
  description?: string;
  /**
   * @remarks
   * External display name of the skill group.
   * 
   * @example
   * 在线自动化技能组
   */
  displayName?: string;
  /**
   * @remarks
   * Artificial Intelligence Cloud Call Service (AICCS) instance ID.  
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
   * Skill group name.
   * 
   * This parameter is required.
   * 
   * @example
   * 在线自动化技能组
   */
  skillGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
      clientToken: 'ClientToken',
      departmentId: 'DepartmentId',
      description: 'Description',
      displayName: 'DisplayName',
      instanceId: 'InstanceId',
      skillGroupName: 'SkillGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'number',
      clientToken: 'string',
      departmentId: 'number',
      description: 'string',
      displayName: 'string',
      instanceId: 'string',
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

