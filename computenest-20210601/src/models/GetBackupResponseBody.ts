// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBackupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backup ID.
   * 
   * @example
   * backup-cad4a85ff5e340388b93
   */
  backupId?: string;
  /**
   * @remarks
   * The time when the backup was created.
   * 
   * @example
   * 2021-05-20T00:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The backup description.
   * 
   * @example
   * No description
   */
  description?: string;
  /**
   * @remarks
   * The time when the backup ended.
   * 
   * @example
   * 2022-01-01T12:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The time when the backup was last modified.
   * 
   * @example
   * 2025-03-10T19:26:20Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 13FE89A5-C036-56BF-A0FF-A31C59819FD7
   */
  requestId?: string;
  /**
   * @remarks
   * The service instance ID.
   * 
   * @example
   * si-b58c874912fc4294****
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The time when the backup started.
   * 
   * @example
   * 2022-01-01T11:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The status.
   * 
   * - Creating: The backup is being created.
   * 
   * - Created: The backup is created.
   * 
   * - CreateFailed: The backup failed to be created.
   * 
   * - Deleting: The backup is being deleted.
   * 
   * - Deleted: The backup is deleted.
   * 
   * - DeleteFailed: The backup failed to be deleted.
   * 
   * @example
   * Creating
   */
  status?: string;
  /**
   * @remarks
   * The detailed status of the deployment instance.
   * 
   * @example
   * Disk i-xxxx backup failed, error message: error
   */
  statusDetail?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      createTime: 'CreateTime',
      description: 'Description',
      endTime: 'EndTime',
      modifiedTime: 'ModifiedTime',
      requestId: 'RequestId',
      serviceInstanceId: 'ServiceInstanceId',
      startTime: 'StartTime',
      status: 'Status',
      statusDetail: 'StatusDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      createTime: 'string',
      description: 'string',
      endTime: 'string',
      modifiedTime: 'string',
      requestId: 'string',
      serviceInstanceId: 'string',
      startTime: 'string',
      status: 'string',
      statusDetail: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

