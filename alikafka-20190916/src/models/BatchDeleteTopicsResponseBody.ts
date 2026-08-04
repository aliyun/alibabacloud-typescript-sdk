// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class BatchDeleteTopicsResponseBodyDataResultsTopicDeleteResultItemVO extends $dara.Model {
  code?: number;
  dynamicCode?: string;
  dynamicMessage?: string;
  message?: string;
  status?: string;
  success?: boolean;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      message: 'Message',
      status: 'Status',
      success: 'Success',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      message: 'string',
      status: 'string',
      success: 'boolean',
      topic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteTopicsResponseBodyDataResults extends $dara.Model {
  topicDeleteResultItemVO?: BatchDeleteTopicsResponseBodyDataResultsTopicDeleteResultItemVO[];
  static names(): { [key: string]: string } {
    return {
      topicDeleteResultItemVO: 'TopicDeleteResultItemVO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topicDeleteResultItemVO: { 'type': 'array', 'itemType': BatchDeleteTopicsResponseBodyDataResultsTopicDeleteResultItemVO },
    };
  }

  validate() {
    if(Array.isArray(this.topicDeleteResultItemVO)) {
      $dara.Model.validateArray(this.topicDeleteResultItemVO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteTopicsResponseBodyData extends $dara.Model {
  failedCount?: number;
  results?: BatchDeleteTopicsResponseBodyDataResults;
  successCount?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failedCount: 'FailedCount',
      results: 'Results',
      successCount: 'SuccessCount',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedCount: 'number',
      results: BatchDeleteTopicsResponseBodyDataResults,
      successCount: 'number',
      total: 'number',
    };
  }

  validate() {
    if(this.results && typeof (this.results as any).validate === 'function') {
      (this.results as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteTopicsResponseBody extends $dara.Model {
  code?: number;
  data?: BatchDeleteTopicsResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: BatchDeleteTopicsResponseBodyData,
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

