// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDedicatedBlockStorageClustersRequestTag } from "./DescribeDedicatedBlockStorageClustersRequestTag";


export class DescribeDedicatedBlockStorageClustersRequest extends $dara.Model {
  /**
   * @remarks
   * The zone ID of the dedicated block storage cluster. You can call the [DescribeZones](https://help.aliyun.com/document_detail/25610.html) operation to query the most recent zone list.
   * 
   * @example
   * cn-heyuan-b
   */
  azoneId?: string;
  /**
   * @remarks
   * The category of disks that can be created in the dedicated block storage cluster.
   * 
   * Set the value to cloud_essd. Only enhanced SSDs (ESSDs) can be created in dedicated block storage clusters.
   * 
   * @example
   * cloud_essd
   */
  category?: string;
  clientToken?: string;
  dedicatedBlockStorageClusterId?: string[];
  maxResults?: number;
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
   * The number of entries per page. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the dedicated block storage cluster. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
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
   * rg-acfmvs4****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The states of dedicated block storage clusters. Valid values:
   * 
   * *   Preparing
   * *   Running
   * *   Expired
   * *   Offline
   * 
   * Multiple states can be specified. Valid values of N: 1, 2, 3, and 4.
   */
  status?: string[];
  /**
   * @remarks
   * The tags. Up to 20 tags are supported.
   */
  tag?: DescribeDedicatedBlockStorageClustersRequestTag[];
  static names(): { [key: string]: string } {
    return {
      azoneId: 'AzoneId',
      category: 'Category',
      clientToken: 'ClientToken',
      dedicatedBlockStorageClusterId: 'DedicatedBlockStorageClusterId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      azoneId: 'string',
      category: 'string',
      clientToken: 'string',
      dedicatedBlockStorageClusterId: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      status: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': DescribeDedicatedBlockStorageClustersRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.dedicatedBlockStorageClusterId)) {
      $dara.Model.validateArray(this.dedicatedBlockStorageClusterId);
    }
    if(Array.isArray(this.status)) {
      $dara.Model.validateArray(this.status);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

