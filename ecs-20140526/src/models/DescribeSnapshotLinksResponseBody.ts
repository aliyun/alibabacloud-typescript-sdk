// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSnapshotLinksResponseBodySnapshotLinksSnapshotLink extends $dara.Model {
  category?: string;
  instanceId?: string;
  instanceName?: string;
  instantAccess?: boolean;
  regionId?: string;
  snapshotLinkId?: string;
  sourceDiskId?: string;
  sourceDiskName?: string;
  sourceDiskSize?: number;
  sourceDiskType?: string;
  totalCount?: number;
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
   * The pagination token returned in this call.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number of the snapshot chain list.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page as specified in the request.
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
  snapshotLinks?: DescribeSnapshotLinksResponseBodySnapshotLinks;
  /**
   * @remarks
   * The total number of snapshot chains.
   * > When you use the `MaxResults` and `NextToken` parameters for a paged query, the returned `TotalCount` value is invalid. For paging, use `MaxResults` and `NextToken` instead.
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

