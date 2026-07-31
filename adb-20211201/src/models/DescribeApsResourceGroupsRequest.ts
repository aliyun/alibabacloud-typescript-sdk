// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApsResourceGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Data Lakehouse Edition cluster.
   * 
   * > Call the [DescribeDBClusters](https://help.aliyun.com/document_detail/612397.html) operation to view the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1t6rym21****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * > Call the [DescribeRegions](https://help.aliyun.com/document_detail/454314.html) operation to view the region ID of a cluster.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the data synchronization task.
   * 
   * @example
   * aps-hz1686v37sx****
   */
  workloadId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
      workloadId: 'WorkloadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      regionId: 'string',
      workloadId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

