// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster specifications.
   * 
   * - For single-replica editions, valid values are:
   * 
   *   - **S8**
   * 
   *   - **S16**
   * 
   *   - **S32**
   * 
   *   - **S64**
   * 
   *   - **S104**
   * 
   * - For dual-replica editions, valid values are:
   * 
   *   - **C8**
   * 
   *   - **C16**
   * 
   *   - **C32**
   * 
   *   - **C64**
   * 
   *   - **C104**
   * 
   * This parameter is required.
   * 
   * @example
   * S8
   */
  DBClusterClass?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cc-bp19lo45sy98x****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The number of nodes.
   * 
   * - For single-replica editions, the valid values are integers from 1 to 48.
   * 
   * - For dual-replica editions, the valid values are integers from 1 to 24.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  DBNodeGroupCount?: string;
  /**
   * @remarks
   * The storage space of a single node. Unit: GB.
   * 
   * Valid values: 100 to 32000.
   * 
   * > The step size is 100 GB.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  DBNodeStorage?: string;
  /**
   * @remarks
   * The storage class. Valid values:
   * 
   * - **CloudESSD**: ESSD PL1 disk.
   * 
   * - **CloudESSD_PL2**: ESSD PL2 disk.
   * 
   * - **CloudESSD_PL3**: ESSD PL3 disk.
   * 
   * - **CloudEfficiency**: ultra disk.
   * 
   * - **CloudSSD**: standard SSD.
   * 
   * @example
   * CloudESSD
   */
  dbNodeStorageType?: string;
  /**
   * @remarks
   * The write-inaccessible window. Separate the start time and the end time with a comma. Use the ISO 8601 format for the time.
   * 
   * @example
   * 2024-07-09T20:00:00+08:00,2024-07-09T21:00:00+08:00
   */
  disableWriteWindows?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/170875.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterClass: 'DBClusterClass',
      DBClusterId: 'DBClusterId',
      DBNodeGroupCount: 'DBNodeGroupCount',
      DBNodeStorage: 'DBNodeStorage',
      dbNodeStorageType: 'DbNodeStorageType',
      disableWriteWindows: 'DisableWriteWindows',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterClass: 'string',
      DBClusterId: 'string',
      DBNodeGroupCount: 'string',
      DBNodeStorage: 'string',
      dbNodeStorageType: 'string',
      disableWriteWindows: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
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

