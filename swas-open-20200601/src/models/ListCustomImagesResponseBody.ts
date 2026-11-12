// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomImagesResponseBodyCustomImagesTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the custom image.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the custom image.
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

export class ListCustomImagesResponseBodyCustomImages extends $dara.Model {
  /**
   * @remarks
   * The information about instances created from the image.
   */
  createInstances?: string[];
  /**
   * @remarks
   * The time when the snapshot was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-10-09T02:28:06Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The data cloud disk snapshot ID.
   * 
   * @example
   * s-bp19rn9u8eqzlfb***
   */
  dataSnapshotId?: string;
  /**
   * @remarks
   * The name of the data cloud disk snapshot.
   * 
   * @example
   * DataDiskSnapshot
   */
  dataSnapshotName?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * CustomImage-1
   */
  description?: string;
  /**
   * @remarks
   * The custom image ID.
   * 
   * @example
   * m-bp1e79zktg26n2b***
   */
  imageId?: string;
  /**
   * @remarks
   * Indicates whether the custom image is shared to ECS.
   * 
   * @example
   * false
   */
  inShare?: boolean;
  /**
   * @remarks
   * Indicates whether the custom image is shared across accounts.
   * 
   * @example
   * False
   */
  inShareUser?: boolean;
  /**
   * @remarks
   * The instance ID of the simple application server from which the image was created.
   * 
   * @example
   * 2d06ee0520b44de1ae88d4be****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the simple application server instance.
   * 
   * @example
   * swas-asdf23***
   */
  instanceName?: string;
  /**
   * @remarks
   * The name of the custom image.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The operating system type of the image.
   * 
   * @example
   * Linux
   */
  osType?: string;
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
   * The data cloud disk size of the image. Unit: GiB.
   * 
   * @example
   * 20
   */
  requiredDataDiskSize?: number;
  /**
   * @remarks
   * The system cloud disk size of the image. Unit: GiB.
   * 
   * @example
   * 20
   */
  requiredSystemDiskSize?: number;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfm2h2lvp3ublq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The name of the source image.
   * 
   * @example
   * CentOS
   */
  sourceImageName?: string;
  /**
   * @remarks
   * The image version of the source image.
   * 
   * @example
   * 8.0
   */
  sourceImageVersion?: string;
  /**
   * @remarks
   * The status of the custom image. Valid values:
   * 
   * - 0: copying.
   * 
   * - 1: active.
   * - 2: unavailable.
   * - 3: creation failed.
   * - 4: creating.
   * 
   * @example
   * 1
   */
  status?: string;
  /**
   * @remarks
   * The system cloud disk snapshot ID.
   * 
   * @example
   * s-bp1h173hj21puxb***
   */
  systemSnapshotId?: string;
  /**
   * @remarks
   * The name of the system cloud disk snapshot.
   * 
   * @example
   * SystemDiskSnapshot
   */
  systemSnapshotName?: string;
  /**
   * @remarks
   * The tags of the custom images.
   */
  tags?: ListCustomImagesResponseBodyCustomImagesTags[];
  /**
   * @remarks
   * The Alibaba Cloud account ID of the image owner.
   * 
   * @example
   * 180185828710****
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      createInstances: 'CreateInstances',
      creationTime: 'CreationTime',
      dataSnapshotId: 'DataSnapshotId',
      dataSnapshotName: 'DataSnapshotName',
      description: 'Description',
      imageId: 'ImageId',
      inShare: 'InShare',
      inShareUser: 'InShareUser',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      name: 'Name',
      osType: 'OsType',
      regionId: 'RegionId',
      requiredDataDiskSize: 'RequiredDataDiskSize',
      requiredSystemDiskSize: 'RequiredSystemDiskSize',
      resourceGroupId: 'ResourceGroupId',
      sourceImageName: 'SourceImageName',
      sourceImageVersion: 'SourceImageVersion',
      status: 'Status',
      systemSnapshotId: 'SystemSnapshotId',
      systemSnapshotName: 'SystemSnapshotName',
      tags: 'Tags',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createInstances: { 'type': 'array', 'itemType': 'string' },
      creationTime: 'string',
      dataSnapshotId: 'string',
      dataSnapshotName: 'string',
      description: 'string',
      imageId: 'string',
      inShare: 'boolean',
      inShareUser: 'boolean',
      instanceId: 'string',
      instanceName: 'string',
      name: 'string',
      osType: 'string',
      regionId: 'string',
      requiredDataDiskSize: 'number',
      requiredSystemDiskSize: 'number',
      resourceGroupId: 'string',
      sourceImageName: 'string',
      sourceImageVersion: 'string',
      status: 'string',
      systemSnapshotId: 'string',
      systemSnapshotName: 'string',
      tags: { 'type': 'array', 'itemType': ListCustomImagesResponseBodyCustomImagesTags },
      userId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.createInstances)) {
      $dara.Model.validateArray(this.createInstances);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomImagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The custom images.
   */
  customImages?: ListCustomImagesResponseBodyCustomImages[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page in Settings for the paged query.
   * 
   * @example
   * 10
   */
  pageSize?: string;
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
   * The total number of entries.
   * 
   * @example
   * 4
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      customImages: 'CustomImages',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customImages: { 'type': 'array', 'itemType': ListCustomImagesResponseBodyCustomImages },
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customImages)) {
      $dara.Model.validateArray(this.customImages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

