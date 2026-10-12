// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateImageRequestBuildConfigPackageInstallationScripts extends $dara.Model {
  /**
   * @remarks
   * The script content. If the content specifies package names, separate them with commas.
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

export class UpdateImageRequestBuildConfig extends $dara.Model {
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
  packageInstallationScripts?: UpdateImageRequestBuildConfigPackageInstallationScripts[];
  static names(): { [key: string]: string } {
    return {
      buildType: 'BuildType',
      packageInstallationScripts: 'PackageInstallationScripts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildType: 'string',
      packageInstallationScripts: { 'type': 'array', 'itemType': UpdateImageRequestBuildConfigPackageInstallationScripts },
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

export class UpdateImageRequestSupported extends $dara.Model {
  /**
   * @remarks
   * The image sub-module. Valid values:
   * - Scheduler: Data Studio.
   * 
   * @example
   * Scheduler
   */
  module?: string;
  /**
   * @remarks
   * The list of task types supported by the image.
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

export class UpdateImageRequest extends $dara.Model {
  /**
   * @remarks
   * The image visibility. Valid values:
   * - Public: Visible to all users.
   * - Private: Visible only to the creator.
   * 
   * @example
   * Public
   */
  accessibility?: string;
  /**
   * @remarks
   * The ID of the VPC associated with the ACR instance. This parameter is required when you reference an ACR image.
   * 
   * @example
   * vpc-xxx
   */
  acrAssociatedVpcId?: string;
  /**
   * @remarks
   * The ID of the Container Registry (ACR) instance. This parameter is required when you reference an ACR image.
   * 
   * @example
   * acr_instance_id
   */
  acrInstanceId?: string;
  /**
   * @remarks
   * The image build configuration.
   */
  buildConfig?: UpdateImageRequestBuildConfig;
  /**
   * @remarks
   * The image description.
   * 
   * @example
   * create by xxxx
   */
  description?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * This parameter is required.
   * 
   * @example
   * Custom_image_xxxx_xxxx
   */
  id?: string;
  /**
   * @remarks
   * The image URI. This parameter is required when you reference an ACR image.
   * 
   * @example
   * registry-vpc.cn-beijing.cr.aliyuncs.com/namespace/image:0.1.0
   */
  imageUri?: string;
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * task_image_001
   */
  name?: string;
  /**
   * @remarks
   * The image namespace. If you reference an official DataWorks image, set this parameter to DataWorks Default.
   * 
   * @example
   * namespace_name
   */
  namespace?: string;
  /**
   * @remarks
   * The ID of the image provided by the provider. This parameter is required when you reference an official DataWorks image.
   * 
   * @example
   * System_shell_20251201
   */
  providerImageId?: string;
  /**
   * @remarks
   * The image repository name. If you reference an official DataWorks image, set this parameter to DataWorks Default.
   * 
   * @example
   * repo_name
   */
  repositoryName?: string;
  /**
   * @remarks
   * The image sub-purpose.
   */
  supported?: UpdateImageRequestSupported;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      acrAssociatedVpcId: 'AcrAssociatedVpcId',
      acrInstanceId: 'AcrInstanceId',
      buildConfig: 'BuildConfig',
      description: 'Description',
      id: 'Id',
      imageUri: 'ImageUri',
      name: 'Name',
      namespace: 'Namespace',
      providerImageId: 'ProviderImageId',
      repositoryName: 'RepositoryName',
      supported: 'Supported',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      acrAssociatedVpcId: 'string',
      acrInstanceId: 'string',
      buildConfig: UpdateImageRequestBuildConfig,
      description: 'string',
      id: 'string',
      imageUri: 'string',
      name: 'string',
      namespace: 'string',
      providerImageId: 'string',
      repositoryName: 'string',
      supported: UpdateImageRequestSupported,
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

