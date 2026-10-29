// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEventHouseRuntimeRequest extends $dara.Model {
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
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

