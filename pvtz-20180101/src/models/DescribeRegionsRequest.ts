// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRegionsRequest extends $dara.Model {
  /**
   * @remarks
   * The supported language. Valid values:
   * 
   * - zh-CN: Chinese
   * 
   * - en-US: English
   * 
   * Default value: en-US.
   * 
   * > This parameter has a higher priority than Lang.
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the authorized resources belong.
   * 
   * @example
   * 141339776561****
   */
  authorizedUserId?: number;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - **zh**: Chinese.
   * 
   * - **en**: English.
   * 
   * Default value: **en**.
   * 
   * > This parameter has a lower priority than AcceptLanguage.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The scenario. Valid values:
   * 
   * - AUTH: built-in authoritative server
   * 
   * - FWD: forwarding management
   * 
   * - RA: traffic analysis
   * 
   * @example
   * AUTH
   */
  scene?: string;
  /**
   * @remarks
   * The IP address of the user.
   * 
   * @example
   * 192.0.XX.XX
   */
  userClientIp?: string;
  /**
   * @remarks
   * The type of the VPC. Valid values:
   * 
   * - STANDARD: standard VPC.
   * 
   * - EDS: Elastic Desktop Service (EDS) VPC.
   * 
   * @example
   * STANDARD
   */
  vpcType?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      authorizedUserId: 'AuthorizedUserId',
      lang: 'Lang',
      scene: 'Scene',
      userClientIp: 'UserClientIp',
      vpcType: 'VpcType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      authorizedUserId: 'number',
      lang: 'string',
      scene: 'string',
      userClientIp: 'string',
      vpcType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

