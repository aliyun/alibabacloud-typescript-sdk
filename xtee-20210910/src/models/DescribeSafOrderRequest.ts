// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSafOrderRequest extends $dara.Model {
  /**
   * @remarks
   * The language type for the request and response messages. Default value: **zh**. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end date.
   * 
   * @example
   * 1755076800000
   */
  endDate?: string;
  /**
   * @remarks
   * The product code.
   * 
   * @example
   * saf_de
   */
  exactProductCode?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * The start date.
   * 
   * @example
   * 1752076800000
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      currentPage: 'currentPage',
      endDate: 'endDate',
      exactProductCode: 'exactProductCode',
      pageSize: 'pageSize',
      regId: 'regId',
      startDate: 'startDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      currentPage: 'number',
      endDate: 'string',
      exactProductCode: 'string',
      pageSize: 'number',
      regId: 'string',
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

