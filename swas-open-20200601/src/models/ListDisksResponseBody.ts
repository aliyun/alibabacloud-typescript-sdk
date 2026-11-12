// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDisksResponseBodyDisksTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * TestValue
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

export class ListDisksResponseBodyDisks extends $dara.Model {
  /**
   * @remarks
   * The category of the disk. Valid values:
   * 
   * - ESSD: enhanced SSD (ESSD) of PL0
   * 
   * - SSD: standard SSD
   * 
   * - CLOUD_EFFICIENCY: ultra disk
   * 
   * @example
   * ESSD
   */
  category?: string;
  /**
   * @remarks
   * The time when the disk was created. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-03-08T05:31:06Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The device name of the disk after the disk is attached to the simple application server.
   * 
   * @example
   * /dev/xvda
   */
  device?: string;
  /**
   * @remarks
   * The billing method of the disk.
   * 
   * @example
   * PrePaid
   */
  diskChargeType?: string;
  /**
   * @remarks
   * The disk ID.
   * 
   * @example
   * d-bp14wq0149cpp2x****
   */
  diskId?: string;
  /**
   * @remarks
   * The name of the disk.
   * 
   * @example
   * SystemDisk
   */
  diskName?: string;
  /**
   * @remarks
   * The disk type. Valid values:
   * 
   * - system: system disk
   * 
   * - data: data disk
   * 
   * @example
   * System
   */
  diskType?: string;
  /**
   * @remarks
   * The ID of the simple application server to which the disk is attached.
   * 
   * @example
   * 2ad1ae67295445f598017499dc****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the simple application server.
   * 
   * @example
   * myInstance
   */
  instanceName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The remarks of the disk.
   * 
   * @example
   * remark
   */
  remark?: string;
  /**
   * @remarks
   * The ID of the resource group to which the disk belongs.
   * 
   * @example
   * rg-aek2bti7cf7****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The size of the disk. Unit: GB.
   * 
   * @example
   * 50
   */
  size?: number;
  /**
   * @remarks
   * The status of the disk. Valid values:
   * 
   * - ReIniting: The disk is being initialized.
   * 
   * - Creating: The disk is being created.
   * 
   * - In_use: The disk is in use.
   * 
   * - Available: The disk can be attached.
   * 
   * - Attaching: The disk is being attached.
   * 
   * - Detaching: The disk is being detached.
   * 
   * @example
   * In_use
   */
  status?: string;
  /**
   * @remarks
   * The tags that are added to the disks.
   */
  tags?: ListDisksResponseBodyDisksTags[];
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      creationTime: 'CreationTime',
      device: 'Device',
      diskChargeType: 'DiskChargeType',
      diskId: 'DiskId',
      diskName: 'DiskName',
      diskType: 'DiskType',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
      remark: 'Remark',
      resourceGroupId: 'ResourceGroupId',
      size: 'Size',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      creationTime: 'string',
      device: 'string',
      diskChargeType: 'string',
      diskId: 'string',
      diskName: 'string',
      diskType: 'string',
      instanceId: 'string',
      instanceName: 'string',
      regionId: 'string',
      remark: 'string',
      resourceGroupId: 'string',
      size: 'number',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListDisksResponseBodyDisksTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDisksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried disks.
   */
  disks?: ListDisksResponseBodyDisks[];
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
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F534F
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      disks: 'Disks',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disks: { 'type': 'array', 'itemType': ListDisksResponseBodyDisks },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.disks)) {
      $dara.Model.validateArray(this.disks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

