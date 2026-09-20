// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup to query.
   * 
   * @example
   * job-xxxx
   */
  backupId?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * hb-t4naqsay5gn****
   */
  clusterId?: string;
  /**
   * @remarks
   * The end time of the backup query. Format: yyyy-MM-dd HH:mm.
   * 
   * @example
   * 2020-12-23 23:59:59
   */
  endTime?: string;
  /**
   * @remarks
   * The end time of the backup query in UTC. The end time must be later than the start time. Format: yyyy-MM-ddTHH:mmZ.
   * 
   * @example
   * 2020-12-23T15:59:59Z
   */
  endTimeUTC?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The start time of the backup query. Format: yyyy-MM-dd HH:mm.
   * 
   * @example
   * 2020-12-13 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The start time of the backup query in UTC. Format: yyyy-MM-ddTHH:mmZ.
   * 
   * @example
   * 2020-12-12T16:00:00Z
   */
  startTimeUTC?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      clusterId: 'ClusterId',
      endTime: 'EndTime',
      endTimeUTC: 'EndTimeUTC',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      startTimeUTC: 'StartTimeUTC',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      clusterId: 'string',
      endTime: 'string',
      endTimeUTC: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      startTime: 'string',
      startTimeUTC: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

