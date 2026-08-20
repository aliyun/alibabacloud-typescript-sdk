// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAvailableConfigsResponseBodyConfigs extends $dara.Model {
  /**
   * @remarks
   * The enterprise ID.
   * 
   * @example
   * exampleCorpId
   */
  corpId?: string;
  /**
   * @remarks
   * The organization name.
   * 
   * @example
   * string_value
   */
  corpName?: string;
  /**
   * @remarks
   * The platform type.
   * 
   * @example
   * string_value
   */
  platformType?: string;
  /**
   * @remarks
   * The SSO configuration ID. This field has a value only for SAML, OAuth2, or WeCom types. The value is null for custom types.
   * 
   * @example
   * exampleSsoSettingsId
   */
  ssoSettingsId?: string;
  /**
   * @remarks
   * The SSO configuration name. This field has a value only for SAML, OAuth2, or WeCom types. The value is null for custom types.
   * 
   * @example
   * string_value
   */
  ssoSettingsName?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'corpId',
      corpName: 'corpName',
      platformType: 'platformType',
      ssoSettingsId: 'ssoSettingsId',
      ssoSettingsName: 'ssoSettingsName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      corpName: 'string',
      platformType: 'string',
      ssoSettingsId: 'string',
      ssoSettingsName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The list of queried Logtail configurations.
   */
  configs?: ListAvailableConfigsResponseBodyConfigs[];
  /**
   * @remarks
   * The status code description.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      configs: 'configs',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      configs: { 'type': 'array', 'itemType': ListAvailableConfigsResponseBodyConfigs },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configs)) {
      $dara.Model.validateArray(this.configs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

