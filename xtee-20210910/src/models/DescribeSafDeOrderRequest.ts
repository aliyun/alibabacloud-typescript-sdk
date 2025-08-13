// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSafDeOrderRequest extends $dara.Model {
  /**
   * @remarks
   * Set the language type for request and response messages, default value is **zh**. Values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * End date
   * 
   * @example
   * 1728008155799
   */
  endDate?: string;
  /**
   * @remarks
   * Page size, default value is 10
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Region code
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * Start date.
   * 
   * @example
   * 1728008155799
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      currentPage: 'currentPage',
      endDate: 'endDate',
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

