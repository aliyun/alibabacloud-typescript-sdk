// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePortResponseBodyNetworkRules } from "./DescribePortResponseBodyNetworkRules";


export class DescribePortResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of port forwarding rules.
   */
  networkRules?: DescribePortResponseBodyNetworkRules[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 39499F01-19D9-4EA4-A0E9-C6014BA5CDBE
   */
  requestId?: string;
  /**
   * @remarks
   * The number of port forwarding rules returned.
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
      networkRules: { 'type': 'array', 'itemType': DescribePortResponseBodyNetworkRules },
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

