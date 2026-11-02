// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLiveSnapshotTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Valid values: [1, n). Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of items per page. Valid values: [1, 100]. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The search keyword. You can search by template ID or name. Fuzzy match is supported for template names.
   * - The maximum length is 128 characters.
   * 
   * @example
   * ****a046-263c-3560-978a-fb287782****
   */
  searchKeyWord?: string;
  /**
   * @remarks
   * The sort order. By default, the results are sorted by CreateTime in descending order.
   * 
   * @example
   * desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The template IDs used for the query.
   * - If SearchKeyWord is specified, this parameter does not take effect.
   * - The maximum array length is 200.
   */
  templateIds?: string[];
  /**
   * @remarks
   * The templatetype. By default, all types are queried.
   * 
   * @example
   * custom
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchKeyWord: 'SearchKeyWord',
      sortBy: 'SortBy',
      templateIds: 'TemplateIds',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      searchKeyWord: 'string',
      sortBy: 'string',
      templateIds: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.templateIds)) {
      $dara.Model.validateArray(this.templateIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

