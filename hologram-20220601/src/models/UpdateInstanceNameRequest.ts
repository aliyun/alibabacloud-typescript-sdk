// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceNameRequest extends $dara.Model {
  /**
   * @remarks
   * The new instance name. The name must be 2 to 64 characters in length. Each Chinese character or letter counts as one character.
   * 
   * @example
   * new_name
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

