// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCategoriesRequest extends $dara.Model {
  /**
   * @remarks
   * The category ID. If you specify this parameter, the information about the specified category is returned. Only a single category ID is supported. You can obtain the category ID by using the following methods:
   * - Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Configuration Management** > **Media Asset Management Configuration** > **Category Management** to view the category ID.
   * - Obtain the category ID from the response of the [AddCategory](~~AddCategory~~) operation when you create a category.
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
   * The number of entries per page of the subcategory list. Default value: **10**. Maximum value: **100**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The method for sorting the query results. Valid values:
   * 
   * - **CreationTime:Desc** (default): sorts the results by creation time in descending order.
   * - **CreationTime:Asc**: sorts the results by creation time in ascending order.
   * 
   * @example
   * CreationTime:Desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The categorization type. If you specify this parameter, a filtered query is performed to return categories of the specified type. Valid values:
   * - **default**: audio, video, and image categorization.
   * - **material**: short video material categorization.
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

