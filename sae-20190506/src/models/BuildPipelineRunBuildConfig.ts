// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TomcatConfig } from "./TomcatConfig";
import { BuildPipelineRunBuildConfigTrigger } from "./BuildPipelineRunBuildConfigTrigger";


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

