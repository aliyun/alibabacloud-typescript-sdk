// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PluginClassInfo extends $dara.Model {
  /**
   * @remarks
   * The plugin class alias.
   * 
   * @example
   * AI安全护栏
   */
  alias?: string;
  /**
   * @remarks
   * The configuration example (JSON string).
   * 
   * @example
   * {"checkRequest":true}
   */
  configExample?: string;
  /**
   * @remarks
   * The plugin class description.
   * 
   * @example
   * AI请求内容安全检测插件
   */
  description?: string;
  /**
   * @remarks
   * The execution priority.
   * 
   * @example
   * 100
   */
  executePriority?: number;
  /**
   * @remarks
   * The execution stage.
   * 
   * @example
   * AUTHN
   */
  executeStage?: string;
  /**
   * @remarks
   * The Wasm image name.
   * 
   * @example
   * higress-registry.tencentcloudcr.com/ai-security-guard
   */
  imageName?: string;
  /**
   * @remarks
   * Indicates whether the plugin is a built-in plugin.
   * 
   * @example
   * false
   */
  innerPlugin?: boolean;
  /**
   * @remarks
   * The plugin running mode.
   * 
   * @example
   * Wasm
   */
  mode?: string;
  /**
   * @remarks
   * The plugin class name.
   * 
   * @example
   * ai-security-guard
   */
  name?: string;
  /**
   * @remarks
   * The plugin class ID.
   * 
   * @example
   * cls-xxx
   */
  pluginClassId?: string;
  /**
   * @remarks
   * The plugin source.
   * 
   * @example
   * HigressOfficial
   */
  source?: string;
  /**
   * @remarks
   * The minimum supported gateway DPI engine version.
   * 
   * @example
   * 2.1.11
   */
  supportedMinGatewayVersion?: string;
  /**
   * @remarks
   * The plugin type category.
   * 
   * @example
   * AI
   */
  type?: string;
  /**
   * @remarks
   * The plugin version number.
   * 
   * @example
   * 1.0.0
   */
  version?: string;
  /**
   * @remarks
   * The version description.
   * 
   * @example
   * 初始版本
   */
  versionDescription?: string;
  /**
   * @remarks
   * The Wasm programming language.
   * 
   * @example
   * Rust
   */
  wasmLanguage?: string;
  /**
   * @remarks
   * The Wasm file download URL.
   * 
   * @example
   * https://...
   */
  wasmUrl?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      configExample: 'configExample',
      description: 'description',
      executePriority: 'executePriority',
      executeStage: 'executeStage',
      imageName: 'imageName',
      innerPlugin: 'innerPlugin',
      mode: 'mode',
      name: 'name',
      pluginClassId: 'pluginClassId',
      source: 'source',
      supportedMinGatewayVersion: 'supportedMinGatewayVersion',
      type: 'type',
      version: 'version',
      versionDescription: 'versionDescription',
      wasmLanguage: 'wasmLanguage',
      wasmUrl: 'wasmUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      configExample: 'string',
      description: 'string',
      executePriority: 'number',
      executeStage: 'string',
      imageName: 'string',
      innerPlugin: 'boolean',
      mode: 'string',
      name: 'string',
      pluginClassId: 'string',
      source: 'string',
      supportedMinGatewayVersion: 'string',
      type: 'string',
      version: 'string',
      versionDescription: 'string',
      wasmLanguage: 'string',
      wasmUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

