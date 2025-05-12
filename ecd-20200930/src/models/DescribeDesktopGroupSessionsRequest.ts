// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDesktopGroupSessionsRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * @example
   * "2022-08-31T06:56:45Z"
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the end user.
   * 
   * @example
   * xianqiu
   */
  endUserId?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * "asdfdfsdfsdfds"
   */
  nextToken?: string;
  /**
   * @remarks
   * The type of the session.
   * 
   * Valid values:
   * 
   * *   0: single-session
   * *   1: multi-session
   * 
   * @example
   * 1
   */
  ownType?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The status of the session.
   * 
   * Valid values:
   * 
   * *   Connected
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Disconnected
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * Connected
   */
  sessionStatus?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * @example
   * "2022-08-31T06:56:45Z"
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      endUserId: 'EndUserId',
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
      endTime: 'string',
      endUserId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      ownType: 'number',
      regionId: 'string',
      sessionStatus: 'string',
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

