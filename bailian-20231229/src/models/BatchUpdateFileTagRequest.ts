// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchUpdateFileTagRequestFileInfos extends $dara.Model {
  /**
   * @remarks
   * The file ID in the data center. On the <props="china">[Application Data](https://bailian.console.aliyun.com/?tab=app#/data-center)<props="intl">[Application Data](https://modelstudio.console.alibabacloud.com/?tab=app#/data-center) page, click the ID icon next to the file name to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * file_3d5319366e2c46309f4c11cfbeacd5fd_10045951
   */
  fileId?: string;
  /**
   * @remarks
   * - The list of tags associated with the file. You can specify up to 100 tags. The total character length of all tags cannot exceed 700.
   * 
   * This parameter is required.
   */
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
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

export class BatchUpdateFileTagRequest extends $dara.Model {
  /**
   * @remarks
   * The list of documents to update.
   * 
   * This parameter is required.
   */
  fileInfos?: BatchUpdateFileTagRequestFileInfos[];
  /**
   * @remarks
   * The update mode. Valid values: APPEND (append) and OVERWRITE (overwrite).
   * 
   * @example
   * OVERWRITE
   */
  updateMode?: string;
  static names(): { [key: string]: string } {
    return {
      fileInfos: 'FileInfos',
      updateMode: 'UpdateMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileInfos: { 'type': 'array', 'itemType': BatchUpdateFileTagRequestFileInfos },
      updateMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fileInfos)) {
      $dara.Model.validateArray(this.fileInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

