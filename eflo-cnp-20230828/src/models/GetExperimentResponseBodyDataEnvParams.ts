// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetExperimentResponseBodyDataEnvParamsResourceNodes } from "./GetExperimentResponseBodyDataEnvParamsResourceNodes";


export class GetExperimentResponseBodyDataEnvParams extends $dara.Model {
  /**
   * @remarks
   * CPU allocation number
   * 
   * @example
   * 90
   */
  cpuPerWorker?: number;
  /**
   * @remarks
   * cudaVersion
   * 
   * @example
   * 1.0.0
   */
  cudaVersion?: string;
  /**
   * @remarks
   * Additional parameters
   */
  extendParam?: { [key: string]: string };
  /**
   * @remarks
   * GPU driver version
   * 
   * @example
   * 1.0.0
   */
  gpuDriverVersion?: string;
  /**
   * @remarks
   * GPU allocation number
   * 
   * @example
   * 8
   */
  gpuPerWorker?: number;
  /**
   * @remarks
   * Memory Per Worker
   * 
   * @example
   * 500
   */
  memoryPerWorker?: number;
  /**
   * @remarks
   * NCCL version
   * 
   * @example
   * 1.0.0
   */
  NCCLVersion?: string;
  /**
   * @remarks
   * PyTorch version
   * 
   * @example
   * 1.0.0
   */
  pyTorchVersion?: string;
  /**
   * @remarks
   * Specified nodes
   */
  resourceNodes?: GetExperimentResponseBodyDataEnvParamsResourceNodes[];
  /**
   * @remarks
   * Share Memory
   * 
   * @example
   * 500
   */
  shareMemory?: number;
  /**
   * @remarks
   * Worker number
   * 
   * @example
   * 1
   */
  workerNum?: number;
  static names(): { [key: string]: string } {
    return {
      cpuPerWorker: 'CpuPerWorker',
      cudaVersion: 'CudaVersion',
      extendParam: 'ExtendParam',
      gpuDriverVersion: 'GpuDriverVersion',
      gpuPerWorker: 'GpuPerWorker',
      memoryPerWorker: 'MemoryPerWorker',
      NCCLVersion: 'NCCLVersion',
      pyTorchVersion: 'PyTorchVersion',
      resourceNodes: 'ResourceNodes',
      shareMemory: 'ShareMemory',
      workerNum: 'WorkerNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuPerWorker: 'number',
      cudaVersion: 'string',
      extendParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      gpuDriverVersion: 'string',
      gpuPerWorker: 'number',
      memoryPerWorker: 'number',
      NCCLVersion: 'string',
      pyTorchVersion: 'string',
      resourceNodes: { 'type': 'array', 'itemType': GetExperimentResponseBodyDataEnvParamsResourceNodes },
      shareMemory: 'number',
      workerNum: 'number',
    };
  }

  validate() {
    if(this.extendParam) {
      $dara.Model.validateMap(this.extendParam);
    }
    if(Array.isArray(this.resourceNodes)) {
      $dara.Model.validateArray(this.resourceNodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

