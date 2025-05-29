// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRenderingInstanceConfigurationResponseBodyConfigurationAttributes } from "./DescribeRenderingInstanceConfigurationResponseBodyConfigurationAttributes";


export class DescribeRenderingInstanceConfigurationResponseBodyConfiguration extends $dara.Model {
  attributes?: DescribeRenderingInstanceConfigurationResponseBodyConfigurationAttributes[];
  /**
   * @example
   * location
   */
  moduleName?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      moduleName: 'ModuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': DescribeRenderingInstanceConfigurationResponseBodyConfigurationAttributes },
      moduleName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attributes)) {
      $dara.Model.validateArray(this.attributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

