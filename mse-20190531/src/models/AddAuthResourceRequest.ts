// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddAuthResourceRequestAuthResourceHeaderList extends $dara.Model {
  /**
   * @remarks
   * The HTTP header parameter.
   * 
   * @example
   * Access-Control-Allow-Origin
   */
  headerKey?: string;
  /**
   * @remarks
   * The header match method.
   * 
   * @example
   * EQUAL
   */
  headerMethod?: string;
  /**
   * @remarks
   * The value of the HTTP header parameter.
   * 
   * @example
   * *
   */
  headerValue?: string;
  static names(): { [key: string]: string } {
    return {
      headerKey: 'HeaderKey',
      headerMethod: 'HeaderMethod',
      headerValue: 'HeaderValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headerKey: 'string',
      headerMethod: 'string',
      headerValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAuthResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * - zh: Chinese.
   * - en: English.
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The authorization ID.
   * 
   * @example
   * 13
   */
  authId?: number;
  /**
   * @remarks
   * The list of authentication resource headers.
   */
  authResourceHeaderList?: AddAuthResourceRequestAuthResourceHeaderList[];
  /**
   * @remarks
   * The domain name ID.
   * 
   * @example
   * 128
   */
  domainId?: number;
  /**
   * @remarks
   * The unique gateway ID.
   * 
   * @example
   * gw-86575c0bc9f04ecfbacb92b8e392****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * Specifies whether to ignore case. Default value: true.
   * 
   * @example
   * true
   */
  ignoreCase?: boolean;
  /**
   * @remarks
   * The match type. Valid values:
   * - EQUAL: Exact match.
   * - PRE: Prefix match.
   * - ERGULAR: Regular expression match.
   * 
   * @example
   * PRE
   */
  matchType?: string;
  /**
   * @remarks
   * The path.
   * 
   * @example
   * /abc
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      authId: 'AuthId',
      authResourceHeaderList: 'AuthResourceHeaderList',
      domainId: 'DomainId',
      gatewayUniqueId: 'GatewayUniqueId',
      ignoreCase: 'IgnoreCase',
      matchType: 'MatchType',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      authId: 'number',
      authResourceHeaderList: { 'type': 'array', 'itemType': AddAuthResourceRequestAuthResourceHeaderList },
      domainId: 'number',
      gatewayUniqueId: 'string',
      ignoreCase: 'boolean',
      matchType: 'string',
      path: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.authResourceHeaderList)) {
      $dara.Model.validateArray(this.authResourceHeaderList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

