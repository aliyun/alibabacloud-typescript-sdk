// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAgentRequest extends $dara.Model {
  /**
   * @remarks
   * The account name of the agent, which is the mobile phone number or email address specified during account registration. The account name must be unique within the instance.
   * > This parameter cannot be updated.
   * 
   * This parameter is required.
   * 
   * @example
   * username@example.com
   */
  accountName?: string;
  /**
   * @remarks
   * The unique ID of the client request. This parameter is used for idempotence verification. You can use a UUID to generate the value.
   * 
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298d94d
   */
  clientToken?: string;
  /**
   * @remarks
   * The display name of the agent.
   * 
   * This parameter is required.
   * 
   * @example
   * XX Test
   */
  displayName?: string;
  /**
   * @remarks
   * The ID of the Artificial Intelligence Cloud Call Service instance.
   * You can obtain the instance ID from <b>Instance Management</b> in the left-side navigation pane of the [Artificial Intelligence Cloud Call Service console](https://aiccs.console.aliyun.com/overview).
   * 
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * The skill group to which the agent belongs.
   */
  skillGroupId?: number[];
  /**
   * @remarks
   * The list of skill groups to which the agent belongs.
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

