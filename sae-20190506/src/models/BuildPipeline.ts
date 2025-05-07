// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BuildPipelineBuildConfig } from "./BuildPipelineBuildConfig";
import { BuildPipelineCodeConfig } from "./BuildPipelineCodeConfig";
import { BuildPipelineDeployConfig } from "./BuildPipelineDeployConfig";
import { BuildPipelineImageConfig } from "./BuildPipelineImageConfig";
import { BuildPipelinePackageConfig } from "./BuildPipelinePackageConfig";
import { BuildPipelineTriggerConfig } from "./BuildPipelineTriggerConfig";


export class BuildPipeline extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  applicationId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  applicationName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  buildConfig?: BuildPipelineBuildConfig;
  /**
   * @remarks
   * This parameter is required.
   */
  codeConfig?: BuildPipelineCodeConfig;
  deployConfig?: BuildPipelineDeployConfig;
  enabled?: boolean;
  imageConfig?: BuildPipelineImageConfig;
  packageConfig?: BuildPipelinePackageConfig;
  /**
   * @remarks
   * This parameter is required.
   */
  triggerConfig?: BuildPipelineTriggerConfig;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      applicationName: 'ApplicationName',
      buildConfig: 'BuildConfig',
      codeConfig: 'CodeConfig',
      deployConfig: 'DeployConfig',
      enabled: 'Enabled',
      imageConfig: 'ImageConfig',
      packageConfig: 'PackageConfig',
      triggerConfig: 'TriggerConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      applicationName: 'string',
      buildConfig: BuildPipelineBuildConfig,
      codeConfig: BuildPipelineCodeConfig,
      deployConfig: BuildPipelineDeployConfig,
      enabled: 'boolean',
      imageConfig: BuildPipelineImageConfig,
      packageConfig: BuildPipelinePackageConfig,
      triggerConfig: BuildPipelineTriggerConfig,
    };
  }

  validate() {
    if(this.buildConfig && typeof (this.buildConfig as any).validate === 'function') {
      (this.buildConfig as any).validate();
    }
    if(this.codeConfig && typeof (this.codeConfig as any).validate === 'function') {
      (this.codeConfig as any).validate();
    }
    if(this.deployConfig && typeof (this.deployConfig as any).validate === 'function') {
      (this.deployConfig as any).validate();
    }
    if(this.imageConfig && typeof (this.imageConfig as any).validate === 'function') {
      (this.imageConfig as any).validate();
    }
    if(this.packageConfig && typeof (this.packageConfig as any).validate === 'function') {
      (this.packageConfig as any).validate();
    }
    if(this.triggerConfig && typeof (this.triggerConfig as any).validate === 'function') {
      (this.triggerConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

