// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryEventsStatRequest extends $dara.Model {
  /**
   * @remarks
   * The event status. Valid values:
   * - **Archived**: archived.
   * - **UnArchived**: unarchived.
   * - **All**: all.
   * 
   * @example
   * Archived
   */
  archiveStatus?: string;
  /**
   * @remarks
   * The start time of the time range for querying task start times. Tasks that start after this time are queried. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. The earliest supported time is 30 days before the current time. If you specify a time more than 30 days before the current time, the system automatically changes it to 30 days before the current time.
   * 
   * @example
   * 2022-01-02T11:31:03Z
   */
  fromStartTime?: string;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the region ID.
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
   * The end time of the time range for querying task start times. Tasks that start before this time are queried. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
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

