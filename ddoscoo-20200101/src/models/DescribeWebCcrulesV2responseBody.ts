// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeWebCCRulesV2ResponseBodyWebCCRules } from "./DescribeWebCcrulesV2responseBodyWebCcrules";


export class DescribeWebCCRulesV2ResponseBody extends $dara.Model {
  /**
   * @remarks
   * The domain name of the website.
   * 
   * @example
   * www.aliyun.com
   */
  domain?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned custom frequency control rules.
   * 
   * @example
   * 12
   */
  totalCount?: string;
  /**
   * @remarks
   * The custom frequency control rules.
   */
  webCCRules?: DescribeWebCCRulesV2ResponseBodyWebCCRules[];
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      webCCRules: 'WebCCRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      requestId: 'string',
      totalCount: 'string',
      webCCRules: { 'type': 'array', 'itemType': DescribeWebCCRulesV2ResponseBodyWebCCRules },
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

