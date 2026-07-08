// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDocClusterTaskResponseBodyDataTopics extends $dara.Model {
  /**
   * @remarks
   * A list of document IDs for the clustering topic.
   */
  docIds?: string[];
  /**
   * @remarks
   * The summary of the clustering topic.
   * 
   * @example
   * 聚类主题摘要
   */
  summary?: string;
  /**
   * @remarks
   * The name of the clustering topic.
   * 
   * @example
   * 聚类主题名
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      docIds: 'DocIds',
      summary: 'Summary',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docIds: { 'type': 'array', 'itemType': 'string' },
      summary: 'string',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.docIds)) {
      $dara.Model.validateArray(this.docIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocClusterTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * 错误信息
   */
  errorMessage?: string;
  /**
   * @remarks
   * The status of the task. Valid values: PENDING (to be executed), RUNNING (executing), SUCCESSED (successful), SUSPENDED (paused), FAILED (failed), and CANCELED (canceled).
   * 
   * @example
   * PENDING
   */
  status?: string;
  /**
   * @remarks
   * A list of clustering topics.
   */
  topics?: GetDocClusterTaskResponseBodyDataTopics[];
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      status: 'Status',
      topics: 'Topics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      status: 'string',
      topics: { 'type': 'array', 'itemType': GetDocClusterTaskResponseBodyDataTopics },
    };
  }

  validate() {
    if(Array.isArray(this.topics)) {
      $dara.Model.validateArray(this.topics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocClusterTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * NoData
   */
  code?: string;
  /**
   * @remarks
   * The business data.
   */
  data?: GetDocClusterTaskResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error description.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. \\`true\\`: The request was successful. \\`false\\`: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetDocClusterTaskResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

