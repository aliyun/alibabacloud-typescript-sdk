// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEventHouseRuntimeRequest extends $dara.Model {
  /**
   * @remarks
   * The number of compute units (CUs) for the EventHouse runtime. The value must be greater than 0.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  cu?: number;
  /**
   * @remarks
   * The name of the EventHouse runtime. If you do not specify this parameter, the default runtime is used. Typically, you do not need to specify this parameter in the initial phase.
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

