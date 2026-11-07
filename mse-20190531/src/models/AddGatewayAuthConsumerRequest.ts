// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddGatewayAuthConsumerRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the returned information. Valid values:
   * 
   * - zh: Chinese
   * - en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The description of the authentication consumer.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The encryption type. Valid values:
   * 
   * - RSA
   * 
   * - OCT
   * 
   * @example
   * RSA
   */
  encodeType?: string;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * gw-c70622ff52fe49beb29bea9a6f52****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The JWT public key in JSON format.
   * 
   * @example
   * {"keys":[{"e":"AQAB","kid":"DHFbpoIUqrY8t2zpA2qXfCmr5VO5ZEr4RzHU_-envvQ","kty":"RSA","n":"xAE7eB6qugXyCAG3yhh7pkDkT65pHymX-P7KfIupjf59vsdo91bSP9C8H07pSAGQO1MV_xFj9VswgsCg4R6otmg5PV2He95lZdHtOcU5DXIg_pbhLdKXbi66GlVeK6ABZOUW3WYtnNHD-91gVuoeJT_DwtGGcp4ignkgXfkiEm4sw-4sfb4qdt5oLbyVpmW6x9cfa7vs2WTfURiCrBoUqgBo_-4WTiULmmHSGZHOjzwa8WtrtOQGsAFjIbno85jp6MnGGGZPYZbDAa_b3y5u-YpW7ypZrvD8BgtKVjgtQgZhLAGezMt0ua3DRrWnKqTZ0BJ_EyxOGuHJrLsn00fnMQ"}]}
   */
  jwks?: string;
  /**
   * @remarks
   * The KeyName identity in the JWT.
   * 
   * @example
   * iss
   */
  keyName?: string;
  /**
   * @remarks
   * The KeyValue identity in the JWT.
   * 
   * @example
   * abcd
   */
  keyValue?: string;
  /**
   * @remarks
   * The name of the authentication consumer.
   * 
   * This parameter is required.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The name of the token parameter to be verified. By default, the token is prefixed with Bearer and placed in the Authorization header, such as `Authorization: Bearer token`.
   * 
   * @example
   * Authorization
   */
  tokenName?: string;
  /**
   * @remarks
   * Specifies whether to pass through the token.
   * 
   * @example
   * true
   */
  tokenPass?: boolean;
  /**
   * @remarks
   * The position of the token parameter to be verified. By default, the token is prefixed with Bearer and placed in the Authorization header, such as `Authorization: Bearer token`.
   * 
   * @example
   * HEADER
   */
  tokenPosition?: string;
  /**
   * @remarks
   * The prefix of the token parameter to be verified. By default, the token is prefixed with Bearer and placed in the Authorization header, such as `Authorization: Bearer token`.
   * 
   * @example
   * Bearer
   */
  tokenPrefix?: string;
  /**
   * @remarks
   * The authentication type. Valid values:
   * 
   * - JWT
   * 
   * This parameter is required.
   * 
   * @example
   * JWT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      description: 'Description',
      encodeType: 'EncodeType',
      gatewayUniqueId: 'GatewayUniqueId',
      jwks: 'Jwks',
      keyName: 'KeyName',
      keyValue: 'KeyValue',
      name: 'Name',
      tokenName: 'TokenName',
      tokenPass: 'TokenPass',
      tokenPosition: 'TokenPosition',
      tokenPrefix: 'TokenPrefix',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      description: 'string',
      encodeType: 'string',
      gatewayUniqueId: 'string',
      jwks: 'string',
      keyName: 'string',
      keyValue: 'string',
      name: 'string',
      tokenName: 'string',
      tokenPass: 'boolean',
      tokenPosition: 'string',
      tokenPrefix: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

