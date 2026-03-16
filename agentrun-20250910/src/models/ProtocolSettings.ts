// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProtocolSettings extends $dara.Model {
  /**
   * @deprecated
   */
  a2AAgentCard?: string;
  /**
   * @deprecated
   */
  a2aAgentCard?: string;
  /**
   * @deprecated
   */
  a2aAgentCardUrl?: string;
  /**
   * @remarks
   * 协议配置的 JSON 字符串
   */
  config?: string;
  /**
   * @remarks
   * 请求头
   * 
   * @deprecated
   */
  headers?: string;
  /**
   * @remarks
   * 请求体JSON模式
   * 
   * @deprecated
   */
  inputBodyJsonSchema?: string;
  /**
   * @remarks
   * HTTP方法
   * 
   * @deprecated
   */
  method?: string;
  /**
   * @remarks
   * 可选展示名/别名，不再作为协议类型标识
   */
  name?: string;
  /**
   * @remarks
   * 响应体JSON模式
   * 
   * @deprecated
   */
  outputBodyJsonSchema?: string;
  /**
   * @remarks
   * 协议路径
   * 
   * @deprecated
   */
  path?: string;
  /**
   * @remarks
   * 协议路径前缀，建议使用 config
   * 
   * @deprecated
   */
  pathPrefix?: string;
  /**
   * @remarks
   * 请求内容类型
   * 
   * @deprecated
   */
  requestContentType?: string;
  /**
   * @remarks
   * 响应内容类型
   * 
   * @deprecated
   */
  responseContentType?: string;
  /**
   * @remarks
   * 协议类型标识，用于校验与去重；合法取值由后端校验
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      a2AAgentCard: 'A2AAgentCard',
      a2aAgentCard: 'a2aAgentCard',
      a2aAgentCardUrl: 'a2aAgentCardUrl',
      config: 'config',
      headers: 'headers',
      inputBodyJsonSchema: 'inputBodyJsonSchema',
      method: 'method',
      name: 'name',
      outputBodyJsonSchema: 'outputBodyJsonSchema',
      path: 'path',
      pathPrefix: 'pathPrefix',
      requestContentType: 'requestContentType',
      responseContentType: 'responseContentType',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      a2AAgentCard: 'string',
      a2aAgentCard: 'string',
      a2aAgentCardUrl: 'string',
      config: 'string',
      headers: 'string',
      inputBodyJsonSchema: 'string',
      method: 'string',
      name: 'string',
      outputBodyJsonSchema: 'string',
      path: 'string',
      pathPrefix: 'string',
      requestContentType: 'string',
      responseContentType: 'string',
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

