// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Column extends $dara.Model {
  isNull?: boolean;
  name?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      isNull: 'IsNull',
      name: 'Name',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isNull: 'boolean',
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

