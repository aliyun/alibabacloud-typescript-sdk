// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindDeviceSeatsShrinkRequest extends $dara.Model {
  serialNoListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      serialNoListShrink: 'SerialNoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serialNoListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

