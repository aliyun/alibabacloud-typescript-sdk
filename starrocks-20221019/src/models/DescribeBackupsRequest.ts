// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupsRequest extends $dara.Model {
  /**
   * @remarks
   * The backup task ID.
   * 
   * @example
   * bt-2389hsdui12m
   */
  backupTaskId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * c-b25e21e24388****
   */
  instanceId?: string;
  /**
   * @remarks
   * The query page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for paged query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of statuses.
   * 
   * @example
   * COMPLETED
   */
  statuses?: string;
  /**
   * @remarks
   * The end time for querying backup jobs.
   * 
   * @example
   * 1747728000
   */
  timePeriodEndTime?: number;
  /**
   * @remarks
   * The start time for querying backup jobs.
   * 
   * @example
   * 1747708000
   */
  timePeriodStartTime?: number;
  static names(): { [key: string]: string } {
    return {
      backupTaskId: 'BackupTaskId',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      statuses: 'Statuses',
      timePeriodEndTime: 'TimePeriodEndTime',
      timePeriodStartTime: 'TimePeriodStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupTaskId: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      statuses: 'string',
      timePeriodEndTime: 'number',
      timePeriodStartTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

