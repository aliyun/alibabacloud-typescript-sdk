// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePluginsByGroupResponseBodyPluginsPluginAttribute } from "./DescribePluginsByGroupResponseBodyPluginsPluginAttribute";


export class DescribePluginsByGroupResponseBodyPlugins extends $dara.Model {
  pluginAttribute?: DescribePluginsByGroupResponseBodyPluginsPluginAttribute[];
  static names(): { [key: string]: string } {
    return {
      pluginAttribute: 'PluginAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pluginAttribute: { 'type': 'array', 'itemType': DescribePluginsByGroupResponseBodyPluginsPluginAttribute },
    };
  }

  validate() {
    if(Array.isArray(this.pluginAttribute)) {
      $dara.Model.validateArray(this.pluginAttribute);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

