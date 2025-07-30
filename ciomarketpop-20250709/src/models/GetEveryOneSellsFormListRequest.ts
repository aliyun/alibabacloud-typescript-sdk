// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEveryOneSellsFormListRequest extends $dara.Model {
  auth?: string;
  static names(): { [key: string]: string } {
    return {
      auth: 'Auth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auth: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

