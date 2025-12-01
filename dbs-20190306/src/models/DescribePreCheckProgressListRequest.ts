// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePreCheckProgressListRequest extends $dara.Model {
  /**
   * @remarks
   * The backup schedule ID.
   * 
   * >  You must specify one of BackupPlanId and RestoreTaskId.
   * 
   * @example
   * dbstooi01XXXX
   */
  backupPlanId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzxxxxxxx
   */
  clientToken?: string;
  ownerId?: string;
  /**
   * @remarks
   * The restoration task ID.
   * 
   * @example
   * dbasdsaXXXX
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

