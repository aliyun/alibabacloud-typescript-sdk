// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSnapshotLinksResponseBodySnapshotLinksSnapshotLink extends $dara.Model {
  /**
   * @remarks
   * The type of the snapshot chain. Valid values:
   * 
   * *   standard: standard snapshot chain.
   * *   archive: archive snapshot chain.
   * *   flash: instant access snapshot chain.
   * 
   * @example
   * standard
   */
  category?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-bp1h6jmbefj2cyqs****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * testInstanceName
   */
  instanceName?: string;
  /**
   * @remarks
   * Indicates whether the instant access feature is enabled. Valid values:
   * 
   * *   true: The instant access feature is enabled. The feature can be enabled only for Enterprise SSDs (ESSDs).
   * *   false: The instant access feature is disabled. The snapshot is a standard snapshot for which the instant access feature is disabled.
   * 
   * >  This parameter is no longer used. By default, standard snapshots of ESSDs are upgraded to instant access snapshots free of charge without the need for additional configurations. For more information, see [Use the instant access feature](https://help.aliyun.com/document_detail/193667.html).
   * 
   * @example
   * false
   */
  instantAccess?: boolean;
  /**
   * @remarks
   * The region ID of the source disk.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the snapshot chain.
   * 
   * @example
   * sl-2ze0y1jwzpb1geqx****
   */
  snapshotLinkId?: string;
  /**
   * @remarks
   * The ID of the source disk. This parameter is retained even if the source disk is deleted.
   * 
   * @example
   * d-bp1d6tsvznfghy7y****
   */
  sourceDiskId?: string;
  /**
   * @remarks
   * The name of the source disk.
   * 
   * @example
   * testSourceDiskName
   */
  sourceDiskName?: string;
  /**
   * @remarks
   * The capacity of the source disk. Unit: GiB.
   * 
   * @example
   * 40
   */
  sourceDiskSize?: number;
  /**
   * @remarks
   * The type of the source disk. Valid values:
   * 
   * *   system: system disk
   * *   data: data disk
   * 
   * @example
   * data
   */
  sourceDiskType?: string;
  /**
   * @remarks
   * The total number of snapshots.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The total size of all snapshots in the snapshot chain. Unit: byte.
   * 
   * @example
   * 2097152
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instantAccess: 'InstantAccess',
      regionId: 'RegionId',
      snapshotLinkId: 'SnapshotLinkId',
      sourceDiskId: 'SourceDiskId',
      sourceDiskName: 'SourceDiskName',
      sourceDiskSize: 'SourceDiskSize',
      sourceDiskType: 'SourceDiskType',
      totalCount: 'TotalCount',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instantAccess: 'boolean',
      regionId: 'string',
      snapshotLinkId: 'string',
      sourceDiskId: 'string',
      sourceDiskName: 'string',
      sourceDiskSize: 'number',
      sourceDiskType: 'string',
      totalCount: 'number',
      totalSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

