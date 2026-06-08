// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ABTestScene extends $dara.Model {
  /**
   * @remarks
   * The alias of the test scenario.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The status of the test scenario. Valid values:
   * 
   * *   0: not in effect
   * *   1: in effect
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The ID of the test scenario
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      status: 'status',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      status: 'number',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

