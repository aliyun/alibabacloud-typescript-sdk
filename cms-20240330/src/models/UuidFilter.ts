// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UuidFilter extends $dara.Model {
  eq?: string;
  in?: string[];
  static names(): { [key: string]: string } {
    return {
      eq: 'eq',
      in: 'in',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eq: 'string',
      in: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.in)) {
      $dara.Model.validateArray(this.in);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

