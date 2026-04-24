// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImageVersionsResponseBodyPagingInfoImageVersionsBuildConfigPackageInstallationScripts extends $dara.Model {
  /**
   * @example
   * requests
   */
  content?: string;
  /**
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
   * @example
   * PackageInstallation
   */
  buildType?: string;
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
   * @example
   * Scheduler
   */
  module?: string;
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
   * @example
   * Public
   */
  accessibility?: string;
  /**
   * @example
   * vpc-xxx
   */
  acrAssociatedVpcId?: string;
  /**
   * @remarks
   * ACR Endpoint
   * 
   * @example
   * registry.cn-hangzhou.aliyuncs.com
   */
  acrEndpoint?: string;
  /**
   * @example
   * cri-xxx
   */
  acrInstanceId?: string;
  buildConfig?: ListImageVersionsResponseBodyPagingInfoImageVersionsBuildConfig;
  /**
   * @example
   * 1727055811000
   */
  createdTime?: number;
  /**
   * @example
   * 123
   */
  creator?: string;
  /**
   * @example
   * Test image created by xxx
   */
  description?: string;
  /**
   * @example
   * false
   */
  enableSyncMaxCompute?: boolean;
  /**
   * @example
   * Custom_image_xxxx_xxxx
   */
  id?: string;
  /**
   * @example
   * v1.0.0
   */
  imageTag?: string;
  /**
   * @example
   * registry.cn-hangzhou.aliyuncs.com/xxx/xxx:tag
   */
  imageUri?: string;
  /**
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com/xxx/xxx:tag
   */
  imageVpcUri?: string;
  /**
   * @example
   * false
   */
  isDefault?: boolean;
  /**
   * @example
   * 1727055811000
   */
  lastModifiedTime?: number;
  /**
   * @example
   * 123
   */
  modifier?: string;
  /**
   * @example
   * dataworks_image
   */
  name?: string;
  /**
   * @example
   * namespace
   */
  namespace?: string;
  /**
   * @example
   * true
   */
  official?: boolean;
  /**
   * @example
   * acr_image_id
   */
  providerImageId?: string;
  /**
   * @example
   * ACR
   */
  providerType?: string;
  /**
   * @example
   * Published
   */
  publishStage?: string;
  /**
   * @example
   * repo_name
   */
  repositoryName?: string;
  /**
   * @example
   * 1GB
   */
  size?: string;
  /**
   * @example
   * Available
   */
  status?: string;
  supported?: ListImageVersionsResponseBodyPagingInfoImageVersionsSupported;
  /**
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
  imageVersions?: ListImageVersionsResponseBodyPagingInfoImageVersions[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
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
  pagingInfo?: ListImageVersionsResponseBodyPagingInfo;
  /**
   * @example
   * 6A6CBE87-9F91-1323-B680-E7A7065XXXXX
   */
  requestId?: string;
  /**
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

