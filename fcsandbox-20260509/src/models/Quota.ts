// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Quota extends $dara.Model {
  /**
   * @remarks
   * The vCPU quota limit. Unit: cores.
   * 
   * @example
   * 32
   */
  cpuCores?: number;
  /**
   * @remarks
   * The memory quota limit. Unit: GB.
   * 
   * @example
   * 64
   */
  memoryGB?: number;
  /**
   * @remarks
   * Team ID
   * 
   * @example
   * f79d6a95-abcd-47a8-9167-eccf0622a998
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      cpuCores: 'cpuCores',
      memoryGB: 'memoryGB',
      tagValue: 'tagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCores: 'number',
      memoryGB: 'number',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

