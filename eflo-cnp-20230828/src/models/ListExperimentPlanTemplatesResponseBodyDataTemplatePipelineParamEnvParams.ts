// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExperimentPlanTemplatesResponseBodyDataTemplatePipelineParamEnvParams extends $dara.Model {
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
   * Cuda Version
   * 
   * @example
   * 1.0.0
   */
  cudaVersion?: string;
  /**
   * @remarks
   * The version of the GPU driver.
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
   * Allocated shared memory in GB
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
      gpuDriverVersion: 'GpuDriverVersion',
      gpuPerWorker: 'GpuPerWorker',
      memoryPerWorker: 'MemoryPerWorker',
      NCCLVersion: 'NCCLVersion',
      pyTorchVersion: 'PyTorchVersion',
      shareMemory: 'ShareMemory',
      workerNum: 'WorkerNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuPerWorker: 'number',
      cudaVersion: 'string',
      gpuDriverVersion: 'string',
      gpuPerWorker: 'number',
      memoryPerWorker: 'number',
      NCCLVersion: 'string',
      pyTorchVersion: 'string',
      shareMemory: 'number',
      workerNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

