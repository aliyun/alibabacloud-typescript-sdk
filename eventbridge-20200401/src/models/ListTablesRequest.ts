// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTablesRequest extends $dara.Model {
  /**
   * @remarks
   * Data catalog
   * 
   * @example
   * my_catalog
   */
  catalog?: string;
  /**
   * @remarks
   * Items per page
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * Namespace
   * 
   * @example
   * my_namespace
   */
  namespace?: string;
  /**
   * @remarks
   * Pagination token
   * 
   * @example
   * 0
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      catalog: 'Catalog',
      limit: 'Limit',
      namespace: 'Namespace',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalog: 'string',
      limit: 'number',
      namespace: 'string',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

