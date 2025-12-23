// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFunctionDefaultInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * "pop_test"
   */
  instanceName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'instanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

