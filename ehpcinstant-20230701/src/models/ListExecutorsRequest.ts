// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListExecutorsRequestFilter } from "./ListExecutorsRequestFilter";


export class ListExecutorsRequest extends $dara.Model {
  filter?: ListExecutorsRequestFilter;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 50
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: ListExecutorsRequestFilter,
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(this.filter && typeof (this.filter as any).validate === 'function') {
      (this.filter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

