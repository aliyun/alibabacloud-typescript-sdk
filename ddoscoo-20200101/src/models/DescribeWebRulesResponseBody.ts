// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeWebRulesResponseBodyWebRules } from "./DescribeWebRulesResponseBodyWebRules";


export class DescribeWebRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0F5B72DD-96F4-423A-B12B-A5151DD746B8
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of queried website business forwarding rules.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The configurations of the forwarding rule.
   */
  webRules?: DescribeWebRulesResponseBodyWebRules[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      webRules: 'WebRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      webRules: { 'type': 'array', 'itemType': DescribeWebRulesResponseBodyWebRules },
    };
  }

  validate() {
    if(Array.isArray(this.webRules)) {
      $dara.Model.validateArray(this.webRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

