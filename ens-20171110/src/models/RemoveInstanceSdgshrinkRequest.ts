// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveInstanceSDGShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of instance IDs. The value is a JSON array. A maximum of 100 IDs can be specified.
   * 
   * This parameter is required.
   */
  instanceIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIdsShrink: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

