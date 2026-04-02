// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisplayNameFilter extends $dara.Model {
  contains?: string;
  notContains?: string;
  static names(): { [key: string]: string } {
    return {
      contains: 'contains',
      notContains: 'notContains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contains: 'string',
      notContains: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

