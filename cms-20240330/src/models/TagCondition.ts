// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagCondition extends $dara.Model {
  key?: string;
  op?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      op: 'op',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

