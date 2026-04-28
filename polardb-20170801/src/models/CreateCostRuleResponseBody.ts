// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCostRuleResponseBody extends $dara.Model {
  /**
   * @example
   * 924d450014e64e88ac6e8486f8e990**
   */
  costRuleId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 580EF224-9647-59E7-9950-D9EBFD6A2921
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      costRuleId: 'CostRuleId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costRuleId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

