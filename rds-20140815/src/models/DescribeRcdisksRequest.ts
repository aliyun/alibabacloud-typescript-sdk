// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCDisksRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. Empty values and duplicate values are **not allowed**.
   * 
   * @example
   * testkey1
   */
  key?: string;
  /**
   * @remarks
   * The tag value. Empty values are **allowed**.
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
   * The disk IDs. The value is a JSON array that contains up to 100 IDs separated by commas (,). Format: `["Disk ID1","Disk ID2"]`.
   * 
   * @example
   * ["rcd-bp67acfmxazb4p****", "rcd-bp67acfmxazb4g****", … "rcd-bp67acfmxazb4d****"]
   */
  diskIds?: string;
  /**
   * @remarks
   * The type of cloud disk or elastic ephemeral disk to query. Valid values:
   * ● all: queries both system cloud disks and data cloud disks.
   * ● system: queries only system cloud disks.
   * ● data: queries only data cloud disks.
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
   * ● In_use: in use.
   * ● Available: to be attached.
   * ● Attaching: being attached.
   * ● Detaching: being detached.
   * ● Creating: being created.
   * ● ReIniting: being initialized.
   * ● All: all statuses.
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

