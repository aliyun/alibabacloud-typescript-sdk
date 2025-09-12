// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SelectDataSetRequest extends $dara.Model {
  body?: number;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

