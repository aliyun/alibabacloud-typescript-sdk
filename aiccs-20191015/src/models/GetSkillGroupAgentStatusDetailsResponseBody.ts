// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSkillGroupAgentStatusDetailsResponseBodyData extends $dara.Model {
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
   * The number of items per page.
   * 
   * @example
   * 2000
   */
  pageSize?: number;
  /**
   * @remarks
   * A JSON string of type List<Map>.
   * 
   * @example
   * {"tenant_id": "905", "tenant_name": "非单元测试化BU", "department_id": "-1", "svc_avai_capacity": 7,      "svc_current_capacity": 0, "department_name": "-1",  "svc_online_cnt": 3, "svc_ask_offline_servicer_num": 0,  "date_id": "20210401",  "svc_max_capacity": 7, "svc_rest_cnt": 0, "current_speci_ability_num": 0, "servicer_rest_cnt": 122, "max_speci_ability_num": 3,      "svc_offline_cnt": 0,  "svc_no_client_cnt": 3, "svc_ask_rest_servicer_num": 0}
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

export class GetSkillGroupAgentStatusDetailsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A return value of 200 indicates that the request succeeded.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Data list.
   */
  data?: GetSkillGroupAgentStatusDetailsResponseBodyData;
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
      data: GetSkillGroupAgentStatusDetailsResponseBodyData,
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

