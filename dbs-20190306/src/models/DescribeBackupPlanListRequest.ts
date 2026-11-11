// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupPlanListRequest extends $dara.Model {
  /**
   * @remarks
   * The backup method.
   * 
   * @example
   * logical
   */
  backupMethod?: string;
  /**
   * @remarks
   * The ID of the backup plan. You can specify multiple backup plan IDs, separated by commas.
   * 
   * @example
   * dbstooi01exXXXX
   */
  backupPlanId?: string;
  /**
   * @remarks
   * The name of the backup plan.
   * 
   * @example
   * test123
   */
  backupPlanName?: string;
  /**
   * @remarks
   * The status of the backup plan. Valid values:
   * 
   * - **wait**: The backup plan is not configured.
   * 
   * - **init**: The backup plan is not started because a precheck failed.
   * 
   * - **running**: The backup plan is running.
   * 
   * - **stop**: The backup plan has failed.
   * 
   * - **pause**: The backup plan is paused.
   * 
   * - **locked**: The backup plan is locked.
   * 
   * - **check_pass**: The precheck is passed.
   * 
   * @example
   * wait
   */
  backupPlanStatus?: string;
  /**
   * @remarks
   * A client-generated token that ensures the idempotence of the request.
   * 
   * @example
   * ASDASDASDSADASFCZXVZ
   */
  clientToken?: string;
  ownerId?: string;
  /**
   * @remarks
   * The page number to return. The value must be an integer that is greater than or equal to 0. The default value is 0.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 100.
   * 
   * > The default value is **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region where the backup plan is located. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/2869853.html) operation to query the list of supported regions.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzecovzti****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Specifies whether to return information about the backup strategy. Default value: false.
   * 
   * @example
   * false
   */
  showBackupStrategyInfo?: boolean;
  /**
   * @remarks
   * Specifies whether to return the recovery time range. Default value: false.
   * 
   * @example
   * false
   */
  showRecoverTimeRange?: boolean;
  /**
   * @remarks
   * Specifies whether to return information about the storage strategy. Default value: false.
   * 
   * @example
   * false
   */
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

