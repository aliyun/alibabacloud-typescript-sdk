// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImageVersionsResponseBodyPagingInfoImageVersionsBuildConfigPackageInstallationScripts extends $dara.Model {
  /**
   * @remarks
   * The script content. Separate multiple package names with a comma (,).
   * 
   * @example
   * requests
   */
  content?: string;
  /**
   * @remarks
   * The script type.
   * 
   * @example
   * Python3
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImageVersionsResponseBodyPagingInfoImageVersionsBuildConfig extends $dara.Model {
  /**
   * @remarks
   * The build type.
   * 
   * @example
   * PackageInstallation
   */
  buildType?: string;
  /**
   * @remarks
   * The pre-installation scripts.
   */
  packageInstallationScripts?: ListImageVersionsResponseBodyPagingInfoImageVersionsBuildConfigPackageInstallationScripts[];
  static names(): { [key: string]: string } {
    return {
      buildType: 'BuildType',
      packageInstallationScripts: 'PackageInstallationScripts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildType: 'string',
      packageInstallationScripts: { 'type': 'array', 'itemType': ListImageVersionsResponseBodyPagingInfoImageVersionsBuildConfigPackageInstallationScripts },
    };
  }

  validate() {
    if(Array.isArray(this.packageInstallationScripts)) {
      $dara.Model.validateArray(this.packageInstallationScripts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImageVersionsResponseBodyPagingInfoImageVersionsSupported extends $dara.Model {
  /**
   * @remarks
   * The supported module. Valid value:
   * 
   * - `Scheduler`: The scheduler module.
   * 
   * @example
   * Scheduler
   */
  module?: string;
  /**
   * @remarks
   * The supported task types.
   */
  taskTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      module: 'Module',
      taskTypes: 'TaskTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      module: 'string',
      taskTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.taskTypes)) {
      $dara.Model.validateArray(this.taskTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImageVersionsResponseBodyPagingInfoImageVersions extends $dara.Model {
  /**
   * @remarks
   * The accessibility of the image. Valid values:
   * 
   * - `Public`: The image is visible to all users.
   * 
   * - `Private`: The image is visible only to the creator.
   * 
   * @example
   * Public
   */
  accessibility?: string;
  /**
   * @remarks
   * The ID of the VPC associated with the ACR instance.
   * 
   * @example
   * vpc-xxx
   */
  acrAssociatedVpcId?: string;
  /**
   * @remarks
   * The ACR endpoint.
   * 
   * @example
   * registry.cn-hangzhou.aliyuncs.com
   */
  acrEndpoint?: string;
  /**
   * @remarks
   * The ACR instance ID.
   * 
   * @example
   * cri-xxx
   */
  acrInstanceId?: string;
  /**
   * @remarks
   * The image build configuration.
   */
  buildConfig?: ListImageVersionsResponseBodyPagingInfoImageVersionsBuildConfig;
  /**
   * @remarks
   * The time when the image was created, as a 64-bit timestamp.
   * 
   * @example
   * 1727055811000
   */
  createdTime?: number;
  /**
   * @remarks
   * The ID of the user who created the image.
   * 
   * @example
   * 123
   */
  creator?: string;
  /**
   * @remarks
   * The image description.
   * 
   * @example
   * Test image created by xxx
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether MaxCompute synchronization is enabled.
   * 
   * @example
   * false
   */
  enableSyncMaxCompute?: boolean;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * Custom_image_xxxx_xxxx
   */
  id?: string;
  /**
   * @remarks
   * The image tag.
   * 
   * @example
   * v1.0.0
   */
  imageTag?: string;
  /**
   * @remarks
   * The image URI.
   * 
   * @example
   * registry.cn-hangzhou.aliyuncs.com/xxx/xxx:tag
   */
  imageUri?: string;
  /**
   * @remarks
   * The VPC URI of the image.
   * 
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com/xxx/xxx:tag
   */
  imageVpcUri?: string;
  /**
   * @remarks
   * Indicates whether the image is the default image.
   * 
   * @example
   * false
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The time when the image was last modified, as a 64-bit timestamp.
   * 
   * @example
   * 1727055811000
   */
  lastModifiedTime?: number;
  /**
   * @remarks
   * The ID of the user who last modified the image.
   * 
   * @example
   * 123
   */
  modifier?: string;
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * dataworks_image
   */
  name?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * namespace
   */
  namespace?: string;
  /**
   * @remarks
   * Indicates whether the image is an official image.
   * 
   * @example
   * true
   */
  official?: boolean;
  /**
   * @remarks
   * The ID of the image from the provider.
   * 
   * @example
   * acr_image_id
   */
  providerImageId?: string;
  /**
   * @remarks
   * The type of the image provider. Valid values:
   * 
   * - `ACR`: The image is from an ACR repository.
   * 
   * - `DataWorks`: The image is an official image provided by DataWorks.
   * 
   * @example
   * ACR
   */
  providerType?: string;
  /**
   * @remarks
   * The publishing stage of the image. Valid values:
   * 
   * - `Untest`: Not tested.
   * 
   * - `Testing`: Being tested.
   * 
   * - `TestFailed`: Test failed.
   * 
   * - `Unpublished`: Not published.
   * 
   * - `Publishing`: Being published.
   * 
   * - `Published`: Published.
   * 
   * - `PublishFailed`: Publishing failed.
   * 
   * - `Building`: Being built.
   * 
   * - `BuildSuccess`: Build succeeded.
   * 
   * - `BuildFailed`: Build failed.
   * 
   * - `Accelerating`: Being accelerated.
   * 
   * - `AccelerateSuccess`: Acceleration succeeded.
   * 
   * - `AccelerateFailed`: Acceleration failed.
   * 
   * @example
   * Published
   */
  publishStage?: string;
  /**
   * @remarks
   * The repository name.
   * 
   * @example
   * repo_name
   */
  repositoryName?: string;
  /**
   * @remarks
   * The image size.
   * 
   * @example
   * 1GB
   */
  size?: string;
  /**
   * @remarks
   * The status of the image. Valid values:
   * 
   * - `Disabled`: The image is disabled.
   * 
   * - `Expired`: The image is expired.
   * 
   * - `Available`: The image is available.
   * 
   * - `ReadOnly`: The image is read-only.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The supported modules and task types.
   */
  supported?: ListImageVersionsResponseBodyPagingInfoImageVersionsSupported;
  /**
   * @remarks
   * The image version.
   * 
   * @example
   * 1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      acrAssociatedVpcId: 'AcrAssociatedVpcId',
      acrEndpoint: 'AcrEndpoint',
      acrInstanceId: 'AcrInstanceId',
      buildConfig: 'BuildConfig',
      createdTime: 'CreatedTime',
      creator: 'Creator',
      description: 'Description',
      enableSyncMaxCompute: 'EnableSyncMaxCompute',
      id: 'Id',
      imageTag: 'ImageTag',
      imageUri: 'ImageUri',
      imageVpcUri: 'ImageVpcUri',
      isDefault: 'IsDefault',
      lastModifiedTime: 'LastModifiedTime',
      modifier: 'Modifier',
      name: 'Name',
      namespace: 'Namespace',
      official: 'Official',
      providerImageId: 'ProviderImageId',
      providerType: 'ProviderType',
      publishStage: 'PublishStage',
      repositoryName: 'RepositoryName',
      size: 'Size',
      status: 'Status',
      supported: 'Supported',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      acrAssociatedVpcId: 'string',
      acrEndpoint: 'string',
      acrInstanceId: 'string',
      buildConfig: ListImageVersionsResponseBodyPagingInfoImageVersionsBuildConfig,
      createdTime: 'number',
      creator: 'string',
      description: 'string',
      enableSyncMaxCompute: 'boolean',
      id: 'string',
      imageTag: 'string',
      imageUri: 'string',
      imageVpcUri: 'string',
      isDefault: 'boolean',
      lastModifiedTime: 'number',
      modifier: 'string',
      name: 'string',
      namespace: 'string',
      official: 'boolean',
      providerImageId: 'string',
      providerType: 'string',
      publishStage: 'string',
      repositoryName: 'string',
      size: 'string',
      status: 'string',
      supported: ListImageVersionsResponseBodyPagingInfoImageVersionsSupported,
      version: 'string',
    };
  }

  validate() {
    if(this.buildConfig && typeof (this.buildConfig as any).validate === 'function') {
      (this.buildConfig as any).validate();
    }
    if(this.supported && typeof (this.supported as any).validate === 'function') {
      (this.supported as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImageVersionsResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * A list of image version details.
   */
  imageVersions?: ListImageVersionsResponseBodyPagingInfoImageVersions[];
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
   * The total number of entries.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      imageVersions: 'ImageVersions',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageVersions: { 'type': 'array', 'itemType': ListImageVersionsResponseBodyPagingInfoImageVersions },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.imageVersions)) {
      $dara.Model.validateArray(this.imageVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImageVersionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination details.
   */
  pagingInfo?: ListImageVersionsResponseBodyPagingInfo;
  /**
   * @remarks
   * The request ID, used to locate logs and troubleshoot issues.
   * 
   * @example
   * 6A6CBE87-9F91-1323-B680-E7A7065XXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListImageVersionsResponseBodyPagingInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.pagingInfo && typeof (this.pagingInfo as any).validate === 'function') {
      (this.pagingInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

