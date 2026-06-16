// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLoanExecListRequest extends $dara.Model {
  /**
   * @remarks
   * The language type for sending requests and receiving responses. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The import batch number.
   * 
   * @example
   * 1
   */
  batchNo?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The monitoring metric data.
   * 
   * @example
   * de_afghcf6411
   */
  monitorObj?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * WAIT
   */
  monitorStatus?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The region ID.
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

