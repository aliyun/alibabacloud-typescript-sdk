// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TomcatConfig } from "./TomcatConfig";


export class BuildPipelineBuildConfig extends $dara.Model {
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
      workingDir: 'string',
    };
  }

  validate() {
    if(this.tomcatConfig && typeof (this.tomcatConfig as any).validate === 'function') {
      (this.tomcatConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BuildPipelineCodeConfig extends $dara.Model {
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

export class BuildPipelineDeployConfig extends $dara.Model {
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

export class BuildPipelineImageConfig extends $dara.Model {
  /**
   * @example
   * ACR/ACREE
   */
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

export class BuildPipelinePackageConfig extends $dara.Model {
  packageName?: string;
  /**
   * @example
   * war/jar/zip
   */
  packageType?: string;
  /**
   * @example
   * http://myoss.oss-cn-****.aliyuncs.com/my-buc/2019-06-30/****.jar
   */
  packageUrl?: string;
  /**
   * @example
   * 1.0.0
   */
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

export class BuildPipelineTriggerConfig extends $dara.Model {
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

