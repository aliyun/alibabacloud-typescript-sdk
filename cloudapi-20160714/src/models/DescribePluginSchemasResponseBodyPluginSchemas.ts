// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePluginSchemasResponseBodyPluginSchemasPluginSchema } from "./DescribePluginSchemasResponseBodyPluginSchemasPluginSchema";


export class DescribePluginSchemasResponseBodyPluginSchemas extends $dara.Model {
  pluginSchema?: DescribePluginSchemasResponseBodyPluginSchemasPluginSchema[];
  static names(): { [key: string]: string } {
    return {
      pluginSchema: 'PluginSchema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pluginSchema: { 'type': 'array', 'itemType': DescribePluginSchemasResponseBodyPluginSchemasPluginSchema },
    };
  }

  validate() {
    if(Array.isArray(this.pluginSchema)) {
      $dara.Model.validateArray(this.pluginSchema);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

