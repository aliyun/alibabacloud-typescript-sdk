// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFilesResponseBodyFiles extends $dara.Model {
  description?: string;
  /**
   * @example
   * f-1671accd4dafdag3er256cvgewt13f7141db2f7
   */
  fileId?: string;
  /**
   * @example
   * myfile
   */
  fileName?: string;
  /**
   * @example
   * Success
   */
  status?: string;
  /**
   * @example
   * upload success
   */
  statusDescription?: string;
  /**
   * @example
   * /data/tmp/test/xxx.tar
   */
  targetPath?: string;
  /**
   * @example
   * 2024-03-28T14:15:08+08:00
   */
  updateTime?: string;
  /**
   * @example
   * 2024-03-28T14:10:12+08:00
   */
  uploadTime?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      fileId: 'FileId',
      fileName: 'FileName',
      status: 'Status',
      statusDescription: 'StatusDescription',
      targetPath: 'TargetPath',
      updateTime: 'UpdateTime',
      uploadTime: 'UploadTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      fileId: 'string',
      fileName: 'string',
      status: 'string',
      statusDescription: 'string',
      targetPath: 'string',
      updateTime: 'string',
      uploadTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFilesResponseBody extends $dara.Model {
  files?: ListFilesResponseBodyFiles[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 200
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      files: 'Files',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      files: { 'type': 'array', 'itemType': ListFilesResponseBodyFiles },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.files)) {
      $dara.Model.validateArray(this.files);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

