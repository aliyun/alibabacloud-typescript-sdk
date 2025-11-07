// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteWhitelistSettingRequest extends $dara.Model {
  /**
   * @remarks
   * List of rule IDs to be deleted.
   * 
   * This parameter is required.
   * 
   * @example
   * [6222001]
   */
  ids?: string;
  /**
   * @remarks
   * Specify the language of the user information to be deleted. Values: -**zh**: Chinese. -**en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * ServiceCode for the real-person cloud product, only takes the value: **antcloudauth**.
   * 
   * This parameter is required.
   * 
   * @example
   * antcloudauth
   */
  serviceCode?: string;
  /**
   * @remarks
   * Set the source IP address of the visitor. Supports IP addresses in CIDR and IPv4 formats. Example: 10.0.3.0/24.
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

