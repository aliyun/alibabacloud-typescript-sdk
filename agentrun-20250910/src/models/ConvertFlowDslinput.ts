// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConvertFlowDSLInputDslSource extends $dara.Model {
  /**
   * @remarks
   * DSL内容，可以是原始JSON字符串，或根据encoding字段指定的编码格式
   * 
   * This parameter is required.
   * 
   * @example
   * {"app":{"name":"My Flow"}}
   */
  content?: string;
  /**
   * @remarks
   * DSL内容的编码方式。不填表示内容为原始字符串；base64表示内容经过Base64编码；base64+gzip表示内容经过gzip压缩后再Base64编码
   * 
   * @example
   * base64
   */
  encoding?: string;
  /**
   * @remarks
   * 源DSL的提供商类型，如：dify、n8n、zapier等
   * 
   * This parameter is required.
   * 
   * @example
   * dify
   */
  provider?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      encoding: 'encoding',
      provider: 'provider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      encoding: 'string',
      provider: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertFlowDSLInputOptions extends $dara.Model {
  /**
   * @remarks
   * 是否执行兼容性检查，默认为true
   * 
   * @example
   * true
   */
  compatibilityCheck?: boolean;
  credentialName?: string;
  flowName?: string;
  /**
   * @remarks
   * 全局VPC端点名称，对所有节点统一生效。如果指定了vpcEndpoints映射，则映射中的节点优先使用映射值
   */
  vpcEndpointName?: string;
  /**
   * @remarks
   * 按节点名称指定VPC端点，key为节点名称(stateName)，value为该节点使用的VPC端点名称。优先级高于vpcEndpointName
   * 
   * @example
   * {"LLM节点":"vpc-endpoint-1","Agent节点":"vpc-endpoint-2"}
   */
  vpcEndpoints?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      compatibilityCheck: 'compatibilityCheck',
      credentialName: 'credentialName',
      flowName: 'flowName',
      vpcEndpointName: 'vpcEndpointName',
      vpcEndpoints: 'vpcEndpoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compatibilityCheck: 'boolean',
      credentialName: 'string',
      flowName: 'string',
      vpcEndpointName: 'string',
      vpcEndpoints: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.vpcEndpoints) {
      $dara.Model.validateMap(this.vpcEndpoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertFlowDSLInput extends $dara.Model {
  /**
   * @remarks
   * 工作流DSL的来源配置，支持inline和base64两种格式
   * 
   * This parameter is required.
   */
  dslSource?: ConvertFlowDSLInputDslSource;
  /**
   * @remarks
   * DSL转换的可选配置参数
   */
  options?: ConvertFlowDSLInputOptions;
  static names(): { [key: string]: string } {
    return {
      dslSource: 'dslSource',
      options: 'options',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dslSource: ConvertFlowDSLInputDslSource,
      options: ConvertFlowDSLInputOptions,
    };
  }

  validate() {
    if(this.dslSource && typeof (this.dslSource as any).validate === 'function') {
      (this.dslSource as any).validate();
    }
    if(this.options && typeof (this.options as any).validate === 'function') {
      (this.options as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

