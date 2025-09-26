// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCredentialInput extends $dara.Model {
  config?: { [key: string]: string };
  description?: string;
  name?: string;
  secret?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      description: 'description',
      name: 'name',
      secret: 'secret',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      description: 'string',
      name: 'string',
      secret: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.config) {
      $dara.Model.validateMap(this.config);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

