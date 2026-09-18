// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGraphSchemasShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword for fuzzy match of component data in the form.
   * 
   * @example
   * crm
   */
  keyword?: string;
  /**
   * @remarks
   * The semantic tags used for filtering. A graph is retained if any tag matches.
   * 
   * @example
   * ["Sales"]
   */
  semanticTagsShrink?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. If this parameter is not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      semanticTagsShrink: 'semanticTags',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      semanticTagsShrink: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

