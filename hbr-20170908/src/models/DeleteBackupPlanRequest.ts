// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteBackupPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The edition type. Valid values are BASIC and STANDARD. The default value is STANDARD.
   * 
   * @example
   * STANDARD
   */
  edition?: string;
  /**
   * @remarks
   * The ID of the backup plan.
   * 
   * This parameter is required.
   * 
   * @example
   * plan-*********************
   */
  planId?: string;
  /**
   * @remarks
   * Specifies whether to prevent the deletion of the backup plan if backup jobs are running.
   * 
   * @example
   * false
   */
  requireNoRunningJobs?: boolean;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * - **ECS_FILE**: Backs up Elastic Compute Service (ECS) files.
   * 
   * - **OSS**: Backs up Object Storage Service (OSS) buckets.
   * 
   * - **NAS**: Backs up Network Attached Storage (NAS) file systems.
   * 
   * - **UDM_ECS**: Backs up entire ECS instances.
   * 
   * - **OTS**: Backs up Tablestore instances.
   * 
   * @example
   * ECS_FILE
   */
  sourceType?: string;
  /**
   * @remarks
   * The ID of the backup vault. This parameter is required if the SourceType parameter is not set to UDM_ECS.
   * 
   * @example
   * v-*********************
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      edition: 'Edition',
      planId: 'PlanId',
      requireNoRunningJobs: 'RequireNoRunningJobs',
      sourceType: 'SourceType',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edition: 'string',
      planId: 'string',
      requireNoRunningJobs: 'boolean',
      sourceType: 'string',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

