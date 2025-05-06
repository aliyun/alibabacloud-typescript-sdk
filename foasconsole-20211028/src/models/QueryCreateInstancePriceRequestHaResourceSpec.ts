// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCreateInstancePriceRequestHaResourceSpec extends $dara.Model {
  /**
   * **if can be null:**
   * false
   */
  cpu?: number;
  /**
   * **if can be null:**
   * false
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

