// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUsageStatisticsByTagIdResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 授权码。
   * 
   * @example
   * g61I8UV5zd
   */
  authorizationCode?: string;
  /**
   * @remarks
   * 查询失败号码数。
   * 
   * @example
   * 71
   */
  failTotal?: number;
  /**
   * @remarks
   * 创建时间。
   * 
   * @example
   * 20230312
   */
  gmtDateStr?: string;
  /**
   * @remarks
   * 授权码使用记录ID。
   * 
   * @example
   * 4d32c9ef-c8b0-4d69-a437-cca5****185d
   */
  id?: number;
  /**
   * @remarks
   * 行业名称。
   * 
   * @example
   * 家政安保
   */
  industryName?: string;
  /**
   * @remarks
   * 客户pid。
   * 
   * @example
   * 10000013****071
   */
  partnerId?: number;
  /**
   * @remarks
   * 场景名称。
   * 
   * @example
   * 电话回访1
   */
  sceneName?: string;
  /**
   * @remarks
   * 查询成功号码数。
   * 
   * @example
   * 93
   */
  successTotal?: number;
  /**
   * @remarks
   * 标签名称。
   * 
   * @example
   * 69
   */
  tagId?: number;
  /**
   * @remarks
   * 标签名称。
   * 
   * @example
   * 阿里云查询
   */
  tagName?: string;
  /**
   * @remarks
   * 查询总号码数。
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
   * 请求状态码。 **OK**为成功。
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * 返回的数据内容。
   */
  data?: QueryUsageStatisticsByTagIdResponseBodyData[];
  /**
   * @remarks
   * 返回状态码描述。
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * 请求ID。
   * 
   * @example
   * D45CC751-34DF-5797-81FB-9A2ED6DC024B
   */
  requestId?: string;
  /**
   * @remarks
   * 表示是否调用成功。
   * - true：调用成功。             
   *  - false：调用失败。
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

