// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateExperimentPlanTemplateResponseBodyDataTemplatePipelineParamEnvParamsResourceNodes } from "./UpdateExperimentPlanTemplateResponseBodyDataTemplatePipelineParamEnvParamsResourceNodes";


export class UpdateExperimentPlanTemplateResponseBodyDataTemplatePipelineParamEnvParams extends $dara.Model {
  /**
   * @remarks
   * CPU Allocation
   * 
   * @example
   * 90
   */
  cpuPerWorker?: number;
  /**
   * @remarks
   * CUDA Version
   * 
   * @example
   * 1.0.0
   */
  cudaVersion?: string;
  /**
   * @remarks
   * Extend Param
   */
  extendParam?: { [key: string]: string };
  /**
   * @remarks
   * GPU Driver Version
   * 
   * @example
   * 1.0.0
   */
  gpuDriverVersion?: string;
  /**
   * @remarks
   * GPU Allocation
   * 
   * @example
   * 8
   */
  gpuPerWorker?: number;
  /**
   * @remarks
   * Memory (GB) Allocation
   * 
   * @example
   * 500
   */
  memoryPerWorker?: number;
  /**
   * @remarks
   * NCCL Version
   * 
   * @example
   * 1.0.0
   */
  NCCLVersion?: string;
  /**
   * @remarks
   * PyTorch Version
   * 
   * @example
   * 1.0.0
   */
  pyTorchVersion?: string;
  /**
   * @remarks
   * Specified Nodes
   */
  resourceNodes?: UpdateExperimentPlanTemplateResponseBodyDataTemplatePipelineParamEnvParamsResourceNodes[];
  /**
   * @remarks
   * Shared Memory (GB) Allocation
   * 
   * @example
   * 500
   */
  shareMemory?: number;
  /**
   * @remarks
   * Number of Nodes
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
      resourceNodes: { 'type': 'array', 'itemType': UpdateExperimentPlanTemplateResponseBodyDataTemplatePipelineParamEnvParamsResourceNodes },
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

