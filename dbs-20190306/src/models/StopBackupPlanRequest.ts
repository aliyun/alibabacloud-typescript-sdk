// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopBackupPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup plan.
   * 
   * This parameter is required.
   * 
   * @example
   * dbstooi01XXXX
   */
  backupPlanId?: string;
  /**
   * @remarks
   * A client token to ensure the idempotence of the request. This prevents the same request from being sent repeatedly.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzxxxxxxx
   */
  clientToken?: string;
  ownerId?: string;
  /**
   * @remarks
   * The method used to pause the backup plan. Valid values:
   * 
   * - ALL: Pauses the backup schedule, full data backup jobs, incremental log backup jobs, and restore jobs.
   * 
   * - PLAN: Pauses only the backup schedule.
   * 
   * This parameter is required.
   * 
   * @example
   * ALL
   */
  stopMethod?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      stopMethod: 'StopMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      clientToken: 'string',
      ownerId: 'string',
      stopMethod: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

