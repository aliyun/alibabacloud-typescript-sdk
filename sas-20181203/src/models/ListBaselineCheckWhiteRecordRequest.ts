// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBaselineCheckWhiteRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The list of check item IDs.
   */
  checkIds?: number[];
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
  recordIds?: number[];
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

