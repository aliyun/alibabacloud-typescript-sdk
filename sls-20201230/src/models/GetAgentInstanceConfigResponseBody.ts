// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentInstanceConfigResponseBody extends $dara.Model {
  attributes?: string;
  config?: string;
  configType?: string;
  createTime?: number;
  grayConfigs?: { [key: string]: string }[];
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
      attributes: 'string',
      config: 'string',
      configType: 'string',
      createTime: 'number',
      grayConfigs: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      lastModifyTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.grayConfigs)) {
      $dara.Model.validateArray(this.grayConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

