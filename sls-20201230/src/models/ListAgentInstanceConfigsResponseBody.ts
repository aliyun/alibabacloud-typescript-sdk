// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentInstanceConfigsResponseBodyConfigs extends $dara.Model {
  attributes?: { [key: string]: string };
  configType?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'attributes',
      configType: 'configType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      configType: 'string',
    };
  }

  validate() {
    if(this.attributes) {
      $dara.Model.validateMap(this.attributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentInstanceConfigsResponseBody extends $dara.Model {
  configs?: ListAgentInstanceConfigsResponseBodyConfigs[];
  size?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      configs: 'configs',
      size: 'size',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': ListAgentInstanceConfigsResponseBodyConfigs },
      size: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.configs)) {
      $dara.Model.validateArray(this.configs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

