// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMyInstalledAppPluginsRequest extends $dara.Model {
  /**
   * @remarks
   * Filters results by category.
   * 
   * @example
   * {\\"Status\\": 0, \\"Name\\": \\"UELBNUP\\", \\"BizCode\\": \\"\\", \\"CategoryId\\": 30000655368, \\"ParentCategoryId\\": 30000655367}
   */
  category?: string;
  /**
   * @remarks
   * The search keyword. Matches against name or description.
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
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      keyword: 'Keyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

