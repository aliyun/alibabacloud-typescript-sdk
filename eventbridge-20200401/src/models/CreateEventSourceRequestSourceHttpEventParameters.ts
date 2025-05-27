// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEventSourceRequestSourceHttpEventParameters extends $dara.Model {
  /**
   * @remarks
   * The CIDR block that is used for security settings. This parameter is required only if you set SecurityConfig to ip. You can enter a CIDR block or an IP address.
   */
  ip?: string[];
  /**
   * @remarks
   * The HTTP request method supported by the generated webhook URL. You can select multiple values. Valid values:
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
   * The security domain name. This parameter is required only if you set SecurityConfig to referer. You can enter a domain name.
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
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      method: 'Method',
      referer: 'Referer',
      securityConfig: 'SecurityConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: { 'type': 'array', 'itemType': 'string' },
      method: { 'type': 'array', 'itemType': 'string' },
      referer: { 'type': 'array', 'itemType': 'string' },
      securityConfig: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ip)) {
      $dara.Model.validateArray(this.ip);
    }
    if(Array.isArray(this.method)) {
      $dara.Model.validateArray(this.method);
    }
    if(Array.isArray(this.referer)) {
      $dara.Model.validateArray(this.referer);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

