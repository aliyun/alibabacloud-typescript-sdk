// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEventHouseRuntimeRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the EventHouse Runtime. If this parameter is not specified, the default Runtime is queried.
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

