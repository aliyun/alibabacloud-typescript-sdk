// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDesktopGroupSessionsRequest extends $dara.Model {
  /**
   * @remarks
   * The list of shared desktop group IDs.
   */
  desktopGroupIds?: string[];
  /**
   * @remarks
   * The name of the shared desktop.
   * 
   * @example
   * ecd-4oyi32wmrctgx****
   */
  desktopGroupName?: string;
  /**
   * @remarks
   * The end time of the query. The time is in the ISO 8601 standard (UTC).
   * 
   * @example
   * "2022-08-31T06:56:45Z"
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the end user connected to the session.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * Specifies whether to include terminal information.
   */
  fillTerminalInfo?: boolean;
  /**
   * @remarks
   * The language type of the returned information.
   * 
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6ljnKKgSRjo8yXAIT5QSvkU
   */
  nextToken?: string;
  /**
   * @remarks
   * The session type.
   * 
   * @example
   * 1
   */
  ownType?: number;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](~~DescribeRegions~~) to query the regions supported by WUYING Workspace.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The connection status.
   * 
   * @example
   * Connected
   */
  sessionStatus?: string;
  /**
   * @remarks
   * The start time of the query. The time is in the ISO 8601 standard (UTC).
   * 
   * @example
   * "2022-08-31T06:56:45Z"
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      desktopGroupIds: 'DesktopGroupIds',
      desktopGroupName: 'DesktopGroupName',
      endTime: 'EndTime',
      endUserId: 'EndUserId',
      fillTerminalInfo: 'FillTerminalInfo',
      language: 'Language',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownType: 'OwnType',
      regionId: 'RegionId',
      sessionStatus: 'SessionStatus',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopGroupIds: { 'type': 'array', 'itemType': 'string' },
      desktopGroupName: 'string',
      endTime: 'string',
      endUserId: 'string',
      fillTerminalInfo: 'boolean',
      language: 'string',
      maxResults: 'number',
      nextToken: 'string',
      ownType: 'number',
      regionId: 'string',
      sessionStatus: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.desktopGroupIds)) {
      $dara.Model.validateArray(this.desktopGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

