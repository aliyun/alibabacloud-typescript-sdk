// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryReceiverByParamResponseBodyData } from "./QueryReceiverByParamResponseBodyData";


export class QueryReceiverByParamResponseBody extends $dara.Model {
  /**
   * @remarks
   * Used for pagination. If there are more results, set this returned value to the NextStart in the next request.
   * 
   * @example
   * 6aec200853#102#1638894326#test@example.com
   */
  nextStart?: string;
  /**
   * @remarks
   * Number of items displayed per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 10A1AD70-E48E-476D-98D9-39BD92193837
   */
  requestId?: string;
  /**
   * @remarks
   * Total count
   * 
   * @example
   * 15
   */
  totalCount?: number;
  /**
   * @remarks
   * Detailed information of the recipient list
   */
  data?: QueryReceiverByParamResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      nextStart: 'NextStart',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextStart: 'string',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      data: QueryReceiverByParamResponseBodyData,
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

