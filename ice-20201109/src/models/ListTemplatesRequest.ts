// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The creation source.
   * 
   * @example
   * OpenAPI
   */
  createSource?: string;
  /**
   * @remarks
   * The search keyword. You can search by template ID and title.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  keyword?: string;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The sort parameter. By default, templates are sorted in descending order of creation time.
   * 
   * @example
   * CreationTime:Desc
   */
  sortType?: string;
  /**
   * @remarks
   * The template status.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The templatetype.
   * 
   * @example
   * Timeline
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createSource: 'CreateSource',
      keyword: 'Keyword',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      sortType: 'SortType',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createSource: 'string',
      keyword: 'string',
      pageNo: 'number',
      pageSize: 'number',
      sortType: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

