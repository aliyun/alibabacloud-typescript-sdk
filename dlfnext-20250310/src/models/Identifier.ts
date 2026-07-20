// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Identifier extends $dara.Model {
  database?: string;
  object?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'database',
      object: 'object',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      object: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

