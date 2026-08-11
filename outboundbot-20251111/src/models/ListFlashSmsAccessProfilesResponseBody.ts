// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFlashSmsAccessProfilesResponseBodyDataFlashSmsAccessProfiles extends $dara.Model {
  /**
   * @remarks
   * The provider configuration information.
   * 
   * @example
   * {"apiId":"100235","apiKey":"3aRsPrTsDG3OPNq5","aesKey":"TQChVEAabhaNp2AB","capAppId":"300012117547"}
   */
  accessProfile?: string;
  /**
   * @remarks
   * The flash SMS configuration ID.
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b04
   */
  accessProfileId?: string;
  /**
   * @remarks
   * The creation time, in millisecond-level timestamp.
   * 
   * @example
   * 1735660800000
   */
  createdTime?: number;
  /**
   * @remarks
   * The provider ID. Valid values:\\
   * Uincall: Beijing Youyin Communication Co., Ltd.\\
   * ChuangLan: Beijing ChuangLan Cloud Intelligence Information Co., Ltd.\\
   * ChinaMobile: China Mobile.\\
   * ShangHaiTianNan: Shanghai Tiannan.\\
   * HeDao: Galexis.\\
   * DySms: Alibaba Communication.
   * 
   * @example
   * Uincall
   */
  providerId?: string;
  /**
   * @remarks
   * The provider name.
   * 
   * @example
   * 北京优音通信有限公司
   */
  providerName?: string;
  /**
   * @remarks
   * The update time, in millisecond-level timestamp.
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
   * The data list.
   */
  flashSmsAccessProfiles?: ListFlashSmsAccessProfilesResponseBodyDataFlashSmsAccessProfiles[];
  /**
   * @remarks
   * The page number, starting from 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of records that match the conditions.
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
   * The return code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: ListFlashSmsAccessProfilesResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Instance does not exist. Instance=outb001
   */
  message?: string;
  /**
   * @remarks
   * The list of variable values in the error message.
   */
  params?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b04
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
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

