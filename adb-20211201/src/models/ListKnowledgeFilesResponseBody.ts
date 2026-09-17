// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKnowledgeFilesResponseBodyDataFiles extends $dara.Model {
  /**
   * @remarks
   * The time when the file was added to the knowledge base.
   * 
   * @example
   * 2026-06-09 10:27:35
   */
  createdAt?: string;
  /**
   * @remarks
   * The ID of the file.
   * 
   * @example
   * 137
   */
  fileId?: number;
  /**
   * @remarks
   * The size of the file, in bytes.
   * 
   * @example
   * 1024
   */
  fileSizeBytes?: number;
  /**
   * @remarks
   * The Object Storage Service (OSS) URL of the file.
   * 
   * @example
   * oss://bucketName/path/to/file
   */
  fileUrl?: string;
  /**
   * @remarks
   * The format of the file.
   * 
   * @example
   * mp4
   */
  format?: string;
  /**
   * @remarks
   * Indicates whether the file is a directory.
   * 
   * @example
   * false
   */
  isDirectory?: boolean;
  /**
   * @remarks
   * The file_id of the content host.
   * 
   * @example
   * 122
   */
  ownerFileId?: number;
  /**
   * @remarks
   * The total number of pages in the file, such as the number of pages in a PDF file.
   * 
   * @example
   * 2
   */
  pageCount?: number;
  /**
   * @remarks
   * The processing message of the knowledge base file.
   * 
   * @example
   * successful
   */
  processMessage?: string;
  /**
   * @remarks
   * The status of the file in the knowledge base. Valid values:
   * 
   * - Processing: The file is being processed.
   * 
   * - Finished: The file has been processed.
   * 
   * @example
   * Finished
   */
  processStatus?: string;
  /**
   * @remarks
   * The time when the file was last updated.
   * 
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
  /**
   * @remarks
   * The list of file information.
   */
  files?: ListKnowledgeFilesResponseBodyDataFiles[];
  /**
   * @remarks
   * The message returned by the request.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * - **true**: The request was successful.
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries.
   * 
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
  /**
   * @remarks
   * The returned data.
   */
  data?: ListKnowledgeFilesResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
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

