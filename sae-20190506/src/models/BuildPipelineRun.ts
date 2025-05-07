// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BuildPipelineRunBuildConfig } from "./BuildPipelineRunBuildConfig";
import { BuildPipelineRunCodeConfig } from "./BuildPipelineRunCodeConfig";
import { BuildPipelineRunDeployConfig } from "./BuildPipelineRunDeployConfig";
import { BuildPipelineRunImageConfig } from "./BuildPipelineRunImageConfig";
import { BuildPipelineRunPackageConfig } from "./BuildPipelineRunPackageConfig";
import { BuildPipelineRunSteps } from "./BuildPipelineRunSteps";
import { BuildPipelineRunTriggerConfig } from "./BuildPipelineRunTriggerConfig";


export class BuildPipelineRun extends $dara.Model {
  buildConfig?: BuildPipelineRunBuildConfig;
  buildDuration?: number;
  codeConfig?: BuildPipelineRunCodeConfig;
  createTime?: number;
  deployConfig?: BuildPipelineRunDeployConfig;
  deployDuration?: number;
  endTime?: number;
  imageConfig?: BuildPipelineRunImageConfig;
  packageConfig?: BuildPipelineRunPackageConfig;
  pipelineId?: string;
  pipelineRunId?: string;
  startTime?: number;
  status?: string;
  steps?: BuildPipelineRunSteps[];
  triggerConfig?: BuildPipelineRunTriggerConfig;
  versionId?: string;
  waitDuration?: number;
  static names(): { [key: string]: string } {
    return {
      buildConfig: 'BuildConfig',
      buildDuration: 'BuildDuration',
      codeConfig: 'CodeConfig',
      createTime: 'CreateTime',
      deployConfig: 'DeployConfig',
      deployDuration: 'DeployDuration',
      endTime: 'EndTime',
      imageConfig: 'ImageConfig',
      packageConfig: 'PackageConfig',
      pipelineId: 'PipelineId',
      pipelineRunId: 'PipelineRunId',
      startTime: 'StartTime',
      status: 'Status',
      steps: 'Steps',
      triggerConfig: 'TriggerConfig',
      versionId: 'VersionId',
      waitDuration: 'WaitDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildConfig: BuildPipelineRunBuildConfig,
      buildDuration: 'number',
      codeConfig: BuildPipelineRunCodeConfig,
      createTime: 'number',
      deployConfig: BuildPipelineRunDeployConfig,
      deployDuration: 'number',
      endTime: 'number',
      imageConfig: BuildPipelineRunImageConfig,
      packageConfig: BuildPipelineRunPackageConfig,
      pipelineId: 'string',
      pipelineRunId: 'string',
      startTime: 'number',
      status: 'string',
      steps: { 'type': 'array', 'itemType': BuildPipelineRunSteps },
      triggerConfig: BuildPipelineRunTriggerConfig,
      versionId: 'string',
      waitDuration: 'number',
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
    if(Array.isArray(this.steps)) {
      $dara.Model.validateArray(this.steps);
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

