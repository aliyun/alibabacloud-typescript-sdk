// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddEmployeeRequestBaseLocationList extends $dara.Model {
  code?: string;
  level?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      level: 'level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      level: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

