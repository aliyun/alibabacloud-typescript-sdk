// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRenderingSessionsResponseBodySessions extends $dara.Model {
  /**
   * @example
   * cap-4e1a6a425495458ba78693b8ac6600ea
   */
  appId?: string;
  /**
   * @example
   * fd6b2134-7954-4754-8915-5fb8b0469622
   */
  clientId?: string;
  renderingInstanceId?: string;
  /**
   * @example
   * session-i205217481741918129226
   */
  sessionId?: string;
  /**
   * @example
   * 2024-07-04T01:23:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientId: 'ClientId',
      renderingInstanceId: 'RenderingInstanceId',
      sessionId: 'SessionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientId: 'string',
      renderingInstanceId: 'string',
      sessionId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRenderingSessionsResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  sessions?: ListRenderingSessionsResponseBodySessions[];
  /**
   * @example
   * 8
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sessions: 'Sessions',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sessions: { 'type': 'array', 'itemType': ListRenderingSessionsResponseBodySessions },
      totalCount: 'number',
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

