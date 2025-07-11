// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRenderingInstanceSettingsResponseBodySettings extends $dara.Model {
  /**
   * @example
   * navbar.hide
   */
  attributeName?: string;
  /**
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
   * Id of the request
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
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

