// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCategoriesRequest extends $dara.Model {
  /**
   * @remarks
   * The category ID. If you specify this parameter, you can query the category with the specified ID. You can specify only one category ID. You can obtain the category ID by using one of the following methods:
   * - Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Configuration Management** > **Media Asset Configuration** > **Category Management** to view the category ID.
   * - The category ID is returned when you call the [AddCategory](~~AddCategory~~) operation to create a category.
   * 
   * @example
   * 49339****
   */
  cateId?: number;
  /**
   * @remarks
   * The page number of the subcategory list. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page in the subcategory list. Default value: **10**. Maximum value: **100**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The sorting method of the query results. Valid values:
   * 
   * - **CreationTime:Desc** (default): Sort by creation time in descending order.
   * - **CreationTime:Asc**: Sort by creation time in ascending order.
   * 
   * @example
   * CreationTime:Desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The categorization type. If you specify this parameter, you can perform a filtered query for categorizations of the specified type. Valid values:
   * - **default**: Audio, video, or image categorization.
   * - **material**: Short video material categorization.
   * 
   * @example
   * default
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cateId: 'CateId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      sortBy: 'string',
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

