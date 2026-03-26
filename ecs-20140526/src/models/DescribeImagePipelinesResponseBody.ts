// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetAddAccounts extends $dara.Model {
  addAccount?: string[];
  static names(): { [key: string]: string } {
    return {
      addAccount: 'AddAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addAccount: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.addAccount)) {
      $dara.Model.validateArray(this.addAccount);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetAdvancedOptions extends $dara.Model {
  imageNameSuffix?: string;
  retainCloudAssistant?: boolean;
  static names(): { [key: string]: string } {
    return {
      imageNameSuffix: 'ImageNameSuffix',
      retainCloudAssistant: 'RetainCloudAssistant',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageNameSuffix: 'string',
      retainCloudAssistant: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImageOptionsImageFeatures extends $dara.Model {
  nvmeSupport?: string;
  static names(): { [key: string]: string } {
    return {
      nvmeSupport: 'NvmeSupport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nvmeSupport: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImageOptionsImageTagsImageTag extends $dara.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImageOptionsImageTags extends $dara.Model {
  imageTag?: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImageOptionsImageTagsImageTag[];
  static names(): { [key: string]: string } {
    return {
      imageTag: 'ImageTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageTag: { 'type': 'array', 'itemType': DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImageOptionsImageTagsImageTag },
    };
  }

  validate() {
    if(Array.isArray(this.imageTag)) {
      $dara.Model.validateArray(this.imageTag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImageOptions extends $dara.Model {
  description?: string;
  imageFamily?: string;
  imageFeatures?: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImageOptionsImageFeatures;
  imageName?: string;
  imageTags?: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImageOptionsImageTags;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      imageFamily: 'ImageFamily',
      imageFeatures: 'ImageFeatures',
      imageName: 'ImageName',
      imageTags: 'ImageTags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      imageFamily: 'string',
      imageFeatures: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImageOptionsImageFeatures,
      imageName: 'string',
      imageTags: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImageOptionsImageTags,
    };
  }

  validate() {
    if(this.imageFeatures && typeof (this.imageFeatures as any).validate === 'function') {
      (this.imageFeatures as any).validate();
    }
    if(this.imageTags && typeof (this.imageTags as any).validate === 'function') {
      (this.imageTags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImportImageOptionsDiskDeviceMappingsDiskDeviceMapping extends $dara.Model {
  diskImageSize?: number;
  format?: string;
  OSSBucket?: string;
  OSSObject?: string;
  static names(): { [key: string]: string } {
    return {
      diskImageSize: 'DiskImageSize',
      format: 'Format',
      OSSBucket: 'OSSBucket',
      OSSObject: 'OSSObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskImageSize: 'number',
      format: 'string',
      OSSBucket: 'string',
      OSSObject: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImportImageOptionsDiskDeviceMappings extends $dara.Model {
  diskDeviceMapping?: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImportImageOptionsDiskDeviceMappingsDiskDeviceMapping[];
  static names(): { [key: string]: string } {
    return {
      diskDeviceMapping: 'DiskDeviceMapping',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskDeviceMapping: { 'type': 'array', 'itemType': DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImportImageOptionsDiskDeviceMappingsDiskDeviceMapping },
    };
  }

  validate() {
    if(Array.isArray(this.diskDeviceMapping)) {
      $dara.Model.validateArray(this.diskDeviceMapping);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImportImageOptionsFeatures extends $dara.Model {
  imdsSupport?: string;
  nvmeSupport?: string;
  static names(): { [key: string]: string } {
    return {
      imdsSupport: 'ImdsSupport',
      nvmeSupport: 'NvmeSupport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imdsSupport: 'string',
      nvmeSupport: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImportImageOptionsImportImageTagsImportImageTag extends $dara.Model {
  key?: string;
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

export class DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImportImageOptionsImportImageTags extends $dara.Model {
  importImageTag?: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImportImageOptionsImportImageTagsImportImageTag[];
  static names(): { [key: string]: string } {
    return {
      importImageTag: 'ImportImageTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      importImageTag: { 'type': 'array', 'itemType': DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImportImageOptionsImportImageTagsImportImageTag },
    };
  }

  validate() {
    if(Array.isArray(this.importImageTag)) {
      $dara.Model.validateArray(this.importImageTag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImportImageOptions extends $dara.Model {
  architecture?: string;
  bootMode?: string;
  description?: string;
  diskDeviceMappings?: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImportImageOptionsDiskDeviceMappings;
  features?: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImportImageOptionsFeatures;
  imageName?: string;
  importImageTags?: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImportImageOptionsImportImageTags;
  licenseType?: string;
  OSType?: string;
  platform?: string;
  retainImportedImage?: boolean;
  retentionStrategy?: string;
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      bootMode: 'BootMode',
      description: 'Description',
      diskDeviceMappings: 'DiskDeviceMappings',
      features: 'Features',
      imageName: 'ImageName',
      importImageTags: 'ImportImageTags',
      licenseType: 'LicenseType',
      OSType: 'OSType',
      platform: 'Platform',
      retainImportedImage: 'RetainImportedImage',
      retentionStrategy: 'RetentionStrategy',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      bootMode: 'string',
      description: 'string',
      diskDeviceMappings: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImportImageOptionsDiskDeviceMappings,
      features: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImportImageOptionsFeatures,
      imageName: 'string',
      importImageTags: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImportImageOptionsImportImageTags,
      licenseType: 'string',
      OSType: 'string',
      platform: 'string',
      retainImportedImage: 'boolean',
      retentionStrategy: 'string',
      roleName: 'string',
    };
  }

  validate() {
    if(this.diskDeviceMappings && typeof (this.diskDeviceMappings as any).validate === 'function') {
      (this.diskDeviceMappings as any).validate();
    }
    if(this.features && typeof (this.features as any).validate === 'function') {
      (this.features as any).validate();
    }
    if(this.importImageTags && typeof (this.importImageTags as any).validate === 'function') {
      (this.importImageTags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetTagsTag extends $dara.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetTags extends $dara.Model {
  tag?: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetTagsTag },
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

export class DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetToRegionIds extends $dara.Model {
  toRegionId?: string[];
  static names(): { [key: string]: string } {
    return {
      toRegionId: 'ToRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      toRegionId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.toRegionId)) {
      $dara.Model.validateArray(this.toRegionId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSet extends $dara.Model {
  addAccounts?: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetAddAccounts;
  advancedOptions?: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetAdvancedOptions;
  baseImage?: string;
  baseImageType?: string;
  buildContent?: string;
  creationTime?: string;
  deleteInstanceOnFailure?: boolean;
  description?: string;
  /**
   * @deprecated
   */
  imageFamily?: string;
  /**
   * @deprecated
   */
  imageName?: string;
  imageOptions?: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImageOptions;
  imagePipelineId?: string;
  importImageOptions?: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImportImageOptions;
  instanceType?: string;
  internetMaxBandwidthOut?: number;
  name?: string;
  /**
   * @deprecated
   */
  nvmeSupport?: string;
  repairMode?: string;
  resourceGroupId?: string;
  systemDiskSize?: number;
  tags?: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetTags;
  testContent?: string;
  toRegionIds?: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetToRegionIds;
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

export class DescribeImagePipelinesResponseBodyImagePipeline extends $dara.Model {
  imagePipelineSet?: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSet[];
  static names(): { [key: string]: string } {
    return {
      imagePipelineSet: 'ImagePipelineSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imagePipelineSet: { 'type': 'array', 'itemType': DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSet },
    };
  }

  validate() {
    if(Array.isArray(this.imagePipelineSet)) {
      $dara.Model.validateArray(this.imagePipelineSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagePipelinesResponseBody extends $dara.Model {
  imagePipeline?: DescribeImagePipelinesResponseBodyImagePipeline;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. For information about how to use the return value, see the "Usage notes" section of this topic.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of image templates returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      imagePipeline: 'ImagePipeline',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imagePipeline: DescribeImagePipelinesResponseBodyImagePipeline,
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.imagePipeline && typeof (this.imagePipeline as any).validate === 'function') {
      (this.imagePipeline as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

