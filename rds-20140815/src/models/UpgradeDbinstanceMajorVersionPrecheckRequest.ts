// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeDBInstanceMajorVersionPrecheckRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can call DescribeDBInstances to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pgm-bp1c808s731l****
   */
  DBInstanceId?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The major engine version of the target instance. The version must be later than the current major engine version of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 17.0
   */
  targetMajorVersion?: string;
  /**
   * @remarks
   * The upgrade mode. Valid values:
   * 
   * - **zeroDownTimeUpgrade**: zero-downtime upgrade.
   * - **inPlaceUpgrade**: in-place upgrade.
   * - **greenBlueDeployment**: blue-green deployment.
   * 
   * @example
   * zeroDownTimeUpgrade
   */
  upgradeMode?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      resourceOwnerId: 'ResourceOwnerId',
      targetMajorVersion: 'TargetMajorVersion',
      upgradeMode: 'UpgradeMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      resourceOwnerId: 'number',
      targetMajorVersion: 'string',
      upgradeMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

