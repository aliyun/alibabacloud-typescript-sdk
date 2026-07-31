// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSemanticJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number, starting from 1. If this parameter is not specified or set to a value less than or equal to 0, the first page is returned.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of task definitions per page. If this parameter is not specified or set to a value less than or equal to 0, the default value 50 is used. Maximum value: 200.
   * 
   * @example
   * 50
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

