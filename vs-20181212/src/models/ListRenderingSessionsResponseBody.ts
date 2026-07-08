// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRenderingSessionsResponseBodySessions extends $dara.Model {
  /**
   * @remarks
   * Cloud application ID
   * 
   * @example
   * cap-4e1a6a425495458ba78693b8ac6600ea
   */
  appId?: string;
  /**
   * @remarks
   * Client ID
   * 
   * @example
   * fd6b2134-7954-4754-8915-5fb8b0469622
   */
  clientId?: string;
  /**
   * @remarks
   * Cloud application patch ID. An empty value indicates the original version.
   * 
   * @example
   * patch-03fa76e8e13a49b6a966b063d9d309b4
   */
  patchId?: string;
  /**
   * @remarks
   * Cloud application service instance ID
   * 
   * @example
   * render-a10722fb84b243f6ba02a89a2e5c838d
   */
  renderingInstanceId?: string;
  /**
   * @remarks
   * Session ID
   * 
   * @example
   * session-i205217481741918129226
   */
  sessionId?: string;
  /**
   * @remarks
   * Start time
   * 
   * @example
   * 2024-07-04T01:23:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientId: 'ClientId',
      patchId: 'PatchId',
      renderingInstanceId: 'RenderingInstanceId',
      sessionId: 'SessionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientId: 'string',
      patchId: 'string',
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
   * @remarks
   * Request ID
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @remarks
   * Session list
   */
  sessions?: ListRenderingSessionsResponseBodySessions[];
  /**
   * @remarks
   * Total number of matching sessions
   * 
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

