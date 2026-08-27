// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCredentialsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The number of bound Workers.
   * 
   * @example
   * 1
   */
  boundWorkerCount?: number;
  /**
   * @remarks
   * The creation time in ISO 8601 format.
   * 
   * @example
   * 2026-07-13T12:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The credential description.
   * 
   * @example
   * OpenAI API key for the team
   */
  description?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * ami-2ze8x9c6f
   */
  instanceId?: string;
  /**
   * @remarks
   * The credential key.
   * 
   * @example
   * OPENAI_API_KEY
   */
  name?: string;
  /**
   * @remarks
   * The update time in ISO 8601 format.
   * 
   * @example
   * 2026-07-13T12:00:00Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      boundWorkerCount: 'BoundWorkerCount',
      createTime: 'CreateTime',
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boundWorkerCount: 'number',
      createTime: 'string',
      description: 'string',
      instanceId: 'string',
      name: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCredentialsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
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
   * The list of credential summaries.
   * 
   * @example
   * []
   */
  items?: ListCredentialsResponseBodyItems[];
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The pagination token for the next page. An empty value indicates that the last page has been reached.
   * 
   * @example
   * 10
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * req-xxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of records that match the query conditions.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      items: 'Items',
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
      httpStatusCode: 'number',
      items: { 'type': 'array', 'itemType': ListCredentialsResponseBodyItems },
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

