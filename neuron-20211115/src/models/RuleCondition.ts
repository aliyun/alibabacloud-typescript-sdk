// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RuleCondition extends $dara.Model {
  /**
   * @example
   * userId
   */
  name?: string;
  /**
   * @example
   * header
   */
  position?: string;
  /**
   * @example
   * ==
   */
  relation?: string;
  /**
   * @example
   * 10
   */
  value?: string;
  valueType?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      position: 'position',
      relation: 'relation',
      value: 'value',
      valueType: 'valueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      position: 'string',
      relation: 'string',
      value: 'string',
      valueType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

