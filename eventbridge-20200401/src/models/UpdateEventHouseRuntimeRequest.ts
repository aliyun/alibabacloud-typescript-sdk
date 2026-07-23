// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEventHouseRuntimeRequest extends $dara.Model {
  /**
   * @remarks
   * The number of CUs for the EventHouse Runtime. The value must be greater than 0.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  cu?: number;
  /**
   * @remarks
   * The name of the EventHouse Runtime. If this parameter is not specified, the default Runtime is used. In most cases, you do not need to specify this parameter.
   * 
   * @example
   * default
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      cu: 'Cu',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cu: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

