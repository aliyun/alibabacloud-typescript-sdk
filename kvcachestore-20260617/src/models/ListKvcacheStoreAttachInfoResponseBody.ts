// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKVCacheStoreAttachInfoResponseBodyAttachInfos extends $dara.Model {
  /**
   * @remarks
   * The time of the most recent attach operation, in ISO 8601 format. The value is null if the instance has not been attached.
   * 
   * @example
   * 2026-06-20T08:30:00Z
   */
  attachedAt?: string;
  /**
   * @remarks
   * The file system capacity, in GiB.
   * 
   * @example
   * 100
   */
  capacity?: number;
  /**
   * @remarks
   * KVCacheStore KvcsId
   * 
   * @example
   * kvcs-xxxxx
   */
  kvcsId?: string;
  /**
   * @remarks
   * The mount point ID at the file system level.
   * 
   * @example
   * mp-xxxxx
   */
  mountPointId?: string;
  /**
   * @remarks
   * The region where the instance is deployed.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The attach status. Valid values:
   * 
   * - Attaching: The instance is being mounted.
   * - Attached: The instance is mounted.
   * - Detaching: The instance is being unmounted.
   * 
   * After unmounting is complete, the record is deleted and not returned.
   * 
   * @example
   * ATTACHED
   */
  status?: string;
  /**
   * @remarks
   * The instance type. Valid values:
   * 
   * - kvcs: KVCacheStore (CPFS).
   * 
   * @example
   * preview
   */
  type?: string;
  /**
   * @remarks
   * The VSC ID on the compute side.
   * 
   * @example
   * vsc-001
   */
  vscId?: string;
  /**
   * @remarks
   * The zone where the instance is deployed.
   * 
   * @example
   * cn-hangzhou-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      attachedAt: 'AttachedAt',
      capacity: 'Capacity',
      kvcsId: 'KvcsId',
      mountPointId: 'MountPointId',
      regionId: 'RegionId',
      status: 'Status',
      type: 'Type',
      vscId: 'VscId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachedAt: 'string',
      capacity: 'number',
      kvcsId: 'string',
      mountPointId: 'string',
      regionId: 'string',
      status: 'string',
      type: 'string',
      vscId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKVCacheStoreAttachInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of mount information.
   */
  attachInfos?: ListKVCacheStoreAttachInfoResponseBodyAttachInfos[];
  /**
   * @remarks
   * The pagination token used to query the next batch of data.
   * 
   * @example
   * AAAAARbaCuN6hiD08qrLdwJ9Fh3NUkN7qf+fcWj7joK8M6tU
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
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID. A request ID is returned regardless of whether the call is successful.
   * 
   * @example
   * B127704C-ECB1-5B0A-AA9C-8F394A6F179F
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned for the paged query.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      attachInfos: 'AttachInfos',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachInfos: { 'type': 'array', 'itemType': ListKVCacheStoreAttachInfoResponseBodyAttachInfos },
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.attachInfos)) {
      $dara.Model.validateArray(this.attachInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

