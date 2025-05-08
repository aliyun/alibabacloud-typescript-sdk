// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWafRulesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Query page number, used for pagination.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Query page size, used for pagination.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * WAF rule type. Values:
   * 
   * - http_anti_scan: Scan protection
   * - http_bot: Bots
   * 
   * @example
   * http_custom
   */
  phase?: string;
  /**
   * @remarks
   * Query filter conditions.
   * 
   * @example
   * http_custom
   */
  queryArgsShrink?: string;
  rulesetId?: number;
  /**
   * @remarks
   * Site ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  siteId?: number;
  /**
   * @remarks
   * Site version.
   * 
   * @example
   * 0
   */
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      phase: 'Phase',
      queryArgsShrink: 'QueryArgs',
      rulesetId: 'RulesetId',
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      phase: 'string',
      queryArgsShrink: 'string',
      rulesetId: 'number',
      siteId: 'number',
      siteVersion: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

