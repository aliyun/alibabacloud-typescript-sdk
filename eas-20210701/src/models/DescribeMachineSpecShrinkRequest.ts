// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMachineSpecShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @deprecated
   */
  instanceTypesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      instanceTypesShrink: 'InstanceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

