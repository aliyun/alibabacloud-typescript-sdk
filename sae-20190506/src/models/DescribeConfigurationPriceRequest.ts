// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConfigurationPriceRequest extends $dara.Model {
  bestEffortType?: string;
  /**
   * @remarks
   * The CPU specifications that are required for each instance. Unit: millicores. This parameter cannot be set to 0. Valid values:
   * 
   * *   **500**
   * *   **1000**
   * *   **2000**
   * *   **4000**
   * *   **8000**
   * *   **12000**
   * *   **16000**
   * *   **32000**
   * 
   * This parameter is required.
   * 
   * @example
   * 2000
   */
  cpu?: number;
  /**
   * @remarks
   * The memory size that is required by each instance. Unit: MB. This parameter cannot be set to 0. The values of this parameter correspond to the values of the Cpu parameter:
   * 
   * *   This parameter is set to **1024** if the Cpu parameter is set to 500 or 1000.
   * *   This parameter is set to **2048** if the Cpu parameter is set to 500, 1000, or 2000.
   * *   This parameter is set to **4096** if the Cpu parameter is set to 1000, 2000, or 4000.
   * *   This parameter is set to **8192** if the Cpu parameter is set to 2000, 4000, or 8,000.
   * *   This parameter is set to **12288** if the Cpu parameter is set to 12000.
   * *   This parameter is set to **16384** if the Cpu parameter is set to 4000, 8000, or 16000.
   * *   This parameter is set to **24576** if the Cpu parameter is set to 12000.
   * *   This parameter is set to **32768** if the Cpu parameter is set to 16000.
   * *   This parameter is set to **65536** if the Cpu parameter is set to 8000, 16000, or 32000.
   * *   This parameter is set to **131072** if the Cpu parameter is set to 32000.
   * 
   * This parameter is required.
   * 
   * @example
   * 4096
   */
  memory?: number;
  newSaeVersion?: string;
  resourceType?: string;
  /**
   * @remarks
   * Scenarios:
   * 
   * *   Web
   * *   micro_service
   * 
   * @example
   * Web
   */
  workload?: string;
  static names(): { [key: string]: string } {
    return {
      bestEffortType: 'BestEffortType',
      cpu: 'Cpu',
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

