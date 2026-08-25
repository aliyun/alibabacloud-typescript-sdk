// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImageRequestBuildConfigPackageInstallationScripts extends $dara.Model {
  /**
   * @remarks
   * The script content. If the content consists of package names, separate them with commas (,).
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

export class CreateImageRequestBuildConfig extends $dara.Model {
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
   * The list of pre-installation scripts.
   */
  packageInstallationScripts?: CreateImageRequestBuildConfigPackageInstallationScripts[];
  static names(): { [key: string]: string } {
    return {
      buildType: 'BuildType',
      packageInstallationScripts: 'PackageInstallationScripts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildType: 'string',
      packageInstallationScripts: { 'type': 'array', 'itemType': CreateImageRequestBuildConfigPackageInstallationScripts },
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

export class CreateImageRequestSupported extends $dara.Model {
  /**
   * @remarks
   * The image sub-module. Valid values:
   * - Scheduler: DataStudio.
   * 
   * @example
   * Scheduler
   */
  module?: string;
  /**
   * @remarks
   * The list of supported node types.
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

export class CreateImageRequest extends $dara.Model {
  /**
   * @remarks
   * The image visibility. Valid values:
   * - Public: visible to all users.
   * - Private: visible only to the creator.
   * 
   * @example
   * Public
   */
  accessibility?: string;
  /**
   * @remarks
   * The VPC ID associated with the ACR instance. This parameter is required when referencing an ACR image.
   * 
   * @example
   * vpc-xxx
   */
  acrAssociatedVpcId?: string;
  /**
   * @remarks
   * The ACR instance ID. This parameter is required when referencing an ACR image.
   * 
   * @example
   * acr_instance_id
   */
  acrInstanceId?: string;
  /**
   * @remarks
   * The image build configuration.
   */
  buildConfig?: CreateImageRequestBuildConfig;
  /**
   * @remarks
   * The client idempotency token.
   * 
   * This parameter is required.
   * 
   * @example
   * dasfsd-94fqwe-da8d
   */
  clientToken?: string;
  /**
   * @remarks
   * The image description, up to 128 characters.
   * 
   * @example
   * create by xxxx
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to synchronize the image to MaxCompute. Specify this parameter when referencing an ACR image. Default value: false.
   * 
   * @example
   * false
   */
  enableSyncMaxCompute?: boolean;
  /**
   * @remarks
   * The image URI. This parameter is required when referencing an ACR image.
   * 
   * @example
   * registry-vpc.cn-beijing.cr.aliyuncs.com/namespace/image:0.1.0
   */
  imageUri?: string;
  /**
   * @remarks
   * The image name, which can contain lowercase letters, digits, and underscores (_), up to 128 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * task_image_001
   */
  name?: string;
  /**
   * @remarks
   * The image namespace. Set this parameter to DataWorks Default when referencing a DataWorks official image.
   * 
   * This parameter is required.
   * 
   * @example
   * namespace_name
   */
  namespace?: string;
  /**
   * @remarks
   * The image ID from the image provider. This parameter is required when referencing a DataWorks official image.
   * 
   * @example
   * System_shell_20251201
   */
  providerImageId?: string;
  /**
   * @remarks
   * The image reference data type. Valid values:
   * 
   * - ACR: ACR image repository.
   * - DataWorks: DataWorks official image.
   * 
   * This parameter is required.
   * 
   * @example
   * ACR
   */
  providerType?: string;
  /**
   * @remarks
   * The image repository name. Set this parameter to DataWorks Default when referencing a DataWorks official image.
   * 
   * This parameter is required.
   * 
   * @example
   * repo_name
   */
  repositoryName?: string;
  /**
   * @remarks
   * The image sub-purpose.
   * 
   * This parameter is required.
   */
  supported?: CreateImageRequestSupported;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      acrAssociatedVpcId: 'AcrAssociatedVpcId',
      acrInstanceId: 'AcrInstanceId',
      buildConfig: 'BuildConfig',
      clientToken: 'ClientToken',
      description: 'Description',
      enableSyncMaxCompute: 'EnableSyncMaxCompute',
      imageUri: 'ImageUri',
      name: 'Name',
      namespace: 'Namespace',
      providerImageId: 'ProviderImageId',
      providerType: 'ProviderType',
      repositoryName: 'RepositoryName',
      supported: 'Supported',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      acrAssociatedVpcId: 'string',
      acrInstanceId: 'string',
      buildConfig: CreateImageRequestBuildConfig,
      clientToken: 'string',
      description: 'string',
      enableSyncMaxCompute: 'boolean',
      imageUri: 'string',
      name: 'string',
      namespace: 'string',
      providerImageId: 'string',
      providerType: 'string',
      repositoryName: 'string',
      supported: CreateImageRequestSupported,
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

