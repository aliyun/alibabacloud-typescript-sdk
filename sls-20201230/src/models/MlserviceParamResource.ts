// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MLServiceParamResource extends $dara.Model {
  /**
   * @example
   * 2
   */
  cpuLimit?: number;
  /**
   * @example
   * 20
   */
  gpu?: number;
  /**
   * @example
   * 64
   */
  memoryLimit?: number;
  /**
   * @example
   * 2
   */
  replica?: number;
  static names(): { [key: string]: string } {
    return {
      cpuLimit: 'cpuLimit',
      gpu: 'gpu',
      memoryLimit: 'memoryLimit',
      replica: 'replica',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuLimit: 'number',
      gpu: 'number',
      memoryLimit: 'number',
      replica: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

