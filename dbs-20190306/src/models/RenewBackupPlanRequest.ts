// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewBackupPlanRequest extends $dara.Model {
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
   * HKAJHFIUEQWBFIJSNFO****
   */
  clientToken?: string;
  ownerId?: string;
  /**
   * @remarks
   * Specifies whether to use yearly subscription or monthly subscription for the instance. Valid values:
   * 
   * *   Year
   * *   Month
   * 
   * This parameter is required.
   * 
   * @example
   * Month
   */
  period?: string;
  /**
   * @remarks
   * The subscription duration of the instance. Valid values:
   * 
   * *   If the Period parameter is set to Year, the value of the UsedTime parameter ranges from 1 to 9.
   * *   If the Period parameter is set to Month, the value of the UsedTime parameter ranges from 1 to 11.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  usedTime?: number;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      period: 'Period',
      usedTime: 'UsedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      clientToken: 'string',
      ownerId: 'string',
      period: 'string',
      usedTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

