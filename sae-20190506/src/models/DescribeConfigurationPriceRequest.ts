// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConfigurationPriceRequest extends $dara.Model {
  /**
   * @remarks
   * The BestEffort policy. Valid values:
   * 
   * - besteffort: BestEffort
   * 
   * - try-besteffort: BestEffort preferred
   * 
   * - default: default
   * 
   * @example
   * default
   */
  bestEffortType?: string;
  /**
   * @remarks
   * The number of CPU cores required for each instance. Unit: millicores. This value cannot be 0. Only the following defined specifications are supported:
   * 
   * - **500**
   * 
   * - **1000**
   * 
   * - **2000**
   * 
   * - **4000**
   * 
   * - **8000**
   * 
   * - **12000**
   * 
   * - **16000**
   * 
   * - **32000**
   * 
   * This parameter is required.
   * 
   * @example
   * 2000
   */
  cpu?: number;
  gpuA10?: string;
  gpuPpu810e?: string;
  /**
   * @remarks
   * The amount of memory required for each instance. Unit: MB. This value cannot be 0. The memory size must correspond to the CPU specification. Only the following defined specifications are supported:
   * 
   * - **1024**: Corresponds to 500 millicores and 1,000 millicores of CPU.
   * 
   * - **2048**: Corresponds to 500, 1,000, and 2,000 millicores of CPU.
   * 
   * - **4096**: Corresponds to 1,000, 2,000, and 4,000 millicores of CPU.
   * 
   * - **8192**: Corresponds to 2,000, 4,000, and 8,000 millicores of CPU.
   * 
   * - **12288**: Corresponds to 12,000 millicores of CPU.
   * 
   * - **16384**: Corresponds to 4,000, 8,000, and 16,000 millicores of CPU.
   * 
   * - **24576**: Corresponds to 12,000 millicores of CPU.
   * 
   * - **32768**: Corresponds to 16,000 millicores of CPU.
   * 
   * - **65536**: Corresponds to 8,000, 16,000, and 32,000 millicores of CPU.
   * 
   * - **131072**: Corresponds to 32,000 millicores of CPU.
   * 
   * This parameter is required.
   * 
   * @example
   * 4096
   */
  memory?: number;
  /**
   * @remarks
   * The application version. Valid values:
   * 
   * - lite: Lightweight Edition
   * 
   * - std: Standard Edition
   * 
   * - pro: Professional Edition
   * 
   * @example
   * std
   */
  newSaeVersion?: string;
  /**
   * @remarks
   * The resource type. Valid values: NULL (default), default, and haiguang (Haiguang server).
   * 
   * @example
   * default
   */
  resourceType?: string;
  /**
   * @remarks
   * The application scenario. Valid values:
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

