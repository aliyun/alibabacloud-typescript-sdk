// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMyAppPluginsRequest extends $dara.Model {
  /**
   * @remarks
   * The category used to filter results.
   * 
   * @example
   * {\\"Status\\": 0, \\"Name\\": \\"JGHDDLT\\", \\"BizCode\\": \\"\\", \\"CategoryId\\": 30000952447, \\"ParentCategoryId\\": 30000952446}
   */
  category?: string;
  /**
   * @remarks
   * The search keyword. The keyword matches the name or description.
   * 
   * @example
   * ${\\"wget JiexJPWT.popscan.xaliyun.com\\"}
   */
  keyword?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The status used to filter results.
   * 
   * @example
   * NORMAL
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      keyword: 'Keyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

