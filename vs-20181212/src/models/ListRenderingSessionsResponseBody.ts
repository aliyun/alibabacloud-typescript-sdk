// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRenderingSessionsResponseBodySessions extends $dara.Model {
  /**
   * @remarks
   * The cloud application ID.
   * 
   * @example
   * cap-4e1a6a425495458ba78693b8ac6600ea
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the end client.
   * 
   * @example
   * fd6b2134-7954-4754-8915-5fb8b0469622
   */
  clientId?: string;
  /**
   * @remarks
   * The ID of the cloud application patch package. A null value indicates the original version.
   * 
   * @example
   * patch-03fa76e8e13a49b6a966b063d9d309b4
   */
  patchId?: string;
  /**
   * @remarks
   * The instance ID of the cloud application service.
   * 
   * @example
   * render-a10722fb84b243f6ba02a89a2e5c838d
   */
  renderingInstanceId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * session-i205217481741918129226
   */
  sessionId?: string;
  /**
   * @remarks
   * The start time. The time is in the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format and is in UTC.
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
   * The request ID.
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @remarks
   * The session list.
   */
  sessions?: ListRenderingSessionsResponseBodySessions[];
  /**
   * @remarks
   * The total number of matched sessions.
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

