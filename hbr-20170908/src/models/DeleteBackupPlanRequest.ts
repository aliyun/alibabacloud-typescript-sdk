// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteBackupPlanRequest extends $dara.Model {
  /**
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
   * Specifies whether no running jobs are required.
   * 
   * @example
   * false
   */
  requireNoRunningJobs?: boolean;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   **ECS_FILE**: Elastic Compute Service (ECS) files
   * *   **OSS**: Object Storage Service (OSS) buckets
   * *   **NAS**: Apsara File Storage NAS file systems
   * *   **UDM_ECS**: ECS instances
   * *   **OTS**: Tablestore instances
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

