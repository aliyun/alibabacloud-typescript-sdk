// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FilterSettingConditions extends $dara.Model {
  field?: string;
  op?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'field',
      op: 'op',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      op: 'string',
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

