// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCategoriesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the category. If you specify this parameter, the system queries the category based on the ID. You can specify only one category ID. You can use one of the following methods to obtain the ID:
   * 
   * *   Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com). Choose **Configuration Management** > **Media Management** > **Categories**. On the Audio and Video / Image Category or Short Video Material Category tab, view the category ID.
   * *   Obtain the category ID from the response to the [AddCategory](~~AddCategory~~) operation.
   * 
   * @example
   * 49339****
   */
  cateId?: number;
  /**
   * @remarks
   * The number of the page where the subcategories to be returned are listed. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries to return on each page of the subcategory list. Default value: **10**. Maximum value: **100**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The sorting method of the results. Valid values:
   * 
   * *   **CreationTime:Desc** (default): The results are sorted in reverse chronological order based on the creation time.
   * *   **CreationTime:Asc**: The results are sorted in chronological order based on the creation time.
   * 
   * @example
   * CreationTime:Desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The type of the category. If you specify this parameter, the system queries the category based on the type. Valid values:
   * 
   * *   **default** (default): audio, video, and image files
   * *   **material**: short video materials
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

