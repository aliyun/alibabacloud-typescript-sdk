// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLoanTaskListRequest extends $dara.Model {
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
   * Import batch number.
   * 
   * @example
   * 1
   */
  batchNo?: string;
  /**
   * @remarks
   * Current page number. Default is: 1.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * Task status.
   * 
   * @example
   * WAIT
   */
  monitorStatus?: string;
  /**
   * @remarks
   * Page size, default value is 10.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * Region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      batchNo: 'batchNo',
      currentPage: 'currentPage',
      monitorStatus: 'monitorStatus',
      pageSize: 'pageSize',
      regId: 'regId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      batchNo: 'string',
      currentPage: 'string',
      monitorStatus: 'string',
      pageSize: 'string',
      regId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

