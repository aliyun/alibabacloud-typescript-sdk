// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFullBackupListRequest extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * This parameter is required.
   * 
   * @example
   * The total number of full backup tasks.
   */
  backupPlanId?: string;
  /**
   * @remarks
   * The end time of the backup task, such as 1554560477000.
   * 
   * @example
   * The point in time when the backup set expires, such as 1554560477000.
   */
  backupSetId?: string;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzxxxxxxx
   */
  clientToken?: string;
  endTimestamp?: number;
  ownerId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * true
   */
  showStorageType?: boolean;
  /**
   * @remarks
   * Queries full backup tasks.
   */
  startTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      backupSetId: 'BackupSetId',
      clientToken: 'ClientToken',
      endTimestamp: 'EndTimestamp',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      showStorageType: 'ShowStorageType',
      startTimestamp: 'StartTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      backupSetId: 'string',
      clientToken: 'string',
      endTimestamp: 'number',
      ownerId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      showStorageType: 'boolean',
      startTimestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

