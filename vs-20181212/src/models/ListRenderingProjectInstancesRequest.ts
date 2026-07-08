// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRenderingProjectInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * End time of the time range. Use ISO 8601 format in UTC. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2024-11-30T02:18:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * Page number. Start from 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
   * A parameter for filtering by a time range. The time must be in UTC and formatted according to the ISO 8601 standard as \\`yyyy-MM-ddTHH:mm:ssZ\\`.
   * 
   * @example
   * 2024-11-27T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * Instance status. Valid values:
   * 
   * 1. Idle
   * 
   * 2. Locked
   * 
   * 3. InUse
   * 
   * @example
   * Idle
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      renderingInstanceId: 'RenderingInstanceId',
      startTime: 'StartTime',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      renderingInstanceId: 'string',
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

