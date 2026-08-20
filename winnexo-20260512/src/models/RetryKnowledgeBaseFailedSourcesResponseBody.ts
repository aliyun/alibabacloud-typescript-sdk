// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetryKnowledgeBaseFailedSourcesResponseBodyFailedSources extends $dara.Model {
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * SampleName.pdf
   */
  name?: string;
  /**
   * @remarks
   * The data source ID.
   * 
   * @example
   * exampleSourceId
   */
  sourceId?: string;
  /**
   * @remarks
   * The data source type.
   * 
   * @example
   * string_value
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      sourceId: 'sourceId',
      sourceType: 'sourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      sourceId: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryKnowledgeBaseFailedSourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. A value of 200 indicates success. A failure returns a backend error code (ERR.* / InvalidParameter.*).
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The enterprise knowledge base directory ID.
   * 
   * @example
   * exampleDirectoryId
   */
  directoryId?: string;
  /**
   * @remarks
   * The number of resources successfully enqueued for retry.
   * 
   * @example
   * 1
   */
  enqueuedCount?: number;
  /**
   * @remarks
   * enqueuedIds。
   * 
   * @example
   * string_value
   */
  enqueuedIds?: string[];
  /**
   * @remarks
   * The total number of failed resources under the directory.
   * 
   * @example
   * 1
   */
  failedCount?: number;
  /**
   * @remarks
   * The list of failed data sources.
   */
  failedSources?: RetryKnowledgeBaseFailedSourcesResponseBodyFailedSources[];
  /**
   * @remarks
   * The error description. This value is empty on success.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The request trace ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The number of resources skipped because they are not in FAILED status.
   * 
   * @example
   * 1
   */
  skippedCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      directoryId: 'directoryId',
      enqueuedCount: 'enqueuedCount',
      enqueuedIds: 'enqueuedIds',
      failedCount: 'failedCount',
      failedSources: 'failedSources',
      message: 'message',
      requestId: 'requestId',
      skippedCount: 'skippedCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      directoryId: 'string',
      enqueuedCount: 'number',
      enqueuedIds: { 'type': 'array', 'itemType': 'string' },
      failedCount: 'number',
      failedSources: { 'type': 'array', 'itemType': RetryKnowledgeBaseFailedSourcesResponseBodyFailedSources },
      message: 'string',
      requestId: 'string',
      skippedCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.enqueuedIds)) {
      $dara.Model.validateArray(this.enqueuedIds);
    }
    if(Array.isArray(this.failedSources)) {
      $dara.Model.validateArray(this.failedSources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

