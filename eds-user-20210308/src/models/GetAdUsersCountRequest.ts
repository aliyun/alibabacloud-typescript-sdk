// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAdUsersCountRequest extends $dara.Model {
  /**
   * @example
   * ENTERPRISE
   */
  bizType?: string;
  /**
   * @example
   * ENTERPRISE
   */
  businessChannel?: string;
  /**
   * @example
   * co-0esnf80jab***
   */
  solutionId?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      businessChannel: 'BusinessChannel',
      solutionId: 'SolutionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      businessChannel: 'string',
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

