// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBaselineCheckWhiteRecordShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of check item IDs.
   */
  checkIdsShrink?: string;
  /**
   * @remarks
   * The check item name for fuzzy match.
   * 
   * @example
   * redis
   */
  checkItemFuzzy?: string;
  /**
   * @remarks
   * The page number of the current page when using paging. The value starts from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The language type for requests and responses. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries per page when using paging.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of whitelist record IDs.
   */
  recordIdsShrink?: string;
  /**
   * @remarks
   * The data source. If this parameter is left empty, host data is queried by default. Valid values:
   * - **default**: host
   * - **agentless**: agentless.
   * 
   * @example
   * agentless
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      checkIdsShrink: 'CheckIds',
      checkItemFuzzy: 'CheckItemFuzzy',
      currentPage: 'CurrentPage',
      lang: 'Lang',
      pageSize: 'PageSize',
      recordIdsShrink: 'RecordIds',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkIdsShrink: 'string',
      checkItemFuzzy: 'string',
      currentPage: 'number',
      lang: 'string',
      pageSize: 'number',
      recordIdsShrink: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

