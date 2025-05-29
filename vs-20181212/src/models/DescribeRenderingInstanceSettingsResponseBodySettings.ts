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

