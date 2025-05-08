// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListWafRulesetsResponseBodyRulesets } from "./ListWafRulesetsResponseBodyRulesets";


export class ListWafRulesetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Number of WAF rule sets used by the instance in this WAF operation phase.
   * 
   * @example
   * 10
   */
  instanceUsage?: number;
  /**
   * @remarks
   * Current page number.
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
   * List of rule set information, containing detailed information about the rule sets.
   */
  rulesets?: ListWafRulesetsResponseBodyRulesets[];
  /**
   * @remarks
   * Number of WAF rule sets used by the site in this WAF operation phase.
   * 
   * @example
   * 5
   */
  siteUsage?: number;
  /**
   * @remarks
   * Total number of filtered records.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceUsage: 'InstanceUsage',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      rulesets: 'Rulesets',
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
      rulesets: { 'type': 'array', 'itemType': ListWafRulesetsResponseBodyRulesets },
      siteUsage: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.rulesets)) {
      $dara.Model.validateArray(this.rulesets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

