// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListValidateFileResponseBodyFiles extends $dara.Model {
  /**
   * @remarks
   * The number of addresses with the validation result \\"CatchAll\\".
   * 
   * @example
   * 1
   */
  catchAllNum?: string;
  /**
   * @remarks
   * The time when the task was completed.
   * 
   * @example
   * 2000-01-01T00:00:00Z
   */
  completeTime?: string;
  /**
   * @remarks
   * The number of addresses with the validation result \\"DoNotMail\\".
   * 
   * @example
   * 0
   */
  doNotMailNum?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * xxx
   */
  fileId?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * test.csv
   */
  fileName?: string;
  /**
   * @remarks
   * The number of addresses with the validation result \\"Invalid\\".
   * 
   * @example
   * 4
   */
  invalidNum?: string;
  /**
   * @remarks
   * Indicates whether the result can be downloaded.
   * 
   * @example
   * true
   */
  isDownloadable?: boolean;
  /**
   * @remarks
   * The task execution progress.
   * 
   * @example
   * 100%
   */
  percentage?: string;
  /**
   * @remarks
   * The number of addresses that have been validated.
   * 
   * @example
   * 10
   */
  processedNum?: string;
  /**
   * @remarks
   * The status of the task.
   * 
   * @example
   * completed
   */
  status?: string;
  /**
   * @remarks
   * The number of addresses to validate in the task.
   * 
   * @example
   * 10
   */
  totalNum?: string;
  /**
   * @remarks
   * The number of addresses with the validation result \\"Unknown\\".
   * 
   * @example
   * 0
   */
  unknownNum?: string;
  /**
   * @remarks
   * The time when the file was submitted.
   * 
   * @example
   * 2000-01-01T00:00:00Z
   */
  uploadTime?: string;
  /**
   * @remarks
   * The number of addresses with the validation result \\"Valid\\".
   * 
   * @example
   * 5
   */
  validNum?: string;
  static names(): { [key: string]: string } {
    return {
      catchAllNum: 'CatchAllNum',
      completeTime: 'CompleteTime',
      doNotMailNum: 'DoNotMailNum',
      fileId: 'FileId',
      fileName: 'FileName',
      invalidNum: 'InvalidNum',
      isDownloadable: 'IsDownloadable',
      percentage: 'Percentage',
      processedNum: 'ProcessedNum',
      status: 'Status',
      totalNum: 'TotalNum',
      unknownNum: 'UnknownNum',
      uploadTime: 'UploadTime',
      validNum: 'ValidNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catchAllNum: 'string',
      completeTime: 'string',
      doNotMailNum: 'string',
      fileId: 'string',
      fileName: 'string',
      invalidNum: 'string',
      isDownloadable: 'boolean',
      percentage: 'string',
      processedNum: 'string',
      status: 'string',
      totalNum: 'string',
      unknownNum: 'string',
      uploadTime: 'string',
      validNum: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListValidateFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of files.
   */
  files?: ListValidateFileResponseBodyFiles[];
  /**
   * @remarks
   * Indicates whether a next page of data exists.
   * 
   * @example
   * true
   */
  hasNext?: boolean;
  /**
   * @remarks
   * The page number.
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * xxx
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 10
   */
  totalPages?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 100
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      files: 'Files',
      hasNext: 'HasNext',
      page: 'Page',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalPages: 'TotalPages',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      files: { 'type': 'array', 'itemType': ListValidateFileResponseBodyFiles },
      hasNext: 'boolean',
      page: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalPages: 'number',
      totalSize: 'number',
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

