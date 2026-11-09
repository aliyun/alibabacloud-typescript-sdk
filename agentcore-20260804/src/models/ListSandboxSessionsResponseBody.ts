// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSandboxSessionsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The external channel type, such as DINGTALK, FEISHU, or WECOM. This parameter is empty for non-external channels.
   * 
   * @example
   * DINGTALK
   */
  channelType?: string;
  /**
   * @remarks
   * The unique identifier of the active session.
   * 
   * @example
   * sess-2
   */
  sessionId?: string;
  /**
   * @remarks
   * The source type of the session. A value of API indicates an API call, CONSOLE_DEBUG indicates console debugging, EXTERNAL_CHANNEL indicates an external channel, and UNKNOWN indicates an unknown source.
   * 
   * @example
   * EXTERNAL_CHANNEL
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      channelType: 'channelType',
      sessionId: 'sessionId',
      sourceType: 'sourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'string',
      sessionId: 'string',
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

export class ListSandboxSessionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. The value is SUCCESS if the request is successful.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code. The value is 200 if the request is successful.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The list of active sessions for the sandbox.
   */
  items?: ListSandboxSessionsResponseBodyItems[];
  /**
   * @remarks
   * The maximum number of records per page for the current query.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The response message. The value is success if the request is successful.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The pagination token for the next page. An empty value indicates that no more results are available.
   * 
   * @example
   * next-token-1
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 1a2b3c4d-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. A value of true indicates that the request is successful. A value of false indicates that the request fails.
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of records that meet the query conditions.
   * 
   * @example
   * 27
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      httpStatusCode: 'httpStatusCode',
      items: 'items',
      maxResults: 'maxResults',
      message: 'message',
      nextToken: 'nextToken',
      requestId: 'requestId',
      success: 'success',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      items: { 'type': 'array', 'itemType': ListSandboxSessionsResponseBodyItems },
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

