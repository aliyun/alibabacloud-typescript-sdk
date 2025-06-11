// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataBackupSetRequest extends $dara.Model {
  /**
   * @example
   * tenant
   */
  backupObjectType?: string;
  /**
   * @example
   * 2023-01-06T15:59:59Z
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ob317v4uif****
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
   * 2022-12-27T16:00:00Z
   */
  startTime?: string;
  /**
   * @example
   * DONE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      backupObjectType: 'BackupObjectType',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupObjectType: 'string',
      endTime: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

