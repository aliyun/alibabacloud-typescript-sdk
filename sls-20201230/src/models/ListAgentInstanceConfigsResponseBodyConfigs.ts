// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentInstanceConfigsResponseBodyConfigs extends $dara.Model {
  attributes?: string;
  configType?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'attributes',
      configType: 'configType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: 'string',
      configType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

