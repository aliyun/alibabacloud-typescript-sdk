// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTemplateAllRulesResponseBodyRuleList extends $dara.Model {
  /**
   * @remarks
   * Unique ID of the model.
   * 
   * @example
   * 376
   */
  id?: number;
  /**
   * @remarks
   * Model name.
   * 
   * @example
   * Model Name
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

