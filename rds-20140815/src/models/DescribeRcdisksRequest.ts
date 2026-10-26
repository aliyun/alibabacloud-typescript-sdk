// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCDisksRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. Empty values and duplicates are not allowed.
   * 
   * @example
   * testkey1
   */
  key?: string;
  /**
   * @remarks
   * The tag value. Empty values are allowed.
   * 
   * @example
   * testvalue1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRCDisksRequest extends $dara.Model {
  /**
   * @remarks
   * The disk IDs. The value is a JSON array that supports up to 100 IDs separated by commas (,). Example: ["DiskId1", "DiskId2"].
   * 
   * @example
   * ["rcd-bp67acfmxazb4p****", "rcd-bp67acfmxazb4g****", … "rcd-bp67acfmxazb4d****"]
   */
  diskIds?: string;
  /**
   * @remarks
   * The type of the cloud disk or elastic ephemeral disk to query. Valid values:
   * - all: Queries both system cloud disks and data cloud disks.
   * - system: Queries only system cloud disks.
   * - data: Queries only data cloud disks.
   * Default value: all.
   * 
   * @example
   * data
   */
  diskType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rc-dh2jf9n6j4s14926****
   */
  instanceId?: string;
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
   * The number of entries per page. Valid values: **30** to **100**. Default value: **30**.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The disk status. Valid values:
   * - In_use: In use.
   * - Available: Available.
   * - Attaching: Attaching.
   * - Detaching: Detaching.
   * - Creating: Creating.
   * - ReIniting: Initializing.
   * - All: All statuses.
   * Default value: All.
   * 
   * @example
   * All
   */
  status?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: DescribeRCDisksRequestTag[];
  static names(): { [key: string]: string } {
    return {
      diskIds: 'DiskIds',
      diskType: 'DiskType',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskIds: 'string',
      diskType: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      status: 'string',
      tag: { 'type': 'array', 'itemType': DescribeRCDisksRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

