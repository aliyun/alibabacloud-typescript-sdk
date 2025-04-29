// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPluginStatusResponseBodyInstancePluginStatusSetInstancePluginStatusPluginStatusSetPluginStatus } from "./ListPluginStatusResponseBodyInstancePluginStatusSetInstancePluginStatusPluginStatusSetPluginStatus";


export class ListPluginStatusResponseBodyInstancePluginStatusSetInstancePluginStatusPluginStatusSet extends $dara.Model {
  pluginStatus?: ListPluginStatusResponseBodyInstancePluginStatusSetInstancePluginStatusPluginStatusSetPluginStatus[];
  static names(): { [key: string]: string } {
    return {
      pluginStatus: 'PluginStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pluginStatus: { 'type': 'array', 'itemType': ListPluginStatusResponseBodyInstancePluginStatusSetInstancePluginStatusPluginStatusSetPluginStatus },
    };
  }

  validate() {
    if(Array.isArray(this.pluginStatus)) {
      $dara.Model.validateArray(this.pluginStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

