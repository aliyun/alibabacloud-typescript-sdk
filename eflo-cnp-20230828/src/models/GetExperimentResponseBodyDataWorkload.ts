// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetExperimentResponseBodyDataWorkloadParamSettings } from "./GetExperimentResponseBodyDataWorkloadParamSettings";
import { GetExperimentResponseBodyDataWorkloadStaticConfig } from "./GetExperimentResponseBodyDataWorkloadStaticConfig";


export class GetExperimentResponseBodyDataWorkload extends $dara.Model {
  /**
   * @remarks
   * Default CPU allocation
   * 
   * @example
   * 90
   */
  defaultCpuPerWorker?: number;
  /**
   * @remarks
   * Default GPU allocation
   * 
   * @example
   * 8
   */
  defaultGpuPerWorker?: number;
  /**
   * @remarks
   * Default memory (GB) allocation
   * 
   * @example
   * 500
   */
  defaultMemoryPerWorker?: number;
  /**
   * @remarks
   * Default shared memory (GB) allocation
   * 
   * @example
   * 500
   */
  defaultShareMemory?: number;
  /**
   * @remarks
   * Workload cluster, AI, GPU
   * 
   * @example
   * AI
   */
  family?: string;
  /**
   * @remarks
   * JobKind
   * 
   * @example
   * PyTorchJob
   */
  jobKind?: string;
  /**
   * @remarks
   * Parameter settings
   */
  paramSettings?: GetExperimentResponseBodyDataWorkloadParamSettings[];
  /**
   * @remarks
   * Workload usage scenario
   * 
   * @example
   * NLP-LLM
   */
  scene?: string;
  /**
   * @remarks
   * Scope
   * 
   * @example
   * common
   */
  scope?: string;
  /**
   * @remarks
   * Static configuration
   */
  staticConfig?: GetExperimentResponseBodyDataWorkloadStaticConfig;
  /**
   * @remarks
   * Version ID
   * 
   * @example
   * 1
   */
  versionId?: number;
  /**
   * @remarks
   * Workload description
   * 
   * @example
   * test
   */
  workloadDescription?: string;
  /**
   * @remarks
   * Workload ID
   * 
   * @example
   * 13
   */
  workloadId?: number;
  /**
   * @remarks
   * Workload name
   * 
   * @example
   * test
   */
  workloadName?: string;
  /**
   * @remarks
   * Workload name
   * 
   * @example
   * AI
   */
  workloadType?: string;
  static names(): { [key: string]: string } {
    return {
      defaultCpuPerWorker: 'DefaultCpuPerWorker',
      defaultGpuPerWorker: 'DefaultGpuPerWorker',
      defaultMemoryPerWorker: 'DefaultMemoryPerWorker',
      defaultShareMemory: 'DefaultShareMemory',
      family: 'Family',
      jobKind: 'JobKind',
      paramSettings: 'ParamSettings',
      scene: 'Scene',
      scope: 'Scope',
      staticConfig: 'StaticConfig',
      versionId: 'VersionId',
      workloadDescription: 'WorkloadDescription',
      workloadId: 'WorkloadId',
      workloadName: 'WorkloadName',
      workloadType: 'WorkloadType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultCpuPerWorker: 'number',
      defaultGpuPerWorker: 'number',
      defaultMemoryPerWorker: 'number',
      defaultShareMemory: 'number',
      family: 'string',
      jobKind: 'string',
      paramSettings: { 'type': 'array', 'itemType': GetExperimentResponseBodyDataWorkloadParamSettings },
      scene: 'string',
      scope: 'string',
      staticConfig: GetExperimentResponseBodyDataWorkloadStaticConfig,
      versionId: 'number',
      workloadDescription: 'string',
      workloadId: 'number',
      workloadName: 'string',
      workloadType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.paramSettings)) {
      $dara.Model.validateArray(this.paramSettings);
    }
    if(this.staticConfig && typeof (this.staticConfig as any).validate === 'function') {
      (this.staticConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

