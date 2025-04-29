// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModuleAgentInfosAttributeShowInfoMapValue extends $dara.Model {
  code?: string;
  name?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      name: 'name',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

