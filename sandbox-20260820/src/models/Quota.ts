// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Quota extends $dara.Model {
  /**
   * @remarks
   * The vCPU quota. Unit: cores.
   * 
   * @example
   * 100
   */
  cpuCores?: number;
  /**
   * @remarks
   * The quota for the number of running instances.
   * 
   * @example
   * 100
   */
  instanceCount?: number;
  /**
   * @remarks
   * The memory quota. Unit: GB.
   * 
   * @example
   * 200
   */
  memoryGB?: number;
  /**
   * @remarks
   * The quota tag value, which is set to the team ID. Quotas are independently calculated based on this dimension.
   * 
   * @example
   * 7696f4cf-****
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      cpuCores: 'cpuCores',
      instanceCount: 'instanceCount',
      memoryGB: 'memoryGB',
      tagValue: 'tagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCores: 'number',
      instanceCount: 'number',
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

