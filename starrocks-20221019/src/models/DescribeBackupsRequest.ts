// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupsRequest extends $dara.Model {
  /**
   * @example
   * bt-2389hsdui12m
   */
  backupTaskId?: string;
  /**
   * @example
   * c-b25e21e24388****
   */
  instanceId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * COMPLETED
   */
  statuses?: string;
  /**
   * @example
   * 1747728000
   */
  timePeriodEndTime?: number;
  /**
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

