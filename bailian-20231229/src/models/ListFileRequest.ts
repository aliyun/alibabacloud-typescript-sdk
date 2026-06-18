// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFileRequest extends $dara.Model {
  /**
   * @remarks
   * <props="china">
   * 
   * The category ID, which is the `CategoryId` returned by the **AddCategory** operation. You can also obtain it on the [Application Data](https://bailian.console.aliyun.com/?tab=app#/data-center) - Files tab by clicking the ID icon next to the category name.
   * 
   * 
   * 
   * <props="intl">
   * 
   * The category ID, which is the `CategoryId` returned by the **AddCategory** operation. You can also obtain it on the [Application Data](https://modelstudio.console.alibabacloud.com/?tab=app#/data-center) - Files tab by clicking the ID icon next to the category name.
   * 
   * .
   * 
   * This parameter is required.
   * 
   * @example
   * cate_cdd11b1b79a74e8bbd675c356a91ee35xxxxxxxx
   */
  categoryId?: string;
  /**
   * @remarks
   * The list of file IDs to query. A maximum of 20 files can be queried per request.
   */
  fileIds?: string[];
  /**
   * @remarks
   * The file name (without extension). Only exact match is supported. Fuzzy search is not supported.
   * 
   * @example
   * product-overview
   */
  fileName?: string;
  /**
   * @remarks
   * The number of entries per page for paging. Valid values: 1 to 200.
   * 
   * Default value:
   * If the value is not set or is less than 1, the default value is 20. If the value is greater than 200, the default value is 200.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Set this to the NextToken value returned by the previous API call.
   * 
   * @example
   * AAAAAdH70eOCSCKtacdomNzak4U=
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      fileIds: 'FileIds',
      fileName: 'FileName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      fileIds: { 'type': 'array', 'itemType': 'string' },
      fileName: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fileIds)) {
      $dara.Model.validateArray(this.fileIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

