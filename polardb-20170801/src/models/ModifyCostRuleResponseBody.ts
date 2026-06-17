// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCostRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cost rule ID.
   * 
   * @example
   * 924d450014e64e88ac6e8486f8e990**
   */
  costRuleId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6BD9CDE4-5E7B-4BF3-9BB8-83C73E******
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

