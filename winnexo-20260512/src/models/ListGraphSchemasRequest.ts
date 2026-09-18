// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGraphSchemasRequest extends $dara.Model {
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
  semanticTags?: string[];
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
      semanticTags: 'semanticTags',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      semanticTags: { 'type': 'array', 'itemType': 'string' },
      tenantId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.semanticTags)) {
      $dara.Model.validateArray(this.semanticTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

