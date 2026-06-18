// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSkillGroupStatusTotalResponseBodyData extends $dara.Model {
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
   * Information as a JSON string of type List<Map>.
   * 
   * @example
   * {"minute_id":"-1","call_out_intervene_servicer_cnt":26,"call_out_servicer_cnt":35,"call_out_intervene_60s_cnt":155,"servicer_real_name":"--","call_in_sep_normal_cnt":0,"call_out_intervene_30s_cnt":235,"servicer_id":"-1","tenant_name":"非单元测试化BU","call_out_sep_sat_cnt":1}
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

export class GetSkillGroupStatusTotalResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code. A return value of 200 indicates that the Request succeeded.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * List of data.
   */
  data?: GetSkillGroupStatusTotalResponseBodyData;
  /**
   * @remarks
   * Description of the status code.
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
   * Indicates whether the API invoke succeeded. Valid values:
   * - **true**: Succeeded.
   * - **false**: failed.
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
      data: GetSkillGroupStatusTotalResponseBodyData,
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

