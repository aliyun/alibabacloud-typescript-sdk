// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveSkillGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the client request. This parameter is used to ensure the idempotence of the request. You can use a UUID to generate the ID.
   * 
   * @example
   * 46c1341e-2648-447a-****-70b6a298d94d
   */
  clientToken?: string;
  /**
   * @remarks
   * The AICCS instance ID. You can obtain the ID from the <b>Instances</b> page in the left-side navigation pane of the [Artificial Intelligence Cloud Call Service console](https://aiccs.console.aliyun.com/overview).
   * 
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * The skill group ID. You can call the [QuerySkillGroups](https://www.alibabacloud.com/help/en/aiccs/developer-reference/api-aiccs-2019-10-15-queryskillgroups) operation and view the **SkillGroupId** response parameter to obtain the skill group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  skillGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      skillGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

