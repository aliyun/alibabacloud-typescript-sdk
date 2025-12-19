// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListValidateFileResponseBodyFiles extends $dara.Model {
  /**
   * @example
   * 1
   */
  catchAllNum?: string;
  /**
   * @example
   * 2000-01-01T00:00:00Z
   */
  completeTime?: string;
  /**
   * @example
   * 0
   */
  doNotMailNum?: string;
  /**
   * @example
   * xxx
   */
  fileId?: string;
  /**
   * @example
   * test.csv
   */
  fileName?: string;
  /**
   * @example
   * 4
   */
  invalidNum?: string;
  /**
   * @example
   * true
   */
  isDownloadable?: boolean;
  /**
   * @example
   * 100%
   */
  percentage?: string;
  /**
   * @example
   * 10
   */
  processedNum?: string;
  /**
   * @example
   * completed
   */
  status?: string;
  /**
   * @example
   * 10
   */
  totalNum?: string;
  /**
   * @example
   * 0
   */
  unknownNum?: string;
  /**
   * @example
   * 2000-01-01T00:00:00Z
   */
  uploadTime?: string;
  /**
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
  files?: ListValidateFileResponseBodyFiles[];
  /**
   * @example
   * true
   */
  hasNext?: boolean;
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * xxx
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalPages?: number;
  /**
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

