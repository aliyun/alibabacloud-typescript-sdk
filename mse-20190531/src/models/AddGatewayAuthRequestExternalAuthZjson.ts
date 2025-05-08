// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddGatewayAuthRequestExternalAuthZJSON extends $dara.Model {
  /**
   * @remarks
   * The header that can be carried in an authentication request.
   */
  allowRequestHeaders?: string[];
  /**
   * @remarks
   * The header that can be retained in an authentication response.
   */
  allowUpstreamHeaders?: string[];
  /**
   * @example
   * 4000000
   */
  bodyMaxBytes?: number;
  /**
   * @remarks
   * Specifies whether the gateway allows a client request when the authentication server is unavailable. If a connection to the authentication server fails to be established or a 5xx error code is returned, the authentication server is unavailable.
   * 
   * @example
   * true
   */
  isRestrict?: boolean;
  /**
   * @remarks
   * The path of the authentication API provided by the authentication service. The path supports the prefix match method.
   * 
   * @example
   * /auth
   */
  prefixPath?: string;
  /**
   * @remarks
   * The ID of the service.
   * 
   * @example
   * 1
   */
  serviceId?: number;
  /**
   * @remarks
   * The timeout period. Unit: seconds.
   * 
   * @example
   * 100
   */
  timeout?: number;
  /**
   * @remarks
   * The header that stores a token in an authentication request. In most cases, a token is stored in the Authorization or Cookie header.
   * 
   * @example
   * Authorization
   */
  tokenKey?: string;
  withRematchRoute?: boolean;
  /**
   * @example
   * true
   */
  withRequestBody?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowRequestHeaders: 'AllowRequestHeaders',
      allowUpstreamHeaders: 'AllowUpstreamHeaders',
      bodyMaxBytes: 'BodyMaxBytes',
      isRestrict: 'IsRestrict',
      prefixPath: 'PrefixPath',
      serviceId: 'ServiceId',
      timeout: 'Timeout',
      tokenKey: 'TokenKey',
      withRematchRoute: 'WithRematchRoute',
      withRequestBody: 'WithRequestBody',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowRequestHeaders: { 'type': 'array', 'itemType': 'string' },
      allowUpstreamHeaders: { 'type': 'array', 'itemType': 'string' },
      bodyMaxBytes: 'number',
      isRestrict: 'boolean',
      prefixPath: 'string',
      serviceId: 'number',
      timeout: 'number',
      tokenKey: 'string',
      withRematchRoute: 'boolean',
      withRequestBody: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.allowRequestHeaders)) {
      $dara.Model.validateArray(this.allowRequestHeaders);
    }
    if(Array.isArray(this.allowUpstreamHeaders)) {
      $dara.Model.validateArray(this.allowUpstreamHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

