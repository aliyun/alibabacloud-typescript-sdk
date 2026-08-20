// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserVisibleKnowledgeBasesRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword for fuzzy match on knowledge base name or description.
   * 
   * @example
   * Product knowledge
   */
  keyword?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. In winnexo-cli, pass it explicitly with --tenant-id.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
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

