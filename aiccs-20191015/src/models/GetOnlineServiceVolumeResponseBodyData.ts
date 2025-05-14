// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOnlineServiceVolumeResponseBodyData extends $dara.Model {
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
   * {"tenant_id":"905","online_40s_transfer_ready_cnt":109,"minute_id":"-1","wait_time_len":1215,"pickup_rate":"63.09%","thirty_seconds_to_pickUp":"2560","date_id":"-1","online_over_out_cnt":0,"online_20s_transfer_ready_cnt":109,"thirty_seconds_response_rate":"63.09%","abandonment_rate":"63.09%","service_time_len":68378,"service_pickup":"2560","hour_id":"-1","online_10s_transfer_ready_cnt":109}
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

