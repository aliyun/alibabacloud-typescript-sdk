// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePluginClassRequest extends $dara.Model {
  /**
   * @remarks
   * The alias of the plugin.
   * 
   * @example
   * My Wasm Plugin
   */
  alias?: string;
  /**
   * @remarks
   * The description of the plugin.
   * 
   * This parameter is required.
   * 
   * @example
   * Custom authentication plugin for validating tokens in request headers
   */
  description?: string;
  /**
   * @remarks
   * The execution priority of the plugin.
   * 
   * @example
   * 100
   */
  executePriority?: number;
  /**
   * @remarks
   * The execution stage of the plugin.
   * 
   * This parameter is required.
   * 
   * @example
   * AUTHN
   */
  executeStage?: string;
  /**
   * @remarks
   * The name of the plugin class.
   * 
   * This parameter is required.
   * 
   * @example
   * my-wasm-plugin
   */
  name?: string;
  /**
   * @remarks
   * The minimum gateway version that the plugin is compatible with.
   * 
   * @example
   * 2.0.0
   */
  supportedMinGatewayVersion?: string;
  /**
   * @remarks
   * The version number of the plugin.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.0.0
   */
  version?: string;
  /**
   * @remarks
   * The description of the current version.
   * 
   * This parameter is required.
   * 
   * @example
   * Initial version with basic token validation
   */
  versionDescription?: string;
  /**
   * @remarks
   * The programming language used to develop the WASM plugin.
   * 
   * This parameter is required.
   * 
   * @example
   * Rust
   */
  wasmLanguage?: string;
  /**
   * @remarks
   * The download URL of the WASM plugin binary file.
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/plugins/my-plugin.wasm
   */
  wasmUrl?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      description: 'description',
      executePriority: 'executePriority',
      executeStage: 'executeStage',
      name: 'name',
      supportedMinGatewayVersion: 'supportedMinGatewayVersion',
      version: 'version',
      versionDescription: 'versionDescription',
      wasmLanguage: 'wasmLanguage',
      wasmUrl: 'wasmUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      description: 'string',
      executePriority: 'number',
      executeStage: 'string',
      name: 'string',
      supportedMinGatewayVersion: 'string',
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

