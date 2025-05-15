// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetExperimentResponseBodyDataResourceMachineType } from "./GetExperimentResponseBodyDataResourceMachineType";
import { GetExperimentResponseBodyDataResourceResourceNodes } from "./GetExperimentResponseBodyDataResourceResourceNodes";
import { GetExperimentResponseBodyDataResourceUserAccessParam } from "./GetExperimentResponseBodyDataResourceUserAccessParam";


export class GetExperimentResponseBodyDataResource extends $dara.Model {
  /**
   * @remarks
   * Used CPU
   * 
   * @example
   * 90
   */
  cpuCoreLimit?: number;
  /**
   * @remarks
   * Used GPU
   * 
   * @example
   * 8
   */
  gpuLimit?: number;
  /**
   * @remarks
   * Instance type
   */
  machineType?: GetExperimentResponseBodyDataResourceMachineType;
  /**
   * @remarks
   * Used memory
   * 
   * @example
   * 90
   */
  maxCpuCore?: number;
  /**
   * @remarks
   * Used memory
   * 
   * @example
   * 8
   */
  maxGpu?: number;
  /**
   * @remarks
   * Used memory
   * 
   * @example
   * 500
   */
  maxMemory?: number;
  /**
   * @remarks
   * Used memory
   * 
   * @example
   * 500
   */
  memoryLimit?: number;
  /**
   * @remarks
   * Cluster ID
   * 
   * @example
   * 189
   */
  resourceId?: number;
  /**
   * @remarks
   * Cluster name
   * 
   * @example
   * ecs.r8y.4xlarge
   */
  resourceName?: string;
  /**
   * @remarks
   * Resource node list
   */
  resourceNodes?: GetExperimentResponseBodyDataResourceResourceNodes[];
  /**
   * @remarks
   * User authorization parameters
   */
  userAccessParam?: GetExperimentResponseBodyDataResourceUserAccessParam;
  static names(): { [key: string]: string } {
    return {
      cpuCoreLimit: 'CpuCoreLimit',
      gpuLimit: 'GpuLimit',
      machineType: 'MachineType',
      maxCpuCore: 'MaxCpuCore',
      maxGpu: 'MaxGpu',
      maxMemory: 'MaxMemory',
      memoryLimit: 'MemoryLimit',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceNodes: 'ResourceNodes',
      userAccessParam: 'UserAccessParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCoreLimit: 'number',
      gpuLimit: 'number',
      machineType: GetExperimentResponseBodyDataResourceMachineType,
      maxCpuCore: 'number',
      maxGpu: 'number',
      maxMemory: 'number',
      memoryLimit: 'number',
      resourceId: 'number',
      resourceName: 'string',
      resourceNodes: { 'type': 'array', 'itemType': GetExperimentResponseBodyDataResourceResourceNodes },
      userAccessParam: GetExperimentResponseBodyDataResourceUserAccessParam,
    };
  }

  validate() {
    if(this.machineType && typeof (this.machineType as any).validate === 'function') {
      (this.machineType as any).validate();
    }
    if(Array.isArray(this.resourceNodes)) {
      $dara.Model.validateArray(this.resourceNodes);
    }
    if(this.userAccessParam && typeof (this.userAccessParam as any).validate === 'function') {
      (this.userAccessParam as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

