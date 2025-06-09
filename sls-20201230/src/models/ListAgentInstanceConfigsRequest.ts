// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentInstanceConfigsRequest extends $dara.Model {
  attributes?: string;
  configType?: string;
  offset?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      attributes: 'attributes',
      configType: 'configType',
      offset: 'offset',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: 'string',
      configType: 'string',
      offset: 'number',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

