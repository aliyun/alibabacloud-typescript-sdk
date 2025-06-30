// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRegionsRequest extends $dara.Model {
  /**
   * @remarks
   * The supported language. Valid values:
   * 
   * *   zh-CN: Chinese
   * *   en-US: English
   * 
   * Default value: en-US.
   * 
   * >  AcceptLanguage has a higher priority than Lang.
   * 
   * @example
   * en-US
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the permissions on the resources are granted.
   * 
   * @example
   * 141339776561****
   */
  authorizedUserId?: number;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * Default value: **en**.
   * 
   * >  Lang has a lower priority than AcceptLanguage.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The scenario. Valid values:
   * 
   * *   AUTH: the built-in authoritative module
   * *   FWD: the forward module
   * *   RA: the traffic analysis module
   * 
   * @example
   * AUTH
   */
  scene?: string;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 192.168.XX.XX
   */
  userClientIp?: string;
  /**
   * @remarks
   * The VPC type. Valid values:
   * 
   * *   STANDARD: standard VPC
   * *   EDS: Elastic Desktop Service (EDS) workspace VPC
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

