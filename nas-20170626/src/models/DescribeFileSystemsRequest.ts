// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeFileSystemsRequestTag } from "./DescribeFileSystemsRequestTag";


export class DescribeFileSystemsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system.
   * 
   * - Sample ID of a General-purpose NAS file system: 31a8e4****.
   * - The IDs of Extreme NAS file systems must start with extreme-, for example, extreme-0015****.
   * - The IDs of Cloud Parallel File Storage (CPFS) file systems must start with cpfs-, for example, cpfs-125487****.
   * > CPFS file systems are available only on the China site (aliyun.com).
   * 
   * @example
   * 31a8e4****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The type of the file system.
   * 
   * Valid values:
   * - all (default): all types
   * - standard: General-purpose NAS file system
   * - extreme: Extreme NAS file system
   * - cpfs: CPFS file system
   * > CPFS file systems are available only on the China site (aliyun.com).
   * 
   * @example
   * standard
   */
  fileSystemType?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The resource group ID.
   * 
   * You can log on to the [Resource Management console](https://resourcemanager.console.aliyun.com/resource-groups?) to view resource group IDs.
   * 
   * @example
   * rg-acfmwavnfdf****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The details about the tags.
   */
  tag?: DescribeFileSystemsRequestTag[];
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * If you want to mount the file system on an Elastic Compute Service (ECS) instance, the file system and the ECS instance must reside in the same VPC.
   * 
   * @example
   * vpc-bp1sevsgtqvk5gxbl****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      fileSystemType: 'FileSystemType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      fileSystemType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeFileSystemsRequestTag },
      vpcId: 'string',
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

