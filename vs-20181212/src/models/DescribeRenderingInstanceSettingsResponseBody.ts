// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRenderingInstanceSettingsResponseBodySettings extends $dara.Model {
  /**
   * @remarks
   * The instance configuration name.
   * 
   * @example
   * navbar.hide
   */
  attributeName?: string;
  /**
   * @remarks
   * The content of the instance configuration.
   * 
   * @example
   * 1
   */
  attributeValue?: string;
  static names(): { [key: string]: string } {
    return {
      attributeName: 'AttributeName',
      attributeValue: 'AttributeValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeName: 'string',
      attributeValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenderingInstanceSettingsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @remarks
   * The list of instance configurations.
   */
  settings?: DescribeRenderingInstanceSettingsResponseBodySettings[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      settings: 'Settings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      settings: { 'type': 'array', 'itemType': DescribeRenderingInstanceSettingsResponseBodySettings },
    };
  }

  validate() {
    if(Array.isArray(this.settings)) {
      $dara.Model.validateArray(this.settings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

