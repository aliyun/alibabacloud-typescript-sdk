// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TomcatConfig } from "./TomcatConfig";


export class BuildPipelineRunBuildConfigTrigger extends $dara.Model {
  /**
   * @example
   * master
   */
  branchName?: string;
  /**
   * @example
   * v1
   */
  tagName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PUSH
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      branchName: 'BranchName',
      tagName: 'TagName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branchName: 'string',
      tagName: 'string',
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

export class BuildPipelineRunBuildConfig extends $dara.Model {
  /**
   * @example
   * mvn clean package
   */
  beforeBuildCommand?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * buildpacks/dockerfile
   */
  buildType?: string;
  /**
   * @example
   * code/Dockerfile
   */
  dockerfilePath?: string;
  /**
   * @example
   * java -jar target/app.jar
   */
  runCommand?: string;
  runtimeType?: string;
  runtimeVersion?: string;
  tomcatConfig?: TomcatConfig;
  /**
   * @remarks
   * This parameter is required.
   */
  trigger?: BuildPipelineRunBuildConfigTrigger;
  /**
   * @example
   * code
   */
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      beforeBuildCommand: 'BeforeBuildCommand',
      buildType: 'BuildType',
      dockerfilePath: 'DockerfilePath',
      runCommand: 'RunCommand',
      runtimeType: 'RuntimeType',
      runtimeVersion: 'RuntimeVersion',
      tomcatConfig: 'TomcatConfig',
      trigger: 'Trigger',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beforeBuildCommand: 'string',
      buildType: 'string',
      dockerfilePath: 'string',
      runCommand: 'string',
      runtimeType: 'string',
      runtimeVersion: 'string',
      tomcatConfig: TomcatConfig,
      trigger: BuildPipelineRunBuildConfigTrigger,
      workingDir: 'string',
    };
  }

  validate() {
    if(this.tomcatConfig && typeof (this.tomcatConfig as any).validate === 'function') {
      (this.tomcatConfig as any).validate();
    }
    if(this.trigger && typeof (this.trigger as any).validate === 'function') {
      (this.trigger as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BuildPipelineRunCodeConfig extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  accountId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * master
   */
  branchName?: string;
  commitId?: string;
  commitUrl?: string;
  organizationId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * github/gitee/gitlab等
   */
  provider?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sae-samples/java-maven-demo
   */
  repoFullName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3001
   */
  repoId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      branchName: 'BranchName',
      commitId: 'CommitId',
      commitUrl: 'CommitUrl',
      organizationId: 'OrganizationId',
      provider: 'Provider',
      repoFullName: 'RepoFullName',
      repoId: 'RepoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      branchName: 'string',
      commitId: 'string',
      commitUrl: 'string',
      organizationId: 'string',
      provider: 'string',
      repoFullName: 'string',
      repoId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BuildPipelineRunDeployConfig extends $dara.Model {
  alwaysAllocateCPU?: boolean;
  maximumInstanceCount?: number;
  minimumInstanceCount?: number;
  updateApplicationInput?: string;
  updateTraffic?: boolean;
  static names(): { [key: string]: string } {
    return {
      alwaysAllocateCPU: 'AlwaysAllocateCPU',
      maximumInstanceCount: 'MaximumInstanceCount',
      minimumInstanceCount: 'MinimumInstanceCount',
      updateApplicationInput: 'UpdateApplicationInput',
      updateTraffic: 'UpdateTraffic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alwaysAllocateCPU: 'boolean',
      maximumInstanceCount: 'number',
      minimumInstanceCount: 'number',
      updateApplicationInput: 'string',
      updateTraffic: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BuildPipelineRunImageConfig extends $dara.Model {
  instanceType?: string;
  namespace?: string;
  repository?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      namespace: 'Namespace',
      repository: 'Repository',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      namespace: 'string',
      repository: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BuildPipelineRunPackageConfig extends $dara.Model {
  packageName?: string;
  packageType?: string;
  packageUrl?: string;
  packageVersion?: string;
  static names(): { [key: string]: string } {
    return {
      packageName: 'PackageName',
      packageType: 'PackageType',
      packageUrl: 'PackageUrl',
      packageVersion: 'PackageVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packageName: 'string',
      packageType: 'string',
      packageUrl: 'string',
      packageVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BuildPipelineRunSteps extends $dara.Model {
  description?: string;
  duration?: number;
  endTime?: number;
  id?: string;
  name?: string;
  result?: string;
  startTime?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      duration: 'Duration',
      endTime: 'EndTime',
      id: 'Id',
      name: 'Name',
      result: 'Result',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      duration: 'number',
      endTime: 'number',
      id: 'string',
      name: 'string',
      result: 'string',
      startTime: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BuildPipelineRunTriggerConfig extends $dara.Model {
  branchName?: string;
  tagName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      branchName: 'BranchName',
      tagName: 'TagName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branchName: 'string',
      tagName: 'string',
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

