// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeliveryHistoryJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * - The value must be greater than or equal to 1.
   * 
   * - Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * - Valid values: 1 to 100.
   * 
   * - Default value: 20.
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

