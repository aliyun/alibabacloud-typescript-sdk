// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloneVoiceModelsResponseBodyDataCloneVoiceModels extends $dara.Model {
  /**
   * @remarks
   * 描述
   * 
   * @example
   * 响应敏捷、自适应语气调节、复杂文本处理效果好
   */
  description?: string;
  /**
   * @remarks
   * 显示名称
   * 
   * @example
   * Qwen
   */
  displayName?: string;
  /**
   * @remarks
   * 名称
   * 
   * @example
   * QwenVc
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloneVoiceModelsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 数据列表
   */
  cloneVoiceModels?: ListCloneVoiceModelsResponseBodyDataCloneVoiceModels[];
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
      cloneVoiceModels: 'CloneVoiceModels',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloneVoiceModels: { 'type': 'array', 'itemType': ListCloneVoiceModelsResponseBodyDataCloneVoiceModels },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.cloneVoiceModels)) {
      $dara.Model.validateArray(this.cloneVoiceModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloneVoiceModelsResponseBody extends $dara.Model {
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
  data?: ListCloneVoiceModelsResponseBodyData;
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
   * Instance does not exist. Instance=392db13c-8901-4a25-b566-91d0d8114cec
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
      data: ListCloneVoiceModelsResponseBodyData,
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

