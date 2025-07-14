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

export class DescribeSnapshotLinksResponseBodySnapshotLinks extends $dara.Model {
  snapshotLink?: DescribeSnapshotLinksResponseBodySnapshotLinksSnapshotLink[];
  static names(): { [key: string]: string } {
    return {
      snapshotLink: 'SnapshotLink',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshotLink: { 'type': 'array', 'itemType': DescribeSnapshotLinksResponseBodySnapshotLinksSnapshotLink },
    };
  }

  validate() {
    if(Array.isArray(this.snapshotLink)) {
      $dara.Model.validateArray(this.snapshotLink);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotLinksResponseBody extends $dara.Model {
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the snapshot chains.
   */
  snapshotLinks?: DescribeSnapshotLinksResponseBodySnapshotLinks;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 9
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      snapshotLinks: 'SnapshotLinks',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      snapshotLinks: DescribeSnapshotLinksResponseBodySnapshotLinks,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.snapshotLinks && typeof (this.snapshotLinks as any).validate === 'function') {
      (this.snapshotLinks as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

