// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCredentialOutput extends $dara.Model {
  config?: { [key: string]: string };
  createdAt?: string;
  description?: string;
  id?: string;
  name?: string;
  secret?: string;
  type?: string;
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      createdAt: 'createdAt',
      description: 'description',
      id: 'id',
      name: 'name',
      secret: 'secret',
      type: 'type',
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      createdAt: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      secret: 'string',
      type: 'string',
      updatedAt: 'string',
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

