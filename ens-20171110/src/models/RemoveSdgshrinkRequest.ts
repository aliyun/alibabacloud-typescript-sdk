// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveSDGShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of AIC instance IDs.
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

