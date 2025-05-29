// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRenderingInstanceConfigurationResponseBodyConfiguration } from "./DescribeRenderingInstanceConfigurationResponseBodyConfiguration";


export class DescribeRenderingInstanceConfigurationResponseBody extends $dara.Model {
  configuration?: DescribeRenderingInstanceConfigurationResponseBodyConfiguration[];
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'Configuration',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: { 'type': 'array', 'itemType': DescribeRenderingInstanceConfigurationResponseBodyConfiguration },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configuration)) {
      $dara.Model.validateArray(this.configuration);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

