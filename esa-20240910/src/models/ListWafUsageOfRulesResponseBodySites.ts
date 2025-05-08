// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWafUsageOfRulesResponseBodySites extends $dara.Model {
  /**
   * @remarks
   * Site ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * Site name.
   * 
   * @example
   * example.com
   */
  name?: string;
  /**
   * @remarks
   * Usage of WAF rules/WAF rule sets.
   * 
   * @example
   * 1
   */
  usage?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      usage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

