// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGroupRequest extends $dara.Model {
  /**
   * @example
   * ENTERPRISE
   */
  bizType?: string;
  /**
   * @remarks
   * The description of the user group.
   * 
   * @example
   * TestGroup
   */
  description?: string;
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
      description: 'Description',
      groupName: 'GroupName',
      parentGroupId: 'ParentGroupId',
      solutionId: 'SolutionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
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

