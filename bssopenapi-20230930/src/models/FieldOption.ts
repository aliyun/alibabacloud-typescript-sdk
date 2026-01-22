// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FieldOption extends $dara.Model {
  functionCode?: string;
  isDefault?: boolean;
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      functionCode: 'FunctionCode',
      isDefault: 'IsDefault',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionCode: 'string',
      isDefault: 'boolean',
      name: 'string',
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

