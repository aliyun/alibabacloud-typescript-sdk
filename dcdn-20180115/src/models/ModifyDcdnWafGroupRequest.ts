// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDcdnWafGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the custom WAF rule group.
   * 
   * This parameter is required.
   * 
   * @example
   * 30000110
   */
  id?: number;
  /**
   * @remarks
   * The name of the custom WAF rule group.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The incremental modifications of the rules in the custom WAF rule group. The value is a JSON string.
   * 
   * @example
   * {\\"All\\":false,\\"Op\\":\\"del\\",\\"List\\":\\"900109\\"}
   */
  rules?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      rules: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

