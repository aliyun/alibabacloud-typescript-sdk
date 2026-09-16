// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKnowledgeFilesResponseBodyDataFiles extends $dara.Model {
  /**
   * @example
   * 2026-06-09 10:27:35
   */
  createdAt?: string;
  /**
   * @example
   * 137
   */
  fileId?: number;
  /**
   * @example
   * 1024
   */
  fileSizeBytes?: number;
  /**
   * @example
   * oss://bucketName/path/to/file
   */
  fileUrl?: string;
  /**
   * @example
   * mp4
   */
  format?: string;
  /**
   * @example
   * false
   */
  isDirectory?: boolean;
  /**
   * @example
   * 122
   */
  ownerFileId?: number;
  /**
   * @example
   * 2
   */
  pageCount?: number;
  /**
   * @example
   * successful
   */
  processMessage?: string;
  /**
   * @example
   * Finished
   */
  processStatus?: string;
  /**
   * @example
   * 2026-06-10 10:23:46
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      fileId: 'FileId',
      fileSizeBytes: 'FileSizeBytes',
      fileUrl: 'FileUrl',
      format: 'Format',
      isDirectory: 'IsDirectory',
      ownerFileId: 'OwnerFileId',
      pageCount: 'PageCount',
      processMessage: 'ProcessMessage',
      processStatus: 'ProcessStatus',
      updatedAt: 'UpdatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      fileId: 'number',
      fileSizeBytes: 'number',
      fileUrl: 'string',
      format: 'string',
      isDirectory: 'boolean',
      ownerFileId: 'number',
      pageCount: 'number',
      processMessage: 'string',
      processStatus: 'string',
      updatedAt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKnowledgeFilesResponseBodyData extends $dara.Model {
  files?: ListKnowledgeFilesResponseBodyDataFiles[];
  /**
   * @example
   * Successful
   */
  message?: string;
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      files: 'Files',
      message: 'Message',
      page: 'Page',
      pageSize: 'PageSize',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      files: { 'type': 'array', 'itemType': ListKnowledgeFilesResponseBodyDataFiles },
      message: 'string',
      page: 'number',
      pageSize: 'number',
      success: 'boolean',
      total: 'number',
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

export class ListKnowledgeFilesResponseBody extends $dara.Model {
  data?: ListKnowledgeFilesResponseBodyData;
  /**
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListKnowledgeFilesResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

