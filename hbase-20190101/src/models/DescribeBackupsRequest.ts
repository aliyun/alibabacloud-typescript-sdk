// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupsRequest extends $dara.Model {
  /**
   * @example
   * job-xxxx
   */
  backupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hb-t4naqsay5gn****
   */
  clusterId?: string;
  /**
   * @example
   * 2020-12-23 23:59:59
   */
  endTime?: string;
  /**
   * @example
   * 2020-12-23T15:59:59Z
   */
  endTimeUTC?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @example
   * 2020-12-13 00:00:00
   */
  startTime?: string;
  /**
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

