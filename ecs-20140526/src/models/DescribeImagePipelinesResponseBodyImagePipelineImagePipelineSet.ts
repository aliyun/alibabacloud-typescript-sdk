// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetAddAccounts } from "./DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetAddAccounts";
import { DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetAdvancedOptions } from "./DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetAdvancedOptions";
import { DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImageOptions } from "./DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImageOptions";
import { DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImportImageOptions } from "./DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImportImageOptions";
import { DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetTags } from "./DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetTags";
import { DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetToRegionIds } from "./DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetToRegionIds";


export class DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSet extends $dara.Model {
  /**
   * @remarks
   * The IDs of Alibaba Cloud accounts to which to share the image that will be created based on the image template.
   */
  addAccounts?: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetAddAccounts;
  /**
   * @remarks
   * The advanced settings.
   */
  advancedOptions?: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetAdvancedOptions;
  /**
   * @remarks
   * The source image.
   * 
   * *   When `BaseImageType` is set to IMAGE, the value of this parameter is the ID of a custom image.
   * *   When `BaseImageType` is set to IMAGE_FAMILY, the value of this parameter is the name of an image family.
   * 
   * @example
   * m-bp67acfmxazb4p****
   */
  baseImage?: string;
  /**
   * @remarks
   * The type of the source image. Valid values:
   * 
   * *   IMAGE: custom image
   * *   IMAGE_FAMILY: image family
   * 
   * @example
   * IMAGE
   */
  baseImageType?: string;
  /**
   * @remarks
   * The content of the image template.
   * 
   * @example
   * FROM IMAGE:m-bp67acfmxazb4p****
   */
  buildContent?: string;
  /**
   * @remarks
   * The time when the image template was created.
   * 
   * @example
   * 2020-11-24T06:00:00Z
   */
  creationTime?: string;
  /**
   * @remarks
   * Indicates whether to release the intermediate instance when the image fails to be created.
   * 
   * @example
   * true
   */
  deleteInstanceOnFailure?: boolean;
  /**
   * @remarks
   * The description of the image template.
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
  imageOptions?: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImageOptions;
  /**
   * @remarks
   * The ID of the image template.
   * 
   * @example
   * ip-2ze5tsl5bp6nf2b3****
   */
  imagePipelineId?: string;
  /**
   * @remarks
   * The attributes and settings of the imported image.
   */
  importImageOptions?: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImportImageOptions;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * ecs.g6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The size of the outbound public bandwidth for the intermediate instance. Unit: Mbit/s.
   * 
   * @example
   * 0
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * The name of the image template.
   * 
   * @example
   * testImagePipeline
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the image created based on the image template supports the Non-Volatile Memory Express (NVMe) protocol.
   * 
   * >  This parameter is no longer used. We recommend that you use ImageOptions.ImageFeatures.NvmeSupport.
   * 
   * @example
   * auto
   * 
   * @deprecated
   */
  nvmeSupport?: string;
  /**
   * @remarks
   * The repair mode of the image template.
   * 
   * Valid values:
   * 
   * *   Standard: the standard mode
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
  /**
   * @remarks
   * The system disk size of the intermediate instance. Unit: GiB
   * 
   * @example
   * 40
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The tags of the image template.
   */
  tags?: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetTags;
  /**
   * @remarks
   * The content of the image test template.
   * 
   * @example
   * null
   */
  testContent?: string;
  /**
   * @remarks
   * The IDs of regions to which to distribute the image that will be created based on the image template.
   */
  toRegionIds?: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetToRegionIds;
  /**
   * @remarks
   * The ID of the vSwitch in the virtual private cloud (VPC).
   * 
   * @example
   * vsw-bp67acfmxazb4p****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      addAccounts: 'AddAccounts',
      advancedOptions: 'AdvancedOptions',
      baseImage: 'BaseImage',
      baseImageType: 'BaseImageType',
      buildContent: 'BuildContent',
      creationTime: 'CreationTime',
      deleteInstanceOnFailure: 'DeleteInstanceOnFailure',
      description: 'Description',
      imageFamily: 'ImageFamily',
      imageName: 'ImageName',
      imageOptions: 'ImageOptions',
      imagePipelineId: 'ImagePipelineId',
      importImageOptions: 'ImportImageOptions',
      instanceType: 'InstanceType',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      name: 'Name',
      nvmeSupport: 'NvmeSupport',
      repairMode: 'RepairMode',
      resourceGroupId: 'ResourceGroupId',
      systemDiskSize: 'SystemDiskSize',
      tags: 'Tags',
      testContent: 'TestContent',
      toRegionIds: 'ToRegionIds',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addAccounts: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetAddAccounts,
      advancedOptions: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetAdvancedOptions,
      baseImage: 'string',
      baseImageType: 'string',
      buildContent: 'string',
      creationTime: 'string',
      deleteInstanceOnFailure: 'boolean',
      description: 'string',
      imageFamily: 'string',
      imageName: 'string',
      imageOptions: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImageOptions,
      imagePipelineId: 'string',
      importImageOptions: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImportImageOptions,
      instanceType: 'string',
      internetMaxBandwidthOut: 'number',
      name: 'string',
      nvmeSupport: 'string',
      repairMode: 'string',
      resourceGroupId: 'string',
      systemDiskSize: 'number',
      tags: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetTags,
      testContent: 'string',
      toRegionIds: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetToRegionIds,
      vSwitchId: 'string',
    };
  }

  validate() {
    if(this.addAccounts && typeof (this.addAccounts as any).validate === 'function') {
      (this.addAccounts as any).validate();
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
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    if(this.toRegionIds && typeof (this.toRegionIds as any).validate === 'function') {
      (this.toRegionIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

