// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateThreadResponseBodyThread extends $dara.Model {
  createAt?: number;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      createAt: 'createAt',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createAt: 'number',
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

