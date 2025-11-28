// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TemplateVariable extends $dara.Model {
  name?: string;
  properties?: any;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      properties: 'properties',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      properties: 'any',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

