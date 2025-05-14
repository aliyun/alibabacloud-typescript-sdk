// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSkillGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  channelType?: number;
  /**
   * @example
   * 46c1341e-2648-447a-****-70b6a298d94d
   */
  clientToken?: string;
  /**
   * @example
   * 123
   */
  departmentId?: number;
  description?: string;
  displayName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
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

