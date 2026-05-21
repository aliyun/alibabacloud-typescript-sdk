// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFileRequest extends $dara.Model {
  /**
   * @remarks
   * The category ID, which is the `CategoryId` returned by the [AddCategory](~~AddCategory~~) operation. To view the category ID, click the ID icon next to the category name on the Unstructured Data tab of the [Data Management](https://bailian.console.alibabacloud.com/#/data-center) page.
   * 
   * This parameter is required.
   * 
   * @example
   * cate_cdd11b1b79a74e8bbd675c356a91ee3510024405
   */
  categoryId?: string;
  fileIds?: string[];
  fileName?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
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

