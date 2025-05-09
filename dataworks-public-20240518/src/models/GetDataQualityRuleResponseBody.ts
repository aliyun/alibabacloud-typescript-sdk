// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDataQualityRuleResponseBodyDataQualityRule } from "./GetDataQualityRuleResponseBodyDataQualityRule";


export class GetDataQualityRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the rule.
   */
  dataQualityRule?: GetDataQualityRuleResponseBodyDataQualityRule;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 691CA452-D37A-4ED0-9441
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataQualityRule: 'DataQualityRule',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataQualityRule: GetDataQualityRuleResponseBodyDataQualityRule,
      requestId: 'string',
    };
  }

  validate() {
    if(this.dataQualityRule && typeof (this.dataQualityRule as any).validate === 'function') {
      (this.dataQualityRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

