// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInfoCheckExportRecordRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 2025-10-11 21:24:48
   */
  endDate?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * ID_CARD_2_META
   */
  productType?: string;
  /**
   * @example
   * 2025-10-11 21:24:48
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      productType: 'ProductType',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endDate: 'string',
      pageSize: 'number',
      productType: 'string',
      startDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

