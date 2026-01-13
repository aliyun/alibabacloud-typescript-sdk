// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProtocolSettings extends $dara.Model {
  /**
   * @remarks
   * A2A Agent Card
   */
  a2AAgentCard?: string;
  /**
   * @remarks
   * 请求头
   */
  headers?: string;
  /**
   * @remarks
   * 请求体JSON模式
   */
  inputBodyJsonSchema?: string;
  /**
   * @remarks
   * HTTP方法
   */
  method?: string;
  /**
   * @remarks
   * 协议名称
   */
  name?: string;
  /**
   * @remarks
   * 响应体JSON模式
   */
  outputBodyJsonSchema?: string;
  /**
   * @remarks
   * 协议路径
   */
  path?: string;
  /**
   * @remarks
   * 协议路径前缀
   */
  pathPrefix?: string;
  /**
   * @remarks
   * 请求内容类型
   */
  requestContentType?: string;
  /**
   * @remarks
   * 响应内容类型
   */
  responseContentType?: string;
  static names(): { [key: string]: string } {
    return {
      a2AAgentCard: 'A2AAgentCard',
      headers: 'headers',
      inputBodyJsonSchema: 'inputBodyJsonSchema',
      method: 'method',
      name: 'name',
      outputBodyJsonSchema: 'outputBodyJsonSchema',
      path: 'path',
      pathPrefix: 'pathPrefix',
      requestContentType: 'requestContentType',
      responseContentType: 'responseContentType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      a2AAgentCard: 'string',
      headers: 'string',
      inputBodyJsonSchema: 'string',
      method: 'string',
      name: 'string',
      outputBodyJsonSchema: 'string',
      path: 'string',
      pathPrefix: 'string',
      requestContentType: 'string',
      responseContentType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

