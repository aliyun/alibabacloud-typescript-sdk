// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLiveSnapshotTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Valid values: [1,n). Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The search keyword. You can use the template ID or name as the keyword to search for templates. If you search for templates by name, fuzzy match is supported.
   * 
   * *   It cannot exceed 128 characters in length.
   * 
   * @example
   * ****a046-263c-3560-978a-fb287782****
   */
  searchKeyWord?: string;
  /**
   * @remarks
   * The sorting order. By default, the query results are sorted by creation time in descending order.
   * 
   * Valid values:
   * 
   * *   asc: sorts the query results by creation time in ascending order.
   * *   desc: sorts the query results by creation time in descending order.
   * 
   * @example
   * desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The template IDs.
   * 
   * *   If you specify the SearchKeyWord parameter, this condition does not take effect.
   * *   The maximum length of the array is 200.
   */
  templateIds?: string[];
  /**
   * @remarks
   * The type of the template. By default, all types are queried.
   * 
   * Valid values:
   * 
   * *   system
   * *   custom
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

