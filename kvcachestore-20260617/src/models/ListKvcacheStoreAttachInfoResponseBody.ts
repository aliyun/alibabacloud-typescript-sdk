// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKVCacheStoreAttachInfoResponseBodyAttachInfos extends $dara.Model {
  /**
   * @remarks
   * The time of the last attachment. The time follows the ISO 8601 standard. If the instance is not attached, the value is null.
   * 
   * @example
   * 2026-06-20T08:30:00Z
   */
  attachedAt?: string;
  /**
   * @remarks
   * The capacity of the file system. Unit: GiB.
   * 
   * @example
   * 100
   */
  capacity?: number;
  /**
   * @remarks
   * The serial number (SN) of the NVMe channel disk. This value is returned only when protocol is set to nvme and the channel is bound in the current round. If other protocols are used or the channel is not bound, the value is null.
   * 
   * @example
   * kvaaaaaaaaaaaaaaaa
   */
  controlSn?: string;
  /**
   * @remarks
   * The ID of the compute resource, such as the ECS instance ID or the Lingjun compute node ID.
   * 
   * @example
   * i-hdsagtg61h2hf21
   */
  instanceId?: string;
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
   * The ID of the file system-level mount point.
   * 
   * @example
   * mp-xxxxx
   */
  mountPointId?: string;
  /**
   * @remarks
   * The NGUID of the KVCacheStore data disk. This value is returned only when protocol is set to nvme and the NGUID is generated for the instance. If other protocols are used or the NGUID is missing, the value is null.
   * 
   * @example
   * 00000000-0000-0000-0000-000000000001
   */
  nguid?: string;
  /**
   * @remarks
   * The access channel protocol of the instance. Valid values: vsc (VSC channel) and nvme (TDC NVMe channel).
   * 
   * @example
   * nvme
   */
  protocol?: string;
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
   * The attachment status. Valid values: Attaching, Attached, and Detaching. After an instance is detached, the record is deleted and not returned.
   * 
   * @example
   * Attached
   */
  status?: string;
  /**
   * @remarks
   * The instance type. Valid value: kvcs.
   * 
   * @example
   * preview
   */
  type?: string;
  /**
   * @remarks
   * The ID of the compute-side VSC.
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
      controlSn: 'ControlSn',
      instanceId: 'InstanceId',
      kvcsId: 'KvcsId',
      mountPointId: 'MountPointId',
      nguid: 'Nguid',
      protocol: 'Protocol',
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
      controlSn: 'string',
      instanceId: 'string',
      kvcsId: 'string',
      mountPointId: 'string',
      nguid: 'string',
      protocol: 'string',
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
   * The list of attachment information.
   */
  attachInfos?: ListKVCacheStoreAttachInfoResponseBodyAttachInfos[];
  /**
   * @remarks
   * The pagination token. It is used to query the next batch of data.
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
   * The request ID. The request ID is returned regardless of whether the call is successful.
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

