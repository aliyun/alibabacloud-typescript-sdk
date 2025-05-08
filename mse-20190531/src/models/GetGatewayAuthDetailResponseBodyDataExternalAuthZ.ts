// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetGatewayAuthDetailResponseBodyDataExternalAuthZService } from "./GetGatewayAuthDetailResponseBodyDataExternalAuthZservice";


export class GetGatewayAuthDetailResponseBodyDataExternalAuthZ extends $dara.Model {
  allowRequestHeaders?: string[];
  allowUpstreamHeaders?: string[];
  /**
   * @example
   * 4000000
   */
  bodyMaxBytes?: number;
  /**
   * @example
   * true
   */
  isRestrict?: boolean;
  /**
   * @example
   * /auth
   */
  prefixPath?: string;
  service?: GetGatewayAuthDetailResponseBodyDataExternalAuthZService;
  /**
   * @example
   * 15300
   */
  serviceId?: number;
  /**
   * @example
   * 10
   */
  timeout?: number;
  /**
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
      service: 'Service',
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
      service: GetGatewayAuthDetailResponseBodyDataExternalAuthZService,
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
    if(this.service && typeof (this.service as any).validate === 'function') {
      (this.service as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

