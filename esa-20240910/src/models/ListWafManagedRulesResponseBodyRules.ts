// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWafManagedRulesResponseBodyRules extends $dara.Model {
  /**
   * @remarks
   * Protection action of the managed rule.
   * 
   * @example
   * deny
   */
  action?: string;
  /**
   * @remarks
   * ID of the managed rule.
   * 
   * @example
   * 100001
   */
  id?: number;
  /**
   * @remarks
   * Name of the managed rule.
   * 
   * @example
   * SQL injection
   */
  name?: string;
  /**
   * @remarks
   * Protection level of the managed rule.
   * 
   * @example
   * 1
   */
  protectionLevel?: number;
  /**
   * @remarks
   * Protection status of the managed rule.
   * 
   * @example
   * on
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      id: 'Id',
      name: 'Name',
      protectionLevel: 'ProtectionLevel',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      id: 'number',
      name: 'string',
      protectionLevel: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

