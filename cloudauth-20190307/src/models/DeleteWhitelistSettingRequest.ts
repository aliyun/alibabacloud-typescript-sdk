// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteWhitelistSettingRequest extends $dara.Model {
  /**
   * @remarks
   * The list of rule IDs to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * [6222001]
   */
  ids?: string;
  /**
   * @remarks
   * The language of the user information to delete. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The service code of the ID Verification product. Set the value to **antcloudauth**.
   * 
   * This parameter is required.
   * 
   * @example
   * antcloudauth
   */
  serviceCode?: string;
  /**
   * @remarks
   * The source IP address of the visitor. CIDR format and IPv4 format are supported. Example: 10.0.3.0/24.
   * 
   * @example
   * 120.25.41.25
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      lang: 'Lang',
      serviceCode: 'ServiceCode',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
      lang: 'string',
      serviceCode: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

