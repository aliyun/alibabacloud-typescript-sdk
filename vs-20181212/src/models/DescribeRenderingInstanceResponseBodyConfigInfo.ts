// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRenderingInstanceResponseBodyConfigInfoConfiguration } from "./DescribeRenderingInstanceResponseBodyConfigInfoConfiguration";
import { DescribeRenderingInstanceResponseBodyConfigInfoNetworkConfig } from "./DescribeRenderingInstanceResponseBodyConfigInfoNetworkConfig";


export class DescribeRenderingInstanceResponseBodyConfigInfo extends $dara.Model {
  configuration?: DescribeRenderingInstanceResponseBodyConfigInfoConfiguration[];
  networkConfig?: DescribeRenderingInstanceResponseBodyConfigInfoNetworkConfig;
  static names(): { [key: string]: string } {
    return {
      configuration: 'Configuration',
      networkConfig: 'NetworkConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: { 'type': 'array', 'itemType': DescribeRenderingInstanceResponseBodyConfigInfoConfiguration },
      networkConfig: DescribeRenderingInstanceResponseBodyConfigInfoNetworkConfig,
    };
  }

  validate() {
    if(Array.isArray(this.configuration)) {
      $dara.Model.validateArray(this.configuration);
    }
    if(this.networkConfig && typeof (this.networkConfig as any).validate === 'function') {
      (this.networkConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

