// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetDisksRequestDisk extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud disk to be rolled back. Valid values of N: 1 to 10.
   * 
   * @example
   * d-j6cf7l0ewidb78lq****
   */
  diskId?: string;
  /**
   * @remarks
   * The ID of the snapshot that corresponds to the cloud disk in the instance snapshot. Valid values of N: 1 to 10.
   * 
   * @example
   * s-j6cdofbycydvg7ey****
   */
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      diskId: 'DiskId',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskId: 'string',
      snapshotId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetDisksRequest extends $dara.Model {
  /**
   * @remarks
   * The list of cloud disks.
   * 
   * This parameter is required.
   */
  disk?: ResetDisksRequestDisk[];
  /**
   * @remarks
   * Specifies whether to perform a dry run on the request. Valid values:
   * 
   * - true: performs a dry run. The system checks the required parameters, request format, and resource status. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * - false: performs a standard request. If the request passes the dry run, the cloud disks are rolled back.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
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
      disk: 'Disk',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disk: { 'type': 'array', 'itemType': ResetDisksRequestDisk },
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.disk)) {
      $dara.Model.validateArray(this.disk);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

