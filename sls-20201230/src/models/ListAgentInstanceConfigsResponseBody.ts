// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAgentInstanceConfigsResponseBodyConfigs } from "./ListAgentInstanceConfigsResponseBodyConfigs";


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

