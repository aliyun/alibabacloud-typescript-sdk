// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFileResponseBodyDataFileList extends $dara.Model {
  /**
   * @example
   * cate_cdd11b1b79a74e8bbd675c356a91ee3510024405
   */
  categoryId?: string;
  /**
   * @example
   * 2023-08-18 11:03:35
   */
  createTime?: string;
  /**
   * @example
   * file_5ff599b3455a45db8c41b0054b361518_10098576
   */
  fileId?: string;
  /**
   * @example
   * auto-test-1721096109278.pdf
   */
  fileName?: string;
  /**
   * @example
   * docx
   */
  fileType?: string;
  /**
   * @example
   * DASHSCOPE_DOCMIND
   */
  parser?: string;
  /**
   * @example
   * 512
   */
  sizeInBytes?: number;
  /**
   * @example
   * 200
   */
  status?: string;
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      createTime: 'CreateTime',
      fileId: 'FileId',
      fileName: 'FileName',
      fileType: 'FileType',
      parser: 'Parser',
      sizeInBytes: 'SizeInBytes',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      createTime: 'string',
      fileId: 'string',
      fileName: 'string',
      fileType: 'string',
      parser: 'string',
      sizeInBytes: 'number',
      status: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

