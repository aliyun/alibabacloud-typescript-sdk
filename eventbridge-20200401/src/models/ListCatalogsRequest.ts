// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCatalogsRequest extends $dara.Model {
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
   * Pagination token
   * 
   * @example
   * 0
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'Limit',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
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

