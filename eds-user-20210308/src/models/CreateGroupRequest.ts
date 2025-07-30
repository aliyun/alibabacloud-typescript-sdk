// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGroupRequest extends $dara.Model {
  /**
   * @example
   * ENTERPRISE
   */
  bizType?: string;
  description?: string;
  groupName?: string;
  /**
   * @example
   * root
   */
  parentGroupId?: string;
  /**
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

