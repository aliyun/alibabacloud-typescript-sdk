// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopBackupPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup schedule.
   * 
   * This parameter is required.
   * 
   * @example
   * dbstooi01****
   */
  backupPlanId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  ownerId?: string;
  /**
   * @remarks
   * The method that is used to stop the backup schedule. Valid values:
   * 
   * *   ALL: stops the backup schedule, full data backup tasks, incremental log backup tasks, and restore tasks
   * *   PLAN: stops only the backup schedule.
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

