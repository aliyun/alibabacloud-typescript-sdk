// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDocClusterTaskResponseBodyDataTopics extends $dara.Model {
  docIds?: string[];
  /**
   * @example
   * 聚类主题摘要
   */
  summary?: string;
  /**
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
   * @example
   * 错误信息
   */
  errorMessage?: string;
  /**
   * @example
   * PENDING
   */
  status?: string;
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
   * @example
   * NoData
   */
  code?: string;
  data?: GetDocClusterTaskResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
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

