// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWhitelistSettingRequest extends $dara.Model {
  /**
   * @remarks
   * The ID card number to add to the whitelist.
   * 
   * @example
   * 44018219950810XXXX
   */
  certNo?: string;
  /**
   * @remarks
   * The certificate ID. The user associated with this authentication is added to the whitelist.
   * 
   * @example
   * sha6d0405f42926084e396e76a037d00
   */
  certifyId?: string;
  /**
   * @remarks
   * The user language.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The remarks for the whitelist.
   * 
   * @example
   * 测试白名单。
   */
  remark?: string;
  /**
   * @remarks
   * The scene ID.
   * 
   * @example
   * 1000014526
   */
  sceneId?: number;
  /**
   * @remarks
   * The service type. Valid values:
   * - **antcloudauth**: Financial-grade ID Verification.
   * - **cloudauthst** (discontinued): ID Verification Enhanced Edition.
   * 
   * This parameter is required.
   * 
   * @example
   * antcloudauth
   */
  serviceCode?: string;
  /**
   * @remarks
   * The source IP address of the visitor. You do not need to specify this parameter. The system automatically obtains the value.
   * 
   * @example
   * 27.115.63.58
   */
  sourceIp?: string;
  /**
   * @remarks
   * The number of valid days after the whitelist is created.
   * 
   * This parameter is required.
   * 
   * @example
   * 7
   */
  validDay?: number;
  /**
   * @example
   * SUPER
   */
  whitelistType?: string;
  static names(): { [key: string]: string } {
    return {
      certNo: 'CertNo',
      certifyId: 'CertifyId',
      lang: 'Lang',
      remark: 'Remark',
      sceneId: 'SceneId',
      serviceCode: 'ServiceCode',
      sourceIp: 'SourceIp',
      validDay: 'ValidDay',
      whitelistType: 'WhitelistType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certNo: 'string',
      certifyId: 'string',
      lang: 'string',
      remark: 'string',
      sceneId: 'number',
      serviceCode: 'string',
      sourceIp: 'string',
      validDay: 'number',
      whitelistType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

