// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryEventsStatRequest extends $dara.Model {
  /**
   * @remarks
   * The status of the asset instance. Valid values: **starting**, **running**, **stopping**, and **stopped**.
   * 
   * @example
   * starting
   */
  archiveStatus?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Only tasks that have a start time later than or equal to the time specified by this parameter are queried. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. The start time can be up to 30 days earlier than the current time. If you set this parameter to a time more than 30 days earlier than the current time, this time is automatically converted to a time that is exactly 30 days earlier than the current time.
   * 
   * @example
   * 2022-01-02T11:31:03Z
   */
  fromStartTime?: string;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  securityToken?: string;
  /**
   * @remarks
   * The end of the time range to query. Only tasks that have a start time earlier than or equal to the time specified by this parameter are queried. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2022-03-02T11:31:03Z
   */
  toStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      archiveStatus: 'ArchiveStatus',
      fromStartTime: 'FromStartTime',
      regionId: 'RegionId',
      securityToken: 'SecurityToken',
      toStartTime: 'ToStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archiveStatus: 'string',
      fromStartTime: 'string',
      regionId: 'string',
      securityToken: 'string',
      toStartTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

