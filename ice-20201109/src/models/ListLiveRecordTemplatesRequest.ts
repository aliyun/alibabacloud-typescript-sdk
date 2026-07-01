// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLiveRecordTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword to search for templates by ID or name. Fuzzy matching is supported for template names.
   * 
   * @example
   * test template
   */
  keyword?: string;
  /**
   * @remarks
   * The page number. Minimum value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Value range: 1–100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The sort order. The default sort is descending by creation time.
   * 
   * @example
   * desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The template IDs to retrieve.
   */
  templateIds?: string[];
  /**
   * @remarks
   * The template type.
   * 
   * @example
   * custom
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      templateIds: 'TemplateIds',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageNo: 'number',
      pageSize: 'number',
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

