// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTodoTaskRequestActionListParam extends $dara.Model {
  body?: string;
  header?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      header: 'header',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      header: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.header) {
      $dara.Model.validateMap(this.header);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

