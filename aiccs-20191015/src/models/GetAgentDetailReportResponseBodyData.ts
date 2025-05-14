// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentDetailReportResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 2000
   */
  pageSize?: number;
  /**
   * @example
   * {"t_wait":379322.0,"hotline_time_outcall_avg":"32.00","n_ringing":0,"t_outbound_40":0.0,"hotline_time_incall_avg":-1,"t_calldialing":0.0,"n_inbound":276,"servicer_id":"-1","call_in_sep_sat_cnt":13,"request_cnt":231,"n_not_ready_99":811,"t_work_outbound":49338.0,"hotline_rate_handle_in_60s":"96%","n_not_ready_login":811,"t_not_ready_login":0.0,"n_work_inbound":176,"}
   */
  rows?: string;
  /**
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

