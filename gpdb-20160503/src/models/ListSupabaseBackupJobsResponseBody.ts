// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSupabaseBackupJobsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup task.
   * 
   * @example
   * 123
   */
  backupJobId?: string;
  /**
   * @remarks
   * The backup mode. Valid values:
   * * **Automated**: automatic backup
   * * **Manual**: manual backup
   * 
   * @example
   * Automated
   */
  backupMode?: string;
  /**
   * @remarks
   * The status of the backup task. Valid statuses include: schedule (waiting to be scheduled) and backup (in progress).
   * 
   * @example
   * backup
   */
  backupStatus?: string;
  /**
   * @remarks
   * The progress percentage of the backup task, such as 0%. This value may be an empty string when the task is in the schedule (waiting to be scheduled) state.
   * 
   * @example
   * 0%
   */
  process?: string;
  /**
   * @remarks
   * The start time of the backup task. The time is displayed in UTC in the yyyy-MM-ddTHH:mm:ssZ format. This value may be an empty string when the task is in the schedule (waiting to be scheduled) state.
   * 
   * @example
   * 2026-10-09T04:37:01Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      backupJobId: 'BackupJobId',
      backupMode: 'BackupMode',
      backupStatus: 'BackupStatus',
      process: 'Process',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupJobId: 'string',
      backupMode: 'string',
      backupStatus: 'string',
      process: 'string',
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

export class ListSupabaseBackupJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of backup tasks.
   */
  items?: ListSupabaseBackupJobsResponseBodyItems[];
  /**
   * @remarks
   * The maximum number of entries to return for this request.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page, which can be used as the NextToken parameter in the next request.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListSupabaseBackupJobsResponseBodyItems },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

