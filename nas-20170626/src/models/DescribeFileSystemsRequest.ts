// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFileSystemsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * Limits:
   * 
   * -
   * 
   * - The tag key can be up to 128 characters long.
   * 
   * - It cannot start with `aliyun` or `acs:`.
   * 
   * - It cannot contain `http://` or `https://`.
   * 
   * @example
   * testKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * Limits:
   * 
   * -
   * 
   * - The tag value can be up to 128 characters long.
   * 
   * - It cannot start with `aliyun` or `acs:`.
   * 
   * - It cannot contain `http://` or `https://`.
   * 
   * @example
   * testValue
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

export class DescribeFileSystemsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system.
   * 
   * - For General-purpose NAS file systems, the ID is a string of characters, such as `31a8e4****`.
   * 
   * - For Extreme NAS file systems, the ID must start with `extreme-`, such as `extreme-0015****`.
   * 
   * - For Cloud Parallel File System (CPFS) file systems, the ID must start with `cpfs-`, such as `cpfs-125487****`.
   * 
   * - For Cloud Parallel File System SE (CPFS SE) file systems, the ID must start with `cpfsse-`, such as `cpfsse-022c71b134****`.
   * 
   * @example
   * 31a8e4****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The file system type.
   * 
   * Valid values:
   * 
   * - `all` (default): all file system types.
   * 
   * - `standard`: General-purpose NAS.
   * 
   * - `extreme`: Extreme NAS.
   * 
   * - `cpfs`: Cloud Parallel File System (CPFS).
   * 
   * - `cpfsse`: Cloud Parallel File System SE (CPFS SE).
   * 
   * > Separate multiple types with commas.
   * 
   * @example
   * standard
   */
  fileSystemType?: string;
  /**
   * @remarks
   * The page number of the file system list.
   * 
   * The page number starts at 1. The default value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of file systems to return on each page.
   * 
   * Value range: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * You can view this ID in the [Resource Management console](https://resourcemanager.console.aliyun.com/resource-groups?).
   * 
   * @example
   * rg-acfmwavnfef****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags used to filter file systems. You can specify 1 to 20 tags.
   */
  tag?: DescribeFileSystemsRequestTag[];
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * The file system and the ECS instance used for mounting must be in the same VPC.
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

