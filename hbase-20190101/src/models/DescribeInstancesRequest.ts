// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag. The tag key and tag value form a key-value pair in the format of {"key1":"value1","key2":"value2"}.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag key. The tag value and tag key form a key-value pair.
   * 
   * @example
   * value
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

export class DescribeInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of target instance. You can call the [DescribeInstances](https://help.aliyun.com/document_detail/144595.html) operation to query target instance ID.
   * 
   * @example
   * hb-bp1u0639js2h7****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the ApsaraDB for HBase instance.
   * 
   * @example
   * test
   */
  clusterName?: string;
  /**
   * @remarks
   * The service type. Valid values:
   * - **hbase**: ApsaraDB for HBase Standard Edition or ApsaraDB for HBase single-node.
   * - **hbaseue**: ApsaraDB for HBase Performance-enhanced Edition.
   * - **bds**: BDS data synchronization service.
   * 
   * @example
   * hbase
   */
  dbType?: string;
  /**
   * @remarks
   * The page number of the instance list. Minimum value: **1**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of rows to display per page. Maximum value: **100**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region to which the instance belongs. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/144489.html) operation to query the region ID.
   * 
   * > If you specify the **Tag.N.Key** and **Tag.N.Value** parameters, this parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group. You can query the resource group ID in the Resource Group console.
   * 
   * @example
   * rg-4f51d54g5****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: DescribeInstancesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      dbType: 'DbType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      dbType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeInstancesRequestTag },
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

