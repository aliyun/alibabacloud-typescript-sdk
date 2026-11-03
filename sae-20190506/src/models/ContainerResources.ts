// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ContainerResources extends $dara.Model {
  /**
   * @remarks
   * The CPU specifications that are required for each instance. Unit: millicore. This parameter cannot be set to 0. Valid values:
   * 
   * *   **500**
   * *   **1000**
   * *   **2000**
   * *   **4000**
   * *   **8000**
   * *   **16000**
   * *   **32000**
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @remarks
   * The memory size that is required for each instance. Unit: MB. This parameter cannot be set to 0. The values of this parameter correspond to the values of the CPU parameter:
   * 
   * *   This parameter is set to **1024** if the CPU parameter is set to 500 or 1000.
   * *   This parameter is set to **2048** if the CPU parameter is set to 500, 1000, or 2000.
   * *   This parameter is set to **4096** if the CPU parameter is set to 1000, 2000, or 4000.
   * *   This parameter is set to **8192** if the CPU parameter is set to 2000, 4000, or 8000.
   * *   This parameter is set to **12288** if the CPU parameter is set to 12000.
   * *   This parameter is set to **16384** if the CPU parameter is set to 4000, 8000, or 16000.
   * *   This parameter is set to **24576** if the CPU parameter is set to 12000.
   * *   This parameter is set to **32768** if the CPU parameter is set to 16000.
   * *   This parameter is set to **65536** if the CPU parameter is set to 8000, 16000, or 32000.
   * *   This parameter is set to **131072** if the CPU parameter is set to 32000.
   * 
   * This parameter is required.
   * 
   * @example
   * 2048
   */
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      memory: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

