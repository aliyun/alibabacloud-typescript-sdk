// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBaselineCheckWhiteRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of check items.
   */
  checkIds?: number[];
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
  recordIds?: number[];
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
      checkIds: 'CheckIds',
      checkItemFuzzy: 'CheckItemFuzzy',
      currentPage: 'CurrentPage',
      lang: 'Lang',
      pageSize: 'PageSize',
      recordIds: 'RecordIds',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkIds: { 'type': 'array', 'itemType': 'number' },
      checkItemFuzzy: 'string',
      currentPage: 'number',
      lang: 'string',
      pageSize: 'number',
      recordIds: { 'type': 'array', 'itemType': 'number' },
      source: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.checkIds)) {
      $dara.Model.validateArray(this.checkIds);
    }
    if(Array.isArray(this.recordIds)) {
      $dara.Model.validateArray(this.recordIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

