// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The specifications of the cluster.
   * 
   * *   Valid values when the cluster is of Single-replica Edition:
   * 
   *     *   **S8**
   *     *   **S16**
   *     *   **S32**
   *     *   **S64**
   *     *   **S104**
   * 
   * *   Valid values when the cluster is of Double-replica Edition:
   * 
   *     *   **C8**
   *     *   **C16**
   *     *   **C32**
   *     *   **C64**
   *     *   **C104**
   * 
   * This parameter is required.
   * 
   * @example
   * S4-NEW
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
   * The number of nodes in the cluster.
   * 
   * *   If the cluster is of Single-replica Edition, the value must be an integer that ranges from 1 to 48.
   * *   If the cluster is of Double-replica Edition, the value must be an integer that ranges from 1 to 24.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  DBNodeGroupCount?: string;
  /**
   * @remarks
   * The storage capacity of a single node of the cluster. Unit: GB.
   * 
   * Valid values: 100 to 32000.
   * 
   * >  This value is a multiple of 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  DBNodeStorage?: string;
  /**
   * @remarks
   * The storage type of the cluster. Valid values:
   * 
   * *   **CloudESSD**: The cluster uses an Enterprise SSD (ESSD) of performance level 1 (PL1).
   * *   **CloudESSD_PL2**: The cluster uses an ESSD of PL2.
   * *   **CloudESSD_PL3**: The cluster uses an ESSD of PL3.
   * *   **CloudEfficiency**: The cluster uses an ultra disk.
   * *   **CloudSSD**: The cluster uses a standard SSD.
   * 
   * @example
   * CloudESSD
   */
  dbNodeStorageType?: string;
  /**
   * @remarks
   * The time window during which write operations are stopped. Separate the start time and end time with commas (,). Specify the time in the ISO 8601 standard.
   * 
   * @example
   * 2024-07-09T20:00:00+08:00,2024-07-09T21:00:00+08:00
   */
  disableWriteWindows?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID You can call the [DescribeRegions](https://help.aliyun.com/document_detail/170875.html) operation to query the most recent region list.
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

