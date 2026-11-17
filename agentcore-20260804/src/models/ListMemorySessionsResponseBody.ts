// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMemorySessionsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The agent ID. This field is not returned if the session is not associated with an agent ID.
   * 
   * @example
   * agent-001
   */
  agentId?: string;
  /**
   * @remarks
   * The creation time in RFC 3339 format with time zone.
   * 
   * @example
   * 2026-09-23T10:00:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The string key-value tags set by the caller. A maximum of 16 tags are supported. A key can be up to 64 Unicode characters in length, and a value can be up to 1,024 Unicode characters in length. Empty strings are allowed. Nested objects or arrays are not supported.
   * 
   * @example
   * {"topic":"hiking"}
   */
  metadata?: { [key: string]: string };
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * session-001
   */
  sessionId?: string;
  /**
   * @remarks
   * The business team ID defined by the caller. If specified, the value cannot be empty and can be up to 128 UTF-8 bytes in length.
   * 
   * @example
   * team-001
   */
  teamId?: string;
  /**
   * @remarks
   * The session title.
   * 
   * @example
   * Travel plan
   */
  title?: string;
  /**
   * @remarks
   * The user ID. This field is not returned if the session is not associated with a user ID.
   * 
   * @example
   * user-001
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      createdAt: 'createdAt',
      metadata: 'metadata',
      sessionId: 'sessionId',
      teamId: 'teamId',
      title: 'title',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      createdAt: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      sessionId: 'string',
      teamId: 'string',
      title: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMemorySessionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code.
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
   * The list of sessions.
   */
  items?: ListMemorySessionsResponseBodyItems[];
  /**
   * @remarks
   * The maximum number of records per page.
   * 
   * @example
   * 100
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
   * The pagination token for the next page.
   * 
   * @example
   * eyJvZmZzZXQiOjEwMH0=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 01A00000-0000-0000-0000-000000000001
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * null
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
      items: { 'type': 'array', 'itemType': ListMemorySessionsResponseBodyItems },
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

