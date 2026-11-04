// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTimeTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies the page number to return. Pages start from 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries to return per page. Minimum value: 1. Maximum value: 50. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
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

