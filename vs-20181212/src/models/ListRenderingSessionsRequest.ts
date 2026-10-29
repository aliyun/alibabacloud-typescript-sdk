// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRenderingSessionsRequest extends $dara.Model {
  /**
   * @remarks
   * The cloud application ID.
   * 
   * @example
   * cap-b06b26edfhytbn b94a75ae1a79efc90eb
   */
  appId?: string;
  /**
   * @remarks
   * The unique ID of the end client.
   * 
   * @example
   * ae7990f4-203d-494b-a5ea-e0babe9fa13d
   */
  clientId?: string;
  /**
   * @remarks
   * The start time of the time range filter. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2025-03-31T22:20:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The page number. Pages start from 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page during a paging query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the cloud application patch package. If you set this parameter to origin, only sessions that use the original version of the application are returned.
   * 
   * @example
   * patch-03fa76e8e13a49b6a966b063d9d309b4
   */
  patchId?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * project-422bc38dfgh5eb44149f135ef76304f63b
   */
  projectId?: string;
  /**
   * @remarks
   * The instance ID of the cloud application service.
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
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
   * The start time of the time range filter. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2025-03-25T02:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The session state. Valid values:
   * - SessionStarting: The session is starting.
   * - SessionStartSuspended: The session startup is suspended. You can retry by initiating a start request again.
   * - SessionStarted: The session is started or in use.
   * - SessionStartFailed: The session failed to start.
   * - SessionAbnormal: An exception occurred after the session was successfully started.
   * - SessionStopping: The session is stopping.
   * - SessionStopFailed: The session failed to stop.
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

