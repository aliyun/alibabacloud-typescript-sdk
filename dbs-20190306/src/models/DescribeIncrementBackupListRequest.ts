// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIncrementBackupListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup plan. Call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation to obtain this ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dbsqdss5tmh****
   */
  backupPlanId?: string;
  /**
   * @remarks
   * A client-generated token that ensures the idempotence of the request.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzxxxxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The end timestamp of the backup query time range, in milliseconds.
   * 
   * @example
   * 1570701361600
   */
  endTimestamp?: number;
  ownerId?: string;
  /**
   * @remarks
   * The page number. The value starts from 0, and the default is 0.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 30, 50, and 100.
   * 
   * > Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether to return the storage class. Valid values:
   * 
   * - true
   * 
   * - false
   * 
   * > Default value: true.
   * 
   * @example
   * true
   */
  showStorageType?: boolean;
  /**
   * @remarks
   * The start timestamp of the backup query time range, in milliseconds.
   * 
   * @example
   * 1570701361528
   */
  startTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
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

