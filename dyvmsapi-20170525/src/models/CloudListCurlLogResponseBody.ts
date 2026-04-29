// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudListCurlLogResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * 文本类型
   * 
   * @example
   * 1
   */
  contentType?: number;
  /**
   * @remarks
   * 创建时间
   * 
   * @example
   * 1774822134415
   */
  createTime?: string;
  /**
   * @remarks
   * 当月
   * 
   * @example
   * ""
   */
  currentMonth?: string;
  /**
   * @remarks
   * 延迟推送时间
   * 
   * @example
   * 0
   */
  delay?: number;
  /**
   * @remarks
   * 推送结束时间
   * 
   * @example
   * 1774822137959
   */
  endTime?: string;
  /**
   * @remarks
   * 企业id
   * 
   * @example
   * 7122600
   */
  enterpriseId?: string;
  /**
   * @remarks
   * 请求头
   * 
   * @example
   * {}
   */
  headers?: string;
  /**
   * @remarks
   * 日志id
   * 
   * @example
   * 12715
   */
  id?: string;
  /**
   * @remarks
   * 推送登记
   * 
   * @example
   * 0
   */
  level?: number;
  /**
   * @remarks
   * 推送方法
   * 
   * @example
   * GET
   */
  method?: string;
  /**
   * @remarks
   * 推送参数
   * 
   * @example
   * 示例值示例值示例值
   */
  params?: string;
  /**
   * @remarks
   * 推送位置
   * 
   * @example
   * 0
   */
  position?: string;
  /**
   * @remarks
   * 推送时间
   * 
   * @example
   * 1774822137191
   */
  requestTime?: string;
  /**
   * @remarks
   * 推送状态
   * 
   * @example
   * 1
   */
  result?: string;
  /**
   * @remarks
   * 返回文本
   * 
   * @example
   * 示例值示例值
   */
  resultText?: string;
  /**
   * @remarks
   * 重试次数
   * 
   * @example
   * 0
   */
  retry?: number;
  /**
   * @remarks
   * 推送开始时间
   * 
   * @example
   * 1774822134132
   */
  startTime?: string;
  /**
   * @remarks
   * 状态码
   * 
   * @example
   * 200
   */
  statusCode?: string;
  /**
   * @remarks
   * 超时时间
   * 
   * @example
   * 3
   */
  timeout?: string;
  /**
   * @remarks
   * 推送类型
   * 
   * @example
   * 9
   */
  type?: number;
  /**
   * @remarks
   * 推送类型字符串
   * 
   * @example
   * 示例值
   */
  typeStr?: string;
  /**
   * @remarks
   * 唯一标示
   * 
   * @example
   * ""
   */
  uniqueId?: string;
  /**
   * @remarks
   * 推送url
   * 
   * @example
   * https://www.aaa.com/index.htm
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      contentType: 'ContentType',
      createTime: 'CreateTime',
      currentMonth: 'CurrentMonth',
      delay: 'Delay',
      endTime: 'EndTime',
      enterpriseId: 'EnterpriseId',
      headers: 'Headers',
      id: 'Id',
      level: 'Level',
      method: 'Method',
      params: 'Params',
      position: 'Position',
      requestTime: 'RequestTime',
      result: 'Result',
      resultText: 'ResultText',
      retry: 'Retry',
      startTime: 'StartTime',
      statusCode: 'StatusCode',
      timeout: 'Timeout',
      type: 'Type',
      typeStr: 'TypeStr',
      uniqueId: 'UniqueId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'number',
      createTime: 'string',
      currentMonth: 'string',
      delay: 'number',
      endTime: 'string',
      enterpriseId: 'string',
      headers: 'string',
      id: 'string',
      level: 'number',
      method: 'string',
      params: 'string',
      position: 'string',
      requestTime: 'string',
      result: 'string',
      resultText: 'string',
      retry: 'number',
      startTime: 'string',
      statusCode: 'string',
      timeout: 'string',
      type: 'number',
      typeStr: 'string',
      uniqueId: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudListCurlLogResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 返回数据JSON格式
   */
  list?: CloudListCurlLogResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': CloudListCurlLogResponseBodyDataList },
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudListCurlLogResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: CloudListCurlLogResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 6086693B-2250-17CE-A41F-06259AB6DB1B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: CloudListCurlLogResponseBodyData,
      message: 'string',
      requestId: 'string',
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

