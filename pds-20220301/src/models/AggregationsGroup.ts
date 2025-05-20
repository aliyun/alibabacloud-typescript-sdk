// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AggregationsGroup extends $dara.Model {
  count?: number;
  value?: Buffer;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      value: 'Buffer',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

