// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAvailableConfigsResponseBodyConfigs extends $dara.Model {
  /**
   * @remarks
   * 企业标识（wecom=corpId, saml=idpEntityId, oauth2=clientId, custom=客户自定义）。注意：OAuth2 多 IdP 配置使用相同 clientId 时，需在 syncOrgStructure 中显式传 ssoSettingsId
   * 
   * @example
   * exampleCorpId
   */
  corpId?: string;
  /**
   * @remarks
   * 企业展示名称
   * 
   * @example
   * string_value
   */
  corpName?: string;
  /**
   * @remarks
   * 平台类型: wecom / saml / oauth2 / custom
   * 
   * @example
   * string_value
   */
  platformType?: string;
  /**
   * @remarks
   * SSO 配置 ID（仅 SAML/OAuth2/WeCom 有值，custom 为 null）
   * 
   * @example
   * exampleSsoSettingsId
   */
  ssoSettingsId?: string;
  /**
   * @remarks
   * SSO 配置名称（仅 SAML/OAuth2/WeCom 有值，custom 为 null）
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
   * 业务状态码：成功为 200，失败为后端错误码（ERR.* / InvalidParameter.*）
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * 可用的组织同步配置列表
   */
  configs?: ListAvailableConfigsResponseBodyConfigs[];
  /**
   * @remarks
   * 错误描述，成功时为空
   */
  message?: string;
  /**
   * @remarks
   * 请求追踪 ID
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

