// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetWorkloadResponseBodyDataParamSettings } from "./GetWorkloadResponseBodyDataParamSettings";
import { GetWorkloadResponseBodyDataStaticConfig } from "./GetWorkloadResponseBodyDataStaticConfig";


export class GetWorkloadResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Default CPU Allocation per Worker
   * 
   * @example
   * 90
   */
  defaultCpuPerWorker?: number;
  /**
   * @remarks
   * Default GPU Allocation per Worker
   * 
   * @example
   * 8
   */
  defaultGpuPerWorker?: number;
  /**
   * @remarks
   * Default Memory (GB) Allocation per Worker
   * 
   * @example
   * 500
   */
  defaultMemoryPerWorker?: number;
  /**
   * @remarks
   * Default Shared Memory (GB) Allocation
   * 
   * @example
   * 500
   */
  defaultShareMemory?: number;
  /**
   * @remarks
   * Workload Cluster, e.g., AI, GPU
   * 
   * @example
   * AI
   */
  family?: string;
  /**
   * @remarks
   * Training Job Type
   * 
   * @example
   * PyTorchJob
   */
  jobKind?: string;
  /**
   * @remarks
   * Parameter Settings
   */
  paramSettings?: GetWorkloadResponseBodyDataParamSettings[];
  /**
   * @remarks
   * Workload Usage Scenario
   * 
   * @example
   * NLP-LLM
   */
  scene?: string;
  /**
   * @remarks
   * Scope Identifier for Workload Usage
   * 
   * @example
   * common
   */
  scope?: string;
  /**
   * @remarks
   * Static Configuration
   */
  staticConfig?: GetWorkloadResponseBodyDataStaticConfig;
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
   * Workload Description
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
   * Workload Name
   * 
   * @example
   * test
   */
  workloadName?: string;
  /**
   * @remarks
   * Workload Type
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
      paramSettings: { 'type': 'array', 'itemType': GetWorkloadResponseBodyDataParamSettings },
      scene: 'string',
      scope: 'string',
      staticConfig: GetWorkloadResponseBodyDataStaticConfig,
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

