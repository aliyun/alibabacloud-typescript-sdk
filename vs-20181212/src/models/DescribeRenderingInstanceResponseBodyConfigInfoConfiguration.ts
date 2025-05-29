// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRenderingInstanceResponseBodyConfigInfoConfigurationAttributes } from "./DescribeRenderingInstanceResponseBodyConfigInfoConfigurationAttributes";


export class DescribeRenderingInstanceResponseBodyConfigInfoConfiguration extends $dara.Model {
  attributes?: DescribeRenderingInstanceResponseBodyConfigInfoConfigurationAttributes[];
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
      attributes: { 'type': 'array', 'itemType': DescribeRenderingInstanceResponseBodyConfigInfoConfigurationAttributes },
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

