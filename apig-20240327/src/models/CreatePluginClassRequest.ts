// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePluginClassRequest extends $dara.Model {
  alias?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  description?: string;
  executePriority?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  executeStage?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  supportedMinGatewayVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  version?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  versionDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  wasmLanguage?: string;
  /**
   * @remarks
   * This parameter is required.
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

