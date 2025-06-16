// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeExpressConnectTrafficQosRuleResponseBodyRuleList } from "./DescribeExpressConnectTrafficQosRuleResponseBodyRuleList";


export class DescribeExpressConnectTrafficQosRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9C7FA9D6-72E0-48A9-A9C3-2DA8569CD5EB
   */
  requestId?: string;
  /**
   * @remarks
   * The list of QoS rules.
   */
  ruleList?: DescribeExpressConnectTrafficQosRuleResponseBodyRuleList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleList: 'RuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleList: { 'type': 'array', 'itemType': DescribeExpressConnectTrafficQosRuleResponseBodyRuleList },
    };
  }

  validate() {
    if(Array.isArray(this.ruleList)) {
      $dara.Model.validateArray(this.ruleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

