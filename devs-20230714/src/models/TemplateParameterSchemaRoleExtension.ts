// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TemplateParameterSchemaRoleExtension extends $dara.Model {
  authorities?: string[];
  name?: string;
  service?: string;
  static names(): { [key: string]: string } {
    return {
      authorities: 'authorities',
      name: 'name',
      service: 'service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorities: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      service: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.authorities)) {
      $dara.Model.validateArray(this.authorities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

