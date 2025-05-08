// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReinitInstancesShrinkRequest extends $dara.Model {
  imageId?: string;
  instanceIdsShrink?: string;
  password?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      instanceIdsShrink: 'InstanceIds',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      instanceIdsShrink: 'string',
      password: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

