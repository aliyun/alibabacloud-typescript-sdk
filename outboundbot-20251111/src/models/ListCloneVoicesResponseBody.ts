// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloneVoicesResponseBodyDataCloneVoices extends $dara.Model {
  /**
   * @remarks
   * 克隆音色ID
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b15
   */
  cloneVoiceId?: string;
  /**
   * @remarks
   * 创建时间，毫秒级时间戳
   * 
   * @example
   * 1735660800000
   */
  createdTime?: number;
  /**
   * @remarks
   * 实例ID
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b04
   */
  instanceId?: string;
  /**
   * @remarks
   * 模型名称
   * 
   * @example
   * CosyVoice
   */
  model?: string;
  /**
   * @remarks
   * 名称
   * 
   * @example
   * 测试克隆音
   */
  name?: string;
  /**
   * @remarks
   * 目前支持IFLYTEK、VOLC
   * 
   * @example
   * BAILIAN
   */
  nlsEngine?: string;
  /**
   * @remarks
   * 状态
   * 
   * @example
   * Published
   */
  status?: string;
  /**
   * @remarks
   * 租户ID
   * 
   * @example
   * 1308144684576765
   */
  tenantId?: string;
  /**
   * @remarks
   * 更新时间，毫秒级时间戳
   * 
   * @example
   * 1735660800000
   */
  updatedTime?: number;
  /**
   * @remarks
   * 音色
   * 
   * @example
   * cosyvoice-v3-flash-voicebot2-8aa485413eba42089c873eec1f901d64
   */
  voice?: string;
  static names(): { [key: string]: string } {
    return {
      cloneVoiceId: 'CloneVoiceId',
      createdTime: 'CreatedTime',
      instanceId: 'InstanceId',
      model: 'Model',
      name: 'Name',
      nlsEngine: 'NlsEngine',
      status: 'Status',
      tenantId: 'TenantId',
      updatedTime: 'UpdatedTime',
      voice: 'Voice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloneVoiceId: 'string',
      createdTime: 'number',
      instanceId: 'string',
      model: 'string',
      name: 'string',
      nlsEngine: 'string',
      status: 'string',
      tenantId: 'string',
      updatedTime: 'number',
      voice: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloneVoicesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 数据列表
   */
  cloneVoices?: ListCloneVoicesResponseBodyDataCloneVoices[];
  /**
   * @remarks
   * 页码，从1开始
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * 每页记录数
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * 符合条件的记录总数
   * 
   * @example
   * 0
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      cloneVoices: 'CloneVoices',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloneVoices: { 'type': 'array', 'itemType': ListCloneVoicesResponseBodyDataCloneVoices },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.cloneVoices)) {
      $dara.Model.validateArray(this.cloneVoices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloneVoicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * 返回码
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * 返回数据
   */
  data?: ListCloneVoicesResponseBodyData;
  /**
   * @remarks
   * HTTP状态码
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * 错误信息
   * 
   * @example
   * Instance does not exist. Instance=anchashi.
   */
  message?: string;
  /**
   * @remarks
   * 错误信息中的变量值列表
   */
  params?: string[];
  /**
   * @remarks
   * 请求ID
   * 
   * @example
   * 019FDAC7-13C5-1B64-A853-999DF105B9EF
   */
  requestId?: string;
  /**
   * @remarks
   * 是否调用成功
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListCloneVoicesResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

