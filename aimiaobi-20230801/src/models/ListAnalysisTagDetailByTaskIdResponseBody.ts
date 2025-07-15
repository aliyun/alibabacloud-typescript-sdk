// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAnalysisTagDetailByTaskIdResponseBodyDataContentTags extends $dara.Model {
  /**
   * @example
   * xxx
   */
  summaryOverview?: string;
  /**
   * @example
   * xxx
   */
  tagName?: string;
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      summaryOverview: 'SummaryOverview',
      tagName: 'TagName',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      summaryOverview: 'string',
      tagName: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnalysisTagDetailByTaskIdResponseBodyData extends $dara.Model {
  /**
   * @example
   * xxx
   */
  content?: string;
  contentTags?: ListAnalysisTagDetailByTaskIdResponseBodyDataContentTags[];
  /**
   * @example
   * 112
   */
  id?: number;
  /**
   * @example
   * summaryAndOverview
   */
  tagTaskType?: string;
  /**
   * @example
   * xxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentTags: 'ContentTags',
      id: 'Id',
      tagTaskType: 'TagTaskType',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentTags: { 'type': 'array', 'itemType': ListAnalysisTagDetailByTaskIdResponseBodyDataContentTags },
      id: 'number',
      tagTaskType: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.contentTags)) {
      $dara.Model.validateArray(this.contentTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnalysisTagDetailByTaskIdResponseBody extends $dara.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: ListAnalysisTagDetailByTaskIdResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * token-xxxx
   */
  nextToken?: string;
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
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListAnalysisTagDetailByTaskIdResponseBodyData },
      httpStatusCode: 'number',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

