// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentServiceStatusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 2000
   */
  pageSize?: number;
  /**
   * @remarks
   * Information provided as a JSON string of type List<Map>.
   * 
   * @example
   * {"online_40s_transfer_ready_cnt":81,"minute_id":"-1","online_unsatis_cnt":0,"online_simple_cnt":0,"average_queue_time":-1,"service_pickup":"2086","total_waiting_time":"981","online_service_time_len":58208,"online_direct_give_up_len":0,"break_ratio":"2%"}
   */
  rows?: string;
  /**
   * @remarks
   * Total number of records.
   * 
   * @example
   * 4
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      rows: 'Rows',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      rows: 'string',
      totalNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentServiceStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code. A return value of 200 indicates that the request succeeded.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Data list.
   */
  data?: GetAgentServiceStatusResponseBodyData;
  /**
   * @remarks
   * Status code description.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call succeeded. Valid values:  
   * - **true**: Succeeded.  
   * - **false**: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetAgentServiceStatusResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

