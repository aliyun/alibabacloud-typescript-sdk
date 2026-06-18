// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGroupRequest extends $dara.Model {
  /**
   * @remarks
   * > This parameter is not publicly available for use.
   * 
   * @example
   * ENTERPRISE
   */
  bizType?: string;
  /**
   * @remarks
   * Channel
   * 
   * @example
   * ENTERPRISE
   */
  businessChannel?: string;
  /**
   * @remarks
   * The description of the user group.
   * 
   * @example
   * TestGroup
   */
  description?: string;
  /**
   * @remarks
   * The group name.
   * 
   * @example
   * 开发组
   */
  groupName?: string;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * root
   */
  parentGroupId?: string;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * co-0esnf80jab***
   */
  solutionId?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      businessChannel: 'BusinessChannel',
      description: 'Description',
      groupName: 'GroupName',
      parentGroupId: 'ParentGroupId',
      solutionId: 'SolutionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      businessChannel: 'string',
      description: 'string',
      groupName: 'string',
      parentGroupId: 'string',
      solutionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

