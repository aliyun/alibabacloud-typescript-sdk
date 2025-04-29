// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateImagePipelineRequestAdvancedOptions } from "./CreateImagePipelineRequestAdvancedOptions";
import { CreateImagePipelineRequestImageOptions } from "./CreateImagePipelineRequestImageOptions";
import { CreateImagePipelineRequestImportImageOptions } from "./CreateImagePipelineRequestImportImageOptions";
import { CreateImagePipelineRequestTag } from "./CreateImagePipelineRequestTag";


export class CreateImagePipelineRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of Alibaba Cloud accounts to which to share the image that will be created based on the image template. You can specify up to 20 account IDs.
   * 
   * @example
   * 1234567890
   */
  addAccount?: number[];
  /**
   * @remarks
   * The advanced settings.
   */
  advancedOptions?: CreateImagePipelineRequestAdvancedOptions;
  /**
   * @remarks
   * The source image.
   * 
   * *   If you set `BaseImageType` to IMAGE, set BaseImage to the ID of a custom image.
   * *   If you set `BaseImageType` to IMAGE_FAMILY, set BaseImage to the name of an image family.
   * *   If you set `BaseImageType` to OSS, you do not need to specify BaseImage.
   * 
   * @example
   * m-bp67acfmxazb4p****
   */
  baseImage?: string;
  /**
   * @remarks
   * The type of the source image. Valid values:
   * 
   * *   IMAGE: image
   * *   IMAGE_FAMILY: image family
   * *   OSS: Object Storage Service (OSS) object
   * 
   * This parameter is required.
   * 
   * @example
   * IMAGE
   */
  baseImageType?: string;
  /**
   * @remarks
   * The build content in the image template. The content cannot exceed 16 KB in size. For information about the commands supported by Image Builder, see [Commands supported by Image Builder](https://help.aliyun.com/document_detail/200206.html).
   * 
   * @example
   * FROM IMAGE:m-bp67acfmxazb4p****
   */
  buildContent?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.**** For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to release the intermediate instance when the image cannot be created. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: true.
   * 
   * > If the intermediate instance cannot be started, the instance is released by default.
   * 
   * @example
   * true
   */
  deleteInstanceOnFailure?: boolean;
  /**
   * @remarks
   * The description of the image template. The description must be 2 to 256 characters in length. It cannot start with `http://` or `https://`.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The family of the image created based on the image template.
   * 
   * >  This parameter is no longer used. We recommend that you use ImageOptions.ImageFamily.
   * 
   * @example
   * null
   * 
   * @deprecated
   */
  imageFamily?: string;
  /**
   * @remarks
   * The name prefix of the image created based on the image template.
   * 
   * >  This parameter is no longer used. We recommend that you use ImageOptions.ImageName.
   * 
   * @example
   * testImageName
   * 
   * @deprecated
   */
  imageName?: string;
  /**
   * @remarks
   * The attributes of the image created based on the image template.
   */
  imageOptions?: CreateImagePipelineRequestImageOptions;
  /**
   * @remarks
   * The attributes and settings of the image that you want to import. If you set `BaseImageType` to OSS, you must specify this parameter.
   */
  importImageOptions?: CreateImagePipelineRequestImportImageOptions;
  /**
   * @remarks
   * The instance type. You can call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) to query instance types.
   * 
   * If you do not configure this parameter, an instance type that provides the fewest vCPUs and memory resources is automatically selected. This configuration is subject to resource availability of instance types. For example, the ecs.g6.large instance type is automatically selected. If available ecs.g6.large resources are insufficient, the ecs.g6.xlarge instance type is selected.
   * 
   * @example
   * ecs.g6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The size of the outbound public bandwidth for the intermediate instance. Unit: Mbit/s. Valid values: 0 to 100.
   * 
   * Default value: 0.
   * 
   * @example
   * 0
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * The name of the launch template. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with `http://` or `https://`. The name can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * >  If you do not specify `Name`, the return value of `ImagePipelineId` is used.
   * 
   * @example
   * testImagePipeline
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether the image created based on the image template supports the NVMe protocol.
   * 
   * >  This parameter is no longer used. We recommend that you use ImageOptions.ImageFeatures.NvmeSupport.
   * 
   * @example
   * auto
   * 
   * @deprecated
   */
  nvmeSupport?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The repair mode of the image template.
   * 
   * Valid values:
   * 
   * *   Standard: the standard mode.
   * 
   *     Supported check items in Linux operating systems:
   * 
   *     *   GUESTOS.CloudInit
   *     *   GUESTOS.Dhcp
   *     *   GUESTOS.Virtio
   *     *   GUESTOS.OnlineResizeFS
   *     *   GUESTOS.Grub
   *     *   GUESTOS.Fstab
   * 
   *     Supported check items in Windows operating systems:
   * 
   *     *   GUESTOS.Virtio
   *     *   GUESTOS.Update
   *     *   GUESTOS.Hotfix
   *     *   GUESTOS.Server
   * 
   * >  As the check and repair capabilities continue to improve, the number of check items may increase. For more information about check items, see [Overview of image check](https://help.aliyun.com/document_detail/439819.html).
   * 
   * @example
   * null
   */
  repairMode?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The system disk size of the intermediate instance. Unit: GiB. Valid values: 20 to 500.
   * 
   * Default value: 40.
   * 
   * @example
   * 40
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The tags to add to the template.
   */
  tag?: CreateImagePipelineRequestTag[];
  /**
   * @remarks
   * The test content in the image template. The content cannot exceed 16 KB in size. For information about the commands supported by Image Builder, see [Commands supported by Image Builder](https://help.aliyun.com/document_detail/200206.html).
   * 
   * @example
   * null
   */
  testContent?: string;
  /**
   * @remarks
   * The IDs of regions to which you want to distribute the image that is created based on the image template. You can specify up to 20 region IDs.
   * 
   * If you do not specify this parameter, the image is created only in the current region.
   * 
   * @example
   * cn-hangzhou
   */
  toRegionId?: string[];
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * If you do not specify this parameter, a new VPC and vSwitch are created. Make sure that the VPC quota in your account is sufficient. For more information, see [Limits and quotas](https://help.aliyun.com/document_detail/27750.html).
   * 
   * @example
   * vsw-bp67acfmxazb4p****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      addAccount: 'AddAccount',
      advancedOptions: 'AdvancedOptions',
      baseImage: 'BaseImage',
      baseImageType: 'BaseImageType',
      buildContent: 'BuildContent',
      clientToken: 'ClientToken',
      deleteInstanceOnFailure: 'DeleteInstanceOnFailure',
      description: 'Description',
      imageFamily: 'ImageFamily',
      imageName: 'ImageName',
      imageOptions: 'ImageOptions',
      importImageOptions: 'ImportImageOptions',
      instanceType: 'InstanceType',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      name: 'Name',
      nvmeSupport: 'NvmeSupport',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      repairMode: 'RepairMode',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      systemDiskSize: 'SystemDiskSize',
      tag: 'Tag',
      testContent: 'TestContent',
      toRegionId: 'ToRegionId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addAccount: { 'type': 'array', 'itemType': 'number' },
      advancedOptions: CreateImagePipelineRequestAdvancedOptions,
      baseImage: 'string',
      baseImageType: 'string',
      buildContent: 'string',
      clientToken: 'string',
      deleteInstanceOnFailure: 'boolean',
      description: 'string',
      imageFamily: 'string',
      imageName: 'string',
      imageOptions: CreateImagePipelineRequestImageOptions,
      importImageOptions: CreateImagePipelineRequestImportImageOptions,
      instanceType: 'string',
      internetMaxBandwidthOut: 'number',
      name: 'string',
      nvmeSupport: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      repairMode: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      systemDiskSize: 'number',
      tag: { 'type': 'array', 'itemType': CreateImagePipelineRequestTag },
      testContent: 'string',
      toRegionId: { 'type': 'array', 'itemType': 'string' },
      vSwitchId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addAccount)) {
      $dara.Model.validateArray(this.addAccount);
    }
    if(this.advancedOptions && typeof (this.advancedOptions as any).validate === 'function') {
      (this.advancedOptions as any).validate();
    }
    if(this.imageOptions && typeof (this.imageOptions as any).validate === 'function') {
      (this.imageOptions as any).validate();
    }
    if(this.importImageOptions && typeof (this.importImageOptions as any).validate === 'function') {
      (this.importImageOptions as any).validate();
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    if(Array.isArray(this.toRegionId)) {
      $dara.Model.validateArray(this.toRegionId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

