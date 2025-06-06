// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetExperimentPlanTemplateResponseBodyDataTemplatePipelineParamEnvParamsResourceNodes } from "./GetExperimentPlanTemplateResponseBodyDataTemplatePipelineParamEnvParamsResourceNodes";


export class GetExperimentPlanTemplateResponseBodyDataTemplatePipelineParamEnvParams extends $dara.Model {
  /**
   * @remarks
   * CPU allocation
   * 
   * @example
   * 90
   */
  cpuPerWorker?: number;
  /**
   * @remarks
   * CUDA version
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
   * GPU allocation
   * 
   * @example
   * 8
   */
  gpuPerWorker?: number;
  /**
   * @remarks
   * Allocated memory in GB
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
  resourceNodes?: GetExperimentPlanTemplateResponseBodyDataTemplatePipelineParamEnvParamsResourceNodes[];
  /**
   * @remarks
   * Shared memory in GB
   * 
   * @example
   * 500
   */
  shareMemory?: number;
  /**
   * @remarks
   * Number of nodes
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
      resourceNodes: { 'type': 'array', 'itemType': GetExperimentPlanTemplateResponseBodyDataTemplatePipelineParamEnvParamsResourceNodes },
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

