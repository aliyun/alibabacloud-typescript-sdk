// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupUserRequest extends $dara.Model {
  /**
   * @example
   * ENTERPRISE
   */
  bizType?: string;
  /**
   * @example
   * ug-12341234****
   */
  groupId?: string;
  /**
   * @example
   * co-0esnf80jab***
   */
  solutionId?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      groupId: 'GroupId',
      solutionId: 'SolutionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      groupId: 'string',
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

