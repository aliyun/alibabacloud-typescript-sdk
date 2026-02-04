// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * Business ID
   * 
   * @example
   * WS20250731233102000001
   */
  bizId?: string;
  /**
   * @remarks
   * End time start
   * 
   * @example
   * 2025-12-18T14:30:00Z
   */
  endTimeBegin?: string;
  /**
   * @remarks
   * End time end
   * 
   * @example
   * 2025-12-31T14:30:00Z
   */
  endTimeEnd?: string;
  /**
   * @remarks
   * Extended information
   * 
   * @example
   * {}
   */
  extend?: string;
  /**
   * @remarks
   * Number of results per query.
   * 
   * Range: 10~100. Default value: 20.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * Token for the next query. It will be empty if there is no next query.
   * 
   * @example
   * AAAAARbaCuN6hiD08qrLdwJ9Fh3BFw8paIJ7ylB6A7Qn9JjM
   */
  nextToken?: string;
  /**
   * @remarks
   * Order column
   * 
   * @example
   * gmtCreated
   */
  orderColumn?: string;
  /**
   * @remarks
   * Order type ASC|DESC
   * 
   * @example
   * DOWNGRADE
   */
  orderType?: string;
  /**
   * @remarks
   * Page number, default is 1
   * 
   * @example
   * 0
   */
  pageNum?: number;
  /**
   * @remarks
   * Page size, default is 10
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Query parameter
   * 
   * @example
   * {\\"RequestId\\":\\"\\"}
   */
  query?: string;
  /**
   * @remarks
   * Status range
   */
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

