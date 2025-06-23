// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNetworkRulesResponseBodyNetworkRules } from "./DescribeNetworkRulesResponseBodyNetworkRules";


export class DescribeNetworkRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the port forwarding rules.
   */
  networkRules?: DescribeNetworkRulesResponseBodyNetworkRules[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 8597F235-FA5E-4FC7-BAD9-E4C0B01BC771
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned port forwarding rules.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      networkRules: 'NetworkRules',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkRules: { 'type': 'array', 'itemType': DescribeNetworkRulesResponseBodyNetworkRules },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.networkRules)) {
      $dara.Model.validateArray(this.networkRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

