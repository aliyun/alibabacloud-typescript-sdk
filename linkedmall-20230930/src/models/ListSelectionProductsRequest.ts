// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSelectionProductsRequest extends $dara.Model {
  /**
   * @remarks
   * The cursor.
   * 
   * @example
   * 134412333321
   */
  cursor?: string;
  /**
   * @remarks
   * The current page number. Pages start from 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 20.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the purchaser.
   * 
   * This parameter is required.
   * 
   * @example
   * PID22000009
   */
  purchaserId?: string;
  static names(): { [key: string]: string } {
    return {
      cursor: 'cursor',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      purchaserId: 'purchaserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cursor: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      purchaserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

