// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePreCheckProgressListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup plan.
   * 
   * > Specify either BackupPlanId or RestoreTaskId.
   * 
   * @example
   * dbsr1l3ro21****
   */
  backupPlanId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * ETnLKlblzczshOTUbOCziJZNwH****
   */
  clientToken?: string;
  ownerId?: string;
  /**
   * @remarks
   * The ID of the restore job.
   * 
   * @example
   * dbasdsa****
   */
  restoreTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      restoreTaskId: 'RestoreTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      clientToken: 'string',
      ownerId: 'string',
      restoreTaskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

