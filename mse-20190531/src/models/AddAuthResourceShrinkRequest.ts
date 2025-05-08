// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddAuthResourceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The ID of the authorization record.
   * 
   * @example
   * 13
   */
  authId?: number;
  /**
   * @remarks
   * The authentication resource headers.
   */
  authResourceHeaderListShrink?: string;
  /**
   * @remarks
   * The domain ID.
   * 
   * @example
   * 128
   */
  domainId?: number;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-86575c0bc9f04ecfbacb92b8e392****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * Specifies whether the matching is not case-sensitive. Default value: true.
   * 
   * @example
   * true
   */
  ignoreCase?: boolean;
  /**
   * @remarks
   * The matching type. Valid values:
   * 
   * *   EQUAL
   * *   PRE
   * *   ERGULAR
   * 
   * @example
   * exact
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
      authResourceHeaderListShrink: 'AuthResourceHeaderList',
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
      authResourceHeaderListShrink: 'string',
      domainId: 'number',
      gatewayUniqueId: 'string',
      ignoreCase: 'boolean',
      matchType: 'string',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

