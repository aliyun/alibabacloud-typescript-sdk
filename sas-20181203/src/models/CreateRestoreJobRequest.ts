// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRestoreJobRequest extends $dara.Model {
  /**
   * @remarks
   * The directory in which the files included in the restoration task are located. This parameter is specified when you create the anti-ransomware policy. The value is a directory that requires protection.
   * 
   * This parameter is required.
   * 
   * @example
   * ["root"]
   */
  includes?: string;
  /**
   * @remarks
   * The hash value of the snapshot.
   * 
   * > You can call the [DescribeSnapshots](~~DescribeSnapshots~~) operation to obtain the value of this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * d4b399edaad94b038e8f91873f19e3eae010ca30798fc36db3a164dd343f****
   */
  snapshotHash?: string;
  /**
   * @remarks
   * The ID of the snapshot that you want to use for restoration.
   * 
   * > You can call the [DescribeSnapshots](~~DescribeSnapshots~~) operation to obtain the value of this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * s-00023dhaatxp18mh****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The version of the backup data.
   * 
   * > You can call the [DescribeSnapshots](~~DescribeSnapshots~~) operation to obtain the value of this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 165570544****
   */
  snapshotVersion?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   **ECS_FILE**: backup snapshots for Elastic Compute Service (ECS) files
   * *   **File**: backup snapshots for on-premises servers
   * 
   * @example
   * ECS_FILE
   */
  sourceType?: string;
  /**
   * @remarks
   * The path to which you want to restore data.
   * 
   * This parameter is required.
   * 
   * @example
   * /root/testfls
   */
  target?: string;
  /**
   * @remarks
   * The UUID of the server whose data you want to restore.
   * 
   * This parameter is required.
   * 
   * @example
   * inet-ecs-4e876cb0-09f7-43b8-82ef-4bc7a93769b5
   */
  uuid?: string;
  /**
   * @remarks
   * The ID of the backup vault that is used in the restoration task.
   * 
   * > You can call the [DescribeSnapshots](~~DescribeSnapshots~~) operation to obtain the value of this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * v-0002n12wokck2q0x****
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      includes: 'Includes',
      snapshotHash: 'SnapshotHash',
      snapshotId: 'SnapshotId',
      snapshotVersion: 'SnapshotVersion',
      sourceType: 'SourceType',
      target: 'Target',
      uuid: 'Uuid',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includes: 'string',
      snapshotHash: 'string',
      snapshotId: 'string',
      snapshotVersion: 'string',
      sourceType: 'string',
      target: 'string',
      uuid: 'string',
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

