// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationInitContainersInitContainerEnvironmentVars } from "./DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationInitContainersInitContainerEnvironmentVars";
import { DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationInitContainersInitContainerPorts } from "./DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationInitContainersInitContainerPorts";
import { DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationInitContainersInitContainerVolumeMounts } from "./DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationInitContainersInitContainerVolumeMounts";


export class DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationInitContainers extends $dara.Model {
  /**
   * @remarks
   * The number of vCPUs that are allocated to the init container.
   * 
   * @example
   * 0.5
   */
  cpu?: number;
  /**
   * @remarks
   * The number of GPUs that are allocated to the init container.
   * 
   * @example
   * 1
   */
  gpu?: number;
  /**
   * @remarks
   * The image of the init container.
   * 
   * @example
   * registry-vpc.cn-hongkong.aliyuncs.com/eci_open/nginx:alpine
   */
  image?: string;
  /**
   * @remarks
   * The image pulling policy.
   * 
   * @example
   * Always
   */
  imagePullPolicy?: string;
  /**
   * @remarks
   * The arguments that are passed to the startup commands of the init container.
   */
  initContainerArgs?: string[];
  /**
   * @remarks
   * The commands that are used to start the init container.
   */
  initContainerCommands?: string[];
  /**
   * @remarks
   * The environment variables of the init container.
   */
  initContainerEnvironmentVars?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationInitContainersInitContainerEnvironmentVars[];
  /**
   * @remarks
   * The ports of the init container.
   */
  initContainerPorts?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationInitContainersInitContainerPorts[];
  /**
   * @remarks
   * The volume mounts of the init container.
   */
  initContainerVolumeMounts?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationInitContainersInitContainerVolumeMounts[];
  /**
   * @remarks
   * The memory size of the init container.
   * 
   * @example
   * 1.0
   */
  memory?: number;
  /**
   * @remarks
   * The name of the init container.
   * 
   * @example
   * test-init
   */
  name?: string;
  /**
   * @remarks
   * The permissions that are granted to the processes in the init container. Valid values: NET_ADMIN and NET_RAW.
   */
  securityContextCapabilityAdds?: string[];
  /**
   * @remarks
   * Indicates whether the root file system on which the init container runs is read-only. Valid value: true.
   */
  securityContextReadOnlyRootFilesystem?: boolean;
  /**
   * @remarks
   * The ID of the user that runs the init container.
   * 
   * @example
   * 1000
   */
  securityContextRunAsUser?: string;
  /**
   * @remarks
   * The working directory of the init container.
   * 
   * @example
   * /www
   */
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      gpu: 'Gpu',
      image: 'Image',
      imagePullPolicy: 'ImagePullPolicy',
      initContainerArgs: 'InitContainerArgs',
      initContainerCommands: 'InitContainerCommands',
      initContainerEnvironmentVars: 'InitContainerEnvironmentVars',
      initContainerPorts: 'InitContainerPorts',
      initContainerVolumeMounts: 'InitContainerVolumeMounts',
      memory: 'Memory',
      name: 'Name',
      securityContextCapabilityAdds: 'SecurityContextCapabilityAdds',
      securityContextReadOnlyRootFilesystem: 'SecurityContextReadOnlyRootFilesystem',
      securityContextRunAsUser: 'SecurityContextRunAsUser',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      gpu: 'number',
      image: 'string',
      imagePullPolicy: 'string',
      initContainerArgs: { 'type': 'array', 'itemType': 'string' },
      initContainerCommands: { 'type': 'array', 'itemType': 'string' },
      initContainerEnvironmentVars: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationInitContainersInitContainerEnvironmentVars },
      initContainerPorts: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationInitContainersInitContainerPorts },
      initContainerVolumeMounts: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationInitContainersInitContainerVolumeMounts },
      memory: 'number',
      name: 'string',
      securityContextCapabilityAdds: { 'type': 'array', 'itemType': 'string' },
      securityContextReadOnlyRootFilesystem: 'boolean',
      securityContextRunAsUser: 'string',
      workingDir: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.initContainerArgs)) {
      $dara.Model.validateArray(this.initContainerArgs);
    }
    if(Array.isArray(this.initContainerCommands)) {
      $dara.Model.validateArray(this.initContainerCommands);
    }
    if(Array.isArray(this.initContainerEnvironmentVars)) {
      $dara.Model.validateArray(this.initContainerEnvironmentVars);
    }
    if(Array.isArray(this.initContainerPorts)) {
      $dara.Model.validateArray(this.initContainerPorts);
    }
    if(Array.isArray(this.initContainerVolumeMounts)) {
      $dara.Model.validateArray(this.initContainerVolumeMounts);
    }
    if(Array.isArray(this.securityContextCapabilityAdds)) {
      $dara.Model.validateArray(this.securityContextCapabilityAdds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

