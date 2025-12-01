// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupPlanListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup schedule. You can query multiple backup schedule IDs. Separate multiple IDs with commas (,).
   * 
   * @example
   * dbstooi01exXXXX
   */
  backupPlanId?: string;
  /**
   * @remarks
   * Backup plan name.
   * 
   * @example
   * test123
   */
  backupPlanName?: string;
  /**
   * @remarks
   * Backup plan status, the values are as follows:
   * 
   * * **wait**: Not configured
   * * **init**: Not started (pre-check failed)
   * * **running**: Running
   * * **stop**: Failed
   * * **pause**: Paused
   * * **locked**: Locked
   * * **check_pass**: Pre-check passed
   * 
   * @example
   * wait
   */
  backupPlanStatus?: string;
  /**
   * @remarks
   * Used to ensure the idempotence of the request, preventing duplicate submissions.
   * 
   * @example
   * ASDASDASDSADASFCZXVZ
   */
  clientToken?: string;
  ownerId?: string;
  /**
   * @remarks
   * Page number, must be greater than or equal to 0 and not exceed the maximum value of Integer. The default value is 0.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Number of records per page, the value should be between 1 and 100.
   * 
   * > The default is **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * DBS region, you can view the supported DBS regions by calling the [DescribeRegions](https://help.aliyun.com/document_detail/2869853.html) interface.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-aekzecovzti****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      backupPlanName: 'BackupPlanName',
      backupPlanStatus: 'BackupPlanStatus',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      region: 'Region',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      backupPlanName: 'string',
      backupPlanStatus: 'string',
      clientToken: 'string',
      ownerId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      region: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

