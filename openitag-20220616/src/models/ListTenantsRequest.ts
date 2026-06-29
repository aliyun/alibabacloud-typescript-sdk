// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTenantsRequest extends $dara.Model {
  /**
   * @remarks
   * Page number of the tenant list. The starting value is 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of tenants displayed per page in a paged query. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

