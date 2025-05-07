// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateViewPointResponseBodyData extends $dara.Model {
  point?: string;
  static names(): { [key: string]: string } {
    return {
      point: 'Point',
    };
  }

  static types(): { [key: string]: any } {
    return {
      point: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

