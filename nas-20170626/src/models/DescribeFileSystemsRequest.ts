// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFileSystemsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * Limits:
   * 
   * - Valid values of N: 1 to 20.
   * - The tag key can be up to 128 characters in length.
   * - The tag key cannot start with `aliyun` or `acs:`.
   * - The tag key cannot contain `http://` or `https://`.
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
   * - Valid values of N: 1 to 20.
   * - The tag value can be up to 128 characters in length.
   * - The tag value cannot start with `aliyun` or `acs:`.
   * - The tag value cannot contain `http://` or `https://`.
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
   * The file system ID.
   * - General-purpose NAS: 31a8e4****.
   * - Extreme NAS: Must start with extreme-, such as extreme-0015****.
   * - CPFS (locally redundant): Must start with cpfs-, such as cpfs-125487****.
   * - CPFS SE (zone-redundant): Must start with cpfsse-, such as cpfsse-022c71b134****.
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
   * - all (default): queries all types.
   * - standard: General-purpose NAS.
   * - extreme: Extreme NAS.
   * - cpfs: Cloud Parallel File Storage (CPFS) (locally redundant).
   * - cpfsse: CPFS SE (zone-redundant).
   * 
   * > To query multiple types, separate them with commas (,).
   * 
   * @example
   * standard
   */
  fileSystemType?: string;
  /**
   * @remarks
   * The page number of the file system list.
   * 
   * Start value (default value): 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of file systems on each page in a paging query.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The resource group ID.
   * 
   * You can view the resource group ID in the [Resource Management console](https://resourcemanager.console.aliyun.com/resource-groups?).
   * 
   * @example
   * rg-acfmwavnfef****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tag information.
   */
  tag?: DescribeFileSystemsRequestTag[];
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   * 
   * The VPC must be the same as the VPC of the Elastic Computing Service (ECS) server to which you want to mount the file system.
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

