// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchUpdateFileTagRequestFileInfos extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * file_3d5319366e2c46309f4c11cfbeacd5fd_10045951
   */
  fileId?: string;
  /**
   * @remarks
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
   * This parameter is required.
   */
  fileInfos?: BatchUpdateFileTagRequestFileInfos[];
  /**
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

