// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConfigurationPriceRequest extends $dara.Model {
  /**
   * @remarks
   * The BestEffort policy. Valid values:
   * 
   * - besteffort: BestEffort.
   * - try-besteffort: BestEffort preferred.
   * - default: Default.
   * 
   * @example
   * default
   */
  bestEffortType?: string;
  /**
   * @remarks
   * The required CPU for each instance, in millicores. The value cannot be 0. Only the following defined specifications are supported:
   * - **500**
   * - **1000**
   * - **2000**
   * - **4000**
   * - **8000**
   * - **12000**
   * - **16000**
   * - **32000**
   * 
   * This parameter is required.
   * 
   * @example
   * 2000
   */
  cpu?: number;
  /**
   * @remarks
   * The number of A10 GPUs.
   * 
   * @example
   * 0
   */
  gpuA10?: string;
  /**
   * @remarks
   * The number of PPU 810E units.
   * 
   * @example
   * 0
   */
  gpuPpu810e?: string;
  /**
   * @remarks
   * The required memory for each instance, in MB. The value cannot be 0. Memory has a one-to-one mapping with CPU. Only the following defined specifications are supported:
   * - **1024**: Corresponds to 500 and 1000 millicores.
   * - **2048**: Corresponds to 500, 1000, and 2000 millicores.
   * - **4096**: Corresponds to 1000, 2000, and 4000 millicores.
   * - **8192**: Corresponds to 2000, 4000, and 8000 millicores.
   * - **12288**: Corresponds to 12000 millicores.
   * - **16384**: Corresponds to 4000, 8000, and 16000 millicores.
   * - **24576**: Corresponds to 12000 millicores.
   * - **32768**: Corresponds to 16000 millicores.
   * - **65536**: Corresponds to 8000, 16000, and 32000 millicores.
   * - **131072**: Corresponds to 32000 millicores.
   * 
   * This parameter is required.
   * 
   * @example
   * 4096
   */
  memory?: number;
  /**
   * @remarks
   * The application edition. Valid values:
   * 
   * - lite: Lite Edition.
   * - std: Standard Edition.
   * - pro: Professional Edition.
   * 
   * @example
   * std
   */
  newSaeVersion?: string;
  /**
   * @remarks
   * The resource type. Valid values: NULL (default), default (default), and haiguang (Hygon server).
   * 
   * @example
   * default
   */
  resourceType?: string;
  /**
   * @remarks
   * Common scenarios. Valid values:
   * 
   * - web
   * 
   * - micro_service
   * 
   * @example
   * Web
   */
  workload?: string;
  static names(): { [key: string]: string } {
    return {
      bestEffortType: 'BestEffortType',
      cpu: 'Cpu',
      gpuA10: 'GpuA10',
      gpuPpu810e: 'GpuPpu810e',
      memory: 'Memory',
      newSaeVersion: 'NewSaeVersion',
      resourceType: 'ResourceType',
      workload: 'Workload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bestEffortType: 'string',
      cpu: 'number',
      gpuA10: 'string',
      gpuPpu810e: 'string',
      memory: 'number',
      newSaeVersion: 'string',
      resourceType: 'string',
      workload: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

