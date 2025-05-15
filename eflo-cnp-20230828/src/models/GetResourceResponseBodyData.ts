// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetResourceResponseBodyDataMachineType } from "./GetResourceResponseBodyDataMachineType";
import { GetResourceResponseBodyDataResourceNodes } from "./GetResourceResponseBodyDataResourceNodes";
import { GetResourceResponseBodyDataUserAccessParam } from "./GetResourceResponseBodyDataUserAccessParam";


export class GetResourceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Cluster description
   * 
   * @example
   * test
   */
  clusterDesc?: string;
  /**
   * @remarks
   * Cluster ID
   * 
   * @example
   * 3123121223
   */
  clusterId?: string;
  /**
   * @remarks
   * Cluster name
   * 
   * @example
   * main_cluster
   */
  clusterName?: string;
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
   * Machine type
   */
  machineType?: GetResourceResponseBodyDataMachineType;
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
   * List of resource nodes
   */
  resourceNodes?: GetResourceResponseBodyDataResourceNodes[];
  /**
   * @remarks
   * User authorization parameters
   */
  userAccessParam?: GetResourceResponseBodyDataUserAccessParam;
  static names(): { [key: string]: string } {
    return {
      clusterDesc: 'ClusterDesc',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      cpuCoreLimit: 'CpuCoreLimit',
      gpuLimit: 'GpuLimit',
      machineType: 'MachineType',
      maxCpuCore: 'MaxCpuCore',
      maxGpu: 'MaxGpu',
      maxMemory: 'MaxMemory',
      memoryLimit: 'MemoryLimit',
      resourceId: 'ResourceId',
      resourceNodes: 'ResourceNodes',
      userAccessParam: 'UserAccessParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterDesc: 'string',
      clusterId: 'string',
      clusterName: 'string',
      cpuCoreLimit: 'number',
      gpuLimit: 'number',
      machineType: GetResourceResponseBodyDataMachineType,
      maxCpuCore: 'number',
      maxGpu: 'number',
      maxMemory: 'number',
      memoryLimit: 'number',
      resourceId: 'number',
      resourceNodes: { 'type': 'array', 'itemType': GetResourceResponseBodyDataResourceNodes },
      userAccessParam: GetResourceResponseBodyDataUserAccessParam,
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

