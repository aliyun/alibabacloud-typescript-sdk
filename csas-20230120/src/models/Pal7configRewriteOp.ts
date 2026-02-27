// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PAL7ConfigRewriteOp extends $dara.Model {
  /**
   * @example
   * X-Test-Param
   */
  key?: string;
  /**
   * @example
   * old_value
   */
  oldValue?: string;
  /**
   * @example
   * add
   */
  op?: string;
  /**
   * @example
   * new_value
   */
  value?: string;
  /**
   * @example
   * sase_app_name
   */
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

