// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCheckItemsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the check item.
   * 
   * @example
   * 100000000001
   */
  checkId?: number;
  /**
   * @remarks
   * The name of the custom check item.
   * 
   * @example
   * testCheckItemName
   */
  checkShowName?: string;
  /**
   * @remarks
   * The source type of the situational awareness check item.
   */
  checkTypes?: string[];
  /**
   * @remarks
   * Specifies the page number to display when performing a paginated query. The starting value is **1**, and the default value is **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The language type for requests and responses. The default value is **zh**. Values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Specifies the maximum number of data entries to display per page when performing a paginated query. The default number of data entries displayed per page is 20, and if the PageSize parameter is empty, it will default to returning 20 data entries.
   * > It is recommended that the PageSize value is not left empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The status of the check item.
   */
  statuses?: string[];
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      checkShowName: 'CheckShowName',
      checkTypes: 'CheckTypes',
      currentPage: 'CurrentPage',
      lang: 'Lang',
      pageSize: 'PageSize',
      statuses: 'Statuses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'number',
      checkShowName: 'string',
      checkTypes: { 'type': 'array', 'itemType': 'string' },
      currentPage: 'number',
      lang: 'string',
      pageSize: 'number',
      statuses: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.checkTypes)) {
      $dara.Model.validateArray(this.checkTypes);
    }
    if(Array.isArray(this.statuses)) {
      $dara.Model.validateArray(this.statuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

