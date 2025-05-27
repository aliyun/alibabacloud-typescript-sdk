// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceHttpEventParameters extends $dara.Model {
  /**
   * @remarks
   * The CIDR block that is used for security settings. This parameter is required only if SecurityConfig is set to ip. You can enter a CIDR block or an IP address.
   */
  ip?: string[];
  /**
   * @remarks
   * The HTTP request method that is supported by the generated webhook URL. You can select multiple values. Valid values:
   * 
   * *   GET
   * *   POST
   * *   PUT
   * *   PATCH
   * *   DELETE
   * *   HEAD
   * *   OPTIONS
   * *   TRACE
   * *   CONNECT
   */
  method?: string[];
  /**
   * @remarks
   * The Internet request URL.
   */
  publicWebHookUrl?: string[];
  /**
   * @remarks
   * The security domain name. This parameter is required only if SecurityConfig is set to referer. You can enter a domain name.
   */
  referer?: string[];
  /**
   * @remarks
   * The type of security settings. Valid values:
   * 
   * *   none: No configuration is required.
   * *   ip: CIDR block.
   * *   referer: security domain name.
   * 
   * @example
   * none
   */
  securityConfig?: string;
  /**
   * @remarks
   * The protocol type that is supported by the generated webhook URL. Valid values:
   * 
   * *   HTTP
   * *   HTTPS
   * *   HTTP\\&HTTPS
   * 
   * @example
   * HTTPS
   */
  type?: string;
  /**
   * @remarks
   * The internal request URL.
   */
  vpcWebHookUrl?: string[];
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      method: 'Method',
      publicWebHookUrl: 'PublicWebHookUrl',
      referer: 'Referer',
      securityConfig: 'SecurityConfig',
      type: 'Type',
      vpcWebHookUrl: 'VpcWebHookUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: { 'type': 'array', 'itemType': 'string' },
      method: { 'type': 'array', 'itemType': 'string' },
      publicWebHookUrl: { 'type': 'array', 'itemType': 'string' },
      referer: { 'type': 'array', 'itemType': 'string' },
      securityConfig: 'string',
      type: 'string',
      vpcWebHookUrl: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ip)) {
      $dara.Model.validateArray(this.ip);
    }
    if(Array.isArray(this.method)) {
      $dara.Model.validateArray(this.method);
    }
    if(Array.isArray(this.publicWebHookUrl)) {
      $dara.Model.validateArray(this.publicWebHookUrl);
    }
    if(Array.isArray(this.referer)) {
      $dara.Model.validateArray(this.referer);
    }
    if(Array.isArray(this.vpcWebHookUrl)) {
      $dara.Model.validateArray(this.vpcWebHookUrl);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

