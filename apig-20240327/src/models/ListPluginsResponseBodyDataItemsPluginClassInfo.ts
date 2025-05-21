// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPluginsResponseBodyDataItemsPluginClassInfo extends $dara.Model {
  alias?: string;
  /**
   * @example
   * 999
   */
  executePriority?: string;
  /**
   * @example
   * AUTHZ
   */
  executeStage?: string;
  /**
   * @example
   * key-rate-limit
   */
  name?: string;
  /**
   * @example
   * pls-cqebrgh46ppatmpri
   */
  pluginClassId?: string;
  /**
   * @example
   * HigressOfficial
   */
  source?: string;
  /**
   * @example
   * 2.0.3
   */
  version?: string;
  versionDescription?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      executePriority: 'executePriority',
      executeStage: 'executeStage',
      name: 'name',
      pluginClassId: 'pluginClassId',
      source: 'source',
      version: 'version',
      versionDescription: 'versionDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      executePriority: 'string',
      executeStage: 'string',
      name: 'string',
      pluginClassId: 'string',
      source: 'string',
      version: 'string',
      versionDescription: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

