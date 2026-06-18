// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDepartmentalLatitudeAgentStatusResponseBodyData extends $dara.Model {
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
   * The information is a JSON string of type List<Map>.
   * 
   * @example
   * {"tenant_id":905,"n_resttype_now":0,"tenant_name":"非单元测试化BU","n_resttype1_now":0,"department_id":-1,"department_name":-1,"n_resttype98_now":0,"n_online_now":0,"date_id":20210329,"n_resttype3_now":0,"n_resttype5_now":0,"n_busy_now":0,"n_resttype2_now":0,"n_idle_now":0,"n_resttype4_now":0,"n_ack_now":0,"n_resttype99_now":0}
   */
  rows?: string;
  /**
   * @remarks
   * Total number of pages.
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

export class GetDepartmentalLatitudeAgentStatusResponseBody extends $dara.Model {
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
  data?: GetDepartmentalLatitudeAgentStatusResponseBodyData;
  /**
   * @remarks
   * Status code description.
   * 
   * @example
   * message
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
      data: GetDepartmentalLatitudeAgentStatusResponseBodyData,
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

