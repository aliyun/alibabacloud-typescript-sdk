// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFilesResponseBodyFiles extends $dara.Model {
  /**
   * @remarks
   * File description.
   * 
   * @example
   * 我的文件
   */
  description?: string;
  /**
   * @remarks
   * File ID.
   * 
   * @example
   * f-1671accd4dafdag3er256cvgewt13f7141db2f7
   */
  fileId?: string;
  /**
   * @remarks
   * File name.
   * 
   * @example
   * myfile
   */
  fileName?: string;
  /**
   * @remarks
   * Upload status. Valid values:
   * 
   * 1. Created
   * 
   * 2. Doing
   * 
   * 3. Success (desired state)
   * 
   * 4. Failed (desired state)
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * Status description.
   * 
   * @example
   * upload success
   */
  statusDescription?: string;
  /**
   * @remarks
   * Destination path for pushing the file to the service instance.
   * 
   * @example
   * /data/tmp/test/xxx.tar
   */
  targetPath?: string;
  /**
   * @remarks
   * Most recent status update time.
   * 
   * @example
   * 2024-03-28T14:15:08+08:00
   */
  updateTime?: string;
  /**
   * @remarks
   * Upload start time.
   * 
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
  /**
   * @remarks
   * List of file information.
   */
  files?: ListFilesResponseBodyFiles[];
  /**
   * @remarks
   * Page number of the list.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of entries per page for paged queries.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of matching file records.
   * 
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

