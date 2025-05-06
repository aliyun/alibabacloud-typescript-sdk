// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCreateInstancePriceRequestResourceSpec extends $dara.Model {
  /**
   * @example
   * 4
   */
  cpu?: number;
  /**
   * @example
   * 16
   */
  memoryGB?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      memoryGB: 'MemoryGB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      memoryGB: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

