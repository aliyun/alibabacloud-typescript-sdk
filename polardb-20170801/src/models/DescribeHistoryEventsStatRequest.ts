// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryEventsStatRequest extends $dara.Model {
  /**
   * @remarks
   * The archive status of the events. Valid values:
   * - Archived: Archived.
   * - UnArchived: Unarchived.
   * - All: All.
   * 
   * @example
   * All
   */
  archiveStatus?: string;
  /**
   * @remarks
   * The start time of the time range for the task start time. Specify the time in the YYYY-MM-DDThh:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2025-01-02T11:31:03Z
   */
  fromStartTime?: string;
  /**
   * @remarks
   * The ID of the region where the events are located.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The end time of the time range for the task start time. Specify the time in the YYYY-MM-DDThh:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2025-01-03T12:31:03Z
   */
  toStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      archiveStatus: 'ArchiveStatus',
      fromStartTime: 'FromStartTime',
      regionId: 'RegionId',
      toStartTime: 'ToStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archiveStatus: 'string',
      fromStartTime: 'string',
      regionId: 'string',
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

