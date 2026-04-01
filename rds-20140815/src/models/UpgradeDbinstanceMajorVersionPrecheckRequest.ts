// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeDBInstanceMajorVersionPrecheckRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance. You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/610396.html) operation to query the ID of the instance.
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
   * The new major engine version of the instance. The new major engine version must be later than the original major engine version.
   * 
   * This parameter is required.
   * 
   * @example
   * 12.0
   */
  targetMajorVersion?: string;
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

