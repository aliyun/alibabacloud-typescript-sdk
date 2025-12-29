// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUsageStatisticsByTagIdResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The authorization code.
   * 
   * @example
   * g61I8UV5zd
   */
  authorizationCode?: string;
  /**
   * @remarks
   * The numbers for which the query failed.
   * 
   * @example
   * 71
   */
  failTotal?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 20230312
   */
  gmtDateStr?: string;
  /**
   * @remarks
   * The ID of the authorization code usage record.
   * 
   * @example
   * 17
   */
  id?: number;
  /**
   * @remarks
   * The industry name.
   * 
   * @example
   * Home security
   */
  industryName?: string;
  /**
   * @remarks
   * The customer product ID (PID).
   * 
   * @example
   * 89
   */
  partnerId?: number;
  /**
   * @remarks
   * The scene name.
   * 
   * @example
   * Return visit
   */
  sceneName?: string;
  /**
   * @remarks
   * The numbers for which the query succeeded.
   * 
   * @example
   * 93
   */
  successTotal?: number;
  /**
   * @remarks
   * The tag name.
   * 
   * @example
   * 69
   */
  tagId?: number;
  /**
   * @remarks
   * The tag name.
   * 
   * @example
   * Alibaba Cloud Query
   */
  tagName?: string;
  /**
   * @remarks
   * The total quantity of numbers that are involved in the query.
   * 
   * @example
   * 41
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      authorizationCode: 'AuthorizationCode',
      failTotal: 'FailTotal',
      gmtDateStr: 'GmtDateStr',
      id: 'Id',
      industryName: 'IndustryName',
      partnerId: 'PartnerId',
      sceneName: 'SceneName',
      successTotal: 'SuccessTotal',
      tagId: 'TagId',
      tagName: 'TagName',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationCode: 'string',
      failTotal: 'number',
      gmtDateStr: 'string',
      id: 'number',
      industryName: 'string',
      partnerId: 'number',
      sceneName: 'string',
      successTotal: 'number',
      tagId: 'number',
      tagName: 'string',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUsageStatisticsByTagIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. **OK** indicates that the request is successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: QueryUsageStatisticsByTagIdResponseBodyData[];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D45CC751-34DF-5797-81FB-9A2ED6DC024B
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful.
   * 
   * *   true
   * *   false
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
      data: { 'type': 'array', 'itemType': QueryUsageStatisticsByTagIdResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

