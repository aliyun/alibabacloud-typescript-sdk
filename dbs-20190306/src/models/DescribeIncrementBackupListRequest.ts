// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIncrementBackupListRequest extends $dara.Model {
  /**
   * @remarks
   * The backup plan ID. Call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) interface to get this parameter\\"s value.
   * 
   * This parameter is required.
   * 
   * @example
   * dbsqdss5tmh****
   */
  backupPlanId?: string;
  /**
   * @remarks
   * A unique string that ensures the idempotence of the request and prevents duplicate requests.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzxxxxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The end backup UNIX timestamp.
   * 
   * @example
   * 1570701361600
   */
  endTimestamp?: number;
  ownerId?: string;
  /**
   * @remarks
   * The page number. The value must be greater than or equal to 0 and less than or equal to the maximum integer value. The default value is 0.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values are 30, 50, and 100.
   * 
   * > The default number of entries per page is 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * Indicates whether to display the storage class. Valid values:
   * 
   * - true
   * 
   * - false
   * 
   * > The default value is true.
   * 
   * @example
   * true
   */
  showStorageType?: boolean;
  /**
   * @remarks
   * The start backup UNIX timestamp.
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

