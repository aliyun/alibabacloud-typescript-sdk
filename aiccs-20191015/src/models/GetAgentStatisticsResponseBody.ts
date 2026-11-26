// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentStatisticsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 2000
   */
  pageSize?: number;
  /**
   * @remarks
   * The data rows, which is a JSON string of the List<Map> type.
   * 
   * @example
   * {"n_resttype_1":15,"t_outcall_speak":829747,"average_incoming_time":"8451.29","n_resttype_3":0,"minute_id":"-1","n_conference_speak":0,"n_resttype_2":0,"n_resttype_5":0,"n_resttype_4":0,"n_resttype_7":0,"n_resttype_6":0,"n_resttype_9":0,"n_resttype_8":0,"n_outcall_dial":25,"total_break_time":"58555","n_internal_speak":0,"n_send_step_transfer":7,"n_consulted_internal_speak":0}
   */
  rows?: string;
  /**
   * @remarks
   * The total number of records.
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

export class GetAgentStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A value of 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data list.
   */
  data?: GetAgentStatisticsResponseBodyData;
  /**
   * @remarks
   * The status code description.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. Valid values:
   * - **true**: Successful.
   * - **false**: Failed.
   * 
   * @example
   * true
   */
  success?: string;
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
      data: GetAgentStatisticsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
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

