// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLoanExecListRequest extends $dara.Model {
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
   * Current page number.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * Monitoring metric data.
   * 
   * @example
   * de_afghcf6411
   */
  monitorObj?: string;
  /**
   * @remarks
   * Status
   * 
   * @example
   * WAIT
   */
  monitorStatus?: string;
  /**
   * @remarks
   * Page size, with a default value of 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * Region code
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
      monitorObj: 'monitorObj',
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
      monitorObj: 'string',
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

