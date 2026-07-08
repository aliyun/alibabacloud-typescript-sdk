// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTopicViewPointRecommendEventListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code.
   * 
   * @example
   * NoData
   */
  code?: string;
  /**
   * @remarks
   * Business data.
   */
  data?: string[];
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Maximum number of results to return.
   * 
   * @example
   * 8
   */
  maxResults?: number;
  /**
   * @remarks
   * Error description.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Token for the next page.
   * 
   * @example
   * 下一页的token
   */
  nextToken?: string;
  /**
   * @remarks
   * Unique request identifier.
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful: true for success, false for failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Total count.
   * 
   * @example
   * 32
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
      data: { 'type': 'array', 'itemType': 'string' },
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

