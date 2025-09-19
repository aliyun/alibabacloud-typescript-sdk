// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBaselineCheckWhiteRecordShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of check items.
   */
  checkIdsShrink?: string;
  /**
   * @remarks
   * The name of the check item. Fuzzy match is supported.
   * 
   * @example
   * redis
   */
  checkItemFuzzy?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The IDs of the whitelist rules.
   */
  recordIdsShrink?: string;
  /**
   * @remarks
   * The data source. If you leave this parameter empty, the default value is used. Valid values:
   * 
   * *   **default**: server
   * *   **agentless**: agentless detection
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

