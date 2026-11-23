// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetContextDatabaseUsageRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the query range, exclusive. It must be later than StartTime. Use the ISO 8601 time format, such as 2026-08-01T00:00:00Z (UTC).
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-08-01T00:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The start time of the query range, inclusive. Use the ISO 8601 time format, such as 2026-07-01T00:00:00Z (UTC).
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-07-01T00:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The ID of the workspace to query. If specified, only the data of this workspace under the caller account is queried. Locked workspaces can also be queried. If omitted, all workspaces under the caller account are queried.
   * 
   * @example
   * ws-x9z4ctzed9gfu2w
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

