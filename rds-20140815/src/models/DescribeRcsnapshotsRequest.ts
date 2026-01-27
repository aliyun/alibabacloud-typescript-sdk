// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCSnapshotsRequestTag extends $dara.Model {
  key?: string;
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

export class DescribeRCSnapshotsRequest extends $dara.Model {
  /**
   * @remarks
   * The cloud disk ID.
   * 
   * @example
   * rcd-wz9c8isqly8637zw****
   */
  diskId?: string;
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
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The snapshot IDs.
   * 
   * You can specify a maximum of 100 IDs. Separate multiple IDs with commas (,).
   * 
   * @example
   * ["rcds-bp67acfmxazb4p****", "rcds-bp67acfmxazb5p****", … "rcds-bp67acfmxazb6p****"]
   */
  snapshotIds?: string;
  tag?: DescribeRCSnapshotsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      diskId: 'DiskId',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      snapshotIds: 'SnapshotIds',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskId: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      snapshotIds: 'string',
      tag: { 'type': 'array', 'itemType': DescribeRCSnapshotsRequestTag },
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

