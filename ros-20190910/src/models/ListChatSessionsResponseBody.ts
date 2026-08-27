// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChatSessionsResponseBodySessions extends $dara.Model {
  /**
   * @remarks
   * The session mode. Valid values: IaCCodeNormal and IaCCodePipeline.
   * 
   * @example
   * IaCCodePipeline
   */
  mode?: string;
  /**
   * @remarks
   * The session ID. You can use this ID to re-enter a session in StartChat, stop a session in StopChat, or query messages in ListChatMessages.
   * 
   * @example
   * 7f4e2a8c6d9b4a1f8e3c5b7d2a6f9012
   */
  sessionId?: string;
  /**
   * @remarks
   * The session summary. This field currently shares the same source as Title and may be empty.
   * 
   * @example
   * Create a VPC template
   */
  summary?: string;
  /**
   * @remarks
   * The session title. This field may be empty.
   * 
   * @example
   * Create a VPC template
   */
  title?: string;
  /**
   * @remarks
   * A compatibility field. This field is not returned in the current V2 response. Use UpdatedAt instead.
   * 
   * @example
   * 2026-08-26T10:00:00Z
   */
  updatedTime?: string;
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
      sessionId: 'SessionId',
      summary: 'Summary',
      title: 'Title',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      sessionId: 'string',
      summary: 'string',
      title: 'string',
      updatedTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChatSessionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A compatibility field. This field is not returned in the current V2 response. Use the MaxResults request parameter instead.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page. This field may not be returned or may be null on the last page.
   * 
   * @example
   * CAES...
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4C68F7A5-2D16-5C8F-A4B1-01E9C6A9B0D2
   */
  requestId?: string;
  /**
   * @remarks
   * The session list of the current user, sorted by update time in descending order.
   * 
   * @example
   * []
   */
  sessions?: ListChatSessionsResponseBodySessions[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      sessions: 'Sessions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      sessions: { 'type': 'array', 'itemType': ListChatSessionsResponseBodySessions },
    };
  }

  validate() {
    if(Array.isArray(this.sessions)) {
      $dara.Model.validateArray(this.sessions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

