// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFlashSmsAccessProfilesResponseBodyDataFlashSmsAccessProfiles extends $dara.Model {
  /**
   * @remarks
   * 接入配置
   * 
   * @example
   * {"apiId":"100235","apiKey":"3aRsPrTsDG3OPNq5","aesKey":"TQChVEAabhaNp2AB","capAppId":"300012117547"}
   */
  accessProfile?: string;
  /**
   * @remarks
   * 接入配置ID
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b04
   */
  accessProfileId?: string;
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
   * 供应商ID
   * 
   * @example
   * Uincall
   */
  providerId?: string;
  /**
   * @remarks
   * 供应商名称
   * 
   * @example
   * 北京优音通信有限公司
   */
  providerName?: string;
  /**
   * @remarks
   * 更新时间，毫秒级时间戳
   * 
   * @example
   * 1735660800000
   */
  updatedTime?: number;
  static names(): { [key: string]: string } {
    return {
      accessProfile: 'AccessProfile',
      accessProfileId: 'AccessProfileId',
      createdTime: 'CreatedTime',
      providerId: 'ProviderId',
      providerName: 'ProviderName',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessProfile: 'string',
      accessProfileId: 'string',
      createdTime: 'number',
      providerId: 'string',
      providerName: 'string',
      updatedTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlashSmsAccessProfilesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 数据列表
   */
  flashSmsAccessProfiles?: ListFlashSmsAccessProfilesResponseBodyDataFlashSmsAccessProfiles[];
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
      flashSmsAccessProfiles: 'FlashSmsAccessProfiles',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flashSmsAccessProfiles: { 'type': 'array', 'itemType': ListFlashSmsAccessProfilesResponseBodyDataFlashSmsAccessProfiles },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.flashSmsAccessProfiles)) {
      $dara.Model.validateArray(this.flashSmsAccessProfiles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlashSmsAccessProfilesResponseBody extends $dara.Model {
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
  data?: ListFlashSmsAccessProfilesResponseBodyData;
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
   * Instance does not exist. Instance=outb001
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
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b04
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
      data: ListFlashSmsAccessProfilesResponseBodyData,
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

