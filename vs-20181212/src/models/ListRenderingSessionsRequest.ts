// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRenderingSessionsRequest extends $dara.Model {
  /**
   * @remarks
   * Cloud application ID
   * 
   * @example
   * cap-b06b26edfhytbn b94a75ae1a79efc90eb
   */
  appId?: string;
  /**
   * @remarks
   * Unique ID of the client.
   * 
   * @example
   * ae7990f4-203d-494b-a5ea-e0babe9fa13d
   */
  clientId?: string;
  /**
   * @remarks
   * Time range filter parameter. Represented in ISO8601 standard and must use UTC time, in the format yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2025-03-31T22:20:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * Page number, starting from 1
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of rows per page set for paged queries.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Cloud application patch ID.
   * 
   * 1. When you enter origin, only sessions that started the original version of the app are filtered.
   * 
   * @example
   * patch-03fa76e8e13a49b6a966b063d9d309b4
   */
  patchId?: string;
  /**
   * @remarks
   * Project ID
   * 
   * This parameter is required.
   * 
   * @example
   * project-422bc38dfgh5eb44149f135ef76304f63b
   */
  projectId?: string;
  /**
   * @remarks
   * Cloud application service instance ID
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
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
   * Time range filter parameter. Represented in ISO8601 standard and must use UTC time, in the format yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2025-03-25T02:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * Session state. Valid values:
   * 
   * 1. SessionStarting: The session is starting.
   * 
   * 2. SessionStartSuspended: Session startup is paused. Retry by initiating start again.
   * 
   * 3. SessionStarted: The session has started/is in use.
   * 
   * 4. SessionStartFailed: Session startup failed.
   * 
   * 5. SessionAbnormal: The session is abnormal after successful startup.
   * 
   * 6. SessionStopping: The session is stopping.
   * 
   * 7. SessionStopFailed: Session stop failed.
   * 
   * @example
   * SessionStarting
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientId: 'ClientId',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      patchId: 'PatchId',
      projectId: 'ProjectId',
      renderingInstanceId: 'RenderingInstanceId',
      sessionId: 'SessionId',
      startTime: 'StartTime',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientId: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      patchId: 'string',
      projectId: 'string',
      renderingInstanceId: 'string',
      sessionId: 'string',
      startTime: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

