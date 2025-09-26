// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateToolInput extends $dara.Model {
  description?: string;
  name?: string;
  schema?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      schema: 'schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      schema: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

