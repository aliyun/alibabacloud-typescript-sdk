// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReceiveMessageRequest extends $dara.Model {
  waitseconds?: number;
  static names(): { [key: string]: string } {
    return {
      waitseconds: 'waitseconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      waitseconds: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

