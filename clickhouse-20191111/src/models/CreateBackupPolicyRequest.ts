// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBackupPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The backup retention period. Default value: 7 days. Valid values: 7 to 730. Unit: days.
   * 
   * @example
   * 8
   */
  backupRetentionPeriod?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp108z124a8o7****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The backup cycle. Separate multiple values with commas (,). Valid values:
   * - **Monday**: Monday.
   * - **Tuesday**: Tuesday.
   * - **Wednesday**: Wednesday.
   * - **Thursday**: Thursday.
   * - **Friday**: Friday.
   * - **Saturday**: Saturday.
   * - **Sunday**: Sunday.
   * 
   * This parameter is required.
   * 
   * @example
   * Monday,Friday
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * The backup time in UTC. Format: HH:mmZ-HH:mmZ.
   * 
   * Example: 00:00Z-01:00Z indicates that data can be backed up from 00:00 to 01:00 UTC (08:00 to 09:00 UTC+8).
   * 
   * This parameter is required.
   * 
   * @example
   * 10:00Z-11:00Z
   */
  preferredBackupTime?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/170875.html) operation to query the region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      backupRetentionPeriod: 'BackupRetentionPeriod',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      preferredBackupTime: 'PreferredBackupTime',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupRetentionPeriod: 'string',
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      preferredBackupPeriod: 'string',
      preferredBackupTime: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

