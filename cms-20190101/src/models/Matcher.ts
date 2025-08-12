// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Matcher extends $dara.Model {
  label?: string;
  operator?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      operator: 'string',
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

