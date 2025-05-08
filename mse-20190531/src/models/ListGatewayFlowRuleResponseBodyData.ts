// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListGatewayFlowRuleResponseBodyDataResult } from "./ListGatewayFlowRuleResponseBodyDataResult";
import { ListGatewayFlowRuleResponseBodyDataResults } from "./ListGatewayFlowRuleResponseBodyDataResults";


export class ListGatewayFlowRuleResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  result?: ListGatewayFlowRuleResponseBodyDataResult[];
  results?: ListGatewayFlowRuleResponseBodyDataResults[];
  /**
   * @example
   * 1
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      result: 'Result',
      results: 'Results',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      result: { 'type': 'array', 'itemType': ListGatewayFlowRuleResponseBodyDataResult },
      results: { 'type': 'array', 'itemType': ListGatewayFlowRuleResponseBodyDataResults },
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

