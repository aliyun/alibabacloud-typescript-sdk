// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIdentityProviderServiceProviderResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 我方 SAML 断言消费地址，配置到外部 IdP。
   * 
   * @example
   * https://sp.example.com/saml/acs
   */
  acsUrl?: string;
  /**
   * @remarks
   * 我方 SP 的实体标识，配置到外部 IdP；不是外部 IdP Entity ID。
   * 
   * @example
   * https://sp.example.com/entity
   */
  entityId?: string;
  /**
   * @remarks
   * 我方 SP Metadata XML，供外部 IdP 导入；不能作为 IdP XML 提交 SAML 配置。
   * 
   * @example
   * <EntityDescriptor xmlns="urn:oasis:names:tc:SAML:2.0:metadata" entityID="https://sp.example.com/entity"><SPSSODescriptor protocolSupportEnumeration="urn:oasis:names:tc:SAML:2.0:protocol"><AssertionConsumerService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location="https://sp.example.com/saml/acs" index="0"/></SPSSODescriptor></EntityDescriptor>
   */
  metadataXml?: string;
  /**
   * @remarks
   * 查询参数必填，仅支持精确值 SAML；响应返回 SAML。
   * 
   * @example
   * SAML
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      acsUrl: 'acsUrl',
      entityId: 'entityId',
      metadataXml: 'metadataXml',
      protocol: 'protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acsUrl: 'string',
      entityId: 'string',
      metadataXml: 'string',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdentityProviderServiceProviderResponseBody extends $dara.Model {
  /**
   * @remarks
   * 失败时结合 HTTP 状态及 message 处理。
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * 结果结构见本接口返回字段；异步写接口的返回表示受理，不保证后台任务已完成。
   */
  data?: GetIdentityProviderServiceProviderResponseBodyData;
  /**
   * @remarks
   * 本次请求的处理状态，不等同后台任务最终结果。
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * 请求受理或错误消息；异步任务结果需按对应查询接口核对。
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * 用于关联本次调用与排障，失败时请保留。
   * 
   * @example
   * request-example
   */
  requestId?: string;
  /**
   * @remarks
   * true 表示本次请求处理成功；异步写入仍需继续查询任务结果。
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetIdentityProviderServiceProviderResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

