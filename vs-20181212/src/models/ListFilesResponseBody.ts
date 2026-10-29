// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFilesResponseBodyFiles extends $dara.Model {
  /**
   * @remarks
   * The description of the file.
   * 
   * @example
   * My file
   */
  description?: string;
  /**
   * @remarks
   * The ID of the file.
   * 
   * @example
   * f-1671accd4dafdag3er256cvgewt13f7141db2f7
   */
  fileId?: string;
  /**
   * @remarks
   * The name of the file.
   * 
   * @example
   * myfile
   */
  fileName?: string;
  /**
   * @remarks
   * The upload status of the file. Valid values:
   * - Created
   * - Doing
   * - Success: final state
   * - Failed: final state
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The description of the status.
   * 
   * @example
   * upload success
   */
  statusDescription?: string;
  /**
   * @remarks
   * The target path for pushing the file to the cloud application service instance.
   * 
   * @example
   * /data/tmp/test/xxx.tar
   */
  targetPath?: string;
  /**
   * @remarks
   * The time when the status was last updated. The time follows the ISO 8601 standard and includes the time zone offset in the YYYY-MM-DDTHH:mm:ss+HH:mm format.
   * 
   * @example
   * 2024-03-28T14:15:08+08:00
   */
  updateTime?: string;
  /**
   * @remarks
   * The time when the upload started. The time follows the ISO 8601 standard and includes the time zone offset in the YYYY-MM-DDTHH:mm:ss+HH:mm format.
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
   * The list of file information.
   */
  files?: ListFilesResponseBodyFiles[];
  /**
   * @remarks
   * The page number of the returned list.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The Settings for the number of entries per page during paging in a paged query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of matched file records.
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

