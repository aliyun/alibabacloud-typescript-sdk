// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRuleCategoryResponseBodyDataRuleCountInfo extends $dara.Model {
  /**
   * @example
   * false
   */
  select?: boolean;
  /**
   * @example
   * 22
   */
  type?: number;
  typeName?: string;
  static names(): { [key: string]: string } {
    return {
      select: 'Select',
      type: 'Type',
      typeName: 'TypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      select: 'boolean',
      type: 'number',
      typeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

