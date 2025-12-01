// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeBackupPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup schedule.
   * 
   * This parameter is required.
   * 
   * @example
   * dbstooi01e****
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
  /**
   * @remarks
   * The specifications of the instance. Valid values:
   * 
   * *   micro
   * *   small
   * *   medium
   * *   large
   * *   xlarge
   * 
   * This parameter is required.
   * 
   * @example
   * micro
   */
  instanceClass?: string;
  ownerId?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      clientToken: 'ClientToken',
      instanceClass: 'InstanceClass',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      clientToken: 'string',
      instanceClass: 'string',
      ownerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

