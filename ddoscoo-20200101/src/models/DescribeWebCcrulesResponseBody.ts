// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeWebCCRulesResponseBodyWebCCRules } from "./DescribeWebCcrulesResponseBodyWebCcrules";


export class DescribeWebCCRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EAED912D-909E-45F0-AF74-AC0CCDCAE314
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of custom frequency control rules.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The custom frequency control rule.
   */
  webCCRules?: DescribeWebCCRulesResponseBodyWebCCRules[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      webCCRules: 'WebCCRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      webCCRules: { 'type': 'array', 'itemType': DescribeWebCCRulesResponseBodyWebCCRules },
    };
  }

  validate() {
    if(Array.isArray(this.webCCRules)) {
      $dara.Model.validateArray(this.webCCRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

