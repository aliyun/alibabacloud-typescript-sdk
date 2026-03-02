// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JobMetric extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * @example
   * 2
   */
  totalCpu?: number;
  /**
   * @remarks
   * The memory size. Unit: bytes.
   * 
   * @example
   * 4096
   */
  totalMemoryByte?: number;
  static names(): { [key: string]: string } {
    return {
      totalCpu: 'totalCpu',
      totalMemoryByte: 'totalMemoryByte',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCpu: 'number',
      totalMemoryByte: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

