// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WritingStyleTemplateFieldEnums extends $dara.Model {
  cascadingFields?: string[];
  key?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      cascadingFields: 'CascadingFields',
      key: 'Key',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cascadingFields: { 'type': 'array', 'itemType': 'string' },
      key: 'string',
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cascadingFields)) {
      $dara.Model.validateArray(this.cascadingFields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

