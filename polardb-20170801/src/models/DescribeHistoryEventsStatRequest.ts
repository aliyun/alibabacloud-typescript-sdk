// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryEventsStatRequest extends $dara.Model {
  /**
   * @remarks
   * The archive status of the events. Valid values:
   * - Archived: The events are archived.
   * - UnArchived: The events are not archived.
   * - All: All events.
   * 
   * @example
   * All
   */
  archiveStatus?: string;
  /**
   * @remarks
   * The start time of the query time range for the task start time. Specify the time in the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format. The time must be in UTC. This parameter is required. If you do not specify this parameter, the service returns a Param.Invalid (400) error.
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
   * The end time of the query time range for the task start time. Specify the time in the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format. The time must be in UTC. This parameter is required. If you do not specify this parameter, the service returns a Param.Invalid (400) error.
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

