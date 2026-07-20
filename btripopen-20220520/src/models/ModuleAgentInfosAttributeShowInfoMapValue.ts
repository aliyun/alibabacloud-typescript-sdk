// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModuleAgentInfosAttributeShowInfoMapValue extends $dara.Model {
  /**
   * @example
   * FIRST_BAGGAGE
   */
  code?: string;
  /**
   * @example
   * 行李1
   */
  name?: string;
  /**
   * @example
   * 行李详情
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      name: 'name',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

