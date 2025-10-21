// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Property extends $dara.Model {
  defaultValue?: string;
  definesFormat?: boolean;
  description?: string;
  key?: string;
  required?: boolean;
  sensitive?: boolean;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'defaultValue',
      definesFormat: 'definesFormat',
      description: 'description',
      key: 'key',
      required: 'required',
      sensitive: 'sensitive',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      definesFormat: 'boolean',
      description: 'string',
      key: 'string',
      required: 'boolean',
      sensitive: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

