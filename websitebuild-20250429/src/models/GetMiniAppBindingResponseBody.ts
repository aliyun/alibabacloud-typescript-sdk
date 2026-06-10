// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMiniAppBindingResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Authorization status
   * 
   * @example
   * disabled
   */
  authStatus?: string;
  /**
   * @remarks
   * Business ID
   * 
   * @example
   * WS20260206134402000001
   */
  bizId?: string;
  /**
   * @remarks
   * ICP filing status
   * 
   * @example
   * false
   */
  icpFiled?: boolean;
  /**
   * @remarks
   * Miniapp ID
   * 
   * @example
   * wx7f122a7d23fdxxxx
   */
  platformAppid?: string;
  /**
   * @remarks
   * Preview QR code
   * 
   * @example
   * http://xxxx
   */
  previewQrCodeUrl?: string;
  /**
   * @remarks
   * Production QR code
   * 
   * @example
   * http://xxxx
   */
  productionQrCodeUrl?: string;
  /**
   * @remarks
   * Extension information
   */
  settingValues?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      authStatus: 'AuthStatus',
      bizId: 'BizId',
      icpFiled: 'IcpFiled',
      platformAppid: 'PlatformAppid',
      previewQrCodeUrl: 'PreviewQrCodeUrl',
      productionQrCodeUrl: 'ProductionQrCodeUrl',
      settingValues: 'SettingValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authStatus: 'string',
      bizId: 'string',
      icpFiled: 'boolean',
      platformAppid: 'string',
      previewQrCodeUrl: 'string',
      productionQrCodeUrl: 'string',
      settingValues: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.settingValues) {
      $dara.Model.validateMap(this.settingValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMiniAppBindingResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request result.
   */
  data?: GetMiniAppBindingResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6C6B99AC-39EC-5350-874C-204128C905E6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetMiniAppBindingResponseBodyData,
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

