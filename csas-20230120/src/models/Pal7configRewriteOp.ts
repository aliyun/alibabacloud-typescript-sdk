// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PAL7ConfigRewriteOp extends $dara.Model {
  key?: string;
  oldValue?: string;
  /**
   * @example
   * add,set,delete,replace
   */
  op?: string;
  value?: string;
  valueVariable?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      oldValue: 'OldValue',
      op: 'Op',
      value: 'Value',
      valueVariable: 'ValueVariable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      oldValue: 'string',
      op: 'string',
      value: 'string',
      valueVariable: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

