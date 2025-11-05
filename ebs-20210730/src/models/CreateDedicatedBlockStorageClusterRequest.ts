// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateDedicatedBlockStorageClusterRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N to add to the dedicated block storage cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * tag-key
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N to add to the dedicated block storage cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * tag-value
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

export class CreateDedicatedBlockStorageClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the zone in which to create the dedicated block storage cluster. You can call the [DescribeZones](https://help.aliyun.com/document_detail/25610.html) operation to query the most recent zone list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-heyuan-b
   */
  azone?: string;
  /**
   * @remarks
   * The capacity of the dedicated block storage cluster. Valid values: 61440 to 2334720. Unit: GiB. 2,334,720 GiB is equal to 2,280 TiB. The capacity increases in a minimum increment of 12,288 GiB.
   * 
   * >  If the capacity of a dedicated block storage cluster is less than 576 TiB, the maximum throughput per TiB cannot exceed 52 MB/s. If the capacity of a dedicated block storage cluster is greater than 576 TiB, the maximum throughput per TiB cannot exceed 26 MB/s.
   * 
   * This parameter is required.
   * 
   * @example
   * 61440
   */
  capacity?: number;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * test1233
   * 
   * **if can be null:**
   * true
   * 
   * @deprecated
   */
  dbscId?: string;
  /**
   * @remarks
   * The name of the dedicated block storage cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * myDBSCCluster
   */
  dbscName?: string;
  /**
   * @remarks
   * The subscription duration of the dedicated block storage cluster. Valid values: 6, 7, 8, 9, 10, 11, 12, 24, and 36.
   * 
   * @example
   * 12
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration specified by `Period`. Set the value to Month.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The ID of the region in which to create the dedicated block storage cluster. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-heyuan
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which to assign the dedicated block storage cluster.
   * 
   * @example
   * rg-acfmvs*******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags to add to the dedicated block storage cluster. You can specify up to 20 tags.
   */
  tag?: CreateDedicatedBlockStorageClusterRequestTag[];
  /**
   * @remarks
   * The type of the dedicated block storage cluster. Valid values:
   * 
   * *   Standard: basic dedicated block storage cluster. Enterprise SSDs (ESSDs) at performance level 0 (PL0 ESSDs) can be created in basic dedicated block storage clusters.
   * *   Premium: performance dedicated block storage cluster. ESSDs at performance level 1 (PL1 ESSDs) can be created in performance dedicated block storage clusters.
   * 
   * Default value: Premium.
   * 
   * For more information about ESSDs, see [ESSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * This parameter is required.
   * 
   * @example
   * Premium
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      azone: 'Azone',
      capacity: 'Capacity',
      dbscId: 'DbscId',
      dbscName: 'DbscName',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      azone: 'string',
      capacity: 'number',
      dbscId: 'string',
      dbscName: 'string',
      period: 'number',
      periodUnit: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateDedicatedBlockStorageClusterRequestTag },
      type: 'string',
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

