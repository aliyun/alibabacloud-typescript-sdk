// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListWafRulesResponseBodyRules } from "./ListWafRulesResponseBodyRules";


export class ListWafRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Number of rules used in this WAF phase for the corresponding instance of the site.
   * 
   * @example
   * 10
   */
  instanceUsage?: number;
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  /**
   * @remarks
   * Returned list of rules.
   */
  rules?: ListWafRulesResponseBodyRules[];
  /**
   * @remarks
   * Site usage.
   * 
   * @example
   * 5
   */
  siteUsage?: number;
  /**
   * @remarks
   * Total number of rules after filtering.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceUsage: 'InstanceUsage',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      rules: 'Rules',
      siteUsage: 'SiteUsage',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceUsage: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': ListWafRulesResponseBodyRules },
      siteUsage: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

