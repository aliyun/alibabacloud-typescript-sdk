// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopInstancesShrinkRequest extends $dara.Model {
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

