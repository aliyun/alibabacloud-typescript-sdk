// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AgentInstanceConfigGrayConfigs } from "./AgentInstanceConfigGrayConfigs";


export class GetAgentInstanceConfigResponseBody extends $dara.Model {
  attributes?: { [key: string]: string };
  /**
   * @example
   * {}
   */
  config?: string;
  /**
   * @example
   * apm_biz_trace
   */
  configType?: string;
  /**
   * @example
   * 1749543828
   */
  createTime?: number;
  grayConfigs?: AgentInstanceConfigGrayConfigs[];
  /**
   * @example
   * 1749543828
   */
  lastModifyTime?: number;
  static names(): { [key: string]: string } {
    return {
      attributes: 'attributes',
      config: 'config',
      configType: 'configType',
      createTime: 'createTime',
      grayConfigs: 'grayConfigs',
      lastModifyTime: 'lastModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      config: 'string',
      configType: 'string',
      createTime: 'number',
      grayConfigs: { 'type': 'array', 'itemType': AgentInstanceConfigGrayConfigs },
      lastModifyTime: 'number',
    };
  }

  validate() {
    if(this.attributes) {
      $dara.Model.validateMap(this.attributes);
    }
    if(Array.isArray(this.grayConfigs)) {
      $dara.Model.validateArray(this.grayConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

