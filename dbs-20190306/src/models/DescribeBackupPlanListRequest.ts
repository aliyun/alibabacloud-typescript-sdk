// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupPlanListRequest extends $dara.Model {
  /**
   * @example
   * logical
   */
  backupMethod?: string;
  /**
   * @remarks
   * Backup plan ID. To list multiple backup plans, separate IDs with commas.
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
   * Backup plan status. Valid values:
   * 
   * - **wait**: Not configured.
   * 
   * - **init**: Not started (precheck failed).
   * 
   * - **running**: Running.
   * 
   * - **stop**: Failed.
   * 
   * - **pause**: Paused.
   * 
   * - **locked**: Locked.
   * 
   * - **check_pass**: Precheck passed.
   * 
   * @example
   * wait
   */
  backupPlanStatus?: string;
  /**
   * @remarks
   * A client token used to ensure idempotence and prevent duplicate requests.
   * 
   * @example
   * ASDASDASDSADASFCZXVZ
   */
  clientToken?: string;
  ownerId?: string;
  /**
   * @remarks
   * Page number. Valid values: integers greater than or equal to 0 and less than or equal to the maximum integer value. Default value: 0.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Number of records per page. Valid values: 1 to 100.
   * 
   * > Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * DBS region. Call [DescribeRegions](https://help.aliyun.com/document_detail/2869853.html) to view supported regions.
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
  showBackupStrategyInfo?: boolean;
  showRecoverTimeRange?: boolean;
  showStorageStrategyInfo?: boolean;
  static names(): { [key: string]: string } {
    return {
      backupMethod: 'BackupMethod',
      backupPlanId: 'BackupPlanId',
      backupPlanName: 'BackupPlanName',
      backupPlanStatus: 'BackupPlanStatus',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      region: 'Region',
      resourceGroupId: 'ResourceGroupId',
      showBackupStrategyInfo: 'ShowBackupStrategyInfo',
      showRecoverTimeRange: 'ShowRecoverTimeRange',
      showStorageStrategyInfo: 'ShowStorageStrategyInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupMethod: 'string',
      backupPlanId: 'string',
      backupPlanName: 'string',
      backupPlanStatus: 'string',
      clientToken: 'string',
      ownerId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      region: 'string',
      resourceGroupId: 'string',
      showBackupStrategyInfo: 'boolean',
      showRecoverTimeRange: 'boolean',
      showStorageStrategyInfo: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

