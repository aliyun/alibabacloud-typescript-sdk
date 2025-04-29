// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsInitContainersInitContainerEnvironmentVars } from "./DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsInitContainersInitContainerEnvironmentVars";
import { DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsInitContainersInitContainerPorts } from "./DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsInitContainersInitContainerPorts";
import { DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsInitContainersInitContainerVolumeMounts } from "./DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsInitContainersInitContainerVolumeMounts";


export class DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsInitContainers extends $dara.Model {
  /**
   * @remarks
   * The number of vCPUs per init container.
   * 
   * @example
   * 0.5
   */
  cpu?: number;
  /**
   * @remarks
   * The number of GPUs per init container.
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
   * nginx
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
   * The container startup arguments.
   */
  initContainerArgs?: string[];
  /**
   * @remarks
   * The container startup commands.
   */
  initContainerCommands?: string[];
  /**
   * @remarks
   * The environment variables.
   */
  initContainerEnvironmentVars?: DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsInitContainersInitContainerEnvironmentVars[];
  /**
   * @remarks
   * The ports of the init container.
   */
  initContainerPorts?: DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsInitContainersInitContainerPorts[];
  /**
   * @remarks
   * The volumes that are mounted to the init container.
   */
  initContainerVolumeMounts?: DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsInitContainersInitContainerVolumeMounts[];
  /**
   * @remarks
   * The memory size per init container.
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
   * 
   * >  To use NET_RAW, you must submit a ticket.
   */
  securityContextCapabilityAdds?: string[];
  /**
   * @remarks
   * Indicates whether the root file system is read-only. Valid value: true.
   * 
   * @example
   * true
   */
  securityContextReadOnlyRootFilesystem?: boolean;
  /**
   * @remarks
   * The ID of the user that runs the init container.
   * 
   * @example
   * 587
   */
  securityContextRunAsUser?: string;
  /**
   * @remarks
   * The working directory.
   * 
   * @example
   * /usr/local
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
      initContainerEnvironmentVars: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsInitContainersInitContainerEnvironmentVars },
      initContainerPorts: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsInitContainersInitContainerPorts },
      initContainerVolumeMounts: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsInitContainersInitContainerVolumeMounts },
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

