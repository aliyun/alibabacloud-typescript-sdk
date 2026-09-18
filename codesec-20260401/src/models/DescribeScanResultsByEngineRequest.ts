// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScanResultsByEngineRequest extends $dara.Model {
  /**
   * @remarks
   * Filters results by the baseline state of incremental scans. Valid values: new, unchanged, absent, and updated.
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
   * The pagination token. Do not specify this parameter for the first page or set it to an empty string. For subsequent pages, pass the nextToken value from the previous response without any modification. If the nextToken value in the response is empty, the last page has been reached.
   * 
   * @example
   * eyJ0IjoiMjAyNi0wNy0xNlQwNzo1MzozOC4wMjFaIiwiaSI6MTAwMDQ0OH0
   */
  nextToken?: string;
  /**
   * @remarks
   * The component name for fuzzy match. This parameter takes effect only when engine is set to sca.
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

