// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAgentRequest extends $dara.Model {
  /**
   * @remarks
   * The agent account name, which is the phone number or mailbox entered during account registration. It is unique within the instance.  
   * > Update is not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * username@example.com
   */
  accountName?: string;
  /**
   * @remarks
   * Unique ID for the customer request. Used for idempotency validation. You can generate it using UUID.
   * 
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298d94d
   */
  clientToken?: string;
  /**
   * @remarks
   * Agent\\"s display name.
   * 
   * This parameter is required.
   * 
   * @example
   * XX测试
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
   * Skill groups to which the agent belongs.
   */
  skillGroupId?: number[];
  /**
   * @remarks
   * List of skill groups to which the agent belongs.
   */
  skillGroupIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      clientToken: 'ClientToken',
      displayName: 'DisplayName',
      instanceId: 'InstanceId',
      skillGroupId: 'SkillGroupId',
      skillGroupIdList: 'SkillGroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      clientToken: 'string',
      displayName: 'string',
      instanceId: 'string',
      skillGroupId: { 'type': 'array', 'itemType': 'number' },
      skillGroupIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.skillGroupId)) {
      $dara.Model.validateArray(this.skillGroupId);
    }
    if(Array.isArray(this.skillGroupIdList)) {
      $dara.Model.validateArray(this.skillGroupIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

