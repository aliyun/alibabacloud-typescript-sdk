// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppInstancesRequest extends $dara.Model {
  /**
   * @example
   * WS20250731233102000001
   */
  bizId?: string;
  /**
   * @example
   * 2025-12-18T14:30:00Z
   */
  endTimeBegin?: string;
  /**
   * @example
   * 2025-12-31T14:30:00Z
   */
  endTimeEnd?: string;
  /**
   * @example
   * {}
   */
  extend?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * AAAAARbaCuN6hiD08qrLdwJ9Fh3BFw8paIJ7ylB6A7Qn9JjM
   */
  nextToken?: string;
  /**
   * @example
   * gmtCreated
   */
  orderColumn?: string;
  /**
   * @example
   * DOWNGRADE
   */
  orderType?: string;
  /**
   * @example
   * 0
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * {\\"RequestId\\":\\"\\"}
   */
  query?: string;
  statusList?: string[];
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      endTimeBegin: 'EndTimeBegin',
      endTimeEnd: 'EndTimeEnd',
      extend: 'Extend',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderColumn: 'OrderColumn',
      orderType: 'OrderType',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      query: 'Query',
      statusList: 'StatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      endTimeBegin: 'string',
      endTimeEnd: 'string',
      extend: 'string',
      maxResults: 'number',
      nextToken: 'string',
      orderColumn: 'string',
      orderType: 'string',
      pageNum: 'number',
      pageSize: 'number',
      query: 'string',
      statusList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.statusList)) {
      $dara.Model.validateArray(this.statusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

