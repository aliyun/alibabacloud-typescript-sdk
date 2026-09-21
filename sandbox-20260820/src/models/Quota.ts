// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Quota extends $dara.Model {
  /**
   * @example
   * 100
   */
  cpuCores?: number;
  /**
   * @example
   * 100
   */
  instanceCount?: number;
  /**
   * @example
   * 200
   */
  memoryGB?: number;
  /**
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

