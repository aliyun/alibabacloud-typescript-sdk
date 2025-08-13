// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSafOrderRequest extends $dara.Model {
  /**
   * @remarks
   * Set the language type for request and response, default value is **zh**. Values:
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
   * End date.
   * 
   * @example
   * 1755076800000
   */
  endDate?: string;
  /**
   * @remarks
   * Product code.
   * 
   * @example
   * saf_de
   */
  exactProductCode?: string;
  /**
   * @remarks
   * Page size, default value is 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * Start time.
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

