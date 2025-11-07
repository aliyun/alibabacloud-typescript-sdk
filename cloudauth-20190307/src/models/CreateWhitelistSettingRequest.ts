// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWhitelistSettingRequest extends $dara.Model {
  /**
   * @remarks
   * ID number to be whitelisted.
   * 
   * @example
   * 44018219950810XXXX
   */
  certNo?: string;
  /**
   * @remarks
   * Certificate ID, used for whitelisting this specific authenticated user.
   * 
   * @example
   * sha6d0405f42926084e396e76a037d00
   */
  certifyId?: string;
  /**
   * @remarks
   * User language.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Whitelist remarks.
   * 
   * @example
   * 测试白名单。
   */
  remark?: string;
  /**
   * @remarks
   * Scene ID.
   * 
   * @example
   * 1000014526
   */
  sceneId?: number;
  /**
   * @remarks
   * Service type:
   * - **antcloudauth**: Financial-grade real-person authentication.
   * - **cloudauthst** (discontinued): Enhanced real-person authentication.
   * 
   * This parameter is required.
   * 
   * @example
   * antcloudauth
   */
  serviceCode?: string;
  /**
   * @remarks
   * Visitor\\"s source IP address. No need to fill in, the system will automatically obtain it.
   * 
   * @example
   * 27.115.63.58
   */
  sourceIp?: string;
  /**
   * @remarks
   * Number of valid days after creating the whitelist.
   * 
   * This parameter is required.
   * 
   * @example
   * 7
   */
  validDay?: number;
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

