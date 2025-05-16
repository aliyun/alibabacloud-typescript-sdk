// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryBrokerDemandRecordResponseBodyData } from "./QueryBrokerDemandRecordResponseBodyData";


export class QueryBrokerDemandRecordResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPageNum?: number;
  data?: QueryBrokerDemandRecordResponseBodyData;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 497F7522-82B0-4BD4-84FE-AE8749E4C2F9
   */
  requestId?: string;
  /**
   * @example
   * 20
   */
  totalItemNum?: number;
  /**
   * @example
   * 1
   */
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      data: 'Data',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItemNum: 'TotalItemNum',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      data: QueryBrokerDemandRecordResponseBodyData,
      pageSize: 'number',
      requestId: 'string',
      totalItemNum: 'number',
      totalPageNum: 'number',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

