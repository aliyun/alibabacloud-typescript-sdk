// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMachineSpecResponseBodyTypes extends $dara.Model {
  /**
   * @remarks
   * Valid values:
   * 
   * @example
   * 1
   */
  CPU?: number;
  /**
   * @remarks
   * The optional values for memory when CPU is set to a specific value as above.
   */
  memory?: number[];
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: 'number',
      memory: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.memory)) {
      $dara.Model.validateArray(this.memory);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

