// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PluginClassInfo extends $dara.Model {
  alias?: string;
  configExample?: string;
  description?: string;
  executePriority?: number;
  executeStage?: string;
  imageName?: string;
  innerPlugin?: boolean;
  mode?: string;
  name?: string;
  pluginClassId?: string;
  source?: string;
  supportedMinGatewayVersion?: string;
  type?: string;
  version?: string;
  versionDescription?: string;
  wasmLanguage?: string;
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

