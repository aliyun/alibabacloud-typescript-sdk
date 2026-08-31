// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScanResultsByEngineRequest extends $dara.Model {
  /**
   * @remarks
   * Filters results by incremental scan baseline status. Valid values: new, unchanged, absent, updated.
   * 
   * @example
   * unchanged
   */
  baselineState?: string;
  /**
   * @remarks
   * The language. Valid values:
   * * zh: Chinese (default).
   * * en: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 50.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Do not pass nextToken or pass an empty string for the first page. To retrieve the next page, pass the nextToken value from the previous response without any modification. When the nextToken in the response is empty, you have reached the last page.
   * 
   * @example
   * eyJ0IjoiMjAyNi0wNy0xNlQwNzo1MzozOC4wMjFaIiwiaSI6MTAwMDQ0OH0
   */
  nextToken?: string;
  /**
   * @remarks
   * Performs a fuzzy match by component name. This parameter takes effect only when engine is set to sca.
   * 
   * @example
   * app10000006824_fulljoin_61b2c_global_ad_budget_ctrl_v1.5.jar
   */
  packageName?: string;
  static names(): { [key: string]: string } {
    return {
      baselineState: 'baselineState',
      lang: 'lang',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      packageName: 'packageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineState: 'string',
      lang: 'string',
      maxResults: 'number',
      nextToken: 'string',
      packageName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

