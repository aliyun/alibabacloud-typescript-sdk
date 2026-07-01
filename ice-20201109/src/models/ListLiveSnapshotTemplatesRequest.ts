// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLiveSnapshotTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. The value must be greater than or equal to 1. Default value: 1.
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
   * The search keyword. You can perform a fuzzy search by template ID or template name.
   * 
   * - Maximum length: 128 characters.
   * 
   * @example
   * ****a046-263c-3560-978a-fb287782****
   */
  searchKeyWord?: string;
  /**
   * @remarks
   * The sorting method. By default, results are sorted by creation time in descending order.
   * 
   * @example
   * desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The template IDs.
   * 
   * - This parameter does not take effect if `SearchKeyWord` is specified.
   * 
   * - You can specify a maximum of 200 template IDs.
   */
  templateIds?: string[];
  /**
   * @remarks
   * The type of the template. By default, templates of all types are queried.
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

