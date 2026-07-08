// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAnalysisTagDetailByTaskIdResponseBodyDataContentTags extends $dara.Model {
  /**
   * @remarks
   * The summary.
   * 
   * @example
   * xxx
   */
  summaryOverview?: string;
  /**
   * @remarks
   * The name of the tag.
   * 
   * @example
   * xxx
   */
  tagName?: string;
  /**
   * @remarks
   * A list of tag values.
   */
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
   * @remarks
   * The content of the tag.
   * 
   * @example
   * xxx
   */
  content?: string;
  /**
   * @remarks
   * A list of tags applied to the content.
   */
  contentTags?: ListAnalysisTagDetailByTaskIdResponseBodyDataContentTags[];
  /**
   * @remarks
   * The primary key ID of the data.
   * 
   * @example
   * 112
   */
  id?: number;
  /**
   * @remarks
   * The type of the tag mining task. Valid values: \\`singleTagValue\\`, \\`multiTagValues\\`, and \\`summaryAndOverview\\`.
   * 
   * @example
   * summaryAndOverview
   */
  tagTaskType?: string;
  /**
   * @remarks
   * The task ID.
   * 
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
   * @remarks
   * The status code.
   * 
   * @example
   * NoData
   */
  code?: string;
  /**
   * @remarks
   * A list of classification details from the tag mining task.
   */
  data?: ListAnalysisTagDetailByTaskIdResponseBodyData[];
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
   * The maximum number of entries returned on each page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The token for the next page of results.
   * 
   * @example
   * token-xxxx
   */
  nextToken?: string;
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
   * Indicates whether the request was successful. A value of true indicates success. A value of false indicates failure.
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

