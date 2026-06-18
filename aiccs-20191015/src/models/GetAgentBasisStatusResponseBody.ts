// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentBasisStatusResponseBodyData extends $dara.Model {
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
   * The information is a JSON string of the List<Map> type.
   * 
   * @example
   * {"tenant_id":"905","servicer_id":"73****","tenant_name":"测试","recordgmtmodified":"2021-04-01 11:36:50","pk_id":"7320372021****","statusstarttime":"2021-04-01 11:36:50","recordgmtcreate":"2021-04-01 10:06:24","department_id":"94****","department_name":"测试技能组","lstlogintime":"2021-04-01 10:06:24","date_id":"20210401","triggerreason":"3","servicer_status":"D","assignstatus":"1","servicerreal_name":"xx","servicerstatusname":"签出","fstlogintime":"2021-04-01 10:06:24","servicer_name":"xx"}
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

export class GetAgentBasisStatusResponseBody extends $dara.Model {
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
  data?: GetAgentBasisStatusResponseBodyData;
  /**
   * @remarks
   * Status code description.
   * 
   * @example
   * OK
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
   * Indicates whether the API was invoked successfully. Valid values:  
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
      data: GetAgentBasisStatusResponseBodyData,
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

