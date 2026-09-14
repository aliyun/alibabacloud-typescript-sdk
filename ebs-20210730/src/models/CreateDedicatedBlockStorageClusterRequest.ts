// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDedicatedBlockStorageClusterRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the dedicated block storage cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * tag-key
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the dedicated block storage cluster.
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
   * The zone ID of the dedicated block storage cluster. You can call [DescribeZones](https://help.aliyun.com/document_detail/25610.html) to query the zone list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-heyuan-b
   */
  azone?: string;
  /**
   * @remarks
   * The capacity of the dedicated block storage cluster. Valid values: 61440 to 2334720 GiB (2280 TiB). Minimum increment: 12288 GiB.
   * 
   * > When the capacity of the dedicated block storage cluster is less than 576 TiB, the maximum throughput per TiB does not exceed 52 MB/s. When the capacity of the dedicated block storage cluster is greater than 576 TiB, the maximum throughput per TiB does not exceed 26 MB/s.
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
   * The subscription duration of the instance. Valid values: 6, 7, 8, 9, 10, 11, 12, 24, and 36.
   * 
   * @example
   * 12
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration specified by the `Period` parameter. Only Month is supported.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The region ID of the dedicated block storage cluster. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-heyuan
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the dedicated block storage cluster belongs.
   * 
   * @example
   * rg-acfmvs*******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The list of tags. A maximum of 20 tags can be specified.
   */
  tag?: CreateDedicatedBlockStorageClusterRequestTag[];
  /**
   * @remarks
   * The performance type of the dedicated block storage cluster. Valid values:
   * 
   * - Standard: basic. You can create PL0 ESSDs in this type of dedicated block storage cluster.
   * - Premium: performance. You can create PL1 ESSDs in this type of dedicated block storage cluster.
   * 
   * Default value: Premium.
   * 
   * For more information about standard SSDs, see [ESSDs](https://help.aliyun.com/document_detail/122389.html).
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

