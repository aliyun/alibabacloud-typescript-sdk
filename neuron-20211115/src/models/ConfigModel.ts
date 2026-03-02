// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigModel extends $dara.Model {
  attribute?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      attribute: 'attribute',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attribute: 'string',
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

