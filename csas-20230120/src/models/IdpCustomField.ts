// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IdpCustomField extends $dara.Model {
  description?: string;
  key?: string;
  name?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      key: 'Key',
      name: 'Name',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      key: 'string',
      name: 'string',
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

